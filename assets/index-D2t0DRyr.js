function th(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function nh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vc={exports:{}},Ro={},Qc={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ni=Symbol.for("react.element"),rh=Symbol.for("react.portal"),ih=Symbol.for("react.fragment"),oh=Symbol.for("react.strict_mode"),lh=Symbol.for("react.profiler"),ah=Symbol.for("react.provider"),sh=Symbol.for("react.context"),uh=Symbol.for("react.forward_ref"),ch=Symbol.for("react.suspense"),dh=Symbol.for("react.memo"),fh=Symbol.for("react.lazy"),tu=Symbol.iterator;function ph(e){return e===null||typeof e!="object"?null:(e=tu&&e[tu]||e["@@iterator"],typeof e=="function"?e:null)}var Yc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kc=Object.assign,Gc={};function Zn(e,t,n){this.props=e,this.context=t,this.refs=Gc,this.updater=n||Yc}Zn.prototype.isReactComponent={};Zn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xc(){}Xc.prototype=Zn.prototype;function Za(e,t,n){this.props=e,this.context=t,this.refs=Gc,this.updater=n||Yc}var Ja=Za.prototype=new Xc;Ja.constructor=Za;Kc(Ja,Zn.prototype);Ja.isPureReactComponent=!0;var nu=Array.isArray,qc=Object.prototype.hasOwnProperty,es={current:null},Zc={key:!0,ref:!0,__self:!0,__source:!0};function Jc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)qc.call(t,r)&&!Zc.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ni,type:e,key:o,ref:l,props:i,_owner:es.current}}function hh(e,t){return{$$typeof:ni,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ts(e){return typeof e=="object"&&e!==null&&e.$$typeof===ni}function mh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ru=/\/+/g;function ol(e,t){return typeof e=="object"&&e!==null&&e.key!=null?mh(""+e.key):t.toString(36)}function Ii(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ni:case rh:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+ol(l,0):r,nu(i)?(n="",e!=null&&(n=e.replace(ru,"$&/")+"/"),Ii(i,t,n,"",function(u){return u})):i!=null&&(ts(i)&&(i=hh(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ru,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",nu(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+ol(o,a);l+=Ii(o,t,n,s,i)}else if(s=ph(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+ol(o,a++),l+=Ii(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function fi(e,t,n){if(e==null)return e;var r=[],i=0;return Ii(e,r,"","",function(o){return t.call(n,o,i++)}),r}function gh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Oi={transition:null},vh={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Oi,ReactCurrentOwner:es};function ed(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:fi,forEach:function(e,t,n){fi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fi(e,function(){t++}),t},toArray:function(e){return fi(e,function(t){return t})||[]},only:function(e){if(!ts(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=Zn;I.Fragment=ih;I.Profiler=lh;I.PureComponent=Za;I.StrictMode=oh;I.Suspense=ch;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vh;I.act=ed;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Kc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=es.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)qc.call(t,s)&&!Zc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ni,type:e.type,key:i,ref:o,props:r,_owner:l}};I.createContext=function(e){return e={$$typeof:sh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ah,_context:e},e.Consumer=e};I.createElement=Jc;I.createFactory=function(e){var t=Jc.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:uh,render:e}};I.isValidElement=ts;I.lazy=function(e){return{$$typeof:fh,_payload:{_status:-1,_result:e},_init:gh}};I.memo=function(e,t){return{$$typeof:dh,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Oi.transition;Oi.transition={};try{e()}finally{Oi.transition=t}};I.unstable_act=ed;I.useCallback=function(e,t){return xe.current.useCallback(e,t)};I.useContext=function(e){return xe.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};I.useEffect=function(e,t){return xe.current.useEffect(e,t)};I.useId=function(){return xe.current.useId()};I.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return xe.current.useMemo(e,t)};I.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};I.useRef=function(e){return xe.current.useRef(e)};I.useState=function(e){return xe.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return xe.current.useTransition()};I.version="18.3.1";Qc.exports=I;var S=Qc.exports;const tt=nh(S),yh=th({__proto__:null,default:tt},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh=S,wh=Symbol.for("react.element"),Sh=Symbol.for("react.fragment"),kh=Object.prototype.hasOwnProperty,Eh=xh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ch={key:!0,ref:!0,__self:!0,__source:!0};function td(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)kh.call(t,r)&&!Ch.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:wh,type:e,key:o,ref:l,props:i,_owner:Eh.current}}Ro.Fragment=Sh;Ro.jsx=td;Ro.jsxs=td;Vc.exports=Ro;var f=Vc.exports,nd={exports:{}},Te={},rd={exports:{}},id={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,$){var R=_.length;_.push($);e:for(;0<R;){var U=R-1>>>1,B=_[U];if(0<i(B,$))_[U]=$,_[R]=B,R=U;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var $=_[0],R=_.pop();if(R!==$){_[0]=R;e:for(var U=0,B=_.length,Kt=B>>>1;U<Kt;){var Be=2*(U+1)-1,gt=_[Be],ze=Be+1,it=_[ze];if(0>i(gt,R))ze<B&&0>i(it,gt)?(_[U]=it,_[ze]=R,U=ze):(_[U]=gt,_[Be]=R,U=Be);else if(ze<B&&0>i(it,R))_[U]=it,_[ze]=R,U=ze;else break e}}return $}function i(_,$){var R=_.sortIndex-$.sortIndex;return R!==0?R:_.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],p=1,d=null,g=3,v=!1,x=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(_){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=_)r(u),$.sortIndex=$.expirationTime,t(s,$);else break;$=n(u)}}function y(_){if(w=!1,h(_),!x)if(n(s)!==null)x=!0,ir(E);else{var $=n(u);$!==null&&Yt(y,$.startTime-_)}}function E(_,$){x=!1,w&&(w=!1,m(z),z=-1),v=!0;var R=g;try{for(h($),d=n(s);d!==null&&(!(d.expirationTime>$)||_&&!Pe());){var U=d.callback;if(typeof U=="function"){d.callback=null,g=d.priorityLevel;var B=U(d.expirationTime<=$);$=e.unstable_now(),typeof B=="function"?d.callback=B:d===n(s)&&r(s),h($)}else r(s);d=n(s)}if(d!==null)var Kt=!0;else{var Be=n(u);Be!==null&&Yt(y,Be.startTime-$),Kt=!1}return Kt}finally{d=null,g=R,v=!1}}var P=!1,C=null,z=-1,M=5,L=-1;function Pe(){return!(e.unstable_now()-L<M)}function Vt(){if(C!==null){var _=e.unstable_now();L=_;var $=!0;try{$=C(!0,_)}finally{$?Qt():(P=!1,C=null)}}else P=!1}var Qt;if(typeof c=="function")Qt=function(){c(Vt)};else if(typeof MessageChannel<"u"){var ci=new MessageChannel,rl=ci.port2;ci.port1.onmessage=Vt,Qt=function(){rl.postMessage(null)}}else Qt=function(){k(Vt,0)};function ir(_){C=_,P||(P=!0,Qt())}function Yt(_,$){z=k(function(){_(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,ir(E))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(_){switch(g){case 1:case 2:case 3:var $=3;break;default:$=g}var R=g;g=$;try{return _()}finally{g=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,$){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var R=g;g=_;try{return $()}finally{g=R}},e.unstable_scheduleCallback=function(_,$,R){var U=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?U+R:U):R=U,_){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=R+B,_={id:p++,callback:$,priorityLevel:_,startTime:R,expirationTime:B,sortIndex:-1},R>U?(_.sortIndex=R,t(u,_),n(s)===null&&_===n(u)&&(w?(m(z),z=-1):w=!0,Yt(y,R-U))):(_.sortIndex=B,t(s,_),x||v||(x=!0,ir(E))),_},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(_){var $=g;return function(){var R=g;g=$;try{return _.apply(this,arguments)}finally{g=R}}}})(id);rd.exports=id;var jh=rd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ph=S,Le=jh;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var od=new Set,Lr={};function hn(e,t){Fn(e,t),Fn(e+"Capture",t)}function Fn(e,t){for(Lr[e]=t,e=0;e<t.length;e++)od.add(t[e])}var dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wl=Object.prototype.hasOwnProperty,zh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,iu={},ou={};function _h(e){return Wl.call(ou,e)?!0:Wl.call(iu,e)?!1:zh.test(e)?ou[e]=!0:(iu[e]=!0,!1)}function Nh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $h(e,t,n,r){if(t===null||typeof t>"u"||Nh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var ns=/[\-:]([a-z])/g;function rs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ns,rs);ce[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ns,rs);ce[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ns,rs);ce[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function is(e,t,n,r){var i=ce.hasOwnProperty(t)?ce[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($h(t,n,i,r)&&(n=null),r||i===null?_h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mt=Ph.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pi=Symbol.for("react.element"),wn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),os=Symbol.for("react.strict_mode"),Hl=Symbol.for("react.profiler"),ld=Symbol.for("react.provider"),ad=Symbol.for("react.context"),ls=Symbol.for("react.forward_ref"),Vl=Symbol.for("react.suspense"),Ql=Symbol.for("react.suspense_list"),as=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),sd=Symbol.for("react.offscreen"),lu=Symbol.iterator;function lr(e){return e===null||typeof e!="object"?null:(e=lu&&e[lu]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,ll;function mr(e){if(ll===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ll=t&&t[1]||""}return`
`+ll+e}var al=!1;function sl(e,t){if(!e||al)return"";al=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{al=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?mr(e):""}function Rh(e){switch(e.tag){case 5:return mr(e.type);case 16:return mr("Lazy");case 13:return mr("Suspense");case 19:return mr("SuspenseList");case 0:case 2:case 15:return e=sl(e.type,!1),e;case 11:return e=sl(e.type.render,!1),e;case 1:return e=sl(e.type,!0),e;default:return""}}function Yl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case wn:return"Portal";case Hl:return"Profiler";case os:return"StrictMode";case Vl:return"Suspense";case Ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ad:return(e.displayName||"Context")+".Consumer";case ld:return(e._context.displayName||"Context")+".Provider";case ls:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case as:return t=e.displayName||null,t!==null?t:Yl(e.type)||"Memo";case kt:t=e._payload,e=e._init;try{return Yl(e(t))}catch{}}return null}function Lh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yl(t);case 8:return t===os?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ud(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Th(e){var t=ud(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hi(e){e._valueTracker||(e._valueTracker=Th(e))}function cd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ud(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Kl(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function au(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dd(e,t){t=t.checked,t!=null&&is(e,"checked",t,!1)}function Gl(e,t){dd(e,t);var n=Ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xl(e,t.type,Ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function su(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xl(e,t,n){(t!=="number"||Zi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var gr=Array.isArray;function Tn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ft(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ql(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function uu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(gr(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ft(n)}}function fd(e,t){var n=Ft(t.value),r=Ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function cu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mi,hd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(mi=mi||document.createElement("div"),mi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=mi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Tr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ih=["Webkit","ms","Moz","O"];Object.keys(Sr).forEach(function(e){Ih.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sr[t]=Sr[e]})});function md(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sr.hasOwnProperty(e)&&Sr[e]?(""+t).trim():t+"px"}function gd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=md(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Oh=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jl(e,t){if(t){if(Oh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function ea(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ta=null;function ss(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var na=null,In=null,On=null;function du(e){if(e=oi(e)){if(typeof na!="function")throw Error(j(280));var t=e.stateNode;t&&(t=bo(t),na(e.stateNode,e.type,t))}}function vd(e){In?On?On.push(e):On=[e]:In=e}function yd(){if(In){var e=In,t=On;if(On=In=null,du(e),t)for(e=0;e<t.length;e++)du(t[e])}}function xd(e,t){return e(t)}function wd(){}var ul=!1;function Sd(e,t,n){if(ul)return e(t,n);ul=!0;try{return xd(e,t,n)}finally{ul=!1,(In!==null||On!==null)&&(wd(),yd())}}function Ir(e,t){var n=e.stateNode;if(n===null)return null;var r=bo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var ra=!1;if(dt)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){ra=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{ra=!1}function bh(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var kr=!1,Ji=null,eo=!1,ia=null,Mh={onError:function(e){kr=!0,Ji=e}};function Dh(e,t,n,r,i,o,l,a,s){kr=!1,Ji=null,bh.apply(Mh,arguments)}function Fh(e,t,n,r,i,o,l,a,s){if(Dh.apply(this,arguments),kr){if(kr){var u=Ji;kr=!1,Ji=null}else throw Error(j(198));eo||(eo=!0,ia=u)}}function mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function kd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fu(e){if(mn(e)!==e)throw Error(j(188))}function Ah(e){var t=e.alternate;if(!t){if(t=mn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return fu(i),e;if(o===r)return fu(i),t;o=o.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Ed(e){return e=Ah(e),e!==null?Cd(e):null}function Cd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cd(e);if(t!==null)return t;e=e.sibling}return null}var jd=Le.unstable_scheduleCallback,pu=Le.unstable_cancelCallback,Uh=Le.unstable_shouldYield,Bh=Le.unstable_requestPaint,J=Le.unstable_now,Wh=Le.unstable_getCurrentPriorityLevel,us=Le.unstable_ImmediatePriority,Pd=Le.unstable_UserBlockingPriority,to=Le.unstable_NormalPriority,Hh=Le.unstable_LowPriority,zd=Le.unstable_IdlePriority,Lo=null,nt=null;function Vh(e){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Lo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ye=Math.clz32?Math.clz32:Kh,Qh=Math.log,Yh=Math.LN2;function Kh(e){return e>>>=0,e===0?32:31-(Qh(e)/Yh|0)|0}var gi=64,vi=4194304;function vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function no(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=vr(a):(o&=l,o!==0&&(r=vr(o)))}else l=n&~i,l!==0?r=vr(l):o!==0&&(r=vr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ye(t),i=1<<n,r|=e[n],t&=~i;return r}function Gh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ye(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=Gh(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function oa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _d(){var e=gi;return gi<<=1,!(gi&4194240)&&(gi=64),e}function cl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ri(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ye(t),e[t]=n}function qh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ye(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function cs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ye(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var A=0;function Nd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $d,ds,Rd,Ld,Td,la=!1,yi=[],Nt=null,$t=null,Rt=null,Or=new Map,br=new Map,Ct=[],Zh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hu(e,t){switch(e){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":$t=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":br.delete(t.pointerId)}}function sr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=oi(t),t!==null&&ds(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Jh(e,t,n,r,i){switch(t){case"focusin":return Nt=sr(Nt,e,t,n,r,i),!0;case"dragenter":return $t=sr($t,e,t,n,r,i),!0;case"mouseover":return Rt=sr(Rt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Or.set(o,sr(Or.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,br.set(o,sr(br.get(o)||null,e,t,n,r,i)),!0}return!1}function Id(e){var t=Zt(e.target);if(t!==null){var n=mn(t);if(n!==null){if(t=n.tag,t===13){if(t=kd(n),t!==null){e.blockedOn=t,Td(e.priority,function(){Rd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=aa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ta=r,n.target.dispatchEvent(r),ta=null}else return t=oi(n),t!==null&&ds(t),e.blockedOn=n,!1;t.shift()}return!0}function mu(e,t,n){bi(e)&&n.delete(t)}function em(){la=!1,Nt!==null&&bi(Nt)&&(Nt=null),$t!==null&&bi($t)&&($t=null),Rt!==null&&bi(Rt)&&(Rt=null),Or.forEach(mu),br.forEach(mu)}function ur(e,t){e.blockedOn===t&&(e.blockedOn=null,la||(la=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,em)))}function Mr(e){function t(i){return ur(i,e)}if(0<yi.length){ur(yi[0],e);for(var n=1;n<yi.length;n++){var r=yi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Nt!==null&&ur(Nt,e),$t!==null&&ur($t,e),Rt!==null&&ur(Rt,e),Or.forEach(t),br.forEach(t),n=0;n<Ct.length;n++)r=Ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ct.length&&(n=Ct[0],n.blockedOn===null);)Id(n),n.blockedOn===null&&Ct.shift()}var bn=mt.ReactCurrentBatchConfig,ro=!0;function tm(e,t,n,r){var i=A,o=bn.transition;bn.transition=null;try{A=1,fs(e,t,n,r)}finally{A=i,bn.transition=o}}function nm(e,t,n,r){var i=A,o=bn.transition;bn.transition=null;try{A=4,fs(e,t,n,r)}finally{A=i,bn.transition=o}}function fs(e,t,n,r){if(ro){var i=aa(e,t,n,r);if(i===null)wl(e,t,r,io,n),hu(e,r);else if(Jh(i,e,t,n,r))r.stopPropagation();else if(hu(e,r),t&4&&-1<Zh.indexOf(e)){for(;i!==null;){var o=oi(i);if(o!==null&&$d(o),o=aa(e,t,n,r),o===null&&wl(e,t,r,io,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else wl(e,t,r,null,n)}}var io=null;function aa(e,t,n,r){if(io=null,e=ss(r),e=Zt(e),e!==null)if(t=mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=kd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return io=e,null}function Od(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wh()){case us:return 1;case Pd:return 4;case to:case Hh:return 16;case zd:return 536870912;default:return 16}default:return 16}}var Pt=null,ps=null,Mi=null;function bd(){if(Mi)return Mi;var e,t=ps,n=t.length,r,i="value"in Pt?Pt.value:Pt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Mi=i.slice(e,1<r?1-r:void 0)}function Di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xi(){return!0}function gu(){return!1}function Ie(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xi:gu,this.isPropagationStopped=gu,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xi)},persist:function(){},isPersistent:xi}),t}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hs=Ie(Jn),ii=q({},Jn,{view:0,detail:0}),rm=Ie(ii),dl,fl,cr,To=q({},ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ms,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cr&&(cr&&e.type==="mousemove"?(dl=e.screenX-cr.screenX,fl=e.screenY-cr.screenY):fl=dl=0,cr=e),dl)},movementY:function(e){return"movementY"in e?e.movementY:fl}}),vu=Ie(To),im=q({},To,{dataTransfer:0}),om=Ie(im),lm=q({},ii,{relatedTarget:0}),pl=Ie(lm),am=q({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),sm=Ie(am),um=q({},Jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cm=Ie(um),dm=q({},Jn,{data:0}),yu=Ie(dm),fm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hm[e])?!!t[e]:!1}function ms(){return mm}var gm=q({},ii,{key:function(e){if(e.key){var t=fm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ms,charCode:function(e){return e.type==="keypress"?Di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vm=Ie(gm),ym=q({},To,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xu=Ie(ym),xm=q({},ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ms}),wm=Ie(xm),Sm=q({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),km=Ie(Sm),Em=q({},To,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cm=Ie(Em),jm=[9,13,27,32],gs=dt&&"CompositionEvent"in window,Er=null;dt&&"documentMode"in document&&(Er=document.documentMode);var Pm=dt&&"TextEvent"in window&&!Er,Md=dt&&(!gs||Er&&8<Er&&11>=Er),wu=" ",Su=!1;function Dd(e,t){switch(e){case"keyup":return jm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function zm(e,t){switch(e){case"compositionend":return Fd(t);case"keypress":return t.which!==32?null:(Su=!0,wu);case"textInput":return e=t.data,e===wu&&Su?null:e;default:return null}}function _m(e,t){if(kn)return e==="compositionend"||!gs&&Dd(e,t)?(e=bd(),Mi=ps=Pt=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Md&&t.locale!=="ko"?null:t.data;default:return null}}var Nm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ku(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nm[e.type]:t==="textarea"}function Ad(e,t,n,r){vd(r),t=oo(t,"onChange"),0<t.length&&(n=new hs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Cr=null,Dr=null;function $m(e){qd(e,0)}function Io(e){var t=jn(e);if(cd(t))return e}function Rm(e,t){if(e==="change")return t}var Ud=!1;if(dt){var hl;if(dt){var ml="oninput"in document;if(!ml){var Eu=document.createElement("div");Eu.setAttribute("oninput","return;"),ml=typeof Eu.oninput=="function"}hl=ml}else hl=!1;Ud=hl&&(!document.documentMode||9<document.documentMode)}function Cu(){Cr&&(Cr.detachEvent("onpropertychange",Bd),Dr=Cr=null)}function Bd(e){if(e.propertyName==="value"&&Io(Dr)){var t=[];Ad(t,Dr,e,ss(e)),Sd($m,t)}}function Lm(e,t,n){e==="focusin"?(Cu(),Cr=t,Dr=n,Cr.attachEvent("onpropertychange",Bd)):e==="focusout"&&Cu()}function Tm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Io(Dr)}function Im(e,t){if(e==="click")return Io(t)}function Om(e,t){if(e==="input"||e==="change")return Io(t)}function bm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:bm;function Fr(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Wl.call(t,i)||!Xe(e[i],t[i]))return!1}return!0}function ju(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pu(e,t){var n=ju(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ju(n)}}function Wd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hd(){for(var e=window,t=Zi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zi(e.document)}return t}function vs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Mm(e){var t=Hd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wd(n.ownerDocument.documentElement,n)){if(r!==null&&vs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Pu(n,o);var l=Pu(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Dm=dt&&"documentMode"in document&&11>=document.documentMode,En=null,sa=null,jr=null,ua=!1;function zu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ua||En==null||En!==Zi(r)||(r=En,"selectionStart"in r&&vs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&Fr(jr,r)||(jr=r,r=oo(sa,"onSelect"),0<r.length&&(t=new hs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function wi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cn={animationend:wi("Animation","AnimationEnd"),animationiteration:wi("Animation","AnimationIteration"),animationstart:wi("Animation","AnimationStart"),transitionend:wi("Transition","TransitionEnd")},gl={},Vd={};dt&&(Vd=document.createElement("div").style,"AnimationEvent"in window||(delete Cn.animationend.animation,delete Cn.animationiteration.animation,delete Cn.animationstart.animation),"TransitionEvent"in window||delete Cn.transitionend.transition);function Oo(e){if(gl[e])return gl[e];if(!Cn[e])return e;var t=Cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vd)return gl[e]=t[n];return e}var Qd=Oo("animationend"),Yd=Oo("animationiteration"),Kd=Oo("animationstart"),Gd=Oo("transitionend"),Xd=new Map,_u="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ut(e,t){Xd.set(e,t),hn(t,[e])}for(var vl=0;vl<_u.length;vl++){var yl=_u[vl],Fm=yl.toLowerCase(),Am=yl[0].toUpperCase()+yl.slice(1);Ut(Fm,"on"+Am)}Ut(Qd,"onAnimationEnd");Ut(Yd,"onAnimationIteration");Ut(Kd,"onAnimationStart");Ut("dblclick","onDoubleClick");Ut("focusin","onFocus");Ut("focusout","onBlur");Ut(Gd,"onTransitionEnd");Fn("onMouseEnter",["mouseout","mouseover"]);Fn("onMouseLeave",["mouseout","mouseover"]);Fn("onPointerEnter",["pointerout","pointerover"]);Fn("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Um=new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));function Nu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Fh(r,t,void 0,e),e.currentTarget=null}function qd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;Nu(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;Nu(i,a,u),o=s}}}if(eo)throw e=ia,eo=!1,ia=null,e}function H(e,t){var n=t[ha];n===void 0&&(n=t[ha]=new Set);var r=e+"__bubble";n.has(r)||(Zd(t,e,2,!1),n.add(r))}function xl(e,t,n){var r=0;t&&(r|=4),Zd(n,e,r,t)}var Si="_reactListening"+Math.random().toString(36).slice(2);function Ar(e){if(!e[Si]){e[Si]=!0,od.forEach(function(n){n!=="selectionchange"&&(Um.has(n)||xl(n,!1,e),xl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Si]||(t[Si]=!0,xl("selectionchange",!1,t))}}function Zd(e,t,n,r){switch(Od(t)){case 1:var i=tm;break;case 4:i=nm;break;default:i=fs}n=i.bind(null,t,n,e),i=void 0,!ra||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function wl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Zt(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Sd(function(){var u=o,p=ss(n),d=[];e:{var g=Xd.get(e);if(g!==void 0){var v=hs,x=e;switch(e){case"keypress":if(Di(n)===0)break e;case"keydown":case"keyup":v=vm;break;case"focusin":x="focus",v=pl;break;case"focusout":x="blur",v=pl;break;case"beforeblur":case"afterblur":v=pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=vu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=om;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=wm;break;case Qd:case Yd:case Kd:v=sm;break;case Gd:v=km;break;case"scroll":v=rm;break;case"wheel":v=Cm;break;case"copy":case"cut":case"paste":v=cm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=xu}var w=(t&4)!==0,k=!w&&e==="scroll",m=w?g!==null?g+"Capture":null:g;w=[];for(var c=u,h;c!==null;){h=c;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,m!==null&&(y=Ir(c,m),y!=null&&w.push(Ur(c,y,h)))),k)break;c=c.return}0<w.length&&(g=new v(g,x,null,n,p),d.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==ta&&(x=n.relatedTarget||n.fromElement)&&(Zt(x)||x[ft]))break e;if((v||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=u,x=x?Zt(x):null,x!==null&&(k=mn(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=u),v!==x)){if(w=vu,y="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=xu,y="onPointerLeave",m="onPointerEnter",c="pointer"),k=v==null?g:jn(v),h=x==null?g:jn(x),g=new w(y,c+"leave",v,n,p),g.target=k,g.relatedTarget=h,y=null,Zt(p)===u&&(w=new w(m,c+"enter",x,n,p),w.target=h,w.relatedTarget=k,y=w),k=y,v&&x)t:{for(w=v,m=x,c=0,h=w;h;h=yn(h))c++;for(h=0,y=m;y;y=yn(y))h++;for(;0<c-h;)w=yn(w),c--;for(;0<h-c;)m=yn(m),h--;for(;c--;){if(w===m||m!==null&&w===m.alternate)break t;w=yn(w),m=yn(m)}w=null}else w=null;v!==null&&$u(d,g,v,w,!1),x!==null&&k!==null&&$u(d,k,x,w,!0)}}e:{if(g=u?jn(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var E=Rm;else if(ku(g))if(Ud)E=Om;else{E=Tm;var P=Lm}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=Im);if(E&&(E=E(e,u))){Ad(d,E,n,p);break e}P&&P(e,g,u),e==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&Xl(g,"number",g.value)}switch(P=u?jn(u):window,e){case"focusin":(ku(P)||P.contentEditable==="true")&&(En=P,sa=u,jr=null);break;case"focusout":jr=sa=En=null;break;case"mousedown":ua=!0;break;case"contextmenu":case"mouseup":case"dragend":ua=!1,zu(d,n,p);break;case"selectionchange":if(Dm)break;case"keydown":case"keyup":zu(d,n,p)}var C;if(gs)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else kn?Dd(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Md&&n.locale!=="ko"&&(kn||z!=="onCompositionStart"?z==="onCompositionEnd"&&kn&&(C=bd()):(Pt=p,ps="value"in Pt?Pt.value:Pt.textContent,kn=!0)),P=oo(u,z),0<P.length&&(z=new yu(z,e,null,n,p),d.push({event:z,listeners:P}),C?z.data=C:(C=Fd(n),C!==null&&(z.data=C)))),(C=Pm?zm(e,n):_m(e,n))&&(u=oo(u,"onBeforeInput"),0<u.length&&(p=new yu("onBeforeInput","beforeinput",null,n,p),d.push({event:p,listeners:u}),p.data=C))}qd(d,t)})}function Ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ir(e,n),o!=null&&r.unshift(Ur(e,o,i)),o=Ir(e,t),o!=null&&r.push(Ur(e,o,i))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $u(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=Ir(n,o),s!=null&&l.unshift(Ur(n,s,a))):i||(s=Ir(n,o),s!=null&&l.push(Ur(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Bm=/\r\n?/g,Wm=/\u0000|\uFFFD/g;function Ru(e){return(typeof e=="string"?e:""+e).replace(Bm,`
`).replace(Wm,"")}function ki(e,t,n){if(t=Ru(t),Ru(e)!==t&&n)throw Error(j(425))}function lo(){}var ca=null,da=null;function fa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pa=typeof setTimeout=="function"?setTimeout:void 0,Hm=typeof clearTimeout=="function"?clearTimeout:void 0,Lu=typeof Promise=="function"?Promise:void 0,Vm=typeof queueMicrotask=="function"?queueMicrotask:typeof Lu<"u"?function(e){return Lu.resolve(null).then(e).catch(Qm)}:pa;function Qm(e){setTimeout(function(){throw e})}function Sl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Mr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Mr(t)}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Tu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var er=Math.random().toString(36).slice(2),et="__reactFiber$"+er,Br="__reactProps$"+er,ft="__reactContainer$"+er,ha="__reactEvents$"+er,Ym="__reactListeners$"+er,Km="__reactHandles$"+er;function Zt(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ft]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Tu(e);e!==null;){if(n=e[et])return n;e=Tu(e)}return t}e=n,n=e.parentNode}return null}function oi(e){return e=e[et]||e[ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function bo(e){return e[Br]||null}var ma=[],Pn=-1;function Bt(e){return{current:e}}function Y(e){0>Pn||(e.current=ma[Pn],ma[Pn]=null,Pn--)}function W(e,t){Pn++,ma[Pn]=e.current,e.current=t}var At={},me=Bt(At),Ee=Bt(!1),un=At;function An(e,t){var n=e.type.contextTypes;if(!n)return At;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ce(e){return e=e.childContextTypes,e!=null}function ao(){Y(Ee),Y(me)}function Iu(e,t,n){if(me.current!==At)throw Error(j(168));W(me,t),W(Ee,n)}function Jd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,Lh(e)||"Unknown",i));return q({},n,r)}function so(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||At,un=me.current,W(me,e),W(Ee,Ee.current),!0}function Ou(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Jd(e,t,un),r.__reactInternalMemoizedMergedChildContext=e,Y(Ee),Y(me),W(me,e)):Y(Ee),W(Ee,n)}var at=null,Mo=!1,kl=!1;function ef(e){at===null?at=[e]:at.push(e)}function Gm(e){Mo=!0,ef(e)}function Wt(){if(!kl&&at!==null){kl=!0;var e=0,t=A;try{var n=at;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}at=null,Mo=!1}catch(i){throw at!==null&&(at=at.slice(e+1)),jd(us,Wt),i}finally{A=t,kl=!1}}return null}var zn=[],_n=0,uo=null,co=0,Oe=[],be=0,cn=null,st=1,ut="";function Xt(e,t){zn[_n++]=co,zn[_n++]=uo,uo=e,co=t}function tf(e,t,n){Oe[be++]=st,Oe[be++]=ut,Oe[be++]=cn,cn=e;var r=st;e=ut;var i=32-Ye(r)-1;r&=~(1<<i),n+=1;var o=32-Ye(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,st=1<<32-Ye(t)+i|n<<i|r,ut=o+e}else st=1<<o|n<<i|r,ut=e}function ys(e){e.return!==null&&(Xt(e,1),tf(e,1,0))}function xs(e){for(;e===uo;)uo=zn[--_n],zn[_n]=null,co=zn[--_n],zn[_n]=null;for(;e===cn;)cn=Oe[--be],Oe[be]=null,ut=Oe[--be],Oe[be]=null,st=Oe[--be],Oe[be]=null}var Re=null,$e=null,K=!1,Qe=null;function nf(e,t){var n=Me(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function bu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,$e=Lt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cn!==null?{id:st,overflow:ut}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Me(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,$e=null,!0):!1;default:return!1}}function ga(e){return(e.mode&1)!==0&&(e.flags&128)===0}function va(e){if(K){var t=$e;if(t){var n=t;if(!bu(e,t)){if(ga(e))throw Error(j(418));t=Lt(n.nextSibling);var r=Re;t&&bu(e,t)?nf(r,n):(e.flags=e.flags&-4097|2,K=!1,Re=e)}}else{if(ga(e))throw Error(j(418));e.flags=e.flags&-4097|2,K=!1,Re=e}}}function Mu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function Ei(e){if(e!==Re)return!1;if(!K)return Mu(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fa(e.type,e.memoizedProps)),t&&(t=$e)){if(ga(e))throw rf(),Error(j(418));for(;t;)nf(e,t),t=Lt(t.nextSibling)}if(Mu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$e=Lt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=Re?Lt(e.stateNode.nextSibling):null;return!0}function rf(){for(var e=$e;e;)e=Lt(e.nextSibling)}function Un(){$e=Re=null,K=!1}function ws(e){Qe===null?Qe=[e]:Qe.push(e)}var Xm=mt.ReactCurrentBatchConfig;function dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Ci(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Du(e){var t=e._init;return t(e._payload)}function of(e){function t(m,c){if(e){var h=m.deletions;h===null?(m.deletions=[c],m.flags|=16):h.push(c)}}function n(m,c){if(!e)return null;for(;c!==null;)t(m,c),c=c.sibling;return null}function r(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function i(m,c){return m=bt(m,c),m.index=0,m.sibling=null,m}function o(m,c,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<c?(m.flags|=2,c):h):(m.flags|=2,c)):(m.flags|=1048576,c)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,c,h,y){return c===null||c.tag!==6?(c=Nl(h,m.mode,y),c.return=m,c):(c=i(c,h),c.return=m,c)}function s(m,c,h,y){var E=h.type;return E===Sn?p(m,c,h.props.children,y,h.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===kt&&Du(E)===c.type)?(y=i(c,h.props),y.ref=dr(m,c,h),y.return=m,y):(y=Vi(h.type,h.key,h.props,null,m.mode,y),y.ref=dr(m,c,h),y.return=m,y)}function u(m,c,h,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=$l(h,m.mode,y),c.return=m,c):(c=i(c,h.children||[]),c.return=m,c)}function p(m,c,h,y,E){return c===null||c.tag!==7?(c=ln(h,m.mode,y,E),c.return=m,c):(c=i(c,h),c.return=m,c)}function d(m,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Nl(""+c,m.mode,h),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case pi:return h=Vi(c.type,c.key,c.props,null,m.mode,h),h.ref=dr(m,null,c),h.return=m,h;case wn:return c=$l(c,m.mode,h),c.return=m,c;case kt:var y=c._init;return d(m,y(c._payload),h)}if(gr(c)||lr(c))return c=ln(c,m.mode,h,null),c.return=m,c;Ci(m,c)}return null}function g(m,c,h,y){var E=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:a(m,c,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case pi:return h.key===E?s(m,c,h,y):null;case wn:return h.key===E?u(m,c,h,y):null;case kt:return E=h._init,g(m,c,E(h._payload),y)}if(gr(h)||lr(h))return E!==null?null:p(m,c,h,y,null);Ci(m,h)}return null}function v(m,c,h,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return m=m.get(h)||null,a(c,m,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pi:return m=m.get(y.key===null?h:y.key)||null,s(c,m,y,E);case wn:return m=m.get(y.key===null?h:y.key)||null,u(c,m,y,E);case kt:var P=y._init;return v(m,c,h,P(y._payload),E)}if(gr(y)||lr(y))return m=m.get(h)||null,p(c,m,y,E,null);Ci(c,y)}return null}function x(m,c,h,y){for(var E=null,P=null,C=c,z=c=0,M=null;C!==null&&z<h.length;z++){C.index>z?(M=C,C=null):M=C.sibling;var L=g(m,C,h[z],y);if(L===null){C===null&&(C=M);break}e&&C&&L.alternate===null&&t(m,C),c=o(L,c,z),P===null?E=L:P.sibling=L,P=L,C=M}if(z===h.length)return n(m,C),K&&Xt(m,z),E;if(C===null){for(;z<h.length;z++)C=d(m,h[z],y),C!==null&&(c=o(C,c,z),P===null?E=C:P.sibling=C,P=C);return K&&Xt(m,z),E}for(C=r(m,C);z<h.length;z++)M=v(C,m,z,h[z],y),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?z:M.key),c=o(M,c,z),P===null?E=M:P.sibling=M,P=M);return e&&C.forEach(function(Pe){return t(m,Pe)}),K&&Xt(m,z),E}function w(m,c,h,y){var E=lr(h);if(typeof E!="function")throw Error(j(150));if(h=E.call(h),h==null)throw Error(j(151));for(var P=E=null,C=c,z=c=0,M=null,L=h.next();C!==null&&!L.done;z++,L=h.next()){C.index>z?(M=C,C=null):M=C.sibling;var Pe=g(m,C,L.value,y);if(Pe===null){C===null&&(C=M);break}e&&C&&Pe.alternate===null&&t(m,C),c=o(Pe,c,z),P===null?E=Pe:P.sibling=Pe,P=Pe,C=M}if(L.done)return n(m,C),K&&Xt(m,z),E;if(C===null){for(;!L.done;z++,L=h.next())L=d(m,L.value,y),L!==null&&(c=o(L,c,z),P===null?E=L:P.sibling=L,P=L);return K&&Xt(m,z),E}for(C=r(m,C);!L.done;z++,L=h.next())L=v(C,m,z,L.value,y),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?z:L.key),c=o(L,c,z),P===null?E=L:P.sibling=L,P=L);return e&&C.forEach(function(Vt){return t(m,Vt)}),K&&Xt(m,z),E}function k(m,c,h,y){if(typeof h=="object"&&h!==null&&h.type===Sn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case pi:e:{for(var E=h.key,P=c;P!==null;){if(P.key===E){if(E=h.type,E===Sn){if(P.tag===7){n(m,P.sibling),c=i(P,h.props.children),c.return=m,m=c;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===kt&&Du(E)===P.type){n(m,P.sibling),c=i(P,h.props),c.ref=dr(m,P,h),c.return=m,m=c;break e}n(m,P);break}else t(m,P);P=P.sibling}h.type===Sn?(c=ln(h.props.children,m.mode,y,h.key),c.return=m,m=c):(y=Vi(h.type,h.key,h.props,null,m.mode,y),y.ref=dr(m,c,h),y.return=m,m=y)}return l(m);case wn:e:{for(P=h.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(m,c.sibling),c=i(c,h.children||[]),c.return=m,m=c;break e}else{n(m,c);break}else t(m,c);c=c.sibling}c=$l(h,m.mode,y),c.return=m,m=c}return l(m);case kt:return P=h._init,k(m,c,P(h._payload),y)}if(gr(h))return x(m,c,h,y);if(lr(h))return w(m,c,h,y);Ci(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(m,c.sibling),c=i(c,h),c.return=m,m=c):(n(m,c),c=Nl(h,m.mode,y),c.return=m,m=c),l(m)):n(m,c)}return k}var Bn=of(!0),lf=of(!1),fo=Bt(null),po=null,Nn=null,Ss=null;function ks(){Ss=Nn=po=null}function Es(e){var t=fo.current;Y(fo),e._currentValue=t}function ya(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Mn(e,t){po=e,Ss=Nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ke=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(Ss!==e)if(e={context:e,memoizedValue:t,next:null},Nn===null){if(po===null)throw Error(j(308));Nn=e,po.dependencies={lanes:0,firstContext:e}}else Nn=Nn.next=e;return t}var Jt=null;function Cs(e){Jt===null?Jt=[e]:Jt.push(e)}function af(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Cs(t)):(n.next=i.next,i.next=n),t.interleaved=n,pt(e,r)}function pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Et=!1;function js(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,pt(e,n)}return i=r.interleaved,i===null?(t.next=t,Cs(r)):(t.next=i.next,i.next=t),r.interleaved=t,pt(e,n)}function Fi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cs(e,n)}}function Fu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ho(e,t,n,r){var i=e.updateQueue;Et=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;l=0,p=u=s=null,a=o;do{var g=a.lane,v=a.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,w=a;switch(g=t,v=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){d=x.call(v,d,g);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,g=typeof x=="function"?x.call(v,d,g):x,g==null)break e;d=q({},d,g);break e;case 2:Et=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else v={eventTime:v,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=v,s=d):p=p.next=v,l|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(p===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);fn|=l,e.lanes=l,e.memoizedState=d}}function Au(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var li={},rt=Bt(li),Wr=Bt(li),Hr=Bt(li);function en(e){if(e===li)throw Error(j(174));return e}function Ps(e,t){switch(W(Hr,t),W(Wr,e),W(rt,li),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zl(t,e)}Y(rt),W(rt,t)}function Wn(){Y(rt),Y(Wr),Y(Hr)}function uf(e){en(Hr.current);var t=en(rt.current),n=Zl(t,e.type);t!==n&&(W(Wr,e),W(rt,n))}function zs(e){Wr.current===e&&(Y(rt),Y(Wr))}var G=Bt(0);function mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var El=[];function _s(){for(var e=0;e<El.length;e++)El[e]._workInProgressVersionPrimary=null;El.length=0}var Ai=mt.ReactCurrentDispatcher,Cl=mt.ReactCurrentBatchConfig,dn=0,X=null,re=null,oe=null,go=!1,Pr=!1,Vr=0,qm=0;function de(){throw Error(j(321))}function Ns(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xe(e[n],t[n]))return!1;return!0}function $s(e,t,n,r,i,o){if(dn=o,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ai.current=e===null||e.memoizedState===null?tg:ng,e=n(r,i),Pr){o=0;do{if(Pr=!1,Vr=0,25<=o)throw Error(j(301));o+=1,oe=re=null,t.updateQueue=null,Ai.current=rg,e=n(r,i)}while(Pr)}if(Ai.current=vo,t=re!==null&&re.next!==null,dn=0,oe=re=X=null,go=!1,t)throw Error(j(300));return e}function Rs(){var e=Vr!==0;return Vr=0,e}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?X.memoizedState=oe=e:oe=oe.next=e,oe}function Ae(){if(re===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=oe===null?X.memoizedState:oe.next;if(t!==null)oe=t,re=e;else{if(e===null)throw Error(j(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},oe===null?X.memoizedState=oe=e:oe=oe.next=e}return oe}function Qr(e,t){return typeof t=="function"?t(e):t}function jl(e){var t=Ae(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var p=u.lane;if((dn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=d,l=r):s=s.next=d,X.lanes|=p,fn|=p}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,Xe(r,t.memoizedState)||(ke=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,X.lanes|=o,fn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Pl(e){var t=Ae(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Xe(o,t.memoizedState)||(ke=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function cf(){}function df(e,t){var n=X,r=Ae(),i=t(),o=!Xe(r.memoizedState,i);if(o&&(r.memoizedState=i,ke=!0),r=r.queue,Ls(hf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,Yr(9,pf.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(j(349));dn&30||ff(n,t,i)}return i}function ff(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pf(e,t,n,r){t.value=n,t.getSnapshot=r,mf(t)&&gf(e)}function hf(e,t,n){return n(function(){mf(t)&&gf(e)})}function mf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xe(e,n)}catch{return!0}}function gf(e){var t=pt(e,1);t!==null&&Ke(t,e,1,-1)}function Uu(e){var t=Ze();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:e},t.queue=e,e=e.dispatch=eg.bind(null,X,e),[t.memoizedState,e]}function Yr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vf(){return Ae().memoizedState}function Ui(e,t,n,r){var i=Ze();X.flags|=e,i.memoizedState=Yr(1|t,n,void 0,r===void 0?null:r)}function Do(e,t,n,r){var i=Ae();r=r===void 0?null:r;var o=void 0;if(re!==null){var l=re.memoizedState;if(o=l.destroy,r!==null&&Ns(r,l.deps)){i.memoizedState=Yr(t,n,o,r);return}}X.flags|=e,i.memoizedState=Yr(1|t,n,o,r)}function Bu(e,t){return Ui(8390656,8,e,t)}function Ls(e,t){return Do(2048,8,e,t)}function yf(e,t){return Do(4,2,e,t)}function xf(e,t){return Do(4,4,e,t)}function wf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sf(e,t,n){return n=n!=null?n.concat([e]):null,Do(4,4,wf.bind(null,t,e),n)}function Ts(){}function kf(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ns(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ef(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ns(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cf(e,t,n){return dn&21?(Xe(n,t)||(n=_d(),X.lanes|=n,fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=n)}function Zm(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=Cl.transition;Cl.transition={};try{e(!1),t()}finally{A=n,Cl.transition=r}}function jf(){return Ae().memoizedState}function Jm(e,t,n){var r=Ot(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pf(e))zf(t,n);else if(n=af(e,t,n,r),n!==null){var i=ye();Ke(n,e,r,i),_f(n,t,r)}}function eg(e,t,n){var r=Ot(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pf(e))zf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Xe(a,l)){var s=t.interleaved;s===null?(i.next=i,Cs(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=af(e,t,i,r),n!==null&&(i=ye(),Ke(n,e,r,i),_f(n,t,r))}}function Pf(e){var t=e.alternate;return e===X||t!==null&&t===X}function zf(e,t){Pr=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _f(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cs(e,n)}}var vo={readContext:Fe,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},tg={readContext:Fe,useCallback:function(e,t){return Ze().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:Bu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ui(4194308,4,wf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ui(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ui(4,2,e,t)},useMemo:function(e,t){var n=Ze();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ze();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Jm.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=Ze();return e={current:e},t.memoizedState=e},useState:Uu,useDebugValue:Ts,useDeferredValue:function(e){return Ze().memoizedState=e},useTransition:function(){var e=Uu(!1),t=e[0];return e=Zm.bind(null,e[1]),Ze().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,i=Ze();if(K){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),ae===null)throw Error(j(349));dn&30||ff(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Bu(hf.bind(null,r,o,e),[e]),r.flags|=2048,Yr(9,pf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ze(),t=ae.identifierPrefix;if(K){var n=ut,r=st;n=(r&~(1<<32-Ye(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ng={readContext:Fe,useCallback:kf,useContext:Fe,useEffect:Ls,useImperativeHandle:Sf,useInsertionEffect:yf,useLayoutEffect:xf,useMemo:Ef,useReducer:jl,useRef:vf,useState:function(){return jl(Qr)},useDebugValue:Ts,useDeferredValue:function(e){var t=Ae();return Cf(t,re.memoizedState,e)},useTransition:function(){var e=jl(Qr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:cf,useSyncExternalStore:df,useId:jf,unstable_isNewReconciler:!1},rg={readContext:Fe,useCallback:kf,useContext:Fe,useEffect:Ls,useImperativeHandle:Sf,useInsertionEffect:yf,useLayoutEffect:xf,useMemo:Ef,useReducer:Pl,useRef:vf,useState:function(){return Pl(Qr)},useDebugValue:Ts,useDeferredValue:function(e){var t=Ae();return re===null?t.memoizedState=e:Cf(t,re.memoizedState,e)},useTransition:function(){var e=Pl(Qr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:cf,useSyncExternalStore:df,useId:jf,unstable_isNewReconciler:!1};function He(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function xa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fo={isMounted:function(e){return(e=e._reactInternals)?mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),i=Ot(e),o=ct(r,i);o.payload=t,n!=null&&(o.callback=n),t=Tt(e,o,i),t!==null&&(Ke(t,e,i,r),Fi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),i=Ot(e),o=ct(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Tt(e,o,i),t!==null&&(Ke(t,e,i,r),Fi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=Ot(e),i=ct(n,r);i.tag=2,t!=null&&(i.callback=t),t=Tt(e,i,r),t!==null&&(Ke(t,e,r,n),Fi(t,e,r))}};function Wu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Fr(n,r)||!Fr(i,o):!0}function Nf(e,t,n){var r=!1,i=At,o=t.contextType;return typeof o=="object"&&o!==null?o=Fe(o):(i=Ce(t)?un:me.current,r=t.contextTypes,o=(r=r!=null)?An(e,i):At),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Hu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fo.enqueueReplaceState(t,t.state,null)}function wa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},js(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Fe(o):(o=Ce(t)?un:me.current,i.context=An(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(xa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Fo.enqueueReplaceState(i,i.state,null),ho(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Hn(e,t){try{var n="",r=t;do n+=Rh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function zl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Sa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ig=typeof WeakMap=="function"?WeakMap:Map;function $f(e,t,n){n=ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xo||(xo=!0,Ra=r),Sa(e,t)},n}function Rf(e,t,n){n=ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Sa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Sa(e,t),typeof r!="function"&&(It===null?It=new Set([this]):It.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Vu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ig;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=yg.bind(null,e,t,n),t.then(e,e))}function Qu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Yu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ct(-1,1),t.tag=2,Tt(n,t,1))),n.lanes|=1),e)}var og=mt.ReactCurrentOwner,ke=!1;function ge(e,t,n,r){t.child=e===null?lf(t,null,n,r):Bn(t,e.child,n,r)}function Ku(e,t,n,r,i){n=n.render;var o=t.ref;return Mn(t,i),r=$s(e,t,n,r,o,i),n=Rs(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ht(e,t,i)):(K&&n&&ys(t),t.flags|=1,ge(e,t,r,i),t.child)}function Gu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Us(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Lf(e,t,o,r,i)):(e=Vi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Fr,n(l,r)&&e.ref===t.ref)return ht(e,t,i)}return t.flags|=1,e=bt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Lf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Fr(o,r)&&e.ref===t.ref)if(ke=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ke=!0);else return t.lanes=e.lanes,ht(e,t,i)}return ka(e,t,n,r,i)}function Tf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Rn,Ne),Ne|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Rn,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(Rn,Ne),Ne|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(Rn,Ne),Ne|=r;return ge(e,t,i,n),t.child}function If(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ka(e,t,n,r,i){var o=Ce(n)?un:me.current;return o=An(t,o),Mn(t,i),n=$s(e,t,n,r,o,i),r=Rs(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ht(e,t,i)):(K&&r&&ys(t),t.flags|=1,ge(e,t,n,i),t.child)}function Xu(e,t,n,r,i){if(Ce(n)){var o=!0;so(t)}else o=!1;if(Mn(t,i),t.stateNode===null)Bi(e,t),Nf(t,n,r),wa(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Fe(u):(u=Ce(n)?un:me.current,u=An(t,u));var p=n.getDerivedStateFromProps,d=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Hu(t,l,r,u),Et=!1;var g=t.memoizedState;l.state=g,ho(t,r,l,i),s=t.memoizedState,a!==r||g!==s||Ee.current||Et?(typeof p=="function"&&(xa(t,n,p,r),s=t.memoizedState),(a=Et||Wu(t,n,a,r,g,s,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,sf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:He(t.type,a),l.props=u,d=t.pendingProps,g=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Fe(s):(s=Ce(n)?un:me.current,s=An(t,s));var v=n.getDerivedStateFromProps;(p=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==d||g!==s)&&Hu(t,l,r,s),Et=!1,g=t.memoizedState,l.state=g,ho(t,r,l,i);var x=t.memoizedState;a!==d||g!==x||Ee.current||Et?(typeof v=="function"&&(xa(t,n,v,r),x=t.memoizedState),(u=Et||Wu(t,n,u,r,g,x,s)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Ea(e,t,n,r,o,i)}function Ea(e,t,n,r,i,o){If(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Ou(t,n,!1),ht(e,t,o);r=t.stateNode,og.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Bn(t,e.child,null,o),t.child=Bn(t,null,a,o)):ge(e,t,a,o),t.memoizedState=r.state,i&&Ou(t,n,!0),t.child}function Of(e){var t=e.stateNode;t.pendingContext?Iu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Iu(e,t.context,!1),Ps(e,t.containerInfo)}function qu(e,t,n,r,i){return Un(),ws(i),t.flags|=256,ge(e,t,n,r),t.child}var Ca={dehydrated:null,treeContext:null,retryLane:0};function ja(e){return{baseLanes:e,cachePool:null,transitions:null}}function bf(e,t,n){var r=t.pendingProps,i=G.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(G,i&1),e===null)return va(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Bo(l,r,0,null),e=ln(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ja(n),t.memoizedState=Ca,e):Is(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return lg(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=bt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=bt(a,o):(o=ln(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?ja(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Ca,r}return o=e.child,e=o.sibling,r=bt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Is(e,t){return t=Bo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ji(e,t,n,r){return r!==null&&ws(r),Bn(t,e.child,null,n),e=Is(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lg(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=zl(Error(j(422))),ji(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Bo({mode:"visible",children:r.children},i,0,null),o=ln(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Bn(t,e.child,null,l),t.child.memoizedState=ja(l),t.memoizedState=Ca,o);if(!(t.mode&1))return ji(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(j(419)),r=zl(o,r,void 0),ji(e,t,l,r)}if(a=(l&e.childLanes)!==0,ke||a){if(r=ae,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,pt(e,i),Ke(r,e,i,-1))}return As(),r=zl(Error(j(421))),ji(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=xg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,$e=Lt(i.nextSibling),Re=t,K=!0,Qe=null,e!==null&&(Oe[be++]=st,Oe[be++]=ut,Oe[be++]=cn,st=e.id,ut=e.overflow,cn=t),t=Is(t,r.children),t.flags|=4096,t)}function Zu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ya(e.return,t,n)}function _l(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Mf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ge(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zu(e,n,t);else if(e.tag===19)Zu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&mo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),_l(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}_l(t,!0,n,null,o);break;case"together":_l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ag(e,t,n){switch(t.tag){case 3:Of(t),Un();break;case 5:uf(t);break;case 1:Ce(t.type)&&so(t);break;case 4:Ps(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(fo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?bf(e,t,n):(W(G,G.current&1),e=ht(e,t,n),e!==null?e.sibling:null);W(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Mf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,Tf(e,t,n)}return ht(e,t,n)}var Df,Pa,Ff,Af;Df=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pa=function(){};Ff=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,en(rt.current);var o=null;switch(n){case"input":i=Kl(e,i),r=Kl(e,r),o=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),o=[];break;case"textarea":i=ql(e,i),r=ql(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=lo)}Jl(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Lr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Lr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&H("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Af=function(e,t,n,r){n!==r&&(t.flags|=4)};function fr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sg(e,t,n){var r=t.pendingProps;switch(xs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return Ce(t.type)&&ao(),fe(t),null;case 3:return r=t.stateNode,Wn(),Y(Ee),Y(me),_s(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ei(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qe!==null&&(Ia(Qe),Qe=null))),Pa(e,t),fe(t),null;case 5:zs(t);var i=en(Hr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ff(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return fe(t),null}if(e=en(rt.current),Ei(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[et]=t,r[Br]=o,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<yr.length;i++)H(yr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":au(r,o),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},H("invalid",r);break;case"textarea":uu(r,o),H("invalid",r)}Jl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ki(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ki(r.textContent,a,e),i=["children",""+a]):Lr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&H("scroll",r)}switch(n){case"input":hi(r),su(r,o,!0);break;case"textarea":hi(r),cu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=lo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[et]=t,e[Br]=r,Df(e,t,!1,!1),t.stateNode=e;e:{switch(l=ea(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<yr.length;i++)H(yr[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":au(e,r),i=Kl(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),H("invalid",e);break;case"textarea":uu(e,r),i=ql(e,r),H("invalid",e);break;default:i=r}Jl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?gd(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&hd(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Tr(e,s):typeof s=="number"&&Tr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Lr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&H("scroll",e):s!=null&&is(e,o,s,l))}switch(n){case"input":hi(e),su(e,r,!1);break;case"textarea":hi(e),cu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ft(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Tn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=lo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fe(t),null;case 6:if(e&&t.stateNode!=null)Af(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=en(Hr.current),en(rt.current),Ei(t)){if(r=t.stateNode,n=t.memoizedProps,r[et]=t,(o=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:ki(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ki(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=t,t.stateNode=r}return fe(t),null;case 13:if(Y(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&$e!==null&&t.mode&1&&!(t.flags&128))rf(),Un(),t.flags|=98560,o=!1;else if(o=Ei(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[et]=t}else Un(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;fe(t),o=!1}else Qe!==null&&(Ia(Qe),Qe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?ie===0&&(ie=3):As())),t.updateQueue!==null&&(t.flags|=4),fe(t),null);case 4:return Wn(),Pa(e,t),e===null&&Ar(t.stateNode.containerInfo),fe(t),null;case 10:return Es(t.type._context),fe(t),null;case 17:return Ce(t.type)&&ao(),fe(t),null;case 19:if(Y(G),o=t.memoizedState,o===null)return fe(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)fr(o,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=mo(e),l!==null){for(t.flags|=128,fr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(G,G.current&1|2),t.child}e=e.sibling}o.tail!==null&&J()>Vn&&(t.flags|=128,r=!0,fr(o,!1),t.lanes=4194304)}else{if(!r)if(e=mo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!K)return fe(t),null}else 2*J()-o.renderingStartTime>Vn&&n!==1073741824&&(t.flags|=128,r=!0,fr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=J(),t.sibling=null,n=G.current,W(G,r?n&1|2:n&1),t):(fe(t),null);case 22:case 23:return Fs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function ug(e,t){switch(xs(t),t.tag){case 1:return Ce(t.type)&&ao(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wn(),Y(Ee),Y(me),_s(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zs(t),null;case 13:if(Y(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(G),null;case 4:return Wn(),null;case 10:return Es(t.type._context),null;case 22:case 23:return Fs(),null;case 24:return null;default:return null}}var Pi=!1,pe=!1,cg=typeof WeakSet=="function"?WeakSet:Set,N=null;function $n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function za(e,t,n){try{n()}catch(r){Z(e,t,r)}}var Ju=!1;function dg(e,t){if(ca=ro,e=Hd(),vs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,p=0,d=e,g=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(a=l+i),d!==o||r!==0&&d.nodeType!==3||(s=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(v=d.firstChild)!==null;)g=d,d=v;for(;;){if(d===e)break t;if(g===n&&++u===i&&(a=l),g===o&&++p===r&&(s=l),(v=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=v}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(da={focusedElem:e,selectionRange:n},ro=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,k=x.memoizedState,m=t.stateNode,c=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:He(t.type,w),k);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(y){Z(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return x=Ju,Ju=!1,x}function zr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&za(t,n,o)}i=i.next}while(i!==r)}}function Ao(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function _a(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Uf(e){var t=e.alternate;t!==null&&(e.alternate=null,Uf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[et],delete t[Br],delete t[ha],delete t[Ym],delete t[Km])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bf(e){return e.tag===5||e.tag===3||e.tag===4}function ec(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Na(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=lo));else if(r!==4&&(e=e.child,e!==null))for(Na(e,t,n),e=e.sibling;e!==null;)Na(e,t,n),e=e.sibling}function $a(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($a(e,t,n),e=e.sibling;e!==null;)$a(e,t,n),e=e.sibling}var se=null,Ve=!1;function yt(e,t,n){for(n=n.child;n!==null;)Wf(e,t,n),n=n.sibling}function Wf(e,t,n){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Lo,n)}catch{}switch(n.tag){case 5:pe||$n(n,t);case 6:var r=se,i=Ve;se=null,yt(e,t,n),se=r,Ve=i,se!==null&&(Ve?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(Ve?(e=se,n=n.stateNode,e.nodeType===8?Sl(e.parentNode,n):e.nodeType===1&&Sl(e,n),Mr(e)):Sl(se,n.stateNode));break;case 4:r=se,i=Ve,se=n.stateNode.containerInfo,Ve=!0,yt(e,t,n),se=r,Ve=i;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&za(n,t,l),i=i.next}while(i!==r)}yt(e,t,n);break;case 1:if(!pe&&($n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Z(n,t,a)}yt(e,t,n);break;case 21:yt(e,t,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,yt(e,t,n),pe=r):yt(e,t,n);break;default:yt(e,t,n)}}function tc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cg),t.forEach(function(r){var i=wg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:se=a.stateNode,Ve=!1;break e;case 3:se=a.stateNode.containerInfo,Ve=!0;break e;case 4:se=a.stateNode.containerInfo,Ve=!0;break e}a=a.return}if(se===null)throw Error(j(160));Wf(o,l,i),se=null,Ve=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Z(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hf(t,e),t=t.sibling}function Hf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),qe(e),r&4){try{zr(3,e,e.return),Ao(3,e)}catch(w){Z(e,e.return,w)}try{zr(5,e,e.return)}catch(w){Z(e,e.return,w)}}break;case 1:We(t,e),qe(e),r&512&&n!==null&&$n(n,n.return);break;case 5:if(We(t,e),qe(e),r&512&&n!==null&&$n(n,n.return),e.flags&32){var i=e.stateNode;try{Tr(i,"")}catch(w){Z(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&dd(i,o),ea(a,l);var u=ea(a,o);for(l=0;l<s.length;l+=2){var p=s[l],d=s[l+1];p==="style"?gd(i,d):p==="dangerouslySetInnerHTML"?hd(i,d):p==="children"?Tr(i,d):is(i,p,d,u)}switch(a){case"input":Gl(i,o);break;case"textarea":fd(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Tn(i,!!o.multiple,v,!1):g!==!!o.multiple&&(o.defaultValue!=null?Tn(i,!!o.multiple,o.defaultValue,!0):Tn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Br]=o}catch(w){Z(e,e.return,w)}}break;case 6:if(We(t,e),qe(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){Z(e,e.return,w)}}break;case 3:if(We(t,e),qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mr(t.containerInfo)}catch(w){Z(e,e.return,w)}break;case 4:We(t,e),qe(e);break;case 13:We(t,e),qe(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ms=J())),r&4&&tc(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(u=pe)||p,We(t,e),pe=u):We(t,e),qe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(N=e,p=e.child;p!==null;){for(d=N=p;N!==null;){switch(g=N,v=g.child,g.tag){case 0:case 11:case 14:case 15:zr(4,g,g.return);break;case 1:$n(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){Z(r,n,w)}}break;case 5:$n(g,g.return);break;case 22:if(g.memoizedState!==null){rc(d);continue}}v!==null?(v.return=g,N=v):rc(d)}p=p.sibling}e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,s=d.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=md("display",l))}catch(w){Z(e,e.return,w)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){Z(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:We(t,e),qe(e),r&4&&tc(e);break;case 21:break;default:We(t,e),qe(e)}}function qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bf(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Tr(i,""),r.flags&=-33);var o=ec(e);$a(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=ec(e);Na(e,a,l);break;default:throw Error(j(161))}}catch(s){Z(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fg(e,t,n){N=e,Vf(e)}function Vf(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Pi;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||pe;a=Pi;var u=pe;if(Pi=l,(pe=s)&&!u)for(N=i;N!==null;)l=N,s=l.child,l.tag===22&&l.memoizedState!==null?ic(i):s!==null?(s.return=l,N=s):ic(i);for(;o!==null;)N=o,Vf(o),o=o.sibling;N=i,Pi=a,pe=u}nc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):nc(e)}}function nc(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||Ao(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Au(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Au(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&Mr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}pe||t.flags&512&&_a(t)}catch(g){Z(t,t.return,g)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function rc(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function ic(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ao(4,t)}catch(s){Z(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Z(t,i,s)}}var o=t.return;try{_a(t)}catch(s){Z(t,o,s)}break;case 5:var l=t.return;try{_a(t)}catch(s){Z(t,l,s)}}}catch(s){Z(t,t.return,s)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var pg=Math.ceil,yo=mt.ReactCurrentDispatcher,Os=mt.ReactCurrentOwner,De=mt.ReactCurrentBatchConfig,O=0,ae=null,te=null,ue=0,Ne=0,Rn=Bt(0),ie=0,Kr=null,fn=0,Uo=0,bs=0,_r=null,Se=null,Ms=0,Vn=1/0,ot=null,xo=!1,Ra=null,It=null,zi=!1,zt=null,wo=0,Nr=0,La=null,Wi=-1,Hi=0;function ye(){return O&6?J():Wi!==-1?Wi:Wi=J()}function Ot(e){return e.mode&1?O&2&&ue!==0?ue&-ue:Xm.transition!==null?(Hi===0&&(Hi=_d()),Hi):(e=A,e!==0||(e=window.event,e=e===void 0?16:Od(e.type)),e):1}function Ke(e,t,n,r){if(50<Nr)throw Nr=0,La=null,Error(j(185));ri(e,n,r),(!(O&2)||e!==ae)&&(e===ae&&(!(O&2)&&(Uo|=n),ie===4&&jt(e,ue)),je(e,r),n===1&&O===0&&!(t.mode&1)&&(Vn=J()+500,Mo&&Wt()))}function je(e,t){var n=e.callbackNode;Xh(e,t);var r=no(e,e===ae?ue:0);if(r===0)n!==null&&pu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&pu(n),t===1)e.tag===0?Gm(oc.bind(null,e)):ef(oc.bind(null,e)),Vm(function(){!(O&6)&&Wt()}),n=null;else{switch(Nd(r)){case 1:n=us;break;case 4:n=Pd;break;case 16:n=to;break;case 536870912:n=zd;break;default:n=to}n=Jf(n,Qf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qf(e,t){if(Wi=-1,Hi=0,O&6)throw Error(j(327));var n=e.callbackNode;if(Dn()&&e.callbackNode!==n)return null;var r=no(e,e===ae?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=So(e,r);else{t=r;var i=O;O|=2;var o=Kf();(ae!==e||ue!==t)&&(ot=null,Vn=J()+500,on(e,t));do try{gg();break}catch(a){Yf(e,a)}while(!0);ks(),yo.current=o,O=i,te!==null?t=0:(ae=null,ue=0,t=ie)}if(t!==0){if(t===2&&(i=oa(e),i!==0&&(r=i,t=Ta(e,i))),t===1)throw n=Kr,on(e,0),jt(e,r),je(e,J()),n;if(t===6)jt(e,r);else{if(i=e.current.alternate,!(r&30)&&!hg(i)&&(t=So(e,r),t===2&&(o=oa(e),o!==0&&(r=o,t=Ta(e,o))),t===1))throw n=Kr,on(e,0),jt(e,r),je(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:qt(e,Se,ot);break;case 3:if(jt(e,r),(r&130023424)===r&&(t=Ms+500-J(),10<t)){if(no(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=pa(qt.bind(null,e,Se,ot),t);break}qt(e,Se,ot);break;case 4:if(jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ye(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pg(r/1960))-r,10<r){e.timeoutHandle=pa(qt.bind(null,e,Se,ot),r);break}qt(e,Se,ot);break;case 5:qt(e,Se,ot);break;default:throw Error(j(329))}}}return je(e,J()),e.callbackNode===n?Qf.bind(null,e):null}function Ta(e,t){var n=_r;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=So(e,t),e!==2&&(t=Se,Se=n,t!==null&&Ia(t)),e}function Ia(e){Se===null?Se=e:Se.push.apply(Se,e)}function hg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Xe(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jt(e,t){for(t&=~bs,t&=~Uo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ye(t),r=1<<n;e[n]=-1,t&=~r}}function oc(e){if(O&6)throw Error(j(327));Dn();var t=no(e,0);if(!(t&1))return je(e,J()),null;var n=So(e,t);if(e.tag!==0&&n===2){var r=oa(e);r!==0&&(t=r,n=Ta(e,r))}if(n===1)throw n=Kr,on(e,0),jt(e,t),je(e,J()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,qt(e,Se,ot),je(e,J()),null}function Ds(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Vn=J()+500,Mo&&Wt())}}function pn(e){zt!==null&&zt.tag===0&&!(O&6)&&Dn();var t=O;O|=1;var n=De.transition,r=A;try{if(De.transition=null,A=1,e)return e()}finally{A=r,De.transition=n,O=t,!(O&6)&&Wt()}}function Fs(){Ne=Rn.current,Y(Rn)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hm(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(xs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ao();break;case 3:Wn(),Y(Ee),Y(me),_s();break;case 5:zs(r);break;case 4:Wn();break;case 13:Y(G);break;case 19:Y(G);break;case 10:Es(r.type._context);break;case 22:case 23:Fs()}n=n.return}if(ae=e,te=e=bt(e.current,null),ue=Ne=t,ie=0,Kr=null,bs=Uo=fn=0,Se=_r=null,Jt!==null){for(t=0;t<Jt.length;t++)if(n=Jt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Jt=null}return e}function Yf(e,t){do{var n=te;try{if(ks(),Ai.current=vo,go){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}go=!1}if(dn=0,oe=re=X=null,Pr=!1,Vr=0,Os.current=null,n===null||n.return===null){ie=1,Kr=t,te=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=ue,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=a,d=p.tag;if(!(p.mode&1)&&(d===0||d===11||d===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=Qu(l);if(v!==null){v.flags&=-257,Yu(v,l,a,o,t),v.mode&1&&Vu(o,u,t),t=v,s=u;var x=t.updateQueue;if(x===null){var w=new Set;w.add(s),t.updateQueue=w}else x.add(s);break e}else{if(!(t&1)){Vu(o,u,t),As();break e}s=Error(j(426))}}else if(K&&a.mode&1){var k=Qu(l);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Yu(k,l,a,o,t),ws(Hn(s,a));break e}}o=s=Hn(s,a),ie!==4&&(ie=2),_r===null?_r=[o]:_r.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=$f(o,s,t);Fu(o,m);break e;case 1:a=s;var c=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(It===null||!It.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=Rf(o,a,t);Fu(o,y);break e}}o=o.return}while(o!==null)}Xf(n)}catch(E){t=E,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function Kf(){var e=yo.current;return yo.current=vo,e===null?vo:e}function As(){(ie===0||ie===3||ie===2)&&(ie=4),ae===null||!(fn&268435455)&&!(Uo&268435455)||jt(ae,ue)}function So(e,t){var n=O;O|=2;var r=Kf();(ae!==e||ue!==t)&&(ot=null,on(e,t));do try{mg();break}catch(i){Yf(e,i)}while(!0);if(ks(),O=n,yo.current=r,te!==null)throw Error(j(261));return ae=null,ue=0,ie}function mg(){for(;te!==null;)Gf(te)}function gg(){for(;te!==null&&!Uh();)Gf(te)}function Gf(e){var t=Zf(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?Xf(e):te=t,Os.current=null}function Xf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ug(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,te=null;return}}else if(n=sg(n,t,Ne),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);ie===0&&(ie=5)}function qt(e,t,n){var r=A,i=De.transition;try{De.transition=null,A=1,vg(e,t,n,r)}finally{De.transition=i,A=r}return null}function vg(e,t,n,r){do Dn();while(zt!==null);if(O&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(qh(e,o),e===ae&&(te=ae=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zi||(zi=!0,Jf(to,function(){return Dn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=De.transition,De.transition=null;var l=A;A=1;var a=O;O|=4,Os.current=null,dg(e,n),Hf(n,e),Mm(da),ro=!!ca,da=ca=null,e.current=n,fg(n),Bh(),O=a,A=l,De.transition=o}else e.current=n;if(zi&&(zi=!1,zt=e,wo=i),o=e.pendingLanes,o===0&&(It=null),Vh(n.stateNode),je(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xo)throw xo=!1,e=Ra,Ra=null,e;return wo&1&&e.tag!==0&&Dn(),o=e.pendingLanes,o&1?e===La?Nr++:(Nr=0,La=e):Nr=0,Wt(),null}function Dn(){if(zt!==null){var e=Nd(wo),t=De.transition,n=A;try{if(De.transition=null,A=16>e?16:e,zt===null)var r=!1;else{if(e=zt,zt=null,wo=0,O&6)throw Error(j(331));var i=O;for(O|=4,N=e.current;N!==null;){var o=N,l=o.child;if(N.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(N=u;N!==null;){var p=N;switch(p.tag){case 0:case 11:case 15:zr(8,p,o)}var d=p.child;if(d!==null)d.return=p,N=d;else for(;N!==null;){p=N;var g=p.sibling,v=p.return;if(Uf(p),p===u){N=null;break}if(g!==null){g.return=v,N=g;break}N=v}}}var x=o.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}N=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,N=l;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:zr(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,N=m;break e}N=o.return}}var c=e.current;for(N=c;N!==null;){l=N;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,N=h;else e:for(l=c;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ao(9,a)}}catch(E){Z(a,a.return,E)}if(a===l){N=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,N=y;break e}N=a.return}}if(O=i,Wt(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Lo,e)}catch{}r=!0}return r}finally{A=n,De.transition=t}}return!1}function lc(e,t,n){t=Hn(n,t),t=$f(e,t,1),e=Tt(e,t,1),t=ye(),e!==null&&(ri(e,1,t),je(e,t))}function Z(e,t,n){if(e.tag===3)lc(e,e,n);else for(;t!==null;){if(t.tag===3){lc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(It===null||!It.has(r))){e=Hn(n,e),e=Rf(t,e,1),t=Tt(t,e,1),e=ye(),t!==null&&(ri(t,1,e),je(t,e));break}}t=t.return}}function yg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(ue&n)===n&&(ie===4||ie===3&&(ue&130023424)===ue&&500>J()-Ms?on(e,0):bs|=n),je(e,t)}function qf(e,t){t===0&&(e.mode&1?(t=vi,vi<<=1,!(vi&130023424)&&(vi=4194304)):t=1);var n=ye();e=pt(e,t),e!==null&&(ri(e,t,n),je(e,n))}function xg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qf(e,n)}function wg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),qf(e,n)}var Zf;Zf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ke=!1,ag(e,t,n);ke=!!(e.flags&131072)}else ke=!1,K&&t.flags&1048576&&tf(t,co,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bi(e,t),e=t.pendingProps;var i=An(t,me.current);Mn(t,n),i=$s(null,t,r,e,i,n);var o=Rs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(r)?(o=!0,so(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,js(t),i.updater=Fo,t.stateNode=i,i._reactInternals=t,wa(t,r,e,n),t=Ea(null,t,r,!0,o,n)):(t.tag=0,K&&o&&ys(t),ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=kg(r),e=He(r,e),i){case 0:t=ka(null,t,r,e,n);break e;case 1:t=Xu(null,t,r,e,n);break e;case 11:t=Ku(null,t,r,e,n);break e;case 14:t=Gu(null,t,r,He(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),ka(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),Xu(e,t,r,i,n);case 3:e:{if(Of(t),e===null)throw Error(j(387));r=t.pendingProps,o=t.memoizedState,i=o.element,sf(e,t),ho(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Hn(Error(j(423)),t),t=qu(e,t,r,n,i);break e}else if(r!==i){i=Hn(Error(j(424)),t),t=qu(e,t,r,n,i);break e}else for($e=Lt(t.stateNode.containerInfo.firstChild),Re=t,K=!0,Qe=null,n=lf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Un(),r===i){t=ht(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return uf(t),e===null&&va(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,fa(r,i)?l=null:o!==null&&fa(r,o)&&(t.flags|=32),If(e,t),ge(e,t,l,n),t.child;case 6:return e===null&&va(t),null;case 13:return bf(e,t,n);case 4:return Ps(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Bn(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),Ku(e,t,r,i,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,W(fo,r._currentValue),r._currentValue=l,o!==null)if(Xe(o.value,l)){if(o.children===i.children&&!Ee.current){t=ht(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=ct(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ya(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(j(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ya(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Mn(t,n),i=Fe(i),r=r(i),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,i=He(r,t.pendingProps),i=He(r.type,i),Gu(e,t,r,i,n);case 15:return Lf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),Bi(e,t),t.tag=1,Ce(r)?(e=!0,so(t)):e=!1,Mn(t,n),Nf(t,r,i),wa(t,r,i,n),Ea(null,t,r,!0,e,n);case 19:return Mf(e,t,n);case 22:return Tf(e,t,n)}throw Error(j(156,t.tag))};function Jf(e,t){return jd(e,t)}function Sg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,n,r){return new Sg(e,t,n,r)}function Us(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kg(e){if(typeof e=="function")return Us(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ls)return 11;if(e===as)return 14}return 2}function bt(e,t){var n=e.alternate;return n===null?(n=Me(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Us(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Sn:return ln(n.children,i,o,t);case os:l=8,i|=8;break;case Hl:return e=Me(12,n,t,i|2),e.elementType=Hl,e.lanes=o,e;case Vl:return e=Me(13,n,t,i),e.elementType=Vl,e.lanes=o,e;case Ql:return e=Me(19,n,t,i),e.elementType=Ql,e.lanes=o,e;case sd:return Bo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ld:l=10;break e;case ad:l=9;break e;case ls:l=11;break e;case as:l=14;break e;case kt:l=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Me(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function ln(e,t,n,r){return e=Me(7,e,r,t),e.lanes=n,e}function Bo(e,t,n,r){return e=Me(22,e,r,t),e.elementType=sd,e.lanes=n,e.stateNode={isHidden:!1},e}function Nl(e,t,n){return e=Me(6,e,null,t),e.lanes=n,e}function $l(e,t,n){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Eg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cl(0),this.expirationTimes=cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bs(e,t,n,r,i,o,l,a,s){return e=new Eg(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Me(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},js(o),e}function Cg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ep(e){if(!e)return At;e=e._reactInternals;e:{if(mn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Ce(n))return Jd(e,n,t)}return t}function tp(e,t,n,r,i,o,l,a,s){return e=Bs(n,r,!0,e,i,o,l,a,s),e.context=ep(null),n=e.current,r=ye(),i=Ot(n),o=ct(r,i),o.callback=t??null,Tt(n,o,i),e.current.lanes=i,ri(e,i,r),je(e,r),e}function Wo(e,t,n,r){var i=t.current,o=ye(),l=Ot(i);return n=ep(n),t.context===null?t.context=n:t.pendingContext=n,t=ct(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Tt(i,t,l),e!==null&&(Ke(e,i,l,o),Fi(e,i,l)),l}function ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ac(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ws(e,t){ac(e,t),(e=e.alternate)&&ac(e,t)}function jg(){return null}var np=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hs(e){this._internalRoot=e}Ho.prototype.render=Hs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Wo(e,t,null,null)};Ho.prototype.unmount=Hs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pn(function(){Wo(null,e,null,null)}),t[ft]=null}};function Ho(e){this._internalRoot=e}Ho.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ld();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ct.length&&t!==0&&t<Ct[n].priority;n++);Ct.splice(n,0,e),n===0&&Id(e)}};function Vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sc(){}function Pg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ko(l);o.call(u)}}var l=tp(t,r,e,0,null,!1,!1,"",sc);return e._reactRootContainer=l,e[ft]=l.current,Ar(e.nodeType===8?e.parentNode:e),pn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ko(s);a.call(u)}}var s=Bs(e,0,!1,null,null,!1,!1,"",sc);return e._reactRootContainer=s,e[ft]=s.current,Ar(e.nodeType===8?e.parentNode:e),pn(function(){Wo(t,s,n,r)}),s}function Qo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=ko(l);a.call(s)}}Wo(t,l,e,i)}else l=Pg(n,t,e,i,r);return ko(l)}$d=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=vr(t.pendingLanes);n!==0&&(cs(t,n|1),je(t,J()),!(O&6)&&(Vn=J()+500,Wt()))}break;case 13:pn(function(){var r=pt(e,1);if(r!==null){var i=ye();Ke(r,e,1,i)}}),Ws(e,1)}};ds=function(e){if(e.tag===13){var t=pt(e,134217728);if(t!==null){var n=ye();Ke(t,e,134217728,n)}Ws(e,134217728)}};Rd=function(e){if(e.tag===13){var t=Ot(e),n=pt(e,t);if(n!==null){var r=ye();Ke(n,e,t,r)}Ws(e,t)}};Ld=function(){return A};Td=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};na=function(e,t,n){switch(t){case"input":if(Gl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=bo(r);if(!i)throw Error(j(90));cd(r),Gl(r,i)}}}break;case"textarea":fd(e,n);break;case"select":t=n.value,t!=null&&Tn(e,!!n.multiple,t,!1)}};xd=Ds;wd=pn;var zg={usingClientEntryPoint:!1,Events:[oi,jn,bo,vd,yd,Ds]},pr={findFiberByHostInstance:Zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_g={bundleType:pr.bundleType,version:pr.version,rendererPackageName:pr.rendererPackageName,rendererConfig:pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ed(e),e===null?null:e.stateNode},findFiberByHostInstance:pr.findFiberByHostInstance||jg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_i.isDisabled&&_i.supportsFiber)try{Lo=_i.inject(_g),nt=_i}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zg;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vs(t))throw Error(j(200));return Cg(e,t,null,n)};Te.createRoot=function(e,t){if(!Vs(e))throw Error(j(299));var n=!1,r="",i=np;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Bs(e,1,!1,null,null,n,!1,r,i),e[ft]=t.current,Ar(e.nodeType===8?e.parentNode:e),new Hs(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Ed(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return pn(e)};Te.hydrate=function(e,t,n){if(!Vo(t))throw Error(j(200));return Qo(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!Vs(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=np;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=tp(t,null,e,1,n??null,i,!1,o,l),e[ft]=t.current,Ar(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ho(t)};Te.render=function(e,t,n){if(!Vo(t))throw Error(j(200));return Qo(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!Vo(e))throw Error(j(40));return e._reactRootContainer?(pn(function(){Qo(null,null,e,!1,function(){e._reactRootContainer=null,e[ft]=null})}),!0):!1};Te.unstable_batchedUpdates=Ds;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Vo(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Qo(e,t,n,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function rp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rp)}catch(e){console.error(e)}}rp(),nd.exports=Te;var Ng=nd.exports,ip,uc=Ng;ip=uc.createRoot,uc.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gr(){return Gr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gr.apply(this,arguments)}var _t;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_t||(_t={}));const cc="popstate";function $g(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return Oa("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Eo(i)}return Lg(t,n,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function op(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Rg(){return Math.random().toString(36).substr(2,8)}function dc(e,t){return{usr:e.state,key:e.key,idx:t}}function Oa(e,t,n,r){return n===void 0&&(n=null),Gr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?tr(t):t,{state:n,key:t&&t.key||r||Rg()})}function Eo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function tr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Lg(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=_t.Pop,s=null,u=p();u==null&&(u=0,l.replaceState(Gr({},l.state,{idx:u}),""));function p(){return(l.state||{idx:null}).idx}function d(){a=_t.Pop;let k=p(),m=k==null?null:k-u;u=k,s&&s({action:a,location:w.location,delta:m})}function g(k,m){a=_t.Push;let c=Oa(w.location,k,m);u=p()+1;let h=dc(c,u),y=w.createHref(c);try{l.pushState(h,"",y)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(y)}o&&s&&s({action:a,location:w.location,delta:1})}function v(k,m){a=_t.Replace;let c=Oa(w.location,k,m);u=p();let h=dc(c,u),y=w.createHref(c);l.replaceState(h,"",y),o&&s&&s({action:a,location:w.location,delta:0})}function x(k){let m=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof k=="string"?k:Eo(k);return c=c.replace(/ $/,"%20"),ne(m,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,m)}let w={get action(){return a},get location(){return e(i,l)},listen(k){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(cc,d),s=k,()=>{i.removeEventListener(cc,d),s=null}},createHref(k){return t(i,k)},createURL:x,encodeLocation(k){let m=x(k);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:v,go(k){return l.go(k)}};return w}var fc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(fc||(fc={}));function Tg(e,t,n){return n===void 0&&(n="/"),Ig(e,t,n)}function Ig(e,t,n,r){let i=typeof t=="string"?tr(t):t,o=Qs(i.pathname||"/",n);if(o==null)return null;let l=lp(e);Og(l);let a=null;for(let s=0;a==null&&s<l.length;++s){let u=Yg(o);a=Hg(l[s],u)}return a}function lp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let s={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(ne(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Mt([r,s.relativePath]),p=n.concat(s);o.children&&o.children.length>0&&(ne(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),lp(o.children,t,p,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Bg(u,o.index),routesMeta:p})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let s of ap(o.path))i(o,l,s)}),t}function ap(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=ap(r.join("/")),a=[];return a.push(...l.map(s=>s===""?o:[o,s].join("/"))),i&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Og(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Wg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bg=/^:[\w-]+$/,Mg=3,Dg=2,Fg=1,Ag=10,Ug=-2,pc=e=>e==="*";function Bg(e,t){let n=e.split("/"),r=n.length;return n.some(pc)&&(r+=Ug),t&&(r+=Dg),n.filter(i=>!pc(i)).reduce((i,o)=>i+(bg.test(o)?Mg:o===""?Fg:Ag),r)}function Wg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Hg(e,t,n){let{routesMeta:r}=e,i={},o="/",l=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,p=o==="/"?t:t.slice(o.length)||"/",d=Vg({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},p),g=s.route;if(!d)return null;Object.assign(i,d.params),l.push({params:i,pathname:Mt([o,d.pathname]),pathnameBase:qg(Mt([o,d.pathnameBase])),route:g}),d.pathnameBase!=="/"&&(o=Mt([o,d.pathnameBase]))}return l}function Vg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Qg(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,p,d)=>{let{paramName:g,isOptional:v}=p;if(g==="*"){let w=a[d]||"";l=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const x=a[d];return v&&!x?u[g]=void 0:u[g]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:l,pattern:e}}function Qg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),op(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Yg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return op(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Qs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Kg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?tr(e):e;return{pathname:n?n.startsWith("/")?n:Gg(n,t):t,search:Zg(r),hash:Jg(i)}}function Gg(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Rl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Xg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function sp(e,t){let n=Xg(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function up(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=tr(e):(i=Gr({},e),ne(!i.pathname||!i.pathname.includes("?"),Rl("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),Rl("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),Rl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let d=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),d-=1;i.pathname=g.join("/")}a=d>=0?t[d]:"/"}let s=Kg(i,a),u=l&&l!=="/"&&l.endsWith("/"),p=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||p)&&(s.pathname+="/"),s}const Mt=e=>e.join("/").replace(/\/\/+/g,"/"),qg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Zg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Jg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function e0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const cp=["post","put","patch","delete"];new Set(cp);const t0=["get",...cp];new Set(t0);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xr(){return Xr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xr.apply(this,arguments)}const Ys=S.createContext(null),n0=S.createContext(null),gn=S.createContext(null),Yo=S.createContext(null),vn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),dp=S.createContext(null);function r0(e,t){let{relative:n}=t===void 0?{}:t;ai()||ne(!1);let{basename:r,navigator:i}=S.useContext(gn),{hash:o,pathname:l,search:a}=pp(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:Mt([r,l])),i.createHref({pathname:s,search:a,hash:o})}function ai(){return S.useContext(Yo)!=null}function si(){return ai()||ne(!1),S.useContext(Yo).location}function fp(e){S.useContext(gn).static||S.useLayoutEffect(e)}function i0(){let{isDataRoute:e}=S.useContext(vn);return e?v0():o0()}function o0(){ai()||ne(!1);let e=S.useContext(Ys),{basename:t,future:n,navigator:r}=S.useContext(gn),{matches:i}=S.useContext(vn),{pathname:o}=si(),l=JSON.stringify(sp(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return fp(()=>{a.current=!0}),S.useCallback(function(u,p){if(p===void 0&&(p={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=up(u,JSON.parse(l),o,p.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Mt([t,d.pathname])),(p.replace?r.replace:r.push)(d,p.state,p)},[t,r,l,o,e])}function pp(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(gn),{matches:i}=S.useContext(vn),{pathname:o}=si(),l=JSON.stringify(sp(i,r.v7_relativeSplatPath));return S.useMemo(()=>up(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function l0(e,t){return a0(e,t)}function a0(e,t,n,r){ai()||ne(!1);let{navigator:i}=S.useContext(gn),{matches:o}=S.useContext(vn),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let u=si(),p;if(t){var d;let k=typeof t=="string"?tr(t):t;s==="/"||(d=k.pathname)!=null&&d.startsWith(s)||ne(!1),p=k}else p=u;let g=p.pathname||"/",v=g;if(s!=="/"){let k=s.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(k.length).join("/")}let x=Tg(e,{pathname:v}),w=f0(x&&x.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:Mt([s,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?s:Mt([s,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),o,n,r);return t&&w?S.createElement(Yo.Provider,{value:{location:Xr({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:_t.Pop}},w):w}function s0(){let e=g0(),t=e0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,null)}const u0=S.createElement(s0,null);class c0 extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(vn.Provider,{value:this.props.routeContext},S.createElement(dp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function d0(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(Ys);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(vn.Provider,{value:t},r)}function f0(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let p=l.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);p>=0||ne(!1),l=l.slice(0,Math.min(l.length,p+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<l.length;p++){let d=l[p];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=p),d.route.id){let{loaderData:g,errors:v}=n,x=d.route.loader&&g[d.route.id]===void 0&&(!v||v[d.route.id]===void 0);if(d.route.lazy||x){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((p,d,g)=>{let v,x=!1,w=null,k=null;n&&(v=a&&d.route.id?a[d.route.id]:void 0,w=d.route.errorElement||u0,s&&(u<0&&g===0?(y0("route-fallback"),x=!0,k=null):u===g&&(x=!0,k=d.route.hydrateFallbackElement||null)));let m=t.concat(l.slice(0,g+1)),c=()=>{let h;return v?h=w:x?h=k:d.route.Component?h=S.createElement(d.route.Component,null):d.route.element?h=d.route.element:h=p,S.createElement(d0,{match:d,routeContext:{outlet:p,matches:m,isDataRoute:n!=null},children:h})};return n&&(d.route.ErrorBoundary||d.route.errorElement||g===0)?S.createElement(c0,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:c(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):c()},null)}var hp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(hp||{}),mp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(mp||{});function p0(e){let t=S.useContext(Ys);return t||ne(!1),t}function h0(e){let t=S.useContext(n0);return t||ne(!1),t}function m0(e){let t=S.useContext(vn);return t||ne(!1),t}function gp(e){let t=m0(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function g0(){var e;let t=S.useContext(dp),n=h0(mp.UseRouteError),r=gp();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function v0(){let{router:e}=p0(hp.UseNavigateStable),t=gp(),n=S.useRef(!1);return fp(()=>{n.current=!0}),S.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Xr({fromRouteId:t},o)))},[e,t])}const hc={};function y0(e,t,n){hc[e]||(hc[e]=!0)}const mc={};function x0(e,t){mc[t]||(mc[t]=!0,console.warn(t))}const gc=(e,t,n)=>x0(e,"⚠️ React Router Future Flag Warning: "+t+". "+("You can use the `"+e+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function w0(e,t){e!=null&&e.v7_startTransition||gc("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),e!=null&&e.v7_relativeSplatPath||gc("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function ba(e){ne(!1)}function S0(e){let{basename:t="/",children:n=null,location:r,navigationType:i=_t.Pop,navigator:o,static:l=!1,future:a}=e;ai()&&ne(!1);let s=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:s,navigator:o,static:l,future:Xr({v7_relativeSplatPath:!1},a)}),[s,a,o,l]);typeof r=="string"&&(r=tr(r));let{pathname:p="/",search:d="",hash:g="",state:v=null,key:x="default"}=r,w=S.useMemo(()=>{let k=Qs(p,s);return k==null?null:{location:{pathname:k,search:d,hash:g,state:v,key:x},navigationType:i}},[s,p,d,g,v,x,i]);return w==null?null:S.createElement(gn.Provider,{value:u},S.createElement(Yo.Provider,{children:n,value:w}))}function k0(e){let{children:t,location:n}=e;return l0(Ma(t),n)}new Promise(()=>{});function Ma(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let o=[...t,i];if(r.type===S.Fragment){n.push.apply(n,Ma(r.props.children,o));return}r.type!==ba&&ne(!1),!r.props.index||!r.props.children||ne(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Ma(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Da(){return Da=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Da.apply(this,arguments)}function E0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function C0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function j0(e,t){return e.button===0&&(!t||t==="_self")&&!C0(e)}const P0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],z0="6";try{window.__reactRouterVersion=z0}catch{}const _0="startTransition",vc=yh[_0];function N0(e){let{basename:t,children:n,future:r,window:i}=e,o=S.useRef();o.current==null&&(o.current=$g({window:i,v5Compat:!0}));let l=o.current,[a,s]=S.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},p=S.useCallback(d=>{u&&vc?vc(()=>s(d)):s(d)},[s,u]);return S.useLayoutEffect(()=>l.listen(p),[l,p]),S.useEffect(()=>w0(r),[r]),S.createElement(S0,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const $0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",R0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Co=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:s,to:u,preventScrollReset:p,viewTransition:d}=t,g=E0(t,P0),{basename:v}=S.useContext(gn),x,w=!1;if(typeof u=="string"&&R0.test(u)&&(x=u,$0))try{let h=new URL(window.location.href),y=u.startsWith("//")?new URL(h.protocol+u):new URL(u),E=Qs(y.pathname,v);y.origin===h.origin&&E!=null?u=E+y.search+y.hash:w=!0}catch{}let k=r0(u,{relative:i}),m=L0(u,{replace:l,state:a,target:s,preventScrollReset:p,relative:i,viewTransition:d});function c(h){r&&r(h),h.defaultPrevented||m(h)}return S.createElement("a",Da({},g,{href:x||k,onClick:w||o?r:c,ref:n,target:s}))});var yc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(yc||(yc={}));var xc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(xc||(xc={}));function L0(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:a}=t===void 0?{}:t,s=i0(),u=si(),p=pp(e,{relative:l});return S.useCallback(d=>{if(j0(d,n)){d.preventDefault();let g=r!==void 0?r:Eo(u)===Eo(p);s(e,{replace:g,state:i,preventScrollReset:o,relative:l,viewTransition:a})}},[u,s,p,r,i,n,e,o,l,a])}var he=function(){return he=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},he.apply(this,arguments)};function qr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var V="-ms-",$r="-moz-",F="-webkit-",vp="comm",Ko="rule",Ks="decl",T0="@import",yp="@keyframes",I0="@layer",xp=Math.abs,Gs=String.fromCharCode,Fa=Object.assign;function O0(e,t){return le(e,0)^45?(((t<<2^le(e,0))<<2^le(e,1))<<2^le(e,2))<<2^le(e,3):0}function wp(e){return e.trim()}function lt(e,t){return(e=t.exec(e))?e[0]:e}function T(e,t,n){return e.replace(t,n)}function Qi(e,t,n){return e.indexOf(t,n)}function le(e,t){return e.charCodeAt(t)|0}function Qn(e,t,n){return e.slice(t,n)}function Je(e){return e.length}function Sp(e){return e.length}function xr(e,t){return t.push(e),e}function b0(e,t){return e.map(t).join("")}function wc(e,t){return e.filter(function(n){return!lt(n,t)})}var Go=1,Yn=1,kp=0,Ue=0,ee=0,nr="";function Xo(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Go,column:Yn,length:l,return:"",siblings:a}}function St(e,t){return Fa(Xo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function xn(e){for(;e.root;)e=St(e.root,{children:[e]});xr(e,e.siblings)}function M0(){return ee}function D0(){return ee=Ue>0?le(nr,--Ue):0,Yn--,ee===10&&(Yn=1,Go--),ee}function Ge(){return ee=Ue<kp?le(nr,Ue++):0,Yn++,ee===10&&(Yn=1,Go++),ee}function an(){return le(nr,Ue)}function Yi(){return Ue}function qo(e,t){return Qn(nr,e,t)}function Aa(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function F0(e){return Go=Yn=1,kp=Je(nr=e),Ue=0,[]}function A0(e){return nr="",e}function Ll(e){return wp(qo(Ue-1,Ua(e===91?e+2:e===40?e+1:e)))}function U0(e){for(;(ee=an())&&ee<33;)Ge();return Aa(e)>2||Aa(ee)>3?"":" "}function B0(e,t){for(;--t&&Ge()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return qo(e,Yi()+(t<6&&an()==32&&Ge()==32))}function Ua(e){for(;Ge();)switch(ee){case e:return Ue;case 34:case 39:e!==34&&e!==39&&Ua(ee);break;case 40:e===41&&Ua(e);break;case 92:Ge();break}return Ue}function W0(e,t){for(;Ge()&&e+ee!==57;)if(e+ee===84&&an()===47)break;return"/*"+qo(t,Ue-1)+"*"+Gs(e===47?e:Ge())}function H0(e){for(;!Aa(an());)Ge();return qo(e,Ue)}function V0(e){return A0(Ki("",null,null,null,[""],e=F0(e),0,[0],e))}function Ki(e,t,n,r,i,o,l,a,s){for(var u=0,p=0,d=l,g=0,v=0,x=0,w=1,k=1,m=1,c=0,h="",y=i,E=o,P=r,C=h;k;)switch(x=c,c=Ge()){case 40:if(x!=108&&le(C,d-1)==58){Qi(C+=T(Ll(c),"&","&\f"),"&\f",xp(u?a[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:C+=Ll(c);break;case 9:case 10:case 13:case 32:C+=U0(x);break;case 92:C+=B0(Yi()-1,7);continue;case 47:switch(an()){case 42:case 47:xr(Q0(W0(Ge(),Yi()),t,n,s),s);break;default:C+="/"}break;case 123*w:a[u++]=Je(C)*m;case 125*w:case 59:case 0:switch(c){case 0:case 125:k=0;case 59+p:m==-1&&(C=T(C,/\f/g,"")),v>0&&Je(C)-d&&xr(v>32?kc(C+";",r,n,d-1,s):kc(T(C," ","")+";",r,n,d-2,s),s);break;case 59:C+=";";default:if(xr(P=Sc(C,t,n,u,p,i,a,h,y=[],E=[],d,o),o),c===123)if(p===0)Ki(C,t,P,P,y,o,d,a,E);else switch(g===99&&le(C,3)===110?100:g){case 100:case 108:case 109:case 115:Ki(e,P,P,r&&xr(Sc(e,P,P,0,0,i,a,h,i,y=[],d,E),E),i,E,d,a,r?y:E);break;default:Ki(C,P,P,P,[""],E,0,a,E)}}u=p=v=0,w=m=1,h=C="",d=l;break;case 58:d=1+Je(C),v=x;default:if(w<1){if(c==123)--w;else if(c==125&&w++==0&&D0()==125)continue}switch(C+=Gs(c),c*w){case 38:m=p>0?1:(C+="\f",-1);break;case 44:a[u++]=(Je(C)-1)*m,m=1;break;case 64:an()===45&&(C+=Ll(Ge())),g=an(),p=d=Je(h=C+=H0(Yi())),c++;break;case 45:x===45&&Je(C)==2&&(w=0)}}return o}function Sc(e,t,n,r,i,o,l,a,s,u,p,d){for(var g=i-1,v=i===0?o:[""],x=Sp(v),w=0,k=0,m=0;w<r;++w)for(var c=0,h=Qn(e,g+1,g=xp(k=l[w])),y=e;c<x;++c)(y=wp(k>0?v[c]+" "+h:T(h,/&\f/g,v[c])))&&(s[m++]=y);return Xo(e,t,n,i===0?Ko:a,s,u,p,d)}function Q0(e,t,n,r){return Xo(e,t,n,vp,Gs(M0()),Qn(e,2,-2),0,r)}function kc(e,t,n,r,i){return Xo(e,t,n,Ks,Qn(e,0,r),Qn(e,r+1,-1),r,i)}function Ep(e,t,n){switch(O0(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 4789:return $r+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+$r+e+V+e+e;case 5936:switch(le(e,t+11)){case 114:return F+e+V+T(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+V+T(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+V+T(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return F+e+V+e+e;case 6165:return F+e+V+"flex-"+e+e;case 5187:return F+e+T(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+V+"flex-$1$2")+e;case 5443:return F+e+V+"flex-item-"+T(e,/flex-|-self/g,"")+(lt(e,/flex-|baseline/)?"":V+"grid-row-"+T(e,/flex-|-self/g,""))+e;case 4675:return F+e+V+"flex-line-pack"+T(e,/align-content|flex-|-self/g,"")+e;case 5548:return F+e+V+T(e,"shrink","negative")+e;case 5292:return F+e+V+T(e,"basis","preferred-size")+e;case 6060:return F+"box-"+T(e,"-grow","")+F+e+V+T(e,"grow","positive")+e;case 4554:return F+T(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return T(T(T(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return T(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return T(T(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+V+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4200:if(!lt(e,/flex-|baseline/))return V+"grid-column-align"+Qn(e,t)+e;break;case 2592:case 3360:return V+T(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,lt(r.props,/grid-\w+-end/)})?~Qi(e+(n=n[t].value),"span",0)?e:V+T(e,"-start","")+e+V+"grid-row-span:"+(~Qi(n,"span",0)?lt(n,/\d+/):+lt(n,/\d+/)-+lt(e,/\d+/))+";":V+T(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return lt(r.props,/grid-\w+-start/)})?e:V+T(T(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return T(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Je(e)-1-t>6)switch(le(e,t+1)){case 109:if(le(e,t+4)!==45)break;case 102:return T(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+$r+(le(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Qi(e,"stretch",0)?Ep(T(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return T(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,s,u){return V+i+":"+o+u+(l?V+i+"-span:"+(a?s:+s-+o)+u:"")+e});case 4949:if(le(e,t+6)===121)return T(e,":",":"+F)+e;break;case 6444:switch(le(e,le(e,14)===45?18:11)){case 120:return T(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+F+(le(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+V+"$2box$3")+e;case 100:return T(e,":",":"+V)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return T(e,"scroll-","scroll-snap-")+e}return e}function jo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Y0(e,t,n,r){switch(e.type){case I0:if(e.children.length)break;case T0:case Ks:return e.return=e.return||e.value;case vp:return"";case yp:return e.return=e.value+"{"+jo(e.children,r)+"}";case Ko:if(!Je(e.value=e.props.join(",")))return""}return Je(n=jo(e.children,r))?e.return=e.value+"{"+n+"}":""}function K0(e){var t=Sp(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function G0(e){return function(t){t.root||(t=t.return)&&e(t)}}function X0(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ks:e.return=Ep(e.value,e.length,n);return;case yp:return jo([St(e,{value:T(e.value,"@","@"+F)})],r);case Ko:if(e.length)return b0(n=e.props,function(i){switch(lt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xn(St(e,{props:[T(i,/:(read-\w+)/,":"+$r+"$1")]})),xn(St(e,{props:[i]})),Fa(e,{props:wc(n,r)});break;case"::placeholder":xn(St(e,{props:[T(i,/:(plac\w+)/,":"+F+"input-$1")]})),xn(St(e,{props:[T(i,/:(plac\w+)/,":"+$r+"$1")]})),xn(St(e,{props:[T(i,/:(plac\w+)/,V+"input-$1")]})),xn(St(e,{props:[i]})),Fa(e,{props:wc(n,r)});break}return""})}}var q0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_e={},Kn=typeof process<"u"&&_e!==void 0&&(_e.REACT_APP_SC_ATTR||_e.SC_ATTR)||"data-styled",Cp="active",jp="data-styled-version",Zo="6.1.13",Xs=`/*!sc*/
`,Po=typeof window<"u"&&"HTMLElement"in window,Z0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&_e!==void 0&&_e.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&_e.REACT_APP_SC_DISABLE_SPEEDY!==""?_e.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&_e.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&_e!==void 0&&_e.SC_DISABLE_SPEEDY!==void 0&&_e.SC_DISABLE_SPEEDY!==""&&_e.SC_DISABLE_SPEEDY!=="false"&&_e.SC_DISABLE_SPEEDY),J0={},Jo=Object.freeze([]),Gn=Object.freeze({});function Pp(e,t,n){return n===void 0&&(n=Gn),e.theme!==n.theme&&e.theme||t||n.theme}var zp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ev=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,tv=/(^-|-$)/g;function Ec(e){return e.replace(ev,"-").replace(tv,"")}var nv=/(a)(d)/gi,Ni=52,Cc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ba(e){var t,n="";for(t=Math.abs(e);t>Ni;t=t/Ni|0)n=Cc(t%Ni)+n;return(Cc(t%Ni)+n).replace(nv,"$1-$2")}var Tl,_p=5381,Ln=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Np=function(e){return Ln(_p,e)};function $p(e){return Ba(Np(e)>>>0)}function rv(e){return e.displayName||e.name||"Component"}function Il(e){return typeof e=="string"&&!0}var Rp=typeof Symbol=="function"&&Symbol.for,Lp=Rp?Symbol.for("react.memo"):60115,iv=Rp?Symbol.for("react.forward_ref"):60112,ov={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},lv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Tp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},av=((Tl={})[iv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tl[Lp]=Tp,Tl);function jc(e){return("type"in(t=e)&&t.type.$$typeof)===Lp?Tp:"$$typeof"in e?av[e.$$typeof]:ov;var t}var sv=Object.defineProperty,uv=Object.getOwnPropertyNames,Pc=Object.getOwnPropertySymbols,cv=Object.getOwnPropertyDescriptor,dv=Object.getPrototypeOf,zc=Object.prototype;function Ip(e,t,n){if(typeof t!="string"){if(zc){var r=dv(t);r&&r!==zc&&Ip(e,r,n)}var i=uv(t);Pc&&(i=i.concat(Pc(t)));for(var o=jc(e),l=jc(t),a=0;a<i.length;++a){var s=i[a];if(!(s in lv||n&&n[s]||l&&s in l||o&&s in o)){var u=cv(t,s);try{sv(e,s,u)}catch{}}}}return e}function Xn(e){return typeof e=="function"}function qs(e){return typeof e=="object"&&"styledComponentId"in e}function tn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Wa(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Zr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ha(e,t,n){if(n===void 0&&(n=!1),!n&&!Zr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ha(e[r],t[r]);else if(Zr(t))for(var r in t)e[r]=Ha(e[r],t[r]);return e}function Zs(e,t){Object.defineProperty(e,"toString",{value:t})}function ui(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var fv=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw ui(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(Xs);return n},e}(),Gi=new Map,zo=new Map,Xi=1,$i=function(e){if(Gi.has(e))return Gi.get(e);for(;zo.has(Xi);)Xi++;var t=Xi++;return Gi.set(e,t),zo.set(t,e),t},pv=function(e,t){Xi=t+1,Gi.set(e,t),zo.set(t,e)},hv="style[".concat(Kn,"][").concat(jp,'="').concat(Zo,'"]'),mv=new RegExp("^".concat(Kn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),gv=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},vv=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Xs),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var s=a.match(mv);if(s){var u=0|parseInt(s[1],10),p=s[2];u!==0&&(pv(p,u),gv(e,p,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}},_c=function(e){for(var t=document.querySelectorAll(hv),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Kn)!==Cp&&(vv(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function yv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Op=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Kn,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Kn,Cp),r.setAttribute(jp,Zo);var l=yv();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},xv=function(){function e(t){this.element=Op(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw ui(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),wv=function(){function e(t){this.element=Op(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Sv=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Nc=Po,kv={isServer:!Po,useCSSOMInjection:!Z0},_o=function(){function e(t,n,r){t===void 0&&(t=Gn),n===void 0&&(n={});var i=this;this.options=he(he({},kv),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Po&&Nc&&(Nc=!1,_c(this)),Zs(this,function(){return function(o){for(var l=o.getTag(),a=l.length,s="",u=function(d){var g=function(m){return zo.get(m)}(d);if(g===void 0)return"continue";var v=o.names.get(g),x=l.getGroup(d);if(v===void 0||!v.size||x.length===0)return"continue";var w="".concat(Kn,".g").concat(d,'[id="').concat(g,'"]'),k="";v!==void 0&&v.forEach(function(m){m.length>0&&(k+="".concat(m,","))}),s+="".concat(x).concat(w,'{content:"').concat(k,'"}').concat(Xs)},p=0;p<a;p++)u(p);return s}(i)})}return e.registerId=function(t){return $i(t)},e.prototype.rehydrate=function(){!this.server&&Po&&_c(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(he(he({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Sv(i):r?new xv(i):new wv(i)}(this.options),new fv(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if($i(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules($i(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup($i(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ev=/&/g,Cv=/^\s*\/\/.*$/gm;function bp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=bp(n.children,t)),n})}function jv(e){var t,n,r,i=Gn,o=i.options,l=o===void 0?Gn:o,a=i.plugins,s=a===void 0?Jo:a,u=function(g,v,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):g},p=s.slice();p.push(function(g){g.type===Ko&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Ev,n).replace(r,u))}),l.prefix&&p.push(X0),p.push(Y0);var d=function(g,v,x,w){v===void 0&&(v=""),x===void 0&&(x=""),w===void 0&&(w="&"),t=w,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var k=g.replace(Cv,""),m=V0(x||v?"".concat(x," ").concat(v," { ").concat(k," }"):k);l.namespace&&(m=bp(m,l.namespace));var c=[];return jo(m,K0(p.concat(G0(function(h){return c.push(h)})))),c};return d.hash=s.length?s.reduce(function(g,v){return v.name||ui(15),Ln(g,v.name)},_p).toString():"",d}var Pv=new _o,Va=jv(),Mp=tt.createContext({shouldForwardProp:void 0,styleSheet:Pv,stylis:Va});Mp.Consumer;tt.createContext(void 0);function Qa(){return S.useContext(Mp)}var zv=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Va);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Zs(this,function(){throw ui(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Va),this.name+t.hash},e}(),_v=function(e){return e>="A"&&e<="Z"};function $c(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;_v(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Dp=function(e){return e==null||e===!1||e===""},Fp=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Dp(o)&&(Array.isArray(o)&&o.isCss||Xn(o)?r.push("".concat($c(i),":"),o,";"):Zr(o)?r.push.apply(r,qr(qr(["".concat(i," {")],Fp(o),!1),["}"],!1)):r.push("".concat($c(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in q0||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Dt(e,t,n,r){if(Dp(e))return[];if(qs(e))return[".".concat(e.styledComponentId)];if(Xn(e)){if(!Xn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Dt(i,t,n,r)}var o;return e instanceof zv?n?(e.inject(n,r),[e.getName(r)]):[e]:Zr(e)?Fp(e):Array.isArray(e)?Array.prototype.concat.apply(Jo,e.map(function(l){return Dt(l,t,n,r)})):[e.toString()]}function Ap(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Xn(n)&&!qs(n))return!1}return!0}var Nv=Np(Zo),$v=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ap(t),this.componentId=n,this.baseHash=Ln(Nv,n),this.baseStyle=r,_o.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=tn(i,this.staticRulesId);else{var o=Wa(Dt(this.rules,t,n,r)),l=Ba(Ln(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=tn(i,l),this.staticRulesId=l}else{for(var s=Ln(this.baseHash,r.hash),u="",p=0;p<this.rules.length;p++){var d=this.rules[p];if(typeof d=="string")u+=d;else if(d){var g=Wa(Dt(d,t,n,r));s=Ln(s,g+p),u+=g}}if(u){var v=Ba(s>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),i=tn(i,v)}}return i},e}(),Js=tt.createContext(void 0);Js.Consumer;var Ol={};function Rv(e,t,n){var r=qs(e),i=e,o=!Il(e),l=t.attrs,a=l===void 0?Jo:l,s=t.componentId,u=s===void 0?function(y,E){var P=typeof y!="string"?"sc":Ec(y);Ol[P]=(Ol[P]||0)+1;var C="".concat(P,"-").concat($p(Zo+P+Ol[P]));return E?"".concat(E,"-").concat(C):C}(t.displayName,t.parentComponentId):s,p=t.displayName,d=p===void 0?function(y){return Il(y)?"styled.".concat(y):"Styled(".concat(rv(y),")")}(e):p,g=t.displayName&&t.componentId?"".concat(Ec(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;x=function(y,E){return w(y,E)&&k(y,E)}}else x=w}var m=new $v(n,g,r?i.componentStyle:void 0);function c(y,E){return function(P,C,z){var M=P.attrs,L=P.componentStyle,Pe=P.defaultProps,Vt=P.foldedComponentIds,Qt=P.styledComponentId,ci=P.target,rl=tt.useContext(Js),ir=Qa(),Yt=P.shouldForwardProp||ir.shouldForwardProp,_=Pp(C,rl,Pe)||Gn,$=function(gt,ze,it){for(var or,Gt=he(he({},ze),{className:void 0,theme:it}),il=0;il<gt.length;il+=1){var di=Xn(or=gt[il])?or(Gt):or;for(var vt in di)Gt[vt]=vt==="className"?tn(Gt[vt],di[vt]):vt==="style"?he(he({},Gt[vt]),di[vt]):di[vt]}return ze.className&&(Gt.className=tn(Gt.className,ze.className)),Gt}(M,C,_),R=$.as||ci,U={};for(var B in $)$[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&$.theme===_||(B==="forwardedAs"?U.as=$.forwardedAs:Yt&&!Yt(B,R)||(U[B]=$[B]));var Kt=function(gt,ze){var it=Qa(),or=gt.generateAndInjectStyles(ze,it.styleSheet,it.stylis);return or}(L,$),Be=tn(Vt,Qt);return Kt&&(Be+=" "+Kt),$.className&&(Be+=" "+$.className),U[Il(R)&&!zp.has(R)?"class":"className"]=Be,U.ref=z,S.createElement(R,U)}(h,y,E)}c.displayName=d;var h=tt.forwardRef(c);return h.attrs=v,h.componentStyle=m,h.displayName=d,h.shouldForwardProp=x,h.foldedComponentIds=r?tn(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=g,h.target=r?i.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(E){for(var P=[],C=1;C<arguments.length;C++)P[C-1]=arguments[C];for(var z=0,M=P;z<M.length;z++)Ha(E,M[z],!0);return E}({},i.defaultProps,y):y}}),Zs(h,function(){return".".concat(h.styledComponentId)}),o&&Ip(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Rc(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Lc=function(e){return Object.assign(e,{isCss:!0})};function ve(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Xn(e)||Zr(e))return Lc(Dt(Rc(Jo,qr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Dt(r):Lc(Dt(Rc(r,t)))}function Ya(e,t,n){if(n===void 0&&(n=Gn),!t)throw ui(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,ve.apply(void 0,qr([i],o,!1)))};return r.attrs=function(i){return Ya(e,t,he(he({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ya(e,t,he(he({},n),i))},r}var Up=function(e){return Ya(Rv,e)},b=Up;zp.forEach(function(e){b[e]=Up(e)});var Lv=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ap(t),_o.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Wa(Dt(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&_o.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Tv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ve.apply(void 0,qr([e],t,!1)),i="sc-global-".concat($p(JSON.stringify(r))),o=new Lv(r,i),l=function(s){var u=Qa(),p=tt.useContext(Js),d=tt.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(d,s,u.styleSheet,p,u.stylis),tt.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,s,u.styleSheet,p,u.stylis),function(){return o.removeStyles(d,u.styleSheet)}},[d,s,u.styleSheet,p,u.stylis]),null};function a(s,u,p,d,g){if(o.isStatic)o.renderStyles(s,J0,p,g);else{var v=he(he({},u),{theme:Pp(u,d,l.defaultProps)});o.renderStyles(s,v,p,g)}}return tt.memo(l)}const Iv=ve`
  :root {
    /* 背景层级 */
    --bg: #faf9f5;
    --bg-elevated: #f0eee6;
    --bg-hover: #e8e6dc;
    --bg-deep: #f5f4ee;
    --nav-bg: rgba(250, 249, 245, 0.85);
    --shadow: rgba(20, 20, 19, 0.1);

    /* 文字层级 */
    --text-strong: #141413;
    --text: #3d3d3a;
    --text-body: #5e5d59;
    --text-muted: #6f6e68;

    /* 强调色：--accent 用于边框/图标/符号，--accent-text 用于小号文字（对比度 ≥ 4.5） */
    --accent: #d97757;
    --accent-text: #a84f30;
    --accent-tint: rgba(217, 119, 87, 0.1);
    /* 图片默认的暖色染色底（灰度图 × 这个颜色），悬停时恢复原图 */
    --img-tint: #f0cdbd;

    --font-sans: 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: 'JetBrains Mono', 'SF Mono', 'Fira Code', 'Roboto Mono', monospace;
    /* 想要更“Claude”的气质，可以把大标题换成衬线体，比如 'Source Serif 4', Georgia, serif */
    --font-display: var(--font-sans);
    /* 区块标题用的柔软衬线 */
    --font-heading: 'Fraunces Variable', Georgia, 'Songti SC', serif;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;
    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;
    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`,Ov=ve`
  color: var(--accent-text);
  background-color: transparent;
  border: 1px solid var(--accent);
  border-radius: var(--border-radius);
  font-size: var(--fz-xs);
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  padding: 1.25rem 1.75rem;
  transition: var(--transition);

  &:hover,
  &:focus-visible {
    outline: none;
    box-shadow: 4px 4px 0 0 var(--accent);
    transform: translate(-5px, -5px);
  }
  &:after {
    display: none !important;
  }
`,D={flexCenter:ve`
    display: flex;
    justify-content: center;
    align-items: center;
  `,flexBetween:ve`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,link:ve`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    &:hover,
    &:focus-visible {
      color: var(--accent-text);
      outline: 0;
    }
  `,inlineLink:ve`
    display: inline-block;
    position: relative;
    color: var(--accent-text);
    transition: var(--transition);
    &:hover,
    &:focus-visible {
      color: var(--accent-text);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--accent-text) !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: var(--accent);
      opacity: 0.6;
      @media (prefers-reduced-motion: no-preference) {
        transition: var(--transition);
      }
    }
  `,button:Ov,smallButton:ve`
    color: var(--accent-text);
    background-color: transparent;
    border: 1px solid var(--accent);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);
    &:hover,
    &:focus-visible {
      outline: none;
      box-shadow: 3px 3px 0 0 var(--accent);
      transform: translate(-4px, -4px);
    }
    &:after {
      display: none !important;
    }
  `,bigButton:ve`
    color: var(--accent-text);
    background-color: transparent;
    border: 1px solid var(--accent);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    transition: var(--transition);
    &:hover,
    &:focus-visible {
      outline: none;
      box-shadow: 4px 4px 0 0 var(--accent);
      transform: translate(-5px, -5px);
    }
    &:after {
      display: none !important;
    }
  `,boxShadow:ve`
    box-shadow: 0 10px 30px -15px var(--shadow);
    transition: var(--transition);
    &:hover,
    &:focus-visible {
      box-shadow: 0 20px 30px -15px var(--shadow);
    }
  `,fancyList:ve`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--accent);
      }
    }
  `,resetList:ve`
    list-style: none;
    padding: 0;
    margin: 0;
  `},bv=Tv`
  ${Iv};

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: rgba(217, 119, 87, 0.25);
    color: var(--text-strong);
  }

  :focus {
    outline: 2px dashed var(--accent);
    outline-offset: 3px;
  }
  :focus:not(:focus-visible) {
    outline: none;
    outline-offset: 0px;
  }
  :focus-visible {
    outline: 2px dashed var(--accent);
    outline-offset: 3px;
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: var(--text-muted) var(--bg);
  }
  body::-webkit-scrollbar {
    width: 12px;
  }
  body::-webkit-scrollbar-track {
    background: var(--bg);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--text-muted);
    border: 3px solid var(--bg);
    border-radius: 10px;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--bg);
    color: var(--text-body);
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    }

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        filter: blur(5px) brightness(0.95);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;

    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }

    &.fillHeight {
      padding: 0 150px;

      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;

    @media (max-width: 768px) {
      padding: 80px 0;
    }
    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--text-strong);
    line-height: 1.1;
  }

  .big-heading {
    margin: 0;
    font-family: var(--font-display);
    font-size: clamp(40px, 8vw, 80px);
    letter-spacing: -0.02em;
  }

  .medium-heading {
    margin: 0;
    font-family: var(--font-display);
    font-size: clamp(40px, 8vw, 60px);
  }

  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    /* 区块标题：柔软衬线 Fraunces，整句橙色斜体 */
    color: var(--accent-text);
    font-family: var(--font-heading);
    font-style: italic;
    font-weight: 500;
    font-variation-settings: 'SOFT' 100;
    font-size: clamp(24px, 4.5vw, 30px);
    letter-spacing: -0.005em;
    white-space: nowrap;

    &:before {
      position: relative;
      bottom: 3px;
      font-style: normal;
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: var(--accent-text);
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-weight: 400;

      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: var(--bg-hover);

      @media (max-width: 1080px) {
        width: 200px;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }

  img, svg {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;

    &.feather {
      fill: none;
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus {
      color: var(--accent-text);
    }

    &.inline-link {
      ${D.inlineLink};
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }

  p {
    margin: 0 0 15px 0;

    &:last-child,
    &:last-of-type {
      margin: 0;
    }

    & > a {
      ${D.inlineLink};
    }

    & > code {
      background-color: var(--bg-elevated);
      color: var(--text-strong);
      font-size: var(--fz-sm);
      border-radius: var(--border-radius);
      padding: 0.3em 0.5em;
    }
  }

  ul.fancy-list {
    ${D.fancyList};
  }

  .skip-to-content {
    ${D.button};
    position: absolute;
    top: auto;
    left: -999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: -99;

    &:focus,
    &:active {
      background-color: var(--accent);
      color: var(--bg);
      top: 0;
      left: 0;
      width: auto;
      height: auto;
      overflow: auto;
      z-index: 99;
      box-shadow: none;
      transform: none;
    }
  }

  .overline {
    color: var(--accent-text);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
  }

  .subtitle {
    color: var(--accent-text);
    margin: 0 0 20px 0;
    font-size: var(--fz-md);
    font-family: var(--font-mono);
    font-weight: 400;
    line-height: 1.5;

    @media (max-width: 1080px) {
      font-size: var(--fz-sm);
    }
    @media (max-width: 768px) {
      font-size: var(--fz-xs);
    }

    a {
      ${D.inlineLink};
      line-height: 1.5;
    }
  }

  /* 入场动画（替代原版 react-transition-group 的 fadeup / fadedown / fade） */
  .fadeup, .fadedown, .fade {
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }
  .fadeup:not(.is-in) {
    opacity: 0.01;
    transform: translateY(20px);
  }
  .fadedown:not(.is-in) {
    opacity: 0.01;
    transform: translateY(-20px);
  }
  .fade:not(.is-in) {
    opacity: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    *, *::before, *::after {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
    }
  }
`,xt=({title:e,children:t})=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather",children:[f.jsx("title",{children:e}),t]}),Tc={GitHub:f.jsx(xt,{title:"GitHub",children:f.jsx("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})}),Linkedin:f.jsxs(xt,{title:"LinkedIn",children:[f.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),f.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),f.jsx("circle",{cx:"4",cy:"4",r:"2"})]}),Instagram:f.jsxs(xt,{title:"Instagram",children:[f.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),f.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),f.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]}),Twitter:f.jsx(xt,{title:"Twitter",children:f.jsx("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})}),Codepen:f.jsxs(xt,{title:"CodePen",children:[f.jsx("polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}),f.jsx("line",{x1:"12",y1:"22",x2:"12",y2:"15.5"}),f.jsx("polyline",{points:"22 8.5 12 15.5 2 8.5"}),f.jsx("polyline",{points:"2 15.5 12 8.5 22 15.5"}),f.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"8.5"})]}),Email:f.jsxs(xt,{title:"Email",children:[f.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),f.jsx("polyline",{points:"22,6 12,13 2,6"})]}),External:f.jsxs(xt,{title:"External Link",children:[f.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),f.jsx("polyline",{points:"15 3 21 3 21 9"}),f.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),Folder:f.jsx(xt,{title:"Folder",children:f.jsx("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})})},No=({name:e})=>Tc[e]??Tc.External,Mv=()=>f.jsxs("svg",{id:"logo",xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 84 84",children:[f.jsx("title",{children:"Logo"}),f.jsxs("g",{fill:"none",stroke:"currentColor",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("rect",{x:"4",y:"4",width:"76",height:"76",rx:"18"}),f.jsx("path",{d:"M53 31a15 15 0 1 0 0 22"})]})]}),Dv=()=>f.jsxs("svg",{id:"loader-logo",xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 84 84",children:[f.jsx("title",{children:"Loader Logo"}),f.jsxs("g",{fill:"none",stroke:"currentColor",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("rect",{className:"frame",x:"4",y:"4",width:"76",height:"76",rx:"18",pathLength:1}),f.jsx("path",{className:"letter",d:"M53 31a15 15 0 1 0 0 22"})]})]}),Fv=b.div`
  ${D.flexCenter};
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-deep);
  z-index: 99;
  opacity: ${e=>e.$done?0:1};
  transition: opacity 200ms var(--easing);

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    color: var(--accent);
    animation: loader-out 300ms cubic-bezier(0.77, 0, 0.175, 1) 3000ms forwards;

    svg {
      display: block;
      width: 100px;
      height: 100px;
      margin: 0 auto;
      fill: none;
      user-select: none;
    }

    .frame {
      stroke-dasharray: 1;
      stroke-dashoffset: 1;
      animation: loader-draw 1500ms cubic-bezier(0.77, 0, 0.175, 1) 300ms forwards;
    }

    .letter {
      opacity: 0;
      animation: loader-letter 700ms cubic-bezier(0.77, 0, 0.175, 1) 1800ms forwards;
    }
  }

  @keyframes loader-draw {
    to {
      stroke-dashoffset: 0;
    }
  }
  @keyframes loader-letter {
    to {
      opacity: 1;
    }
  }
  @keyframes loader-out {
    to {
      opacity: 0;
      transform: scale(0.1);
    }
  }
`,Av=({finishLoading:e})=>{const[t,n]=S.useState(!1);return S.useEffect(()=>{document.body.classList.add("hidden");const r=window.setTimeout(()=>n(!0),3300),i=window.setTimeout(()=>{document.body.classList.remove("hidden"),e()},3500);return()=>{window.clearTimeout(r),window.clearTimeout(i),document.body.classList.remove("hidden")}},[e]),f.jsx(Fv,{className:"loader",$done:t,children:f.jsx("div",{className:"logo-wrapper",children:f.jsx(Dv,{})})})},Rr=[],qn={name:"Corrine Xiang",email:"corrine.xiang@mail.utoronto.ca"},Bp=[{name:"GitHub",url:"https://github.com/TheGreatCorrine"},{name:"Linkedin",url:"https://www.linkedin.com/in/yining-xiang/"},{name:"Email",url:`mailto:${qn.email}`}],Ka=[{name:"About",url:"/#about"},{name:"Work",url:"/#work"},{name:"Experience",url:"/#experience"},{name:"Projects",url:"/#projects"}].filter(e=>e.name!=="Projects"||Rr.length>0),Uv=(e=200,t=.25)=>({origin:"bottom",distance:"20px",duration:500,delay:e,rotate:{x:0,y:0,z:0},opacity:0,scale:1,easing:"cubic-bezier(0.645, 0.045, 0.355, 1)",mobile:!0,reset:!1,useDelay:"always",viewFactor:t,viewOffset:{top:0,right:0,bottom:0,left:0}}),Bv=(e="down",t=0)=>{const[n,r]=S.useState(e);return S.useEffect(()=>{let i=window.scrollY,o=!1;const l=()=>{const s=window.scrollY;if(Math.abs(s-i)<t){o=!1;return}r(s>i?"down":"up"),i=s>0?s:0,o=!1},a=()=>{o||(window.requestAnimationFrame(l),o=!0)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[t]),n},Ic="(prefers-reduced-motion: no-preference)",el=()=>{const[e,t]=S.useState(()=>!window.matchMedia(Ic).matches);return S.useEffect(()=>{const n=window.matchMedia(Ic),r=i=>t(!i.matches);return n.addEventListener("change",r),()=>n.removeEventListener("change",r)},[]),e},tl=(e,t=!0)=>{const n=el(),[r,i]=S.useState(!t||n);return S.useEffect(()=>{if(!t||n){i(!0);return}const o=window.setTimeout(()=>i(!0),e);return()=>window.clearTimeout(o)},[e,t,n]),r},nn=({show:e,variant:t="fadeup",delay:n=0,as:r="div",className:i="",style:o,children:l})=>f.jsx(r,{className:`${t} ${e?"is-in":""} ${i}`.trim(),style:{transitionDelay:`${n}ms`,...o},children:l}),Wp=1e3,Wv=2e3,Oc={ESCAPE:"Escape",TAB:"Tab"},Jr=e=>`/${e.replace(/^\//,"")}`,Hp=(e,t)=>{S.useEffect(()=>{const n=r=>{!e.current||e.current.contains(r.target)||t(r)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,t])},Hv=b.div`
  position: relative;
  display: inline-block;

  .resume-trigger {
    font-family: var(--font-mono);
  }

  /* 点 Resume 后弹出的小提示 */
  .popover {
    position: absolute;
    top: calc(100% + 14px);
    ${e=>e.$align==="right"?"right: 0;":"left: 50%; transform: translateX(-50%);"}
    z-index: 20;
    width: min(280px, 80vw);
    padding: 16px 18px;
    border: 1px solid var(--bg-hover);
    border-radius: 10px;
    background: var(--bg);
    box-shadow: 0 16px 34px -18px rgba(20, 20, 19, 0.35);
    color: var(--text);
    font-family: var(--font-sans);
    font-size: var(--fz-sm);
    line-height: 1.55;
    text-align: left;
    animation: pop-in 0.18s var(--easing);

    /* 小三角 */
    &:before {
      content: '';
      position: absolute;
      top: -6px;
      ${e=>e.$align==="right"?"right: 24px;":"left: calc(50% - 5px);"}
      width: 10px;
      height: 10px;
      border-top: 1px solid var(--bg-hover);
      border-left: 1px solid var(--bg-hover);
      background: var(--bg);
      transform: rotate(45deg);
    }
  }

  .popover-title {
    display: block;
    margin-bottom: 4px;
    color: var(--text-strong);
    font-weight: 600;
  }

  .popover a {
    ${D.inlineLink};
    overflow-wrap: anywhere;
  }

  @keyframes pop-in {
    from {
      opacity: 0;
      margin-top: -4px;
    }
  }
`,Vp=({className:e,align:t="right",tabIndex:n})=>{const[r,i]=S.useState(!1),o=S.useRef(null),l=S.useId(),a=S.useCallback(()=>i(!1),[]);return Hp(o,a),S.useEffect(()=>{if(!r)return;const s=u=>{u.key==="Escape"&&i(!1)};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[r]),f.jsxs(Hv,{ref:o,$align:t,children:[f.jsx("button",{type:"button",className:`${e} resume-trigger`,"aria-expanded":r,"aria-controls":l,tabIndex:n,onClick:()=>i(s=>!s),children:"Resume"}),r&&f.jsxs("div",{className:"popover",id:l,role:"status",children:[f.jsx("span",{className:"popover-title",children:"Resume available on request"}),"Just ask! Email me at ",f.jsx("a",{href:`mailto:${qn.email}`,children:qn.email})," and I’ll send it over."]})]})},Vv=b.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`,Qv=b.button`
  display: none;

  @media (max-width: 768px) {
    ${D.flexCenter};
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }

  .ham-box {
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: var(--border-radius);
    background-color: var(--accent);
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${e=>e.$menuOpen?"0.12s":"0s"};
    transform: rotate(${e=>e.$menuOpen?"225deg":"0deg"});
    transition-timing-function: cubic-bezier(
      ${e=>e.$menuOpen?"0.215, 0.61, 0.355, 1":"0.55, 0.055, 0.675, 0.19"}
    );

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: var(--hamburger-width);
      height: 2px;
      border-radius: 4px;
      background-color: var(--accent);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }

    &:before {
      width: ${e=>e.$menuOpen?"100%":"120%"};
      top: ${e=>e.$menuOpen?"0":"-10px"};
      opacity: ${e=>e.$menuOpen?0:1};
      transition: ${e=>e.$menuOpen?"var(--ham-before-active)":"var(--ham-before)"};
    }

    &:after {
      width: ${e=>e.$menuOpen?"100%":"80%"};
      bottom: ${e=>e.$menuOpen?"0":"-10px"};
      transform: rotate(${e=>e.$menuOpen?"-90deg":"0"});
      transition: ${e=>e.$menuOpen?"var(--ham-after-active)":"var(--ham-after)"};
    }
  }
`,Yv=b.aside`
  display: none;

  @media (max-width: 768px) {
    ${D.flexCenter};
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: var(--bg-elevated);
    box-shadow: -10px 0px 30px -15px var(--shadow);
    z-index: 9;
    transform: translateX(${e=>e.$menuOpen?0:100}vw);
    visibility: ${e=>e.$menuOpen?"visible":"hidden"};
    transition: var(--transition);
  }

  nav {
    ${D.flexBetween};
    width: 100%;
    flex-direction: column;
    color: var(--text-strong);
    font-family: var(--font-mono);
    text-align: center;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    counter-reset: item 0;

    li {
      position: relative;
      margin: 0 auto 20px;
      counter-increment: item 1;
      font-size: clamp(var(--fz-sm), 4vw, var(--fz-lg));

      @media (max-width: 600px) {
        margin: 0 auto 10px;
      }

      &:before {
        content: '0' counter(item) '.';
        display: block;
        margin-bottom: 5px;
        color: var(--accent-text);
        font-size: var(--fz-sm);
      }
    }

    a {
      ${D.link};
      width: 100%;
      padding: 3px 20px 20px;
    }
  }

  .resume-wrap {
    margin: 10% auto 0;
  }

  .resume-link {
    ${D.bigButton};
    padding: 18px 50px;
    width: max-content;
  }
`,Kv=()=>{const[e,t]=S.useState(!1),n=S.useRef(null),r=S.useRef(null),i=S.useRef(null),o=S.useCallback(()=>t(!1),[]);return Hp(i,o),S.useEffect(()=>(document.body.classList.toggle("blur",e),()=>document.body.classList.remove("blur")),[e]),S.useEffect(()=>{const l=s=>{if(s.key===Oc.ESCAPE){t(!1);return}if(s.key!==Oc.TAB||!e||!r.current||!n.current)return;const u=[n.current,...Array.from(r.current.querySelectorAll("a, button"))],p=u[0],d=u[u.length-1];s.shiftKey&&document.activeElement===p?(s.preventDefault(),d.focus()):!s.shiftKey&&document.activeElement===d&&(s.preventDefault(),p.focus())},a=()=>{window.innerWidth>768&&t(!1)};return document.addEventListener("keydown",l),window.addEventListener("resize",a),()=>{document.removeEventListener("keydown",l),window.removeEventListener("resize",a)}},[e]),f.jsx(Vv,{children:f.jsxs("div",{ref:i,children:[f.jsx(Qv,{onClick:()=>t(l=>!l),$menuOpen:e,ref:n,"aria-label":"Menu","aria-expanded":e,children:f.jsx("div",{className:"ham-box",children:f.jsx("div",{className:"ham-box-inner"})})}),f.jsx(Yv,{$menuOpen:e,"aria-hidden":!e,tabIndex:e?1:-1,children:f.jsxs("nav",{ref:r,children:[f.jsx("ol",{children:Ka.map(({url:l,name:a})=>f.jsx("li",{children:f.jsx(Co,{to:l,onClick:o,tabIndex:e?0:-1,children:a})},a))}),f.jsx("div",{className:"resume-wrap",children:f.jsx(Vp,{className:"resume-link",align:"center",tabIndex:e?0:-1})})]})})]})})},Gv=b.header`
  ${D.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: var(--nav-bg);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${e=>e.$dir==="up"&&!e.$top&&ve`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: var(--nav-bg);
        box-shadow: 0 10px 30px -10px var(--shadow);
      `};

    ${e=>e.$dir==="down"&&!e.$top&&ve`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--shadow);
      `};
  }
`,Xv=b.nav`
  ${D.flexBetween};
  position: relative;
  width: 100%;
  color: var(--text-strong);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;

  .menu-wrap {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .logo {
    ${D.flexCenter};

    a {
      color: var(--accent);
      width: 42px;
      height: 42px;
      position: relative;
      z-index: 1;

      svg {
        fill: none;
        user-select: none;
        @media (prefers-reduced-motion: no-preference) {
          transition: var(--transition);
        }
      }

      &:hover,
      &:focus {
        outline: 0;
        transform: translate(-4px, -4px);
      }
    }
  }
`,qv=b.div`
  margin-left: auto;

  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${D.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);

      a {
        padding: 10px;

        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: var(--accent-text);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    ${D.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`,Zv=({isHome:e})=>{const t=el(),n=tl(e?100:0,e),r=Bv("down"),[i,o]=S.useState(!0);S.useEffect(()=>{const p=()=>o(window.scrollY<50);return p(),window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]);const l=e&&!t,a=l?"fade":void 0,s=l?"fadedown":void 0,u=n;return f.jsx(Gv,{$dir:r,$top:i,children:f.jsxs(Xv,{"aria-label":"Main",children:[f.jsx(nn,{show:u,variant:a??"fade",className:"logo",children:f.jsx(Co,{to:"/","aria-label":"home",children:f.jsx(Mv,{})})}),f.jsxs(qv,{children:[f.jsx("ol",{children:Ka.map(({url:p,name:d},g)=>f.jsx(nn,{as:"li",show:u,variant:s??"fade",delay:l?g*100:0,children:f.jsx(Co,{to:p,children:d})},d))}),f.jsx(nn,{show:u,variant:s??"fade",delay:l?Ka.length*100:0,children:f.jsx(Vp,{className:"resume-button"})})]}),f.jsx(nn,{show:u,variant:a??"fade",className:"menu-wrap",children:f.jsx(Kv,{})})]})})},Jv=b.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${e=>e.$orientation==="left"?"40px":"auto"};
  right: ${e=>e.$orientation==="left"?"auto":"40px"};
  z-index: 10;
  color: var(--text);

  @media (max-width: 1080px) {
    left: ${e=>e.$orientation==="left"?"20px":"auto"};
    right: ${e=>e.$orientation==="left"?"auto":"20px"};
  }

  @media (max-width: 768px) {
    display: none;
  }
`,Qp=({children:e,isHome:t,orientation:n})=>{const r=tl(Wv,t);return f.jsx(Jv,{$orientation:n,children:f.jsx(nn,{show:r,variant:"fade",children:e})})},ey=b.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--text-muted);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`,ty=({isHome:e})=>f.jsx(Qp,{isHome:e,orientation:"left",children:f.jsx(ey,{children:Bp.map(({url:t,name:n})=>f.jsx("li",{children:f.jsx("a",{href:t,"aria-label":n,...t.startsWith("http")?{target:"_blank",rel:"noreferrer"}:{},children:f.jsx(No,{name:n})})},n))})}),ny=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--text-muted);
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`,ry=({isHome:e})=>f.jsx(Qp,{isHome:e,orientation:"right",children:f.jsx(ny,{children:f.jsx("a",{href:`mailto:${qn.email}`,children:qn.email})})}),iy=b.footer`
  width: 100%;
  max-width: 1000px;
  margin: 40px auto 0;
  padding: 0 25px 28px;

  @media (max-width: 768px) {
    padding: 0 25px 20px;
  }
`,oy=b.div`
  ${D.flexBetween};
  flex-wrap: wrap;
  gap: 12px 24px;
  padding-top: 20px;
  border-top: 1px solid var(--bg-hover);
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1.6;

  .status {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 4px 12px;
    border-radius: 999px;
    background: var(--accent-tint);
    color: var(--accent-text);
  }

  .dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 0 3px rgba(217, 119, 87, 0.2);

    @media (prefers-reduced-motion: no-preference) {
      animation: pulse 2s var(--easing) infinite;
    }
  }

  @keyframes pulse {
    50% {
      box-shadow: 0 0 0 6px rgba(217, 119, 87, 0);
    }
  }

  a:hover,
  a:focus-visible {
    color: var(--accent-text);
  }
`,ly=b.ul`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 0 0 16px;
    padding: 0;
    list-style: none;
    color: var(--text);

    a {
      padding: 10px;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`,ay=()=>f.jsxs(iy,{children:[f.jsx(ly,{children:Bp.map(({name:e,url:t})=>f.jsx("li",{children:f.jsx("a",{href:t,"aria-label":e,...t.startsWith("http")?{target:"_blank",rel:"noreferrer"}:{},children:f.jsx(No,{name:e})})},e))}),f.jsxs(oy,{children:[f.jsxs("span",{children:["© ",new Date().getFullYear()," ",qn.name]}),f.jsxs("span",{className:"status",children:[f.jsx("span",{className:"dot","aria-hidden":"true"}),"Available for work"]}),f.jsxs("span",{children:["Design inspired by"," ",f.jsx("a",{href:"https://brittanychiang.com",target:"_blank",rel:"noreferrer",children:"Brittany Chiang"})]})]})]}),sy=b.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background: radial-gradient(
    520px circle at var(--mx, -999px) var(--my, -999px),
    rgba(217, 119, 87, 0.1),
    transparent 72%
  );

  @media (hover: none) {
    display: none;
  }
`,uy=()=>{const e=S.useRef(null),t=el();return S.useEffect(()=>{if(t)return;let n=0;const r=i=>{i.pointerType==="mouse"&&(cancelAnimationFrame(n),n=requestAnimationFrame(()=>{var o,l;(o=e.current)==null||o.style.setProperty("--mx",`${i.clientX}px`),(l=e.current)==null||l.style.setProperty("--my",`${i.clientY}px`)}))};return window.addEventListener("pointermove",r,{passive:!0}),()=>{window.removeEventListener("pointermove",r),cancelAnimationFrame(n)}},[t]),t?null:f.jsx(sy,{ref:e,"aria-hidden":"true"})},cy=b.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,Yp=({children:e,title:t})=>{const n=si(),r=n.pathname==="/",[i,o]=S.useState(()=>r&&window.matchMedia("(prefers-reduced-motion: no-preference)").matches),l=S.useCallback(()=>o(!1),[]);return S.useEffect(()=>{document.title=t?`${t} | Corrine Xiang`:"Corrine Xiang"},[t]),S.useEffect(()=>{if(i||!n.hash)return;const a=n.hash.slice(1),s=window.setTimeout(()=>{const u=document.getElementById(a);u&&(u.scrollIntoView(),u.focus({preventScroll:!0}))},0);return()=>window.clearTimeout(s)},[i,n.hash,n.key]),S.useEffect(()=>{i||document.querySelectorAll("a").forEach(a=>{a.host&&a.host!==window.location.host&&(a.setAttribute("rel","noopener noreferrer"),a.setAttribute("target","_blank"))})}),f.jsxs(f.Fragment,{children:[f.jsx(bv,{}),f.jsx("a",{className:"skip-to-content",href:"#content",children:"Skip to Content"}),i&&r?f.jsx(Av,{finishLoading:l}):f.jsxs(cy,{children:[f.jsx(uy,{}),f.jsx(Zv,{isHome:r}),f.jsx(ty,{isHome:r}),f.jsx(ry,{isHome:r}),f.jsxs("div",{id:"content",children:[e,f.jsx(ay,{})]})]})]})},Ri={name:"CORRINE X.",title:"Software Engineer",facts:[{label:"School",value:"University of Toronto ’27"},{label:"Majors",value:"Computer Science + Rotman Commerce"},{label:"Co-ops",value:'Kinaxis <span class="muted">(incoming)</span> · Terminal · BSH'}]},dy=b.section`
  ${D.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 24px 4px;
    color: var(--accent-text);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 3vw, var(--fz-md));
    font-weight: 500;
    letter-spacing: 0.18em;

    @media (max-width: 480px) {
      margin: 0 0 16px 2px;
    }
  }

  /* 标题：后面错开一圈橙色描边，再加一层很淡的投影 */
  h2 {
    position: relative;
    display: inline-block;
    margin: 0;
    text-shadow: 0 0.06em 0.14em rgba(20, 20, 19, 0.14);

    .dot {
      color: var(--accent);
    }

    &:before {
      content: attr(data-text);
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      color: transparent;
      -webkit-text-stroke: max(1px, 0.022em) var(--accent);
      text-shadow: none;
      transform: translate(0.055em, 0.055em);
      transition: transform 0.3s var(--easing);
      pointer-events: none;
    }

    &:hover:before {
      transform: translate(0.035em, 0.035em);
    }
  }

  dl {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 14px 36px;
    align-items: baseline;
    margin: 44px 0 0 4px;

    @media (max-width: 480px) {
      gap: 12px 20px;
      margin-top: 32px;
    }
  }

  dt {
    color: var(--accent-text);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  dd {
    margin: 0;
    color: var(--text);
    font-size: var(--fz-xl);
    line-height: 1.4;

    @media (max-width: 480px) {
      font-size: var(--fz-md);
    }

    .muted {
      color: var(--text-muted);
      font-size: 0.85em;
    }
  }
`,fy=()=>{const e=tl(Wp),t=[f.jsx("h1",{children:Ri.name}),f.jsxs("h2",{className:"big-heading","data-text":`${Ri.title}.`,children:[Ri.title,f.jsx("span",{className:"dot",children:"."})]}),f.jsx("dl",{children:Ri.facts.map(({label:n,value:r})=>f.jsxs("div",{style:{display:"contents"},children:[f.jsx("dt",{children:n}),f.jsx("dd",{dangerouslySetInnerHTML:{__html:r}})]},n))})];return f.jsx(dy,{children:t.map((n,r)=>f.jsx(nn,{show:e,delay:(r+1)*100,children:n},r))})},Li={paragraphs:["Hi, I’m Corrine! I started university pursuing two very different degrees, Commerce and Computer Science, with no idea that I would eventually become a software engineer.","A personal trading app first brought the two worlds together, and each experience since has taken me deeper into building: from fintech and full-stack products to AI-powered systems and developer infrastructure.","Here are a few technologies I’ve been working with recently:"],skills:["TypeScript","Python","React","Node.js","Kubernetes","PostgreSQL"],photo:"images/me.svg",photoAlt:"Corrine Xiang"};/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function Ga(e){return typeof window.Node=="object"?e instanceof window.Node:e!==null&&typeof e=="object"&&typeof e.nodeType=="number"&&typeof e.nodeName=="string"}/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function py(e){var t=Object.prototype.toString.call(e),n=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?e instanceof window.NodeList:e!==null&&typeof e=="object"&&typeof e.length=="number"&&n.test(t)&&(e.length===0||Ga(e[0]))}/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function ei(e,t){if(t===void 0&&(t=document),e instanceof Array)return e.filter(Ga);if(Ga(e))return[e];if(py(e))return Array.prototype.slice.call(e);if(typeof e=="string")try{var n=t.querySelectorAll(e);return Array.prototype.slice.call(n)}catch{return[]}return[]}/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/function Xa(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(e.length===16)return e;if(e.length===6){var t=Ht();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function Ht(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function hy(e,t){for(var n=Xa(e),r=Xa(t),i=[],o=0;o<4;o++)for(var l=[n[o],n[o+4],n[o+8],n[o+12]],a=0;a<4;a++){var s=a*4,u=[r[s],r[s+1],r[s+2],r[s+3]],p=l[0]*u[0]+l[1]*u[1]+l[2]*u[2]+l[3]*u[3];i[o+s]=p}return i}function my(e){if(typeof e=="string"){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t){var n=t[2].split(", ").map(parseFloat);return Xa(n)}}return Ht()}function gy(e){var t=Math.PI/180*e,n=Ht();return n[5]=n[10]=Math.cos(t),n[6]=n[9]=Math.sin(t),n[9]*=-1,n}function vy(e){var t=Math.PI/180*e,n=Ht();return n[0]=n[10]=Math.cos(t),n[2]=n[8]=Math.sin(t),n[2]*=-1,n}function yy(e){var t=Math.PI/180*e,n=Ht();return n[0]=n[5]=Math.cos(t),n[1]=n[4]=Math.sin(t),n[4]*=-1,n}function bc(e,t){var n=Ht();return n[0]=e,n[5]=e,n}function xy(e){var t=Ht();return t[12]=e,t}function wy(e){var t=Ht();return t[13]=e,t}/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/var Kp=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){return Kp(t)},0)}}(),Sy=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Kp;/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/var Gp={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function ky(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function Ey(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var hr={success:Ey,failure:ky};function qi(e){return e!==null&&e instanceof Object&&(e.constructor===Object||Object.prototype.toString.call(e)==="[object Object]")}function Q(e,t){if(qi(e)){var n=Object.keys(e);return n.forEach(function(r){return t(e[r],r,e)})}if(e instanceof Array)return e.forEach(function(r,i){return t(r,i,e)});throw new TypeError("Expected either an array or object literal.")}function rn(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(this.constructor.debug&&console){var r="%cScrollReveal: "+e;t.forEach(function(i){return r+=`
 — `+i}),console.log(r,"color: #ea654b;")}}function Xp(){var e=this,t=function(){return{active:[],stale:[]}},n=t(),r=t(),i=t();try{Q(ei("[data-sr-id]"),function(o){var l=parseInt(o.getAttribute("data-sr-id"));n.active.push(l)})}catch(o){throw o}Q(this.store.elements,function(o){n.active.indexOf(o.id)===-1&&n.stale.push(o.id)}),Q(n.stale,function(o){return delete e.store.elements[o]}),Q(this.store.elements,function(o){i.active.indexOf(o.containerId)===-1&&i.active.push(o.containerId),o.hasOwnProperty("sequence")&&r.active.indexOf(o.sequence.id)===-1&&r.active.push(o.sequence.id)}),Q(this.store.containers,function(o){i.active.indexOf(o.id)===-1&&i.stale.push(o.id)}),Q(i.stale,function(o){var l=e.store.containers[o].node;l.removeEventListener("scroll",e.delegate),l.removeEventListener("resize",e.delegate),delete e.store.containers[o]}),Q(this.store.sequences,function(o){r.active.indexOf(o.id)===-1&&r.stale.push(o.id)}),Q(r.stale,function(o){return delete e.store.sequences[o]})}var Mc=function(){var e={},t=document.documentElement.style;function n(r,i){if(i===void 0&&(i=t),r&&typeof r=="string"){if(e[r])return e[r];if(typeof i[r]=="string")return e[r]=r;if(typeof i["-webkit-"+r]=="string")return e[r]="-webkit-"+r;throw new RangeError('Unable to find "'+r+'" style property.')}throw new TypeError("Expected a string.")}return n.clearCache=function(){return e={}},n}();function Cy(e){var t=window.getComputedStyle(e.node),n=t.position,r=e.config,i={},o=e.node.getAttribute("style")||"",l=o.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];i.computed=l?l.map(function(z){return z.trim()}).join("; ")+";":"",i.generated=l.some(function(z){return z.match(/visibility\s?:\s?visible/i)})?i.computed:l.concat(["visibility: visible"]).map(function(z){return z.trim()}).join("; ")+";";var a=parseFloat(t.opacity),s=isNaN(parseFloat(r.opacity))?parseFloat(t.opacity):parseFloat(r.opacity),u={computed:a!==s?"opacity: "+a+";":"",generated:a!==s?"opacity: "+s+";":""},p=[];if(parseFloat(r.distance)){var d=r.origin==="top"||r.origin==="bottom"?"Y":"X",g=r.distance;(r.origin==="top"||r.origin==="left")&&(g=/^-/.test(g)?g.substr(1):"-"+g);var v=g.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),x=v[0],w=v[1];switch(w){case"em":g=parseInt(t.fontSize)*x;break;case"px":g=x;break;case"%":g=d==="Y"?e.node.getBoundingClientRect().height*x/100:e.node.getBoundingClientRect().width*x/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}d==="Y"?p.push(wy(g)):p.push(xy(g))}r.rotate.x&&p.push(gy(r.rotate.x)),r.rotate.y&&p.push(vy(r.rotate.y)),r.rotate.z&&p.push(yy(r.rotate.z)),r.scale!==1&&(r.scale===0?p.push(bc(2e-4)):p.push(bc(r.scale)));var k={};if(p.length){k.property=Mc("transform"),k.computed={raw:t[k.property],matrix:my(t[k.property])},p.unshift(k.computed.matrix);var m=p.reduce(hy);k.generated={initial:k.property+": matrix3d("+m.join(", ")+");",final:k.property+": matrix3d("+k.computed.matrix.join(", ")+");"}}else k.generated={initial:"",final:""};var c={};if(u.generated||k.generated.initial){c.property=Mc("transition"),c.computed=t[c.property],c.fragments=[];var h=r.delay,y=r.duration,E=r.easing;u.generated&&c.fragments.push({delayed:"opacity "+y/1e3+"s "+E+" "+h/1e3+"s",instant:"opacity "+y/1e3+"s "+E+" 0s"}),k.generated.initial&&c.fragments.push({delayed:k.property+" "+y/1e3+"s "+E+" "+h/1e3+"s",instant:k.property+" "+y/1e3+"s "+E+" 0s"});var P=c.computed&&!c.computed.match(/all 0s|none 0s/);P&&c.fragments.unshift({delayed:c.computed,instant:c.computed});var C=c.fragments.reduce(function(z,M,L){return z.delayed+=L===0?M.delayed:", "+M.delayed,z.instant+=L===0?M.instant:", "+M.instant,z},{delayed:"",instant:""});c.generated={delayed:c.property+": "+C.delayed+";",instant:c.property+": "+C.instant+";"}}else c.generated={delayed:"",instant:""};return{inline:i,opacity:u,position:n,transform:k,transition:c}}function rr(e,t){t.split(";").forEach(function(n){var r=n.split(":"),i=r[0],o=r.slice(1);i&&o&&(e.style[i.trim()]=o.join(":"))})}function eu(e){var t=this,n;try{Q(ei(e),function(r){var i=r.getAttribute("data-sr-id");if(i!==null){n=!0;var o=t.store.elements[i];o.callbackTimer&&window.clearTimeout(o.callbackTimer.clock),rr(o.node,o.styles.inline.generated),r.removeAttribute("data-sr-id"),delete t.store.elements[i]}})}catch(r){return rn.call(this,"Clean failed.",r.message)}if(n)try{Xp.call(this)}catch(r){return rn.call(this,"Clean failed.",r.message)}}function jy(){var e=this;Q(this.store.elements,function(t){rr(t.node,t.styles.inline.generated),t.node.removeAttribute("data-sr-id")}),Q(this.store.containers,function(t){var n=t.node===document.documentElement?window:t.node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function ti(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(qi(e))return Q(t,function(r){Q(r,function(i,o){qi(i)?((!e[o]||!qi(e[o]))&&(e[o]={}),ti(e[o],i)):e[o]=i})}),e;throw new TypeError("Target must be an object literal.")}function $o(e){return e===void 0&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var qa=function(){var e=0;return function(){return e++}}();function qp(){var e=this;Xp.call(this),Q(this.store.elements,function(t){var n=[t.styles.inline.generated];t.visible?(n.push(t.styles.opacity.computed),n.push(t.styles.transform.generated.final),t.revealed=!0):(n.push(t.styles.opacity.generated),n.push(t.styles.transform.generated.initial),t.revealed=!1),rr(t.node,n.filter(function(r){return r!==""}).join(" "))}),Q(this.store.containers,function(t){var n=t.node===document.documentElement?window:t.node;n.addEventListener("scroll",e.delegate),n.addEventListener("resize",e.delegate)}),this.delegate(),this.initTimeout=null}function wr(e,t){t===void 0&&(t={});var n=t.pristine||this.pristine,r=e.config.useDelay==="always"||e.config.useDelay==="onload"&&n||e.config.useDelay==="once"&&!e.seen,i=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;if(t.reveal||i)return Py.call(this,e,r);if(t.reset||o)return zy.call(this,e)}function Py(e,t){var n=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?n.push(e.styles.transition.generated.delayed):n.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,rr(e.node,n.filter(function(r){return r!==""}).join(" ")),Zp.call(this,e,t)}function zy(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,rr(e.node,t.filter(function(n){return n!==""}).join(" ")),Zp.call(this,e)}function Zp(e,t){var n=this,r=t?e.config.duration+e.config.delay:e.config.duration,i=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,l=0;e.callbackTimer&&(l=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),i(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&eu.call(n,e.node)},r-l)}}function Jp(e,t){if(t===void 0&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return wr.call(this,e,{reset:!0});var n=this.store.sequences[e.sequence.id],r=e.sequence.index;if(n){var i=new Dc(n,"visible",this.store),o=new Dc(n,"revealed",this.store);if(n.models={visible:i,revealed:o},!o.body.length){var l=n.members[i.body[0]],a=this.store.elements[l];if(a)return Ti.call(this,n,i.body[0],-1,t),Ti.call(this,n,i.body[0],1,t),wr.call(this,a,{reveal:!0,pristine:t})}if(!n.blocked.head&&r===[].concat(o.head).pop()&&r>=[].concat(i.body).shift())return Ti.call(this,n,r,-1,t),wr.call(this,e,{reveal:!0,pristine:t});if(!n.blocked.foot&&r===[].concat(o.foot).shift()&&r<=[].concat(i.body).pop())return Ti.call(this,n,r,1,t),wr.call(this,e,{reveal:!0,pristine:t})}}function _y(e){var t=Math.abs(e);if(!isNaN(t))this.id=qa(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function Dc(e,t,n){var r=this;this.head=[],this.body=[],this.foot=[],Q(e.members,function(i,o){var l=n.elements[i];l&&l[t]&&r.body.push(o)}),this.body.length&&Q(e.members,function(i,o){var l=n.elements[i];l&&!l[t]&&(o<r.body[0]?r.head.push(o):r.foot.push(o))})}function Ti(e,t,n,r){var i=this,o=["head",null,"foot"][1+n],l=e.members[t+n],a=this.store.elements[l];e.blocked[o]=!0,setTimeout(function(){e.blocked[o]=!1,a&&Jp.call(i,a,r)},e.interval)}function eh(e,t,n){var r=this;t===void 0&&(t={}),n===void 0&&(n=!1);var i=[],o,l=t.interval||Gp.interval;try{l&&(o=new _y(l));var a=ei(e);if(!a.length)throw new Error("Invalid reveal target.");var s=a.reduce(function(u,p){var d={},g=p.getAttribute("data-sr-id");g?(ti(d,r.store.elements[g]),rr(d.node,d.styles.inline.computed)):(d.id=qa(),d.node=p,d.seen=!1,d.revealed=!1,d.visible=!1);var v=ti({},d.config||r.defaults,t);if(!v.mobile&&$o()||!v.desktop&&!$o())return g&&eu.call(r,d),u;var x=ei(v.container)[0];if(!x)throw new Error("Invalid container.");if(!x.contains(p))return u;var w;return w=Ny(x,i,r.store.containers),w===null&&(w=qa(),i.push({id:w,node:x})),d.config=v,d.containerId=w,d.styles=Cy(d),o&&(d.sequence={id:o.id,index:o.members.length},o.members.push(d.id)),u.push(d),u},[]);Q(s,function(u){r.store.elements[u.id]=u,u.node.setAttribute("data-sr-id",u.id)})}catch(u){return rn.call(this,"Reveal failed.",u.message)}Q(i,function(u){r.store.containers[u.id]={id:u.id,node:u.node}}),o&&(this.store.sequences[o.id]=o),n!==!0&&(this.store.history.push({target:e,options:t}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(qp.bind(this),0))}function Ny(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];var r=null;return Q(t,function(i){Q(i,function(o){r===null&&o.node===e&&(r=o.id)})}),r}function $y(){var e=this;Q(this.store.history,function(t){eh.call(e,t.target,t.options,!0)}),qp.call(this)}var Ry=function(e){return(e>0)-(e<0)||+e},Fc=Math.sign||Ry;function Ac(e,t){var n=t?e.node.clientHeight:e.node.offsetHeight,r=t?e.node.clientWidth:e.node.offsetWidth,i=0,o=0,l=e.node;do isNaN(l.offsetTop)||(i+=l.offsetTop),isNaN(l.offsetLeft)||(o+=l.offsetLeft),l=l.offsetParent;while(l);return{bounds:{top:i,right:o+r,bottom:i+n,left:o},height:n,width:r}}function Ly(e){var t,n;return e.node===document.documentElement?(t=window.pageYOffset,n=window.pageXOffset):(t=e.node.scrollTop,n=e.node.scrollLeft),{top:t,left:n}}function Ty(e){e===void 0&&(e={});var t=this.store.containers[e.containerId];if(t){var n=Math.max(0,Math.min(1,e.config.viewFactor)),r=e.config.viewOffset,i={top:e.geometry.bounds.top+e.geometry.height*n,right:e.geometry.bounds.right-e.geometry.width*n,bottom:e.geometry.bounds.bottom-e.geometry.height*n,left:e.geometry.bounds.left+e.geometry.width*n},o={top:t.geometry.bounds.top+t.scroll.top+r.top,right:t.geometry.bounds.right+t.scroll.left-r.right,bottom:t.geometry.bounds.bottom+t.scroll.top-r.bottom,left:t.geometry.bounds.left+t.scroll.left+r.left};return i.top<o.bottom&&i.right>o.left&&i.bottom>o.top&&i.left<o.right||e.styles.position==="fixed"}}function Iy(e,t){var n=this;e===void 0&&(e={type:"init"}),t===void 0&&(t=this.store.elements),Sy(function(){var r=e.type==="init"||e.type==="resize";Q(n.store.containers,function(i){r&&(i.geometry=Ac.call(n,i,!0));var o=Ly.call(n,i);i.scroll&&(i.direction={x:Fc(o.left-i.scroll.left),y:Fc(o.top-i.scroll.top)}),i.scroll=o}),Q(t,function(i){(r||i.geometry===void 0)&&(i.geometry=Ac.call(n,i)),i.visible=Ty.call(n,i)}),Q(t,function(i){i.sequence?Jp.call(n,i):wr.call(n,i)}),n.pristine=!1})}function Oy(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}function by(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}var My="4.0.9",bl,Ml,Dl,Fl,Al,wt,Ul,Bl;function sn(e){e===void 0&&(e={});var t=typeof this>"u"||Object.getPrototypeOf(this)!==sn.prototype;if(t)return new sn(e);if(!sn.isSupported())return rn.call(this,"Instantiation failed.","This browser is not supported."),hr.failure();var n;try{n=wt?ti({},wt,e):ti({},Gp,e)}catch(i){return rn.call(this,"Invalid configuration.",i.message),hr.failure()}try{var r=ei(n.container)[0];if(!r)throw new Error("Invalid container.")}catch(i){return rn.call(this,i.message),hr.failure()}return wt=n,!wt.mobile&&$o()||!wt.desktop&&!$o()?(rn.call(this,"This device is disabled.","desktop: "+wt.desktop,"mobile: "+wt.mobile),hr.failure()):(hr.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,bl=bl||Iy.bind(this),Ml=Ml||jy.bind(this),Dl=Dl||eh.bind(this),Fl=Fl||eu.bind(this),Al=Al||$y.bind(this),Object.defineProperty(this,"delegate",{get:function(){return bl}}),Object.defineProperty(this,"destroy",{get:function(){return Ml}}),Object.defineProperty(this,"reveal",{get:function(){return Dl}}),Object.defineProperty(this,"clean",{get:function(){return Fl}}),Object.defineProperty(this,"sync",{get:function(){return Al}}),Object.defineProperty(this,"defaults",{get:function(){return wt}}),Object.defineProperty(this,"version",{get:function(){return My}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),Bl||(Bl=this))}sn.isSupported=function(){return Oy()&&by()};Object.defineProperty(sn,"debug",{get:function(){return Ul||!1},set:function(e){return Ul=typeof e=="boolean"?e:Ul}});sn();const Dy=typeof window>"u"?null:sn(),nl=(e,t)=>{const n=el();S.useEffect(()=>{const r=Dy;n||!r||e.forEach((i,o)=>{i!=null&&i.current&&r.reveal(i.current,Uv((t==null?void 0:t[o])??200))})},[n])},Fy=b.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`,Ay=b.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--accent);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`,Uy=b.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${D.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--img-tint);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      display: block;
      position: relative;
      width: 100%;
      height: auto;
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--bg);
      mix-blend-mode: screen;
      opacity: 0.25;
      z-index: 1;
      pointer-events: none;
    }

    &:hover:before {
      opacity: 0;
    }

    &:after {
      border: 2px solid var(--accent);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`,By=()=>{const e=S.useRef(null);return nl([e]),f.jsxs(Fy,{id:"about",ref:e,tabIndex:-1,children:[f.jsx("h2",{className:"numbered-heading",children:"About Me"}),f.jsxs("div",{className:"inner",children:[f.jsxs(Ay,{children:[f.jsx("div",{children:Li.paragraphs.map((t,n)=>f.jsx("p",{dangerouslySetInnerHTML:{__html:t}},n))}),f.jsx("ul",{className:"skills-list",children:Li.skills.map(t=>f.jsx("li",{children:t},t))})]}),f.jsx(Uy,{children:f.jsx("div",{className:"wrapper",children:f.jsx("img",{className:"img",src:Jr(Li.photo),width:500,height:500,alt:Li.photoAlt})})})]})]})},Wy=b.ul`
  ${D.resetList};

  a {
    position: relative;
    z-index: 1;
  }
`,Hy=b.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  @media (max-width: 768px) {
    ${D.boxShadow};
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }
    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }

    .project-tech-list {
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }

      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }

    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;

      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }

    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }
    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: var(--accent-text);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .project-title {
    color: var(--text-strong);
    font-family: var(--font-display);
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      a {
        position: static;

        &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }

  .project-description {
    ${D.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    border: 1px solid var(--bg-hover);
    background-color: var(--bg-elevated);
    color: var(--text);
    font-size: var(--fz-lg);

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      border: 0;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
      ${D.inlineLink};
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 20px 5px 0;
      color: var(--text-muted);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;

      li {
        margin: 0 10px 5px 0;
        color: var(--text);
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--text-strong);

    a {
      ${D.flexCenter};
      padding: 10px;

      &.external svg {
        width: 22px;
        height: 22px;
        margin-top: -4px;
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .project-image {
    ${D.boxShadow};
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.2;
    }

    a {
      width: 100%;
      height: 100%;
      background-color: var(--img-tint);
      border-radius: var(--border-radius);
      vertical-align: middle;
      overflow: hidden;

      &:hover,
      &:focus {
        background: transparent;
        outline: 0;

        &:before,
        .img {
          background: transparent;
          filter: none;
          mix-blend-mode: normal;
          opacity: 0;
        }

        .img {
          opacity: 1;
        }
      }

      &:before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 3;
        transition: var(--transition);
        background-color: var(--bg);
        mix-blend-mode: screen;
        opacity: 0.3;
      }
    }

    .img {
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 16 / 10;
      object-fit: cover;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(95%);
      transition: var(--transition);

      @media (max-width: 768px) {
        height: 100%;
        aspect-ratio: auto;
      }
    }
  }
`,Vy=()=>{const e=S.useRef(null),t=S.useRef([]);return nl([e,...Rr.map((n,r)=>({get current(){return t.current[r]}}))],[200,...Rr.map((n,r)=>r*100)]),f.jsxs("section",{id:"projects",tabIndex:-1,children:[f.jsx("h2",{className:"numbered-heading",ref:e,children:"Some Things I’ve Built"}),f.jsx(Wy,{children:Rr.map(({title:n,description:r,tech:i,cover:o,github:l,external:a},s)=>f.jsxs(Hy,{ref:u=>{t.current[s]=u},children:[f.jsx("div",{className:"project-content",children:f.jsxs("div",{children:[f.jsx("p",{className:"project-overline",children:"Featured Project"}),f.jsx("h3",{className:"project-title",children:f.jsx("a",{href:a??l??"#",children:n})}),f.jsx("div",{className:"project-description",dangerouslySetInnerHTML:{__html:r}}),f.jsx("ul",{className:"project-tech-list",children:i.map(u=>f.jsx("li",{children:u},u))}),f.jsxs("div",{className:"project-links",children:[l&&f.jsx("a",{href:l,"aria-label":"GitHub Link",children:f.jsx(No,{name:"GitHub"})}),a&&f.jsx("a",{href:a,"aria-label":"External Link",className:"external",children:f.jsx(No,{name:"External"})})]})]})}),f.jsx("div",{className:"project-image",children:f.jsx("a",{href:a??l??"#",tabIndex:-1,"aria-hidden":"true",children:f.jsx("img",{className:"img",src:Jr(o),alt:n,width:700,height:438,loading:"lazy"})})})]},n))})]})},Qy=b.section`
  position: relative;
  max-width: 860px;

  /* 跟随鼠标的暖色光斑，给毛玻璃卡片一个可以“透”出来的背景 */
  .spotlight {
    position: absolute;
    inset: 80px -120px 0;
    z-index: -1;
    pointer-events: none;
    background:
      radial-gradient(420px circle at var(--mx, 30%) var(--my, 40%), rgba(217, 119, 87, 0.16), transparent 70%),
      radial-gradient(360px circle at 85% 75%, rgba(196, 160, 120, 0.14), transparent 70%);
    transition: background 0.1s linear;

    @media (max-width: 1080px) {
      inset: 80px 0 0;
    }

    /* 触屏设备没有悬停，不需要光斑 */
    @media (hover: none), (max-width: 768px) {
      display: none;
    }
  }

  /* 标题较长时（比如 Community & Open Source）在手机上允许换行 */
  .numbered-heading {
    @media (max-width: 600px) {
      white-space: normal;

      &:after {
        display: none;
      }
    }
  }

  .list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 12px;
  }

  @media (hover: hover) {
    .list:hover > li:not(:hover) {
      opacity: 0.5;
    }
  }
`,Uc=["#C15F3C","#3D3D3A","#8A7A5E","#5E5D59","#A8674E","#6F6E68"],Yy=e=>{const t=e.match(/\(([A-Za-z]{2,6})\)/);if(t)return t[1];const n=e.replace(/[^A-Za-z0-9: ]/g,"").split(/[\s:]+/).filter(Boolean);return n.length===1?n[0][0].toUpperCase():/^[A-Z]{2,5}$/.test(n[0])?n[0]:n.slice(0,2).map(r=>r[0]).join("").toUpperCase()},Ky=b.li`
  position: relative;
  border-radius: 10px;
  transition: opacity 0.25s var(--easing);

  /* 展开的那一条不参与“其他行变淡” */
  &.open {
    opacity: 1 !important;
  }

  /* 毛玻璃底：悬停、聚焦或展开时出现 */
  .glass {
    position: absolute;
    inset: 0;
    border-radius: 10px;
    background: rgba(250, 249, 245, 0.55);
    border: 1px solid rgba(255, 255, 255, 0.75);
    box-shadow:
      0 10px 30px -15px var(--shadow),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(16px) saturate(140%);
    -webkit-backdrop-filter: blur(16px) saturate(140%);
    opacity: 0;
    transition: opacity 0.25s var(--easing);
    pointer-events: none;
  }

  &:hover .glass,
  &:focus-within .glass,
  &.open .glass {
    opacity: 1;
  }

  &.open .glass {
    background: rgba(250, 249, 245, 0.78);
  }

  .head {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 3fr auto;
    align-items: center;
    gap: 8px 28px;
    width: 100%;
    padding: 24px 28px;
    border: 0;
    border-radius: 10px;
    background: none;
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;

    @media (max-width: 600px) {
      grid-template-columns: 1fr auto;
      padding: 18px 8px 18px 4px;
    }
  }

  .range {
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    white-space: nowrap;

    @media (max-width: 600px) {
      grid-column: 1;
      grid-row: 1;
    }
  }

  .title {
    min-width: 0;
    color: var(--text-strong);
    font-size: var(--fz-xl);
    font-weight: 500;
    line-height: 1.3;
    transition: color 0.2s var(--easing);

    @media (max-width: 600px) {
      grid-column: 1;
      grid-row: 2;
      font-size: var(--fz-lg);
    }
  }

  &:hover .title,
  &.open .title,
  .head:focus-visible .title {
    color: var(--accent-text);
  }

  .chev {
    display: grid;
    place-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    color: var(--text-muted);
    transition:
      transform 0.3s var(--easing),
      background-color 0.2s,
      color 0.2s;

    svg {
      width: 14px;
      height: 14px;
    }

    @media (max-width: 600px) {
      grid-column: 2;
      grid-row: 1 / span 2;
    }
  }

  &:hover .chev,
  &.open .chev {
    background: var(--accent-tint);
    color: var(--accent-text);
  }

  &.open .chev {
    transform: rotate(180deg);
  }

  /* 展开区：高度平滑展开 */
  .body {
    position: relative;
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.35s var(--easing);
  }

  &.open .body {
    grid-template-rows: 1fr;
  }

  .inner {
    overflow: hidden;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 3fr auto;
    gap: 12px 28px;
    padding: 0 28px 26px;
    opacity: 0;
    transform: translateY(-6px);
    transition:
      opacity 0.25s var(--easing),
      transform 0.3s var(--easing);

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      padding: 0 4px 20px;
    }
  }

  &.open .content {
    opacity: 1;
    transform: none;
    transition-delay: 0.08s;
  }

  .logo-col {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 600px) {
      flex-direction: row;
      align-items: center;
    }
  }

  .logo {
    display: grid;
    place-items: center;
    width: 64px;
    height: 64px;
    overflow: hidden;
    border-radius: 14px;
    background: var(--bg-elevated);
    box-shadow: 0 8px 18px -12px rgba(20, 20, 19, 0.5);
    color: #faf9f5;
    font-size: var(--fz-lg);
    font-weight: 600;
    letter-spacing: -0.02em;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background: #fff;
    }

    @media (max-width: 600px) {
      width: 48px;
      height: 48px;
      border-radius: 11px;
      font-size: var(--fz-md);
    }
  }

  .meta {
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: 1.6;
  }

  .details {
    min-width: 0;
  }

  /* 横版 logo：白底圆角卡片 */
  .banner {
    display: inline-flex;
    align-items: center;
    max-width: 100%;
    height: 64px;
    margin-bottom: 18px;
    padding: 10px 18px;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 8px 18px -12px rgba(20, 20, 19, 0.35);

    img {
      width: auto;
      max-width: 100%;
      height: 100%;
      object-fit: contain;
    }

    @media (max-width: 600px) {
      height: 52px;
    }
  }

  .description {
    margin: 0 0 12px;
    color: var(--text);
    font-size: var(--fz-md);
    line-height: 1.6;
  }

  .bullets {
    ${D.fancyList};
    font-size: var(--fz-md);
    line-height: 1.55;

    li {
      margin-bottom: 8px;
    }

    a {
      ${D.inlineLink};
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 16px 0 0;
    padding: 0;
    list-style: none;

    li {
      padding: 5px 12px;
      border-radius: 999px;
      background: var(--accent-tint);
      color: var(--accent-text);
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.4;
    }
  }

  .visit {
    ${D.smallButton};
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 20px;

    .arrow {
      width: 14px;
      height: 14px;
    }
  }

  /* 只有官网按钮、没有描述时，按钮不用离上面那么远 */
  .details > .visit:first-child {
    margin-top: 4px;
  }

  .spacer {
    width: 28px;

    @media (max-width: 600px) {
      display: none;
    }
  }
`,Gy=()=>f.jsx("svg",{className:"arrow",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:f.jsx("path",{fillRule:"evenodd",d:"M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z",clipRule:"evenodd"})}),Xy=()=>f.jsx("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:f.jsx("path",{d:"M4 6l4 4 4-4"})}),Bc=({id:e,heading:t,items:n})=>{const[r,i]=S.useState(null),o=S.useRef(null);nl([o]);const l=a=>{const s=a.currentTarget,u=s.getBoundingClientRect();s.style.setProperty("--mx",`${a.clientX-u.left+120}px`),s.style.setProperty("--my",`${a.clientY-u.top-80}px`)};return f.jsxs(Qy,{id:e,ref:o,tabIndex:-1,onPointerMove:l,children:[f.jsx("div",{className:"spotlight","aria-hidden":"true"}),f.jsx("h2",{className:"numbered-heading",children:t}),f.jsx("ol",{className:"list",children:n.map((a,s)=>{const{range:u,role:p,org:d,url:g,description:v,bullets:x,tags:w,logo:k,banner:m,meta:c}=a,h=r===s,y=`${e}-head-${s}`,E=`${e}-body-${s}`;return f.jsxs(Ky,{className:h?"open":void 0,children:[f.jsx("div",{className:"glass","aria-hidden":"true"}),f.jsxs("button",{type:"button",className:"head",id:y,"aria-expanded":h,"aria-controls":E,onClick:()=>i(h?null:s),children:[f.jsx("span",{className:"range",children:u}),f.jsxs("span",{className:"title",children:[p," · ",d]}),f.jsx("span",{className:"chev",children:f.jsx(Xy,{})})]}),f.jsx("div",{className:"body",id:E,role:"region","aria-labelledby":y,children:f.jsx("div",{className:"inner",children:f.jsxs("div",{className:"content","aria-hidden":!h,children:[f.jsxs("div",{className:"logo-col",children:[f.jsx("div",{className:"logo",style:k?void 0:{backgroundColor:Uc[s%Uc.length]},"aria-hidden":"true",children:k?f.jsx("img",{src:Jr(k),alt:""}):Yy(d)}),c&&f.jsx("div",{className:"meta",children:c})]}),f.jsxs("div",{className:"details",children:[m&&f.jsx("div",{className:"banner",children:f.jsx("img",{src:Jr(m),alt:d,loading:"lazy"})}),v&&f.jsx("p",{className:"description",children:v}),x&&x.length>0&&f.jsx("ul",{className:"bullets",children:x.map((P,C)=>f.jsx("li",{dangerouslySetInnerHTML:{__html:P}},C))}),w&&w.length>0&&f.jsx("ul",{className:"tags","aria-label":"Skills",children:w.map(P=>f.jsx("li",{children:P},P))}),g&&f.jsxs("a",{className:"visit",href:g,target:"_blank",rel:"noreferrer",tabIndex:h?0:-1,children:["Visit ",d.split(/[\s,]/)[0],f.jsx(Gy,{})]})]}),f.jsx("div",{className:"spacer"})]})})})]},`${p}-${d}`)})})]})},qy="Notes from people I’ve learned from, built with, and occasionally debugged things with. :)",Zy=[{type:"quote",quote:"Corrine has a strong ability to learn and understand complex concepts, and demonstrates thoughtful decision-making while leading independent work.",name:"Connor Giles",role:"CTO, Terminal"},{type:"quote",quote:"She is easy to work with, communicates openly, and is always willing to help the team move things forward.",name:"Shruthi Murali",role:"Intern, Terminal"},{type:"keyword",lead:"My teammates describe me as someone who…",word:"Collaborate",tone:"dark"},{type:"keyword",lead:"My previous manager described me as someone who…",word:"Learn fast",tone:"accent"},{type:"quote",quote:"She is the kind of teammate who keeps everyone moving, cares about the details, and makes sure the final work is something we’re proud of.",name:"Raine Yang",role:"Intern, IBM"},{type:"quote",quote:"Corrine takes ownership of her work, moves quickly from ideas to implementation, and keeps improving the solution based on real-world feedback.",name:"Yilun You",role:"Manager, Bosch"}],Jy=b.section`
  .numbered-heading {
    white-space: normal;

    &:after {
      flex: 1 0 40px;
      max-width: 200px;

      @media (max-width: 600px) {
        display: none;
      }
    }
  }

  .intro {
    max-width: 540px;
    margin: -20px 0 40px;
  }

  .grid {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;

    @media (max-width: 960px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }
`,Wc=b.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;
  min-height: 260px;
  padding: 32px 30px;
  border-radius: 8px;
  border: 1px solid var(--bg-hover);
  background-color: var(--bg-elevated);
  box-shadow: 0 10px 30px -15px var(--shadow);
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 30px -15px var(--shadow);
    }
  }

  blockquote {
    margin: 0;
    color: var(--text);
    font-size: 17px;
    line-height: 1.55;
  }

  figcaption {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .avatar {
    display: grid;
    place-items: center;
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    color: var(--bg);
    font-size: var(--fz-md);
    font-weight: 600;
    letter-spacing: 0.02em;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .name {
    display: block;
    color: var(--text-strong);
    font-size: var(--fz-md);
    font-weight: 600;
  }

  .role {
    display: block;
    color: var(--text-muted);
    font-size: var(--fz-sm);
  }

  &.keyword {
    border: 0;
    container-type: inline-size;
    color: #faf9f5;

    p {
      margin: 0;
      font-size: 17px;
      line-height: 1.5;
      opacity: 0.85;
    }

    .word {
      margin: 0;
      color: #faf9f5;
      font-family: var(--font-display);
      /* 按卡片宽度缩放，保证 COLLABORATE 这种长词放得下 */
      font-size: clamp(30px, 12cqi, 60px);
      font-weight: 700;
      line-height: 0.95;
      letter-spacing: -0.03em;
      text-transform: uppercase;
    }
  }

  &.dark {
    background-color: #262624;
  }

  &.accent {
    background-color: var(--accent-text);
  }
`,Hc=["#C15F3C","#8A7A5E","#5E5D59","#A8674E"],e1=e=>e.split(/\s+/).map(t=>t[0]).join("").slice(0,2).toUpperCase(),t1=()=>{const e=S.useRef(null),t=S.useRef(null);nl([e,t]);let n=0;return f.jsxs(Jy,{id:"testimonials",tabIndex:-1,children:[f.jsxs("div",{ref:e,children:[f.jsx("h2",{className:"numbered-heading",children:"What It’s Like to Work With Me"}),f.jsx("p",{className:"intro",children:qy})]}),f.jsx("ul",{className:"grid",ref:t,children:Zy.map(r=>{if(r.type==="keyword")return f.jsxs(Wc,{className:`keyword ${r.tone}`,children:[f.jsx("p",{children:r.lead}),f.jsx("p",{className:"word",children:r.word})]},r.word);const i=Hc[n++%Hc.length];return f.jsx(Wc,{as:"li",children:f.jsxs("figure",{style:{margin:0,display:"contents"},children:[f.jsx("blockquote",{children:r.quote}),f.jsxs("figcaption",{children:[f.jsx("span",{className:"avatar",style:{backgroundColor:i},"aria-hidden":"true",children:r.photo?f.jsx("img",{src:Jr(r.photo),alt:""}):e1(r.name)}),f.jsxs("span",{children:[f.jsx("span",{className:"name",children:r.name}),f.jsx("span",{className:"role",children:r.role})]})]})]})},r.name)})})]})},n1=[{range:"Starting Jan 2027",role:"Software Engineer Intern",org:"Kinaxis",url:"https://www.kinaxis.com/",logo:"images/logos/kinaxis-k.png",meta:"Full-time Co-op · Incoming",description:"Placeholder: one sentence on the team and what you worked on.",bullets:["Placeholder: something you built, the tools you used, and the result.","Placeholder: another highlight, ideally with a number (e.g. cut build time by 40%)."],tags:["Placeholder","Tech Stack"]},{range:"Jan – Aug 2026",role:"Platform Engineer Intern",org:"Terminal",url:"https://www.withterminal.com/",logo:"images/logos/terminal.png",meta:"Full-time Co-op · 8 months",description:"Placeholder: one sentence on the team and what you worked on.",bullets:["Placeholder: something you built, the tools you used, and the result.","Placeholder: another highlight, ideally with a number (e.g. cut build time by 40%)."],tags:["Placeholder","Tech Stack"]},{range:"May – Aug 2025",role:"AI Engineer Intern",org:"BSH Home Appliances",url:"https://www.bsh-group.com/",logo:"images/logos/bsh.png",meta:"Summer Intern · 4 months",description:"Placeholder: one sentence on the team and what you worked on.",bullets:["Placeholder: something you built, the tools you used, and the result.","Placeholder: another highlight, ideally with a number (e.g. cut build time by 40%)."],tags:["Placeholder","Tech Stack"]},{range:"Jan – Apr 2025",role:"Student Developer",org:"Rotman School of Management",url:"https://www.rotman.utoronto.ca/",logo:"images/logos/rotman.png",meta:"Part-time · 4 months",description:"Placeholder: one sentence on the team and what you worked on.",bullets:["Placeholder: something you built, the tools you used, and the result.","Placeholder: another highlight, ideally with a number (e.g. cut build time by 40%)."],tags:["Placeholder","Tech Stack"]},{range:"Sep – Dec 2024",role:"Full-Stack Development Intern",org:"Re:Pair Genomics",url:"https://repairgenomics.vercel.app/",logo:"images/logos/repair.png",meta:"Part-time Intern · 4 months",description:"Placeholder: one sentence on the team and what you worked on.",bullets:["Placeholder: something you built, the tools you used, and the result.","Placeholder: another highlight, ideally with a number (e.g. cut build time by 40%)."],tags:["Placeholder","Tech Stack"]},{range:"May – Aug 2023",role:"Summer Analyst Intern",org:"CITIC Securities",url:"https://www.citics.com/",logo:"images/logos/citic.png",meta:"Summer Intern · 4 months",description:"Placeholder: one sentence on the team and what you worked on.",bullets:["Placeholder: something you built, the tools you used, and the result.","Placeholder: another highlight, ideally with a number (e.g. cut build time by 40%)."],tags:["Placeholder","Tech Stack"]}],r1=[{range:"Oct 2026 – Present",role:"Back End Developer",org:"UofT Women in Computer Science (WiCS)",url:"https://www.uoftwics.com/",logo:"images/logos/wics.png",meta:"Volunteer · Ongoing",description:"Placeholder: one sentence on what you do here and who it helps.",bullets:["Placeholder: something you organized or built, and the result.","Placeholder: another highlight, ideally with a number (e.g. mentored 12 first-years)."],tags:["Placeholder","Skills"]},{range:"May 2024 – Apr 2025",role:"Student Mentor",org:"Woodsworth College, University of Toronto",url:"https://www.wdw.utoronto.ca/",logo:"images/logos/woodsworth.png",meta:"Volunteer · 1 year",description:"Placeholder: one sentence on what you do here and who it helps.",bullets:["Placeholder: something you organized or built, and the result.","Placeholder: another highlight, ideally with a number (e.g. mentored 12 first-years)."],tags:["Placeholder","Skills"]}],i1=b.main`
  counter-reset: section;
`,o1=()=>f.jsx(Yp,{children:f.jsxs(i1,{className:"fillHeight",children:[f.jsx(fy,{}),f.jsx(By,{}),f.jsx(Bc,{id:"work",heading:"Work Experience",items:n1}),f.jsx(Bc,{id:"experience",heading:"Experience",items:r1}),Rr.length>0&&f.jsx(Vy,{}),f.jsx(t1,{})]})}),l1=b.main`
  ${D.flexCenter};
  flex-direction: column;
  text-align: center;
`,a1=b.h1`
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
`,s1=b.h2`
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 400;
`,u1=b(Co)`
  ${D.bigButton};
  margin-top: 40px;
`,c1=()=>{const e=tl(Wp);return f.jsx(Yp,{title:"Page Not Found",children:f.jsx(nn,{show:e,children:f.jsxs(l1,{className:"fillHeight",children:[f.jsx(a1,{children:"404"}),f.jsx(s1,{children:"Page Not Found"}),f.jsx(u1,{to:"/",children:"Go Home"})]})})})},d1=()=>f.jsxs(k0,{children:[f.jsx(ba,{path:"/",element:f.jsx(o1,{})}),f.jsx(ba,{path:"*",element:f.jsx(c1,{})})]});ip(document.getElementById("root")).render(f.jsx(S.StrictMode,{children:f.jsx(N0,{basename:"/",children:f.jsx(d1,{})})}));
