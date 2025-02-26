/*! For license information please see main.dc7bece3.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:u,props:o,_owner:a.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function v(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=x.prototype;var b=y.prototype=new v;b.constructor=y,m(b,x.prototype),b.isPureReactComponent=!0;var w=Array.isArray,j=Object.prototype.hasOwnProperty,S={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var i,o={},s=null,a=null;if(null!=t)for(i in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)j.call(t,i)&&!k.hasOwnProperty(i)&&(o[i]=t[i]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===o[i]&&(o[i]=l[i]);return{$$typeof:n,type:e,key:s,ref:a,props:o,_owner:S.current}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var z=/\/+/g;function $(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,i,o,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return s=s(l=e),e=""===o?"."+$(l,0):o,w(s)?(i="",null!=e&&(i=e.replace(z,"$&/")+"/"),P(s,t,i,"",(function(e){return e}))):null!=s&&(E(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,i+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(z,"$&/")+"/")+e)),t.push(s)),1;if(l=0,o=""===o?".":o+":",w(e))for(var c=0;c<e.length;c++){var u=o+$(a=e[c],c);l+=P(a,t,i,u,s)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(a=e.next()).done;)l+=P(a=a.value,t,i,u=o+$(a,c++),s);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function T(e,t,n){if(null==e)return e;var r=[],i=0;return P(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function M(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},R={transition:null},I={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:R,ReactCurrentOwner:S};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=x,t.Fragment=i,t.Profiler=s,t.PureComponent=y,t.StrictMode=o,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.act=L,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),o=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=S.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)j.call(t,c)&&!k.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:n,type:e.type,key:o,ref:s,props:i,_owner:a}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:M}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=R.transition;R.transition={};try{e()}finally{R.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return A.current.useCallback(e,t)},t.useContext=function(e){return A.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return A.current.useDeferredValue(e)},t.useEffect=function(e,t){return A.current.useEffect(e,t)},t.useId=function(){return A.current.useId()},t.useImperativeHandle=function(e,t,n){return A.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return A.current.useMemo(e,t)},t.useReducer=function(e,t,n){return A.current.useReducer(e,t,n)},t.useRef=function(e){return A.current.useRef(e)},t.useState=function(e){return A.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return A.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return A.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<o(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,s=i>>>1;r<s;){var a=2*(r+1)-1,l=e[a],c=a+1,u=e[c];if(0>o(l,n))c<i&&0>o(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[a]=n,r=a);else{if(!(c<i&&0>o(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,h=null,p=3,f=!1,m=!1,g=!1,x="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(g=!1,b(e),!m)if(null!==r(c))m=!0,R(j);else{var t=r(u);null!==t&&I(w,t.startTime-e)}}function j(e,n){m=!1,g&&(g=!1,v(E),E=-1),f=!0;var o=p;try{for(b(n),h=r(c);null!==h&&(!(h.expirationTime>n)||e&&!P());){var s=h.callback;if("function"===typeof s){h.callback=null,p=h.priorityLevel;var a=s(h.expirationTime<=n);n=t.unstable_now(),"function"===typeof a?h.callback=a:h===r(c)&&i(c),b(n)}else i(c);h=r(c)}if(null!==h)var l=!0;else{var d=r(u);null!==d&&I(w,d.startTime-n),l=!1}return l}finally{h=null,p=o,f=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,k=!1,C=null,E=-1,z=5,$=-1;function P(){return!(t.unstable_now()-$<z)}function T(){if(null!==C){var e=t.unstable_now();$=e;var n=!0;try{n=C(!0,e)}finally{n?S():(k=!1,C=null)}}else k=!1}if("function"===typeof y)S=function(){y(T)};else if("undefined"!==typeof MessageChannel){var M=new MessageChannel,A=M.port2;M.port1.onmessage=T,S=function(){A.postMessage(null)}}else S=function(){x(T,0)};function R(e){C=e,k||(k=!0,S())}function I(e,n){E=x((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||f||(m=!0,R(j))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,i,o){var s=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?s+o:s:o=s,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:o,expirationTime:a=o+a,sortIndex:-1},o>s?(e.sortIndex=o,n(u,e),null===r(c)&&e===r(u)&&(g?(v(E),E=-1):g=!0,I(w,o-s))):(e.sortIndex=a,n(c,e),m||f||(m=!0,R(j))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),s=Object.keys(t);if(o.length!==s.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var c=o[l];if(!a(c))return!1;var u=e[c],d=t[c];if(!1===(i=n?n.call(r,u,d,c):void 0)||void 0===i&&u!==d)return!1}return!0}},358:(e,t)=>{"use strict";const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,a=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function l(e,t,n){do{const n=e.charCodeAt(t);if(32!==n&&9!==n)return t}while(++t<n);return n}function c(e,t,n){for(;t>n;){const n=e.charCodeAt(--t);if(32!==n&&9!==n)return t+1}return n}function u(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),i=n(853);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(a[e]=t,e=0;e<t.length;e++)s.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},f={};function m(e,t,n,r,i,o,s){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var x=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function y(e,t,n,r){var i=g.hasOwnProperty(t)?g[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!d.call(f,e)||!d.call(p,e)&&(h.test(e)?f[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(x,v);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(x,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(x,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),j=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),z=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),A=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var R=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var I=Symbol.iterator;function L(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=I&&e[I]||e["@@iterator"])?e:null}var _,D=Object.assign;function V(e){if(void 0===_)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_=t&&t[1]||""}return"\n"+_+e}var F=!1;function O(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var i=c.stack.split("\n"),o=r.stack.split("\n"),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(1!==s||1!==a)do{if(s--,0>--a||i[s]!==o[a]){var l="\n"+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=s&&0<=a);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?V(e):""}function B(e){switch(e.tag){case 5:return V(e.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return e=O(e.type,!1);case 11:return e=O(e.type.render,!1);case 1:return e=O(e.type,!0);default:return""}}function N(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case j:return"Portal";case C:return"Profiler";case k:return"StrictMode";case P:return"Suspense";case T:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case z:return(e.displayName||"Context")+".Consumer";case E:return(e._context.displayName||"Context")+".Provider";case $:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case M:return null!==(t=e.displayName||null)?t:N(e.type)||"Memo";case A:t=e._payload,e=e._init;try{return N(e(t))}catch(n){}}return null}function U(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return N(t);case 8:return t===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function W(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Y(e){e._valueTracker||(e._valueTracker=function(e){var t=W(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=W(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function X(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function G(e,t){var n=t.checked;return D({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function q(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function Z(e,t){q(e,t);var n=H(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&X(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return D({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function oe(e,t){var n=H(t.value),r=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function se(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function ae(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?ae(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ue(e,t)}))}:ue);function he(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fe=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(pe).forEach((function(e){fe.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var xe=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(e,t){if(t){if(xe[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var je=null,Se=null,ke=null;function Ce(e){if(e=yi(e)){if("function"!==typeof je)throw Error(o(280));var t=e.stateNode;t&&(t=wi(t),je(e.stateNode,e.type,t))}}function Ee(e){Se?ke?ke.push(e):ke=[e]:Se=e}function ze(){if(Se){var e=Se,t=ke;if(ke=Se=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function $e(e,t){return e(t)}function Pe(){}var Te=!1;function Me(e,t,n){if(Te)return e(t,n);Te=!0;try{return $e(e,t,n)}finally{Te=!1,(null!==Se||null!==ke)&&(Pe(),ze())}}function Ae(e,t){var n=e.stateNode;if(null===n)return null;var r=wi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Re=!1;if(u)try{var Ie={};Object.defineProperty(Ie,"passive",{get:function(){Re=!0}}),window.addEventListener("test",Ie,Ie),window.removeEventListener("test",Ie,Ie)}catch(ue){Re=!1}function Le(e,t,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var _e=!1,De=null,Ve=!1,Fe=null,Oe={onError:function(e){_e=!0,De=e}};function Be(e,t,n,r,i,o,s,a,l){_e=!1,De=null,Le.apply(Oe,arguments)}function Ne(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Ue(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(Ne(e)!==e)throw Error(o(188))}function We(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ne(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var s=i.alternate;if(null===s){if(null!==(r=i.return)){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return He(i),e;if(s===r)return He(i),t;s=s.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?Ye(e):null}function Ye(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ye(e);if(null!==t)return t;e=e.sibling}return null}var Ke=i.unstable_scheduleCallback,Xe=i.unstable_cancelCallback,Ge=i.unstable_shouldYield,Qe=i.unstable_requestPaint,qe=i.unstable_now,Ze=i.unstable_getCurrentPriorityLevel,Je=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,rt=i.unstable_IdlePriority,it=null,ot=null;var st=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(at(e)/lt|0)|0},at=Math.log,lt=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ht(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=268435455&n;if(0!==s){var a=s&~i;0!==a?r=dt(a):0!==(o&=s)&&(r=dt(o))}else 0!==(s=n&~i)?r=dt(s):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(o=t&-t)||16===i&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-st(t)),r|=e[n],t&=~i;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ft(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-st(t)]=n}function vt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var yt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,jt,St,kt,Ct,Et=!1,zt=[],$t=null,Pt=null,Tt=null,Mt=new Map,At=new Map,Rt=[],It="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lt(e,t){switch(e){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":Mt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":At.delete(t.pointerId)}}function _t(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&(null!==(t=yi(t))&&jt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Dt(e){var t=vi(e.target);if(null!==t){var n=Ne(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Ue(n)))return e.blockedOn=t,void Ct(e.priority,(function(){St(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Vt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=yi(n))&&jt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);be=r,n.target.dispatchEvent(r),be=null,t.shift()}return!0}function Ft(e,t,n){Vt(e)&&n.delete(t)}function Ot(){Et=!1,null!==$t&&Vt($t)&&($t=null),null!==Pt&&Vt(Pt)&&(Pt=null),null!==Tt&&Vt(Tt)&&(Tt=null),Mt.forEach(Ft),At.forEach(Ft)}function Bt(e,t){e.blockedOn===t&&(e.blockedOn=null,Et||(Et=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Ot)))}function Nt(e){function t(t){return Bt(t,e)}if(0<zt.length){Bt(zt[0],e);for(var n=1;n<zt.length;n++){var r=zt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==$t&&Bt($t,e),null!==Pt&&Bt(Pt,e),null!==Tt&&Bt(Tt,e),Mt.forEach(t),At.forEach(t),n=0;n<Rt.length;n++)(r=Rt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&null===(n=Rt[0]).blockedOn;)Dt(n),null===n.blockedOn&&Rt.shift()}var Ut=b.ReactCurrentBatchConfig,Ht=!0;function Wt(e,t,n,r){var i=yt,o=Ut.transition;Ut.transition=null;try{yt=1,Kt(e,t,n,r)}finally{yt=i,Ut.transition=o}}function Yt(e,t,n,r){var i=yt,o=Ut.transition;Ut.transition=null;try{yt=4,Kt(e,t,n,r)}finally{yt=i,Ut.transition=o}}function Kt(e,t,n,r){if(Ht){var i=Gt(e,t,n,r);if(null===i)Hr(e,t,r,Xt,n),Lt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return $t=_t($t,e,t,n,r,i),!0;case"dragenter":return Pt=_t(Pt,e,t,n,r,i),!0;case"mouseover":return Tt=_t(Tt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Mt.set(o,_t(Mt.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,At.set(o,_t(At.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Lt(e,r),4&t&&-1<It.indexOf(e)){for(;null!==i;){var o=yi(i);if(null!==o&&wt(o),null===(o=Gt(e,t,n,r))&&Hr(e,t,r,Xt,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else Hr(e,t,r,null,n)}}var Xt=null;function Gt(e,t,n,r){if(Xt=null,null!==(e=vi(e=we(r))))if(null===(t=Ne(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Ue(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xt=e,null}function Qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case Je:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var qt=null,Zt=null,Jt=null;function en(){if(Jt)return Jt;var e,t,n=Zt,r=n.length,i="value"in qt?qt.value:qt.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var s=r-e;for(t=1;t<=s&&n[r-t]===i[o-t];t++);return Jt=i.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,i,o){for(var s in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var sn,an,ln,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=on(cn),dn=D({},cn,{view:0,detail:0}),hn=on(dn),pn=D({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(sn=e.screenX-ln.screenX,an=e.screenY-ln.screenY):an=sn=0,ln=e),sn)},movementY:function(e){return"movementY"in e?e.movementY:an}}),fn=on(pn),mn=on(D({},pn,{dataTransfer:0})),gn=on(D({},dn,{relatedTarget:0})),xn=on(D({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),vn=D({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yn=on(vn),bn=on(D({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function Cn(){return kn}var En=D({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?jn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),zn=on(En),$n=on(D({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pn=on(D({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),Tn=on(D({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Mn=D({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),An=on(Mn),Rn=[9,13,27,32],In=u&&"CompositionEvent"in window,Ln=null;u&&"documentMode"in document&&(Ln=document.documentMode);var _n=u&&"TextEvent"in window&&!Ln,Dn=u&&(!In||Ln&&8<Ln&&11>=Ln),Vn=String.fromCharCode(32),Fn=!1;function On(e,t){switch(e){case"keyup":return-1!==Rn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Nn=!1;var Un={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Un[e.type]:"textarea"===t}function Wn(e,t,n,r){Ee(r),0<(t=Yr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yn=null,Kn=null;function Xn(e){Vr(e,0)}function Gn(e){if(K(bi(e)))return e}function Qn(e,t){if("change"===e)return t}var qn=!1;if(u){var Zn;if(u){var Jn="oninput"in document;if(!Jn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Jn="function"===typeof er.oninput}Zn=Jn}else Zn=!1;qn=Zn&&(!document.documentMode||9<document.documentMode)}function tr(){Yn&&(Yn.detachEvent("onpropertychange",nr),Kn=Yn=null)}function nr(e){if("value"===e.propertyName&&Gn(Kn)){var t=[];Wn(t,Kn,e,we(e)),Me(Xn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(Yn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Gn(Kn)}function or(e,t){if("click"===e)return Gn(t)}function sr(e,t){if("input"===e||"change"===e)return Gn(t)}var ar="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function lr(e,t){if(ar(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!d.call(t,i)||!ar(e[i],t[i]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function hr(){for(var e=window,t=X();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=X((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function fr(e){var t=hr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=void 0===r.end?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ur(n,o);var s=ur(n,r);i&&s&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=u&&"documentMode"in document&&11>=document.documentMode,gr=null,xr=null,vr=null,yr=!1;function br(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yr||null==gr||gr!==X(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},vr&&lr(vr,r)||(vr=r,0<(r=Yr(xr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},kr={};function Cr(e){if(Sr[e])return Sr[e];if(!jr[e])return e;var t,n=jr[e];for(t in n)if(n.hasOwnProperty(t)&&t in kr)return Sr[e]=n[t];return e}u&&(kr=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);var Er=Cr("animationend"),zr=Cr("animationiteration"),$r=Cr("animationstart"),Pr=Cr("transitionend"),Tr=new Map,Mr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(e,t){Tr.set(e,t),l(t,[e])}for(var Rr=0;Rr<Mr.length;Rr++){var Ir=Mr[Rr];Ar(Ir.toLowerCase(),"on"+(Ir[0].toUpperCase()+Ir.slice(1)))}Ar(Er,"onAnimationEnd"),Ar(zr,"onAnimationIteration"),Ar($r,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(Pr,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_r=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Dr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,s,a,l,c){if(Be.apply(this,arguments),_e){if(!_e)throw Error(o(198));var u=De;_e=!1,De=null,Ve||(Ve=!0,Fe=u)}}(r,t,void 0,e),e.currentTarget=null}function Vr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Dr(i,a,c),o=l}else for(s=0;s<r.length;s++){if(l=(a=r[s]).instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Dr(i,a,c),o=l}}}if(Ve)throw e=Fe,Ve=!1,Fe=null,e}function Fr(e,t){var n=t[mi];void 0===n&&(n=t[mi]=new Set);var r=e+"__bubble";n.has(r)||(Ur(t,e,2,!1),n.add(r))}function Or(e,t,n){var r=0;t&&(r|=4),Ur(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function Nr(e){if(!e[Br]){e[Br]=!0,s.forEach((function(t){"selectionchange"!==t&&(_r.has(t)||Or(t,!1,e),Or(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Br]||(t[Br]=!0,Or("selectionchange",!1,t))}}function Ur(e,t,n,r){switch(Qt(t)){case 1:var i=Wt;break;case 4:i=Yt;break;default:i=Kt}n=i.bind(null,t,n,e),i=void 0,!Re||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Hr(e,t,n,r,i){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var s=r.tag;if(3===s||4===s){var a=r.stateNode.containerInfo;if(a===i||8===a.nodeType&&a.parentNode===i)break;if(4===s)for(s=r.return;null!==s;){var l=s.tag;if((3===l||4===l)&&((l=s.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;s=s.return}for(;null!==a;){if(null===(s=vi(a)))return;if(5===(l=s.tag)||6===l){r=o=s;continue e}a=a.parentNode}}r=r.return}Me((function(){var r=o,i=we(n),s=[];e:{var a=Tr.get(e);if(void 0!==a){var l=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=zn;break;case"focusin":c="focus",l=gn;break;case"focusout":c="blur",l=gn;break;case"beforeblur":case"afterblur":l=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=fn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Pn;break;case Er:case zr:case $r:l=xn;break;case Pr:l=Tn;break;case"scroll":l=hn;break;case"wheel":l=An;break;case"copy":case"cut":case"paste":l=yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=$n}var u=0!==(4&t),d=!u&&"scroll"===e,h=u?null!==a?a+"Capture":null:a;u=[];for(var p,f=r;null!==f;){var m=(p=f).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==h&&(null!=(m=Ae(f,h))&&u.push(Wr(f,m,p)))),d)break;f=f.return}0<u.length&&(a=new l(a,c,null,n,i),s.push({event:a,listeners:u}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(a="mouseover"===e||"pointerover"===e)||n===be||!(c=n.relatedTarget||n.fromElement)||!vi(c)&&!c[fi])&&(l||a)&&(a=i.window===i?i:(a=i.ownerDocument)?a.defaultView||a.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?vi(c):null)&&(c!==(d=Ne(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(u=fn,m="onMouseLeave",h="onMouseEnter",f="mouse","pointerout"!==e&&"pointerover"!==e||(u=$n,m="onPointerLeave",h="onPointerEnter",f="pointer"),d=null==l?a:bi(l),p=null==c?a:bi(c),(a=new u(m,f+"leave",l,n,i)).target=d,a.relatedTarget=p,m=null,vi(i)===r&&((u=new u(h,f+"enter",c,n,i)).target=p,u.relatedTarget=d,m=u),d=m,l&&c)e:{for(h=c,f=0,p=u=l;p;p=Kr(p))f++;for(p=0,m=h;m;m=Kr(m))p++;for(;0<f-p;)u=Kr(u),f--;for(;0<p-f;)h=Kr(h),p--;for(;f--;){if(u===h||null!==h&&u===h.alternate)break e;u=Kr(u),h=Kr(h)}u=null}else u=null;null!==l&&Xr(s,a,l,u,!1),null!==c&&null!==d&&Xr(s,d,c,u,!0)}if("select"===(l=(a=r?bi(r):window).nodeName&&a.nodeName.toLowerCase())||"input"===l&&"file"===a.type)var g=Qn;else if(Hn(a))if(qn)g=sr;else{g=ir;var x=rr}else(l=a.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===a.type||"radio"===a.type)&&(g=or);switch(g&&(g=g(e,r))?Wn(s,g,n,i):(x&&x(e,a,r),"focusout"===e&&(x=a._wrapperState)&&x.controlled&&"number"===a.type&&ee(a,"number",a.value)),x=r?bi(r):window,e){case"focusin":(Hn(x)||"true"===x.contentEditable)&&(gr=x,xr=r,vr=null);break;case"focusout":vr=xr=gr=null;break;case"mousedown":yr=!0;break;case"contextmenu":case"mouseup":case"dragend":yr=!1,br(s,n,i);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":br(s,n,i)}var v;if(In)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Nn?On(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(Dn&&"ko"!==n.locale&&(Nn||"onCompositionStart"!==y?"onCompositionEnd"===y&&Nn&&(v=en()):(Zt="value"in(qt=i)?qt.value:qt.textContent,Nn=!0)),0<(x=Yr(r,y)).length&&(y=new bn(y,e,null,n,i),s.push({event:y,listeners:x}),v?y.data=v:null!==(v=Bn(n))&&(y.data=v))),(v=_n?function(e,t){switch(e){case"compositionend":return Bn(t);case"keypress":return 32!==t.which?null:(Fn=!0,Vn);case"textInput":return(e=t.data)===Vn&&Fn?null:e;default:return null}}(e,n):function(e,t){if(Nn)return"compositionend"===e||!In&&On(e,t)?(e=en(),Jt=Zt=qt=null,Nn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Yr(r,"onBeforeInput")).length&&(i=new bn("onBeforeInput","beforeinput",null,n,i),s.push({event:i,listeners:r}),i.data=v))}Vr(s,t)}))}function Wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=Ae(e,n))&&r.unshift(Wr(e,o,i)),null!=(o=Ae(e,t))&&r.push(Wr(e,o,i))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Xr(e,t,n,r,i){for(var o=t._reactName,s=[];null!==n&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(null!==l&&l===r)break;5===a.tag&&null!==c&&(a=c,i?null!=(l=Ae(n,o))&&s.unshift(Wr(n,l,a)):i||null!=(l=Ae(n,o))&&s.push(Wr(n,l,a))),n=n.return}0!==s.length&&e.push({event:t,listeners:s})}var Gr=/\r\n?/g,Qr=/\u0000|\uFFFD/g;function qr(e){return("string"===typeof e?e:""+e).replace(Gr,"\n").replace(Qr,"")}function Zr(e,t,n){if(t=qr(t),qr(e)!==t&&n)throw Error(o(425))}function Jr(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ri="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,oi="function"===typeof Promise?Promise:void 0,si="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oi?function(e){return oi.resolve(null).then(e).catch(ai)}:ri;function ai(e){setTimeout((function(){throw e}))}function li(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Nt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Nt(t)}function ci(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ui(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),hi="__reactFiber$"+di,pi="__reactProps$"+di,fi="__reactContainer$"+di,mi="__reactEvents$"+di,gi="__reactListeners$"+di,xi="__reactHandles$"+di;function vi(e){var t=e[hi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fi]||n[hi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ui(e);null!==e;){if(n=e[hi])return n;e=ui(e)}return t}n=(e=n).parentNode}return null}function yi(e){return!(e=e[hi]||e[fi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function bi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function wi(e){return e[pi]||null}var ji=[],Si=-1;function ki(e){return{current:e}}function Ci(e){0>Si||(e.current=ji[Si],ji[Si]=null,Si--)}function Ei(e,t){Si++,ji[Si]=e.current,e.current=t}var zi={},$i=ki(zi),Pi=ki(!1),Ti=zi;function Mi(e,t){var n=e.type.contextTypes;if(!n)return zi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ai(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ri(){Ci(Pi),Ci($i)}function Ii(e,t,n){if($i.current!==zi)throw Error(o(168));Ei($i,t),Ei(Pi,n)}function Li(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(o(108,U(e)||"Unknown",i));return D({},n,r)}function _i(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zi,Ti=$i.current,Ei($i,e),Ei(Pi,Pi.current),!0}function Di(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Li(e,t,Ti),r.__reactInternalMemoizedMergedChildContext=e,Ci(Pi),Ci($i),Ei($i,e)):Ci(Pi),Ei(Pi,n)}var Vi=null,Fi=!1,Oi=!1;function Bi(e){null===Vi?Vi=[e]:Vi.push(e)}function Ni(){if(!Oi&&null!==Vi){Oi=!0;var e=0,t=yt;try{var n=Vi;for(yt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Vi=null,Fi=!1}catch(i){throw null!==Vi&&(Vi=Vi.slice(e+1)),Ke(Je,Ni),i}finally{yt=t,Oi=!1}}return null}var Ui=[],Hi=0,Wi=null,Yi=0,Ki=[],Xi=0,Gi=null,Qi=1,qi="";function Zi(e,t){Ui[Hi++]=Yi,Ui[Hi++]=Wi,Wi=e,Yi=t}function Ji(e,t,n){Ki[Xi++]=Qi,Ki[Xi++]=qi,Ki[Xi++]=Gi,Gi=e;var r=Qi;e=qi;var i=32-st(r)-1;r&=~(1<<i),n+=1;var o=32-st(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Qi=1<<32-st(t)+i|n<<i|r,qi=o+e}else Qi=1<<o|n<<i|r,qi=e}function eo(e){null!==e.return&&(Zi(e,1),Ji(e,1,0))}function to(e){for(;e===Wi;)Wi=Ui[--Hi],Ui[Hi]=null,Yi=Ui[--Hi],Ui[Hi]=null;for(;e===Gi;)Gi=Ki[--Xi],Ki[Xi]=null,qi=Ki[--Xi],Ki[Xi]=null,Qi=Ki[--Xi],Ki[Xi]=null}var no=null,ro=null,io=!1,oo=null;function so(e,t){var n=Mc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function ao(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ci(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Gi?{id:Qi,overflow:qi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Mc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function lo(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function co(e){if(io){var t=ro;if(t){var n=t;if(!ao(e,t)){if(lo(e))throw Error(o(418));t=ci(n.nextSibling);var r=no;t&&ao(e,t)?so(r,n):(e.flags=-4097&e.flags|2,io=!1,no=e)}}else{if(lo(e))throw Error(o(418));e.flags=-4097&e.flags|2,io=!1,no=e}}}function uo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function ho(e){if(e!==no)return!1;if(!io)return uo(e),io=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=ro)){if(lo(e))throw po(),Error(o(418));for(;t;)so(e,t),t=ci(t.nextSibling)}if(uo(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ci(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ci(e.stateNode.nextSibling):null;return!0}function po(){for(var e=ro;e;)e=ci(e.nextSibling)}function fo(){ro=no=null,io=!1}function mo(e){null===oo?oo=[e]:oo.push(e)}var go=b.ReactCurrentBatchConfig;function xo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var i=r,s=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===s?t.ref:(t=function(e){var t=i.refs;null===e?delete t[s]:t[s]=e},t._stringRef=s,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function vo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yo(e){return(0,e._init)(e._payload)}function bo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Rc(e,t)).index=0,e.sibling=null,e}function s(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function a(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Dc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var o=n.type;return o===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===A&&yo(o)===t.type)?((r=i(t,n.props)).ref=xo(e,t,n),r.return=e,r):((r=Ic(n.type,n.key,n.props,null,e.mode,r)).ref=xo(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Vc(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Lc(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Dc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Ic(t.type,t.key,t.props,null,e.mode,n)).ref=xo(e,null,t),n.return=e,n;case j:return(t=Vc(t,e.mode,n)).return=e,t;case A:return h(e,(0,t._init)(t._payload),n)}if(te(t)||L(t))return(t=Lc(t,e.mode,n,null)).return=e,t;vo(e,t)}return null}function p(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===i?c(e,t,n,r):null;case j:return n.key===i?u(e,t,n,r):null;case A:return p(e,t,(i=n._init)(n._payload),r)}if(te(n)||L(n))return null!==i?null:d(e,t,n,r,null);vo(e,n)}return null}function f(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case j:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case A:return f(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||L(r))return d(t,e=e.get(n)||null,r,i,null);vo(t,r)}return null}function m(i,o,a,l){for(var c=null,u=null,d=o,m=o=0,g=null;null!==d&&m<a.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var x=p(i,d,a[m],l);if(null===x){null===d&&(d=g);break}e&&d&&null===x.alternate&&t(i,d),o=s(x,o,m),null===u?c=x:u.sibling=x,u=x,d=g}if(m===a.length)return n(i,d),io&&Zi(i,m),c;if(null===d){for(;m<a.length;m++)null!==(d=h(i,a[m],l))&&(o=s(d,o,m),null===u?c=d:u.sibling=d,u=d);return io&&Zi(i,m),c}for(d=r(i,d);m<a.length;m++)null!==(g=f(d,i,m,a[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=s(g,o,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach((function(e){return t(i,e)})),io&&Zi(i,m),c}function g(i,a,l,c){var u=L(l);if("function"!==typeof u)throw Error(o(150));if(null==(l=u.call(l)))throw Error(o(151));for(var d=u=null,m=a,g=a=0,x=null,v=l.next();null!==m&&!v.done;g++,v=l.next()){m.index>g?(x=m,m=null):x=m.sibling;var y=p(i,m,v.value,c);if(null===y){null===m&&(m=x);break}e&&m&&null===y.alternate&&t(i,m),a=s(y,a,g),null===d?u=y:d.sibling=y,d=y,m=x}if(v.done)return n(i,m),io&&Zi(i,g),u;if(null===m){for(;!v.done;g++,v=l.next())null!==(v=h(i,v.value,c))&&(a=s(v,a,g),null===d?u=v:d.sibling=v,d=v);return io&&Zi(i,g),u}for(m=r(i,m);!v.done;g++,v=l.next())null!==(v=f(m,i,g,v.value,c))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),a=s(v,a,g),null===d?u=v:d.sibling=v,d=v);return e&&m.forEach((function(e){return t(i,e)})),io&&Zi(i,g),u}return function e(r,o,s,l){if("object"===typeof s&&null!==s&&s.type===S&&null===s.key&&(s=s.props.children),"object"===typeof s&&null!==s){switch(s.$$typeof){case w:e:{for(var c=s.key,u=o;null!==u;){if(u.key===c){if((c=s.type)===S){if(7===u.tag){n(r,u.sibling),(o=i(u,s.props.children)).return=r,r=o;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===A&&yo(c)===u.type){n(r,u.sibling),(o=i(u,s.props)).ref=xo(r,u,s),o.return=r,r=o;break e}n(r,u);break}t(r,u),u=u.sibling}s.type===S?((o=Lc(s.props.children,r.mode,l,s.key)).return=r,r=o):((l=Ic(s.type,s.key,s.props,null,r.mode,l)).ref=xo(r,o,s),l.return=r,r=l)}return a(r);case j:e:{for(u=s.key;null!==o;){if(o.key===u){if(4===o.tag&&o.stateNode.containerInfo===s.containerInfo&&o.stateNode.implementation===s.implementation){n(r,o.sibling),(o=i(o,s.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Vc(s,r.mode,l)).return=r,r=o}return a(r);case A:return e(r,o,(u=s._init)(s._payload),l)}if(te(s))return m(r,o,s,l);if(L(s))return g(r,o,s,l);vo(r,s)}return"string"===typeof s&&""!==s||"number"===typeof s?(s=""+s,null!==o&&6===o.tag?(n(r,o.sibling),(o=i(o,s)).return=r,r=o):(n(r,o),(o=Dc(s,r.mode,l)).return=r,r=o),a(r)):n(r,o)}}var wo=bo(!0),jo=bo(!1),So=ki(null),ko=null,Co=null,Eo=null;function zo(){Eo=Co=ko=null}function $o(e){var t=So.current;Ci(So),e._currentValue=t}function Po(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function To(e,t){ko=e,Eo=Co=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(ya=!0),e.firstContext=null)}function Mo(e){var t=e._currentValue;if(Eo!==e)if(e={context:e,memoizedValue:t,next:null},null===Co){if(null===ko)throw Error(o(308));Co=e,ko.dependencies={lanes:0,firstContext:e}}else Co=Co.next=e;return t}var Ao=null;function Ro(e){null===Ao?Ao=[e]:Ao.push(e)}function Io(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Ro(t)):(n.next=i.next,i.next=n),t.interleaved=n,Lo(e,r)}function Lo(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var _o=!1;function Do(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Oo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&$l)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Lo(e,n)}return null===(i=r.interleaved)?(t.next=t,Ro(r)):(t.next=i.next,i.next=t),r.interleaved=t,Lo(e,n)}function Bo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}function No(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=s:o=o.next=s,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Uo(e,t,n,r){var i=e.updateQueue;_o=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(null!==a){i.shared.pending=null;var l=a,c=l.next;l.next=null,null===s?o=c:s.next=c,s=l;var u=e.alternate;null!==u&&((a=(u=u.updateQueue).lastBaseUpdate)!==s&&(null===a?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(null!==o){var d=i.baseState;for(s=0,u=c=l=null,a=o;;){var h=a.lane,p=a.eventTime;if((r&h)===h){null!==u&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var f=e,m=a;switch(h=t,p=n,m.tag){case 1:if("function"===typeof(f=m.payload)){d=f.call(p,d,h);break e}d=f;break e;case 3:f.flags=-65537&f.flags|128;case 0:if(null===(h="function"===typeof(f=m.payload)?f.call(p,d,h):f)||void 0===h)break e;d=D({},d,h);break e;case 2:_o=!0}}null!==a.callback&&0!==a.lane&&(e.flags|=64,null===(h=i.effects)?i.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},null===u?(c=u=p,l=d):u=u.next=p,s|=h;if(null===(a=a.next)){if(null===(a=i.shared.pending))break;a=(h=a).next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}if(null===u&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null!==(t=i.shared.interleaved)){i=t;do{s|=i.lane,i=i.next}while(i!==t)}else null===o&&(i.shared.lanes=0);_l|=s,e.lanes=s,e.memoizedState=d}}function Ho(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(o(191,i));i.call(r)}}}var Wo={},Yo=ki(Wo),Ko=ki(Wo),Xo=ki(Wo);function Go(e){if(e===Wo)throw Error(o(174));return e}function Qo(e,t){switch(Ei(Xo,t),Ei(Ko,e),Ei(Yo,Wo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ci(Yo),Ei(Yo,t)}function qo(){Ci(Yo),Ci(Ko),Ci(Xo)}function Zo(e){Go(Xo.current);var t=Go(Yo.current),n=le(t,e.type);t!==n&&(Ei(Ko,e),Ei(Yo,n))}function Jo(e){Ko.current===e&&(Ci(Yo),Ci(Ko))}var es=ki(0);function ts(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ns=[];function rs(){for(var e=0;e<ns.length;e++)ns[e]._workInProgressVersionPrimary=null;ns.length=0}var is=b.ReactCurrentDispatcher,os=b.ReactCurrentBatchConfig,ss=0,as=null,ls=null,cs=null,us=!1,ds=!1,hs=0,ps=0;function fs(){throw Error(o(321))}function ms(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ar(e[n],t[n]))return!1;return!0}function gs(e,t,n,r,i,s){if(ss=s,as=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,is.current=null===e||null===e.memoizedState?Js:ea,e=n(r,i),ds){s=0;do{if(ds=!1,hs=0,25<=s)throw Error(o(301));s+=1,cs=ls=null,t.updateQueue=null,is.current=ta,e=n(r,i)}while(ds)}if(is.current=Zs,t=null!==ls&&null!==ls.next,ss=0,cs=ls=as=null,us=!1,t)throw Error(o(300));return e}function xs(){var e=0!==hs;return hs=0,e}function vs(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===cs?as.memoizedState=cs=e:cs=cs.next=e,cs}function ys(){if(null===ls){var e=as.alternate;e=null!==e?e.memoizedState:null}else e=ls.next;var t=null===cs?as.memoizedState:cs.next;if(null!==t)cs=t,ls=e;else{if(null===e)throw Error(o(310));e={memoizedState:(ls=e).memoizedState,baseState:ls.baseState,baseQueue:ls.baseQueue,queue:ls.queue,next:null},null===cs?as.memoizedState=cs=e:cs=cs.next=e}return cs}function bs(e,t){return"function"===typeof t?t(e):t}function ws(e){var t=ys(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=ls,i=r.baseQueue,s=n.pending;if(null!==s){if(null!==i){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(null!==i){s=i.next,r=r.baseState;var l=a=null,c=null,u=s;do{var d=u.lane;if((ss&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(l=c=h,a=r):c=c.next=h,as.lanes|=d,_l|=d}u=u.next}while(null!==u&&u!==s);null===c?a=r:c.next=l,ar(r,t.memoizedState)||(ya=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{s=i.lane,as.lanes|=s,_l|=s,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function js(e){var t=ys(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(null!==i){n.pending=null;var a=i=i.next;do{s=e(s,a.action),a=a.next}while(a!==i);ar(s,t.memoizedState)||(ya=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Ss(){}function ks(e,t){var n=as,r=ys(),i=t(),s=!ar(r.memoizedState,i);if(s&&(r.memoizedState=i,ya=!0),r=r.queue,_s(zs.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||null!==cs&&1&cs.memoizedState.tag){if(n.flags|=2048,Ms(9,Es.bind(null,n,r,i,t),void 0,null),null===Pl)throw Error(o(349));0!==(30&ss)||Cs(n,t,i)}return i}function Cs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=as.updateQueue)?(t={lastEffect:null,stores:null},as.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Es(e,t,n,r){t.value=n,t.getSnapshot=r,$s(t)&&Ps(e)}function zs(e,t,n){return n((function(){$s(t)&&Ps(e)}))}function $s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ar(e,n)}catch(r){return!0}}function Ps(e){var t=Lo(e,1);null!==t&&nc(t,e,1,-1)}function Ts(e){var t=vs();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bs,lastRenderedState:e},t.queue=e,e=e.dispatch=Xs.bind(null,as,e),[t.memoizedState,e]}function Ms(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=as.updateQueue)?(t={lastEffect:null,stores:null},as.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function As(){return ys().memoizedState}function Rs(e,t,n,r){var i=vs();as.flags|=e,i.memoizedState=Ms(1|t,n,void 0,void 0===r?null:r)}function Is(e,t,n,r){var i=ys();r=void 0===r?null:r;var o=void 0;if(null!==ls){var s=ls.memoizedState;if(o=s.destroy,null!==r&&ms(r,s.deps))return void(i.memoizedState=Ms(t,n,o,r))}as.flags|=e,i.memoizedState=Ms(1|t,n,o,r)}function Ls(e,t){return Rs(8390656,8,e,t)}function _s(e,t){return Is(2048,8,e,t)}function Ds(e,t){return Is(4,2,e,t)}function Vs(e,t){return Is(4,4,e,t)}function Fs(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Os(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Is(4,4,Fs.bind(null,t,e),n)}function Bs(){}function Ns(e,t){var n=ys();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ms(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Us(e,t){var n=ys();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ms(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hs(e,t,n){return 0===(21&ss)?(e.baseState&&(e.baseState=!1,ya=!0),e.memoizedState=n):(ar(n,t)||(n=mt(),as.lanes|=n,_l|=n,e.baseState=!0),t)}function Ws(e,t){var n=yt;yt=0!==n&&4>n?n:4,e(!0);var r=os.transition;os.transition={};try{e(!1),t()}finally{yt=n,os.transition=r}}function Ys(){return ys().memoizedState}function Ks(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gs(e))Qs(t,n);else if(null!==(n=Io(e,t,n,r))){nc(n,e,r,ec()),qs(n,t,r)}}function Xs(e,t,n){var r=tc(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gs(e))Qs(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,ar(a,s)){var l=t.interleaved;return null===l?(i.next=i,Ro(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(c){}null!==(n=Io(e,t,i,r))&&(nc(n,e,r,i=ec()),qs(n,t,r))}}function Gs(e){var t=e.alternate;return e===as||null!==t&&t===as}function Qs(e,t){ds=us=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qs(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}var Zs={readContext:Mo,useCallback:fs,useContext:fs,useEffect:fs,useImperativeHandle:fs,useInsertionEffect:fs,useLayoutEffect:fs,useMemo:fs,useReducer:fs,useRef:fs,useState:fs,useDebugValue:fs,useDeferredValue:fs,useTransition:fs,useMutableSource:fs,useSyncExternalStore:fs,useId:fs,unstable_isNewReconciler:!1},Js={readContext:Mo,useCallback:function(e,t){return vs().memoizedState=[e,void 0===t?null:t],e},useContext:Mo,useEffect:Ls,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Rs(4194308,4,Fs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Rs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Rs(4,2,e,t)},useMemo:function(e,t){var n=vs();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vs();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ks.bind(null,as,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},vs().memoizedState=e},useState:Ts,useDebugValue:Bs,useDeferredValue:function(e){return vs().memoizedState=e},useTransition:function(){var e=Ts(!1),t=e[0];return e=Ws.bind(null,e[1]),vs().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=as,i=vs();if(io){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Pl)throw Error(o(349));0!==(30&ss)||Cs(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Ls(zs.bind(null,r,s,e),[e]),r.flags|=2048,Ms(9,Es.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=vs(),t=Pl.identifierPrefix;if(io){var n=qi;t=":"+t+"R"+(n=(Qi&~(1<<32-st(Qi)-1)).toString(32)+n),0<(n=hs++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=ps++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ea={readContext:Mo,useCallback:Ns,useContext:Mo,useEffect:_s,useImperativeHandle:Os,useInsertionEffect:Ds,useLayoutEffect:Vs,useMemo:Us,useReducer:ws,useRef:As,useState:function(){return ws(bs)},useDebugValue:Bs,useDeferredValue:function(e){return Hs(ys(),ls.memoizedState,e)},useTransition:function(){return[ws(bs)[0],ys().memoizedState]},useMutableSource:Ss,useSyncExternalStore:ks,useId:Ys,unstable_isNewReconciler:!1},ta={readContext:Mo,useCallback:Ns,useContext:Mo,useEffect:_s,useImperativeHandle:Os,useInsertionEffect:Ds,useLayoutEffect:Vs,useMemo:Us,useReducer:js,useRef:As,useState:function(){return js(bs)},useDebugValue:Bs,useDeferredValue:function(e){var t=ys();return null===ls?t.memoizedState=e:Hs(t,ls.memoizedState,e)},useTransition:function(){return[js(bs)[0],ys().memoizedState]},useMutableSource:Ss,useSyncExternalStore:ks,useId:Ys,unstable_isNewReconciler:!1};function na(e,t){if(e&&e.defaultProps){for(var n in t=D({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function ra(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:D({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var ia={isMounted:function(e){return!!(e=e._reactInternals)&&Ne(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),o=Fo(r,i);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Oo(e,o,i))&&(nc(t,e,i,r),Bo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),o=Fo(r,i);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Oo(e,o,i))&&(nc(t,e,i,r),Bo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),i=Fo(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=Oo(e,i,r))&&(nc(t,e,r,n),Bo(t,e,r))}};function oa(e,t,n,r,i,o,s){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,s):!t.prototype||!t.prototype.isPureReactComponent||(!lr(n,r)||!lr(i,o))}function sa(e,t,n){var r=!1,i=zi,o=t.contextType;return"object"===typeof o&&null!==o?o=Mo(o):(i=Ai(t)?Ti:$i.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?Mi(e,i):zi),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ia,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function aa(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ia.enqueueReplaceState(t,t.state,null)}function la(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Do(e);var o=t.contextType;"object"===typeof o&&null!==o?i.context=Mo(o):(o=Ai(t)?Ti:$i.current,i.context=Mi(e,o)),i.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(ra(e,t,o,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&ia.enqueueReplaceState(i,i.state,null),Uo(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function ca(e,t){try{var n="",r=t;do{n+=B(r),r=r.return}while(r);var i=n}catch(o){i="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:i,digest:null}}function ua(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function da(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var ha="function"===typeof WeakMap?WeakMap:Map;function pa(e,t,n){(n=Fo(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hl||(Hl=!0,Wl=r),da(0,t)},n}function fa(e,t,n){(n=Fo(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){da(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){da(0,t),"function"!==typeof r&&(null===Yl?Yl=new Set([this]):Yl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ma(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ha;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Cc.bind(null,e,t,n),t.then(e,e))}function ga(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function xa(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Fo(-1,1)).tag=2,Oo(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var va=b.ReactCurrentOwner,ya=!1;function ba(e,t,n,r){t.child=null===e?jo(t,null,n,r):wo(t,e.child,n,r)}function wa(e,t,n,r,i){n=n.render;var o=t.ref;return To(t,i),r=gs(e,t,n,r,o,i),n=xs(),null===e||ya?(io&&n&&eo(t),t.flags|=1,ba(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ha(e,t,i))}function ja(e,t,n,r,i){if(null===e){var o=n.type;return"function"!==typeof o||Ac(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ic(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Sa(e,t,o,r,i))}if(o=e.child,0===(e.lanes&i)){var s=o.memoizedProps;if((n=null!==(n=n.compare)?n:lr)(s,r)&&e.ref===t.ref)return Ha(e,t,i)}return t.flags|=1,(e=Rc(o,r)).ref=t.ref,e.return=t,t.child=e}function Sa(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(lr(o,r)&&e.ref===t.ref){if(ya=!1,t.pendingProps=r=o,0===(e.lanes&i))return t.lanes=e.lanes,Ha(e,t,i);0!==(131072&e.flags)&&(ya=!0)}}return Ea(e,t,n,r,i)}function ka(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ei(Rl,Al),Al|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ei(Rl,Al),Al|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Ei(Rl,Al),Al|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ei(Rl,Al),Al|=r;return ba(e,t,i,n),t.child}function Ca(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ea(e,t,n,r,i){var o=Ai(n)?Ti:$i.current;return o=Mi(t,o),To(t,i),n=gs(e,t,n,r,o,i),r=xs(),null===e||ya?(io&&r&&eo(t),t.flags|=1,ba(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ha(e,t,i))}function za(e,t,n,r,i){if(Ai(n)){var o=!0;_i(t)}else o=!1;if(To(t,i),null===t.stateNode)Ua(e,t),sa(t,n,r),la(t,n,r,i),r=!0;else if(null===e){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;"object"===typeof c&&null!==c?c=Mo(c):c=Mi(t,c=Ai(n)?Ti:$i.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof s.getSnapshotBeforeUpdate;d||"function"!==typeof s.UNSAFE_componentWillReceiveProps&&"function"!==typeof s.componentWillReceiveProps||(a!==r||l!==c)&&aa(t,s,r,c),_o=!1;var h=t.memoizedState;s.state=h,Uo(t,r,s,i),l=t.memoizedState,a!==r||h!==l||Pi.current||_o?("function"===typeof u&&(ra(t,n,u,r),l=t.memoizedState),(a=_o||oa(t,n,a,r,h,l,c))?(d||"function"!==typeof s.UNSAFE_componentWillMount&&"function"!==typeof s.componentWillMount||("function"===typeof s.componentWillMount&&s.componentWillMount(),"function"===typeof s.UNSAFE_componentWillMount&&s.UNSAFE_componentWillMount()),"function"===typeof s.componentDidMount&&(t.flags|=4194308)):("function"===typeof s.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):("function"===typeof s.componentDidMount&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Vo(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:na(t.type,a),s.props=c,d=t.pendingProps,h=s.context,"object"===typeof(l=n.contextType)&&null!==l?l=Mo(l):l=Mi(t,l=Ai(n)?Ti:$i.current);var p=n.getDerivedStateFromProps;(u="function"===typeof p||"function"===typeof s.getSnapshotBeforeUpdate)||"function"!==typeof s.UNSAFE_componentWillReceiveProps&&"function"!==typeof s.componentWillReceiveProps||(a!==d||h!==l)&&aa(t,s,r,l),_o=!1,h=t.memoizedState,s.state=h,Uo(t,r,s,i);var f=t.memoizedState;a!==d||h!==f||Pi.current||_o?("function"===typeof p&&(ra(t,n,p,r),f=t.memoizedState),(c=_o||oa(t,n,c,r,h,f,l)||!1)?(u||"function"!==typeof s.UNSAFE_componentWillUpdate&&"function"!==typeof s.componentWillUpdate||("function"===typeof s.componentWillUpdate&&s.componentWillUpdate(r,f,l),"function"===typeof s.UNSAFE_componentWillUpdate&&s.UNSAFE_componentWillUpdate(r,f,l)),"function"===typeof s.componentDidUpdate&&(t.flags|=4),"function"===typeof s.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof s.componentDidUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!==typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),s.props=r,s.state=f,s.context=l,r=c):("function"!==typeof s.componentDidUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!==typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return $a(e,t,n,r,o,i)}function $a(e,t,n,r,i,o){Ca(e,t);var s=0!==(128&t.flags);if(!r&&!s)return i&&Di(t,n,!1),Ha(e,t,o);r=t.stateNode,va.current=t;var a=s&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&s?(t.child=wo(t,e.child,null,o),t.child=wo(t,null,a,o)):ba(e,t,a,o),t.memoizedState=r.state,i&&Di(t,n,!0),t.child}function Pa(e){var t=e.stateNode;t.pendingContext?Ii(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ii(0,t.context,!1),Qo(e,t.containerInfo)}function Ta(e,t,n,r,i){return fo(),mo(i),t.flags|=256,ba(e,t,n,r),t.child}var Ma,Aa,Ra,Ia,La={dehydrated:null,treeContext:null,retryLane:0};function _a(e){return{baseLanes:e,cachePool:null,transitions:null}}function Da(e,t,n){var r,i=t.pendingProps,s=es.current,a=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&s)),r?(a=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(s|=1),Ei(es,1&s),null===e)return co(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=i.children,e=i.fallback,a?(i=t.mode,a=t.child,l={mode:"hidden",children:l},0===(1&i)&&null!==a?(a.childLanes=0,a.pendingProps=l):a=_c(l,i,0,null),e=Lc(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=_a(n),t.memoizedState=La,e):Va(t,l));if(null!==(s=e.memoizedState)&&null!==(r=s.dehydrated))return function(e,t,n,r,i,s,a){if(n)return 256&t.flags?(t.flags&=-257,Fa(e,t,a,r=ua(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=_c({mode:"visible",children:r.children},i,0,null),(s=Lc(s,i,a,null)).flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,0!==(1&t.mode)&&wo(t,e.child,null,a),t.child.memoizedState=_a(a),t.memoizedState=La,s);if(0===(1&t.mode))return Fa(e,t,a,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var l=r.dgst;return r=l,Fa(e,t,a,r=ua(s=Error(o(419)),r,void 0))}if(l=0!==(a&e.childLanes),ya||l){if(null!==(r=Pl)){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|a))?0:i)&&i!==s.retryLane&&(s.retryLane=i,Lo(e,i),nc(r,e,i,-1))}return mc(),Fa(e,t,a,r=ua(Error(o(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=zc.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ro=ci(i.nextSibling),no=t,io=!0,oo=null,null!==e&&(Ki[Xi++]=Qi,Ki[Xi++]=qi,Ki[Xi++]=Gi,Qi=e.id,qi=e.overflow,Gi=t),t=Va(t,r.children),t.flags|=4096,t)}(e,t,l,i,r,s,n);if(a){a=i.fallback,l=t.mode,r=(s=e.child).sibling;var c={mode:"hidden",children:i.children};return 0===(1&l)&&t.child!==s?((i=t.child).childLanes=0,i.pendingProps=c,t.deletions=null):(i=Rc(s,c)).subtreeFlags=14680064&s.subtreeFlags,null!==r?a=Rc(r,a):(a=Lc(a,l,n,null)).flags|=2,a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,l=null===(l=e.child.memoizedState)?_a(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=La,i}return e=(a=e.child).sibling,i=Rc(a,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Va(e,t){return(t=_c({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fa(e,t,n,r){return null!==r&&mo(r),wo(t,e.child,null,n),(e=Va(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Oa(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Po(e.return,t,n)}function Ba(e,t,n,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Na(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ba(e,t,r.children,n),0!==(2&(r=es.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Oa(e,n,t);else if(19===e.tag)Oa(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ei(es,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ts(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ba(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ts(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ba(t,!0,n,null,o);break;case"together":Ba(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ua(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ha(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),_l|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Rc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Rc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Wa(e,t){if(!io)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ya(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ka(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ya(t),null;case 1:case 17:return Ai(t.type)&&Ri(),Ya(t),null;case 3:return r=t.stateNode,qo(),Ci(Pi),Ci($i),rs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(ho(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(sc(oo),oo=null))),Aa(e,t),Ya(t),null;case 5:Jo(t);var i=Go(Xo.current);if(n=t.type,null!==e&&null!=t.stateNode)Ra(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Ya(t),null}if(e=Go(Yo.current),ho(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[hi]=t,r[pi]=s,e=0!==(1&t.mode),n){case"dialog":Fr("cancel",r),Fr("close",r);break;case"iframe":case"object":case"embed":Fr("load",r);break;case"video":case"audio":for(i=0;i<Lr.length;i++)Fr(Lr[i],r);break;case"source":Fr("error",r);break;case"img":case"image":case"link":Fr("error",r),Fr("load",r);break;case"details":Fr("toggle",r);break;case"input":Q(r,s),Fr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Fr("invalid",r);break;case"textarea":ie(r,s),Fr("invalid",r)}for(var l in ve(n,s),i=null,s)if(s.hasOwnProperty(l)){var c=s[l];"children"===l?"string"===typeof c?r.textContent!==c&&(!0!==s.suppressHydrationWarning&&Zr(r.textContent,c,e),i=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==s.suppressHydrationWarning&&Zr(r.textContent,c,e),i=["children",""+c]):a.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&Fr("scroll",r)}switch(n){case"input":Y(r),J(r,s,!0);break;case"textarea":Y(r),se(r);break;case"select":case"option":break;default:"function"===typeof s.onClick&&(r.onclick=Jr)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=ae(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[hi]=t,e[pi]=r,Ma(e,t,!1,!1),t.stateNode=e;e:{switch(l=ye(n,r),n){case"dialog":Fr("cancel",e),Fr("close",e),i=r;break;case"iframe":case"object":case"embed":Fr("load",e),i=r;break;case"video":case"audio":for(i=0;i<Lr.length;i++)Fr(Lr[i],e);i=r;break;case"source":Fr("error",e),i=r;break;case"img":case"image":case"link":Fr("error",e),Fr("load",e),i=r;break;case"details":Fr("toggle",e),i=r;break;case"input":Q(e,r),i=G(e,r),Fr("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=D({},r,{value:void 0}),Fr("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),Fr("invalid",e)}for(s in ve(n,i),c=i)if(c.hasOwnProperty(s)){var u=c[s];"style"===s?ge(e,u):"dangerouslySetInnerHTML"===s?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===s?"string"===typeof u?("textarea"!==n||""!==u)&&he(e,u):"number"===typeof u&&he(e,""+u):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(a.hasOwnProperty(s)?null!=u&&"onScroll"===s&&Fr("scroll",e):null!=u&&y(e,s,u,l))}switch(n){case"input":Y(e),J(e,r,!1);break;case"textarea":Y(e),se(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(s=r.value)?ne(e,!!r.multiple,s,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ya(t),null;case 6:if(e&&null!=t.stateNode)Ia(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=Go(Xo.current),Go(Yo.current),ho(t)){if(r=t.stateNode,n=t.memoizedProps,r[hi]=t,(s=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Zr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zr(r.nodeValue,n,0!==(1&e.mode))}s&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[hi]=t,t.stateNode=r}return Ya(t),null;case 13:if(Ci(es),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(io&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))po(),fo(),t.flags|=98560,s=!1;else if(s=ho(t),null!==r&&null!==r.dehydrated){if(null===e){if(!s)throw Error(o(318));if(!(s=null!==(s=t.memoizedState)?s.dehydrated:null))throw Error(o(317));s[hi]=t}else fo(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ya(t),s=!1}else null!==oo&&(sc(oo),oo=null),s=!0;if(!s)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&es.current)?0===Il&&(Il=3):mc())),null!==t.updateQueue&&(t.flags|=4),Ya(t),null);case 4:return qo(),Aa(e,t),null===e&&Nr(t.stateNode.containerInfo),Ya(t),null;case 10:return $o(t.type._context),Ya(t),null;case 19:if(Ci(es),null===(s=t.memoizedState))return Ya(t),null;if(r=0!==(128&t.flags),null===(l=s.rendering))if(r)Wa(s,!1);else{if(0!==Il||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=ts(e))){for(t.flags|=128,Wa(s,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(s=n).flags&=14680066,null===(l=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ei(es,1&es.current|2),t.child}e=e.sibling}null!==s.tail&&qe()>Nl&&(t.flags|=128,r=!0,Wa(s,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ts(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Wa(s,!0),null===s.tail&&"hidden"===s.tailMode&&!l.alternate&&!io)return Ya(t),null}else 2*qe()-s.renderingStartTime>Nl&&1073741824!==n&&(t.flags|=128,r=!0,Wa(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=s.last)?n.sibling=l:t.child=l,s.last=l)}return null!==s.tail?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=qe(),t.sibling=null,n=es.current,Ei(es,r?1&n|2:1&n),t):(Ya(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Al)&&(Ya(t),6&t.subtreeFlags&&(t.flags|=8192)):Ya(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Xa(e,t){switch(to(t),t.tag){case 1:return Ai(t.type)&&Ri(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return qo(),Ci(Pi),Ci($i),rs(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Jo(t),null;case 13:if(Ci(es),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));fo()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ci(es),null;case 4:return qo(),null;case 10:return $o(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}Ma=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Aa=function(){},Ra=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Go(Yo.current);var o,s=null;switch(n){case"input":i=G(e,i),r=G(e,r),s=[];break;case"select":i=D({},i,{value:void 0}),r=D({},r,{value:void 0}),s=[];break;case"textarea":i=re(e,i),r=re(e,r),s=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=Jr)}for(u in ve(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(a.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(null!=c||null!=l))if("style"===u)if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(s=s||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(s=s||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(a.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Fr("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}},Ia=function(e,t,n,r){n!==r&&(t.flags|=4)};var Ga=!1,Qa=!1,qa="function"===typeof WeakSet?WeakSet:Set,Za=null;function Ja(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){kc(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){kc(e,t,r)}}var tl=!1;function nl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,void 0!==o&&el(t,n,o)}i=i.next}while(i!==r)}}function rl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function il(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function ol(e){var t=e.alternate;null!==t&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[hi],delete t[pi],delete t[mi],delete t[gi],delete t[xi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sl(e){return 5===e.tag||3===e.tag||4===e.tag}function al(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||sl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Jr));else if(4!==r&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}function cl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cl(e,t,n),e=e.sibling;null!==e;)cl(e,t,n),e=e.sibling}var ul=null,dl=!1;function hl(e,t,n){for(n=n.child;null!==n;)pl(e,t,n),n=n.sibling}function pl(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(it,n)}catch(a){}switch(n.tag){case 5:Qa||Ja(n,t);case 6:var r=ul,i=dl;ul=null,hl(e,t,n),dl=i,null!==(ul=r)&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):ul.removeChild(n.stateNode));break;case 18:null!==ul&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?li(e.parentNode,n):1===e.nodeType&&li(e,n),Nt(e)):li(ul,n.stateNode));break;case 4:r=ul,i=dl,ul=n.stateNode.containerInfo,dl=!0,hl(e,t,n),ul=r,dl=i;break;case 0:case 11:case 14:case 15:if(!Qa&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,void 0!==s&&(0!==(2&o)||0!==(4&o))&&el(n,t,s),i=i.next}while(i!==r)}hl(e,t,n);break;case 1:if(!Qa&&(Ja(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){kc(n,t,a)}hl(e,t,n);break;case 21:hl(e,t,n);break;case 22:1&n.mode?(Qa=(r=Qa)||null!==n.memoizedState,hl(e,t,n),Qa=r):hl(e,t,n);break;default:hl(e,t,n)}}function fl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new qa),t.forEach((function(t){var r=$c.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ml(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,l=a;e:for(;null!==l;){switch(l.tag){case 5:ul=l.stateNode,dl=!1;break e;case 3:case 4:ul=l.stateNode.containerInfo,dl=!0;break e}l=l.return}if(null===ul)throw Error(o(160));pl(s,a,i),ul=null,dl=!1;var c=i.alternate;null!==c&&(c.return=null),i.return=null}catch(u){kc(i,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gl(t,e),t=t.sibling}function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ml(t,e),xl(e),4&r){try{nl(3,e,e.return),rl(3,e)}catch(g){kc(e,e.return,g)}try{nl(5,e,e.return)}catch(g){kc(e,e.return,g)}}break;case 1:ml(t,e),xl(e),512&r&&null!==n&&Ja(n,n.return);break;case 5:if(ml(t,e),xl(e),512&r&&null!==n&&Ja(n,n.return),32&e.flags){var i=e.stateNode;try{he(i,"")}catch(g){kc(e,e.return,g)}}if(4&r&&null!=(i=e.stateNode)){var s=e.memoizedProps,a=null!==n?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===s.type&&null!=s.name&&q(i,s),ye(l,a);var u=ye(l,s);for(a=0;a<c.length;a+=2){var d=c[a],h=c[a+1];"style"===d?ge(i,h):"dangerouslySetInnerHTML"===d?de(i,h):"children"===d?he(i,h):y(i,d,h,u)}switch(l){case"input":Z(i,s);break;case"textarea":oe(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;null!=f?ne(i,!!s.multiple,f,!1):p!==!!s.multiple&&(null!=s.defaultValue?ne(i,!!s.multiple,s.defaultValue,!0):ne(i,!!s.multiple,s.multiple?[]:"",!1))}i[pi]=s}catch(g){kc(e,e.return,g)}}break;case 6:if(ml(t,e),xl(e),4&r){if(null===e.stateNode)throw Error(o(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(g){kc(e,e.return,g)}}break;case 3:if(ml(t,e),xl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Nt(t.containerInfo)}catch(g){kc(e,e.return,g)}break;case 4:default:ml(t,e),xl(e);break;case 13:ml(t,e),xl(e),8192&(i=e.child).flags&&(s=null!==i.memoizedState,i.stateNode.isHidden=s,!s||null!==i.alternate&&null!==i.alternate.memoizedState||(Bl=qe())),4&r&&fl(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Qa=(u=Qa)||d,ml(t,e),Qa=u):ml(t,e),xl(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Za=e,d=e.child;null!==d;){for(h=Za=d;null!==Za;){switch(f=(p=Za).child,p.tag){case 0:case 11:case 14:case 15:nl(4,p,p.return);break;case 1:Ja(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){kc(r,n,g)}}break;case 5:Ja(p,p.return);break;case 22:if(null!==p.memoizedState){wl(h);continue}}null!==f?(f.return=p,Za=f):wl(h)}d=d.sibling}e:for(d=null,h=e;;){if(5===h.tag){if(null===d){d=h;try{i=h.stateNode,u?"function"===typeof(s=i.style).setProperty?s.setProperty("display","none","important"):s.display="none":(l=h.stateNode,a=void 0!==(c=h.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,l.style.display=me("display",a))}catch(g){kc(e,e.return,g)}}}else if(6===h.tag){if(null===d)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(g){kc(e,e.return,g)}}else if((22!==h.tag&&23!==h.tag||null===h.memoizedState||h===e)&&null!==h.child){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;null===h.sibling;){if(null===h.return||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ml(t,e),xl(e),4&r&&fl(e);case 21:}}function xl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(sl(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(he(i,""),r.flags&=-33),cl(e,al(e),i);break;case 3:case 4:var s=r.stateNode.containerInfo;ll(e,al(e),s);break;default:throw Error(o(161))}}catch(a){kc(e,e.return,a)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function vl(e,t,n){Za=e,yl(e,t,n)}function yl(e,t,n){for(var r=0!==(1&e.mode);null!==Za;){var i=Za,o=i.child;if(22===i.tag&&r){var s=null!==i.memoizedState||Ga;if(!s){var a=i.alternate,l=null!==a&&null!==a.memoizedState||Qa;a=Ga;var c=Qa;if(Ga=s,(Qa=l)&&!c)for(Za=i;null!==Za;)l=(s=Za).child,22===s.tag&&null!==s.memoizedState?jl(i):null!==l?(l.return=s,Za=l):jl(i);for(;null!==o;)Za=o,yl(o,t,n),o=o.sibling;Za=i,Ga=a,Qa=c}bl(e)}else 0!==(8772&i.subtreeFlags)&&null!==o?(o.return=i,Za=o):bl(e)}}function bl(e){for(;null!==Za;){var t=Za;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Qa||rl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Qa)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:na(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;null!==s&&Ho(t,s,r);break;case 3:var a=t.updateQueue;if(null!==a){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ho(t,a,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var h=d.dehydrated;null!==h&&Nt(h)}}}break;default:throw Error(o(163))}Qa||512&t.flags&&il(t)}catch(p){kc(t,t.return,p)}}if(t===e){Za=null;break}if(null!==(n=t.sibling)){n.return=t.return,Za=n;break}Za=t.return}}function wl(e){for(;null!==Za;){var t=Za;if(t===e){Za=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Za=n;break}Za=t.return}}function jl(e){for(;null!==Za;){var t=Za;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(l){kc(t,n,l)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){kc(t,i,l)}}var o=t.return;try{il(t)}catch(l){kc(t,o,l)}break;case 5:var s=t.return;try{il(t)}catch(l){kc(t,s,l)}}}catch(l){kc(t,t.return,l)}if(t===e){Za=null;break}var a=t.sibling;if(null!==a){a.return=t.return,Za=a;break}Za=t.return}}var Sl,kl=Math.ceil,Cl=b.ReactCurrentDispatcher,El=b.ReactCurrentOwner,zl=b.ReactCurrentBatchConfig,$l=0,Pl=null,Tl=null,Ml=0,Al=0,Rl=ki(0),Il=0,Ll=null,_l=0,Dl=0,Vl=0,Fl=null,Ol=null,Bl=0,Nl=1/0,Ul=null,Hl=!1,Wl=null,Yl=null,Kl=!1,Xl=null,Gl=0,Ql=0,ql=null,Zl=-1,Jl=0;function ec(){return 0!==(6&$l)?qe():-1!==Zl?Zl:Zl=qe()}function tc(e){return 0===(1&e.mode)?1:0!==(2&$l)&&0!==Ml?Ml&-Ml:null!==go.transition?(0===Jl&&(Jl=mt()),Jl):0!==(e=yt)?e:e=void 0===(e=window.event)?16:Qt(e.type)}function nc(e,t,n,r){if(50<Ql)throw Ql=0,ql=null,Error(o(185));xt(e,n,r),0!==(2&$l)&&e===Pl||(e===Pl&&(0===(2&$l)&&(Dl|=n),4===Il&&ac(e,Ml)),rc(e,r),1===n&&0===$l&&0===(1&t.mode)&&(Nl=qe()+500,Fi&&Ni()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-st(o),a=1<<s,l=i[s];-1===l?0!==(a&n)&&0===(a&r)||(i[s]=pt(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}(e,t);var r=ht(e,e===Pl?Ml:0);if(0===r)null!==n&&Xe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Xe(n),1===t)0===e.tag?function(e){Fi=!0,Bi(e)}(lc.bind(null,e)):Bi(lc.bind(null,e)),si((function(){0===(6&$l)&&Ni()})),n=null;else{switch(bt(r)){case 1:n=Je;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Pc(n,ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ic(e,t){if(Zl=-1,Jl=0,0!==(6&$l))throw Error(o(327));var n=e.callbackNode;if(jc()&&e.callbackNode!==n)return null;var r=ht(e,e===Pl?Ml:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var i=$l;$l|=2;var s=fc();for(Pl===e&&Ml===t||(Ul=null,Nl=qe()+500,hc(e,t));;)try{vc();break}catch(l){pc(e,l)}zo(),Cl.current=s,$l=i,null!==Tl?t=0:(Pl=null,Ml=0,t=Il)}if(0!==t){if(2===t&&(0!==(i=ft(e))&&(r=i,t=oc(e,i))),1===t)throw n=Ll,hc(e,0),ac(e,r),rc(e,qe()),n;if(6===t)ac(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ar(o(),i))return!1}catch(a){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=gc(e,r))&&(0!==(s=ft(e))&&(r=s,t=oc(e,s))),1===t))throw n=Ll,hc(e,0),ac(e,r),rc(e,qe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:wc(e,Ol,Ul);break;case 3:if(ac(e,r),(130023424&r)===r&&10<(t=Bl+500-qe())){if(0!==ht(e,0))break;if(((i=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ri(wc.bind(null,e,Ol,Ul),t);break}wc(e,Ol,Ul);break;case 4:if(ac(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-st(r);s=1<<a,(a=t[a])>i&&(i=a),r&=~s}if(r=i,10<(r=(120>(r=qe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kl(r/1960))-r)){e.timeoutHandle=ri(wc.bind(null,e,Ol,Ul),r);break}wc(e,Ol,Ul);break;default:throw Error(o(329))}}}return rc(e,qe()),e.callbackNode===n?ic.bind(null,e):null}function oc(e,t){var n=Fl;return e.current.memoizedState.isDehydrated&&(hc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Ol,Ol=n,null!==t&&sc(t)),e}function sc(e){null===Ol?Ol=e:Ol.push.apply(Ol,e)}function ac(e,t){for(t&=~Vl,t&=~Dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),r=1<<n;e[n]=-1,t&=~r}}function lc(e){if(0!==(6&$l))throw Error(o(327));jc();var t=ht(e,0);if(0===(1&t))return rc(e,qe()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=ft(e);0!==r&&(t=r,n=oc(e,r))}if(1===n)throw n=Ll,hc(e,0),ac(e,t),rc(e,qe()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Ol,Ul),rc(e,qe()),null}function cc(e,t){var n=$l;$l|=1;try{return e(t)}finally{0===($l=n)&&(Nl=qe()+500,Fi&&Ni())}}function uc(e){null!==Xl&&0===Xl.tag&&0===(6&$l)&&jc();var t=$l;$l|=1;var n=zl.transition,r=yt;try{if(zl.transition=null,yt=1,e)return e()}finally{yt=r,zl.transition=n,0===(6&($l=t))&&Ni()}}function dc(){Al=Rl.current,Ci(Rl)}function hc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==Tl)for(n=Tl.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Ri();break;case 3:qo(),Ci(Pi),Ci($i),rs();break;case 5:Jo(r);break;case 4:qo();break;case 13:case 19:Ci(es);break;case 10:$o(r.type._context);break;case 22:case 23:dc()}n=n.return}if(Pl=e,Tl=e=Rc(e.current,null),Ml=Al=t,Il=0,Ll=null,Vl=Dl=_l=0,Ol=Fl=null,null!==Ao){for(t=0;t<Ao.length;t++)if(null!==(r=(n=Ao[t]).interleaved)){n.interleaved=null;var i=r.next,o=n.pending;if(null!==o){var s=o.next;o.next=i,r.next=s}n.pending=r}Ao=null}return e}function pc(e,t){for(;;){var n=Tl;try{if(zo(),is.current=Zs,us){for(var r=as.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}us=!1}if(ss=0,cs=ls=as=null,ds=!1,hs=0,El.current=null,null===n||null===n.return){Il=1,Ll=t,Tl=null;break}e:{var s=e,a=n.return,l=n,c=t;if(t=Ml,l.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=l,h=d.tag;if(0===(1&d.mode)&&(0===h||11===h||15===h)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var f=ga(a);if(null!==f){f.flags&=-257,xa(f,a,l,0,t),1&f.mode&&ma(s,u,t),c=u;var m=(t=f).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){ma(s,u,t),mc();break e}c=Error(o(426))}else if(io&&1&l.mode){var x=ga(a);if(null!==x){0===(65536&x.flags)&&(x.flags|=256),xa(x,a,l,0,t),mo(ca(c,l));break e}}s=c=ca(c,l),4!==Il&&(Il=2),null===Fl?Fl=[s]:Fl.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t,No(s,pa(0,c,t));break e;case 1:l=c;var v=s.type,y=s.stateNode;if(0===(128&s.flags)&&("function"===typeof v.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===Yl||!Yl.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t,No(s,fa(s,l,t));break e}}s=s.return}while(null!==s)}bc(n)}catch(b){t=b,Tl===n&&null!==n&&(Tl=n=n.return);continue}break}}function fc(){var e=Cl.current;return Cl.current=Zs,null===e?Zs:e}function mc(){0!==Il&&3!==Il&&2!==Il||(Il=4),null===Pl||0===(268435455&_l)&&0===(268435455&Dl)||ac(Pl,Ml)}function gc(e,t){var n=$l;$l|=2;var r=fc();for(Pl===e&&Ml===t||(Ul=null,hc(e,t));;)try{xc();break}catch(i){pc(e,i)}if(zo(),$l=n,Cl.current=r,null!==Tl)throw Error(o(261));return Pl=null,Ml=0,Il}function xc(){for(;null!==Tl;)yc(Tl)}function vc(){for(;null!==Tl&&!Ge();)yc(Tl)}function yc(e){var t=Sl(e.alternate,e,Al);e.memoizedProps=e.pendingProps,null===t?bc(e):Tl=t,El.current=null}function bc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Ka(n,t,Al)))return void(Tl=n)}else{if(null!==(n=Xa(n,t)))return n.flags&=32767,void(Tl=n);if(null===e)return Il=6,void(Tl=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Tl=t);Tl=t=e}while(null!==t);0===Il&&(Il=5)}function wc(e,t,n){var r=yt,i=zl.transition;try{zl.transition=null,yt=1,function(e,t,n,r){do{jc()}while(null!==Xl);if(0!==(6&$l))throw Error(o(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-st(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}(e,s),e===Pl&&(Tl=Pl=null,Ml=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Kl||(Kl=!0,Pc(tt,(function(){return jc(),null}))),s=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||s){s=zl.transition,zl.transition=null;var a=yt;yt=1;var l=$l;$l|=4,El.current=null,function(e,t){if(ei=Ht,pr(e=hr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch(w){n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,h=e,p=null;t:for(;;){for(var f;h!==n||0!==i&&3!==h.nodeType||(l=a+i),h!==s||0!==r&&3!==h.nodeType||(c=a+r),3===h.nodeType&&(a+=h.nodeValue.length),null!==(f=h.firstChild);)p=h,h=f;for(;;){if(h===e)break t;if(p===n&&++u===i&&(l=a),p===s&&++d===r&&(c=a),null!==(f=h.nextSibling))break;p=(h=p).parentNode}h=f}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},Ht=!1,Za=t;null!==Za;)if(e=(t=Za).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Za=e;else for(;null!==Za;){t=Za;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,x=m.memoizedState,v=t.stateNode,y=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:na(t.type,g),x);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(o(163))}}catch(w){kc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Za=e;break}Za=t.return}m=tl,tl=!1}(e,n),gl(n,e),fr(ti),Ht=!!ei,ti=ei=null,e.current=n,vl(n,e,i),Qe(),$l=l,yt=a,zl.transition=s}else e.current=n;if(Kl&&(Kl=!1,Xl=e,Gl=i),s=e.pendingLanes,0===s&&(Yl=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,qe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Hl)throw Hl=!1,e=Wl,Wl=null,e;0!==(1&Gl)&&0!==e.tag&&jc(),s=e.pendingLanes,0!==(1&s)?e===ql?Ql++:(Ql=0,ql=e):Ql=0,Ni()}(e,t,n,r)}finally{zl.transition=i,yt=r}return null}function jc(){if(null!==Xl){var e=bt(Gl),t=zl.transition,n=yt;try{if(zl.transition=null,yt=16>e?16:e,null===Xl)var r=!1;else{if(e=Xl,Xl=null,Gl=0,0!==(6&$l))throw Error(o(331));var i=$l;for($l|=4,Za=e.current;null!==Za;){var s=Za,a=s.child;if(0!==(16&Za.flags)){var l=s.deletions;if(null!==l){for(var c=0;c<l.length;c++){var u=l[c];for(Za=u;null!==Za;){var d=Za;switch(d.tag){case 0:case 11:case 15:nl(8,d,s)}var h=d.child;if(null!==h)h.return=d,Za=h;else for(;null!==Za;){var p=(d=Za).sibling,f=d.return;if(ol(d),d===u){Za=null;break}if(null!==p){p.return=f,Za=p;break}Za=f}}}var m=s.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(null!==g)}}Za=s}}if(0!==(2064&s.subtreeFlags)&&null!==a)a.return=s,Za=a;else e:for(;null!==Za;){if(0!==(2048&(s=Za).flags))switch(s.tag){case 0:case 11:case 15:nl(9,s,s.return)}var v=s.sibling;if(null!==v){v.return=s.return,Za=v;break e}Za=s.return}}var y=e.current;for(Za=y;null!==Za;){var b=(a=Za).child;if(0!==(2064&a.subtreeFlags)&&null!==b)b.return=a,Za=b;else e:for(a=y;null!==Za;){if(0!==(2048&(l=Za).flags))try{switch(l.tag){case 0:case 11:case 15:rl(9,l)}}catch(j){kc(l,l.return,j)}if(l===a){Za=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Za=w;break e}Za=l.return}}if($l=i,Ni(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(it,e)}catch(j){}r=!0}return r}finally{yt=n,zl.transition=t}}return!1}function Sc(e,t,n){e=Oo(e,t=pa(0,t=ca(n,t),1),1),t=ec(),null!==e&&(xt(e,1,t),rc(e,t))}function kc(e,t,n){if(3===e.tag)Sc(e,e,n);else for(;null!==t;){if(3===t.tag){Sc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Yl||!Yl.has(r))){t=Oo(t,e=fa(t,e=ca(n,e),1),1),e=ec(),null!==t&&(xt(t,1,e),rc(t,e));break}}t=t.return}}function Cc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,Pl===e&&(Ml&n)===n&&(4===Il||3===Il&&(130023424&Ml)===Ml&&500>qe()-Bl?hc(e,0):Vl|=n),rc(e,t)}function Ec(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=Lo(e,t))&&(xt(e,t,n),rc(e,n))}function zc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Ec(e,n)}function $c(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),Ec(e,n)}function Pc(e,t){return Ke(e,t)}function Tc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mc(e,t,n,r){return new Tc(e,t,n,r)}function Ac(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Rc(e,t){var n=e.alternate;return null===n?((n=Mc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ic(e,t,n,r,i,s){var a=2;if(r=e,"function"===typeof e)Ac(e)&&(a=1);else if("string"===typeof e)a=5;else e:switch(e){case S:return Lc(n.children,i,s,t);case k:a=8,i|=8;break;case C:return(e=Mc(12,n,t,2|i)).elementType=C,e.lanes=s,e;case P:return(e=Mc(13,n,t,i)).elementType=P,e.lanes=s,e;case T:return(e=Mc(19,n,t,i)).elementType=T,e.lanes=s,e;case R:return _c(n,i,s,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case E:a=10;break e;case z:a=9;break e;case $:a=11;break e;case M:a=14;break e;case A:a=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Mc(a,n,t,i)).elementType=e,t.type=r,t.lanes=s,t}function Lc(e,t,n,r){return(e=Mc(7,e,r,t)).lanes=n,e}function _c(e,t,n,r){return(e=Mc(22,e,r,t)).elementType=R,e.lanes=n,e.stateNode={isHidden:!1},e}function Dc(e,t,n){return(e=Mc(6,e,null,t)).lanes=n,e}function Vc(e,t,n){return(t=Mc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fc(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Oc(e,t,n,r,i,o,s,a,l){return e=new Fc(e,t,n,a,l),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Mc(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Do(o),e}function Bc(e){if(!e)return zi;e:{if(Ne(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ai(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(Ai(n))return Li(e,n,t)}return t}function Nc(e,t,n,r,i,o,s,a,l){return(e=Oc(n,r,!0,e,0,o,0,a,l)).context=Bc(null),n=e.current,(o=Fo(r=ec(),i=tc(n))).callback=void 0!==t&&null!==t?t:null,Oo(n,o,i),e.current.lanes=i,xt(e,i,r),rc(e,r),e}function Uc(e,t,n,r){var i=t.current,o=ec(),s=tc(i);return n=Bc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Fo(o,s)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Oo(i,t,s))&&(nc(e,i,s,o),Bo(e,i,s)),s}function Hc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Wc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Yc(e,t){Wc(e,t),(e=e.alternate)&&Wc(e,t)}Sl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Pi.current)ya=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return ya=!1,function(e,t,n){switch(t.tag){case 3:Pa(t),fo();break;case 5:Zo(t);break;case 1:Ai(t.type)&&_i(t);break;case 4:Qo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ei(So,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ei(es,1&es.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Da(e,t,n):(Ei(es,1&es.current),null!==(e=Ha(e,t,n))?e.sibling:null);Ei(es,1&es.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Na(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ei(es,es.current),r)break;return null;case 22:case 23:return t.lanes=0,ka(e,t,n)}return Ha(e,t,n)}(e,t,n);ya=0!==(131072&e.flags)}else ya=!1,io&&0!==(1048576&t.flags)&&Ji(t,Yi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ua(e,t),e=t.pendingProps;var i=Mi(t,$i.current);To(t,n),i=gs(null,t,r,e,i,n);var s=xs();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ai(r)?(s=!0,_i(t)):s=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Do(t),i.updater=ia,t.stateNode=i,i._reactInternals=t,la(t,r,e,n),t=$a(null,t,r,!0,s,n)):(t.tag=0,io&&s&&eo(t),ba(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ua(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return Ac(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===$)return 11;if(e===M)return 14}return 2}(r),e=na(r,e),i){case 0:t=Ea(null,t,r,e,n);break e;case 1:t=za(null,t,r,e,n);break e;case 11:t=wa(null,t,r,e,n);break e;case 14:t=ja(null,t,r,na(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Ea(e,t,r,i=t.elementType===r?i:na(r,i),n);case 1:return r=t.type,i=t.pendingProps,za(e,t,r,i=t.elementType===r?i:na(r,i),n);case 3:e:{if(Pa(t),null===e)throw Error(o(387));r=t.pendingProps,i=(s=t.memoizedState).element,Vo(e,t),Uo(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated){if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,256&t.flags){t=Ta(e,t,r,n,i=ca(Error(o(423)),t));break e}if(r!==i){t=Ta(e,t,r,n,i=ca(Error(o(424)),t));break e}for(ro=ci(t.stateNode.containerInfo.firstChild),no=t,io=!0,oo=null,n=jo(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(fo(),r===i){t=Ha(e,t,n);break e}ba(e,t,r,n)}t=t.child}return t;case 5:return Zo(t),null===e&&co(t),r=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,a=i.children,ni(r,i)?a=null:null!==s&&ni(r,s)&&(t.flags|=32),Ca(e,t),ba(e,t,a,n),t.child;case 6:return null===e&&co(t),null;case 13:return Da(e,t,n);case 4:return Qo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wo(t,null,r,n):ba(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,wa(e,t,r,i=t.elementType===r?i:na(r,i),n);case 7:return ba(e,t,t.pendingProps,n),t.child;case 8:case 12:return ba(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,Ei(So,r._currentValue),r._currentValue=a,null!==s)if(ar(s.value,a)){if(s.children===i.children&&!Pi.current){t=Ha(e,t,n);break e}}else for(null!==(s=t.child)&&(s.return=t);null!==s;){var l=s.dependencies;if(null!==l){a=s.child;for(var c=l.firstContext;null!==c;){if(c.context===r){if(1===s.tag){(c=Fo(-1,n&-n)).tag=2;var u=s.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,null!==(c=s.alternate)&&(c.lanes|=n),Po(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(10===s.tag)a=s.type===t.type?null:s.child;else if(18===s.tag){if(null===(a=s.return))throw Error(o(341));a.lanes|=n,null!==(l=a.alternate)&&(l.lanes|=n),Po(a,n,t),a=s.sibling}else a=s.child;if(null!==a)a.return=s;else for(a=s;null!==a;){if(a===t){a=null;break}if(null!==(s=a.sibling)){s.return=a.return,a=s;break}a=a.return}s=a}ba(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,To(t,n),r=r(i=Mo(i)),t.flags|=1,ba(e,t,r,n),t.child;case 14:return i=na(r=t.type,t.pendingProps),ja(e,t,r,i=na(r.type,i),n);case 15:return Sa(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:na(r,i),Ua(e,t),t.tag=1,Ai(r)?(e=!0,_i(t)):e=!1,To(t,n),sa(t,r,i),la(t,r,i,n),$a(null,t,r,!0,e,n);case 19:return Na(e,t,n);case 22:return ka(e,t,n)}throw Error(o(156,t.tag))};var Kc="function"===typeof reportError?reportError:function(e){console.error(e)};function Xc(e){this._internalRoot=e}function Gc(e){this._internalRoot=e}function Qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zc(){}function Jc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if("function"===typeof i){var a=i;i=function(){var e=Hc(s);a.call(e)}}Uc(t,s,e,i)}else s=function(e,t,n,r,i){if(i){if("function"===typeof r){var o=r;r=function(){var e=Hc(s);o.call(e)}}var s=Nc(t,r,e,0,null,!1,0,"",Zc);return e._reactRootContainer=s,e[fi]=s.current,Nr(8===e.nodeType?e.parentNode:e),uc(),s}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var a=r;r=function(){var e=Hc(l);a.call(e)}}var l=Oc(e,0,!1,null,0,!1,0,"",Zc);return e._reactRootContainer=l,e[fi]=l.current,Nr(8===e.nodeType?e.parentNode:e),uc((function(){Uc(t,l,n,r)})),l}(n,t,e,i,r);return Hc(s)}Gc.prototype.render=Xc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Uc(e,t,null,null)},Gc.prototype.unmount=Xc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){Uc(null,e,null,null)})),t[fi]=null}},Gc.prototype.unstable_scheduleHydration=function(e){if(e){var t=kt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&0!==t&&t<Rt[n].priority;n++);Rt.splice(n,0,e),0===n&&Dt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(vt(t,1|n),rc(t,qe()),0===(6&$l)&&(Nl=qe()+500,Ni()))}break;case 13:uc((function(){var t=Lo(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}})),Yc(e,1)}},jt=function(e){if(13===e.tag){var t=Lo(e,134217728);if(null!==t)nc(t,e,134217728,ec());Yc(e,134217728)}},St=function(e){if(13===e.tag){var t=tc(e),n=Lo(e,t);if(null!==n)nc(n,e,t,ec());Yc(e,t)}},kt=function(){return yt},Ct=function(e,t){var n=yt;try{return yt=e,t()}finally{yt=n}},je=function(e,t,n){switch(t){case"input":if(Z(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wi(r);if(!i)throw Error(o(90));K(r),Z(r,i)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},$e=cc,Pe=uc;var eu={usingClientEntryPoint:!1,Events:[yi,bi,wi,Ee,ze,cc]},tu={findFiberByHostInstance:vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=We(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{it=ru.inject(nu),ot=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Qc(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:j,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Qc(e))throw Error(o(299));var n=!1,r="",i=Kc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Oc(e,1,!1,null,0,n,0,r,i),e[fi]=t.current,Nr(8===e.nodeType?e.parentNode:e),new Xc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=We(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!qc(t))throw Error(o(200));return Jc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Qc(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,i=!1,s="",a=Kc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(s=n.identifierPrefix),void 0!==n.onRecoverableError&&(a=n.onRecoverableError)),t=Nc(t,null,e,1,null!=n?n:null,i,0,s,a),e[fi]=t.current,Nr(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Gc(t)},t.render=function(e,t,n){if(!qc(t))throw Error(o(200));return Jc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!qc(e))throw Error(o(40));return!!e._reactRootContainer&&(uc((function(){Jc(null,null,e,!1,(function(){e._reactRootContainer=null,e[fi]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!qc(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return Jc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".f66d0c84.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="mufi:";n.l=(r,i,o,s)=>{if(e[r])e[r].push(i);else{var a,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){a=d;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+o),a.src=r),e[r]=[i];var h=(t,n)=>{a.onerror=a.onload=null,clearTimeout(p);var i=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((e=>e(n))),t)return t(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),l&&document.head.appendChild(a)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/mufi_IR/",(()=>{var e={792:0};n.f.j=(t,r)=>{var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise(((n,r)=>i=e[t]=[n,r]));r.push(i[2]=o);var s=n.p+n.u(t),a=new Error;n.l(s,(r=>{if(n.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",a.name="ChunkLoadError",a.type=o,a.request=s,i[1](a)}}),"chunk-"+t,t)}};var t=(t,r)=>{var i,o,s=r[0],a=r[1],l=r[2],c=0;if(s.some((t=>0!==e[t]))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(l)l(n)}for(t&&t(r);c<s.length;c++)o=s[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkmufi=self.webpackChunkmufi||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391),r=(n(358),"popstate");function i(){return d((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return l("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:c(t)}),null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function o(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function s(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function a(e,t){return{usr:e.state,key:e.key,idx:t}}function l(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?u(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function c(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function u(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function d(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:s=document.defaultView,v5Compat:u=!1}=i,d=s.history,h="POP",p=null,f=m();function m(){return(d.state||{idx:null}).idx}function g(){h="POP";let e=m(),t=null==e?null:e-f;f=e,p&&p({action:h,location:v.location,delta:t})}function x(e){let t="null"!==s.location.origin?s.location.origin:s.location.href,n="string"===typeof e?e:c(e);return n=n.replace(/ $/,"%20"),o(t,`No window.location.(origin|href) available to create URL for href: ${n}`),new URL(n,t)}null==f&&(f=0,d.replaceState({...d.state,idx:f},""));let v={get action(){return h},get location(){return e(s,d)},listen(e){if(p)throw new Error("A history only accepts one active listener");return s.addEventListener(r,g),p=e,()=>{s.removeEventListener(r,g),p=null}},createHref:e=>t(s,e),createURL:x,encodeLocation(e){let t=x(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){h="PUSH";let r=l(v.location,e,t);n&&n(r,e),f=m()+1;let i=a(r,f),o=v.createHref(r);try{d.pushState(i,"",o)}catch(c){if(c instanceof DOMException&&"DataCloneError"===c.name)throw c;s.location.assign(o)}u&&p&&p({action:h,location:v.location,delta:1})},replace:function(e,t){h="REPLACE";let r=l(v.location,e,t);n&&n(r,e),f=m();let i=a(r,f),o=v.createHref(r);d.replaceState(i,"",o),u&&p&&p({action:h,location:v.location,delta:0})},go:e=>d.go(e)};return v}function h(e,t){return p(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function p(e,t,n,r){let i=z(("string"===typeof t?u(t):t).pathname||"/",n);if(null==i)return null;let o=f(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let s=null;for(let a=0;null==s&&a<o.length;++a){let e=E(i);s=k(o[a],e,r)}return s}function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=(e,i,s)=>{let a={relativePath:void 0===s?e.path||"":s,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};a.relativePath.startsWith("/")&&(o(a.relativePath.startsWith(r),`Absolute route path "${a.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),a.relativePath=a.relativePath.slice(r.length));let l=A([r,a.relativePath]),c=n.concat(a);e.children&&e.children.length>0&&(o(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),f(e.children,t,c,l)),(null!=e.path||e.index)&&t.push({path:l,score:S(l,e.index),routesMeta:c})};return e.forEach(((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of m(e.path))i(e,t,n);else i(e,t)})),t}function m(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return i?[o,""]:[o];let s=m(r.join("/")),a=[];return a.push(...s.map((e=>""===e?o:[o,e].join("/")))),i&&a.push(...s),a.map((t=>e.startsWith("/")&&""===t?"/":t))}var g=/^:[\w-]+$/,x=3,v=2,y=1,b=10,w=-2,j=e=>"*"===e;function S(e,t){let n=e.split("/"),r=n.length;return n.some(j)&&(r+=w),t&&(r+=v),n.filter((e=>!j(e))).reduce(((e,t)=>e+(g.test(t)?x:""===t?y:b)),r)}function k(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let e=r[a],l=a===r.length-1,c="/"===o?t:t.slice(o.length)||"/",u=C({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route;if(!u&&l&&n&&!r[r.length-1].route.index&&(u=C({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(i,u.params),s.push({params:i,pathname:A([o,u.pathname]),pathnameBase:R(A([o,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(o=A([o,u.pathnameBase]))}return s}function C(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];s("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let o=new RegExp(i,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=l[n]||"";a=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=i&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:o,pathnameBase:a,pattern:e}}function E(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return s(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function z(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function $(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function P(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function T(e){let t=P(e);return t.map(((e,n)=>n===t.length-1?e.pathname:e.pathnameBase))}function M(e,t,n){let r,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=u(e):(r={...e},o(!r.pathname||!r.pathname.includes("?"),$("?","pathname","search",r)),o(!r.pathname||!r.pathname.includes("#"),$("#","pathname","hash",r)),o(!r.search||!r.search.includes("#"),$("#","search","hash",r)));let s,a=""===e||""===r.pathname,l=a?"/":r.pathname;if(null==l)s=n;else{let e=t.length-1;if(!i&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}s=e>=0?t[e]:"/"}let c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:n,search:r="",hash:i=""}="string"===typeof e?u(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:I(r),hash:L(i)}}(r,s),d=l&&"/"!==l&&l.endsWith("/"),h=(a||"."===l)&&n.endsWith("/");return c.pathname.endsWith("/")||!d&&!h||(c.pathname+="/"),c}var A=e=>e.join("/").replace(/\/\/+/g,"/"),R=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),I=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",L=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function _(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var D=["POST","PUT","PATCH","DELETE"],V=(new Set(D),["GET",...D]);new Set(V),Symbol("ResetLoaderData");var F=e.createContext(null);F.displayName="DataRouter";var O=e.createContext(null);O.displayName="DataRouterState";var B=e.createContext({isTransitioning:!1});B.displayName="ViewTransition";var N=e.createContext(new Map);N.displayName="Fetchers";var U=e.createContext(null);U.displayName="Await";var H=e.createContext(null);H.displayName="Navigation";var W=e.createContext(null);W.displayName="Location";var Y=e.createContext({outlet:null,matches:[],isDataRoute:!1});Y.displayName="Route";var K=e.createContext(null);K.displayName="RouteError";function X(){return null!=e.useContext(W)}function G(){return o(X(),"useLocation() may be used only in the context of a <Router> component."),e.useContext(W).location}var Q="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function q(t){e.useContext(H).static||e.useLayoutEffect(t)}function Z(){let{isDataRoute:t}=e.useContext(Y);return t?function(){let{router:t}=ae("useNavigate"),n=ce("useNavigate"),r=e.useRef(!1);q((()=>{r.current=!0}));let i=e.useCallback((async function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s(r.current,Q),r.current&&("number"===typeof e?t.navigate(e):await t.navigate(e,{fromRouteId:n,...i}))}),[t,n]);return i}():function(){o(X(),"useNavigate() may be used only in the context of a <Router> component.");let t=e.useContext(F),{basename:n,navigator:r}=e.useContext(H),{matches:i}=e.useContext(Y),{pathname:a}=G(),l=JSON.stringify(T(i)),c=e.useRef(!1);q((()=>{c.current=!0}));let u=e.useCallback((function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s(c.current,Q),!c.current)return;if("number"===typeof e)return void r.go(e);let o=M(e,JSON.parse(l),a,"path"===i.relative);null==t&&"/"!==n&&(o.pathname="/"===o.pathname?n:A([n,o.pathname])),(i.replace?r.replace:r.push)(o,i.state,i)}),[n,r,l,a,t]);return u}()}e.createContext(null);function J(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:r}=e.useContext(Y),{pathname:i}=G(),o=JSON.stringify(T(r));return e.useMemo((()=>M(t,JSON.parse(o),i,"path"===n)),[t,o,i,n])}function ee(t,n,r,i){o(X(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:l}=e.useContext(H),{matches:c}=e.useContext(Y),d=c[c.length-1],p=d?d.params:{},f=d?d.pathname:"/",m=d?d.pathnameBase:"/",g=d&&d.route;{let e=g&&g.path||"";he(f,!g||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let x,v=G();if(n){let e="string"===typeof n?u(n):n;o("/"===m||e.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${e.pathname}" was given in the \`location\` prop.`),x=e}else x=v;let y=x.pathname||"/",b=y;if("/"!==m){let e=m.replace(/^\//,"").split("/");b="/"+y.replace(/^\//,"").split("/").slice(e.length).join("/")}let w=!l&&r&&r.matches&&r.matches.length>0?r.matches:h(t,{pathname:b});s(g||null!=w,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),s(null==w||void 0!==w[w.length-1].route.element||void 0!==w[w.length-1].route.Component||void 0!==w[w.length-1].route.lazy,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let j=oe(w&&w.map((e=>Object.assign({},e,{params:Object.assign({},p,e.params),pathname:A([m,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?m:A([m,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),c,r,i);return n&&j?e.createElement(W.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},j):j}function te(){let t=ue(),n=_(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},s={padding:"2px 4px",backgroundColor:i},a=null;return console.error("Error handled by React Router default ErrorBoundary:",t),a=e.createElement(e.Fragment,null,e.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),e.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",e.createElement("code",{style:s},"ErrorBoundary")," or"," ",e.createElement("code",{style:s},"errorElement")," prop on your route.")),e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),r?e.createElement("pre",{style:o},r):null,a)}var ne=e.createElement(te,null),re=class extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?e.createElement(Y.Provider,{value:this.props.routeContext},e.createElement(K.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ie(t){let{routeContext:n,match:r,children:i}=t,o=e.useContext(F);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),e.createElement(Y.Provider,{value:n},i)}function oe(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==t){if(!r)return null;if(r.errors)t=r.matches;else{if(0!==n.length||r.initialized||!(r.matches.length>0))return null;t=r.matches}}let i=t,s=r?.errors;if(null!=s){let e=i.findIndex((e=>e.route.id&&void 0!==s?.[e.route.id]));o(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,e+1))}let a=!1,l=-1;if(r)for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(l=e),t.route.id){let{loaderData:e,errors:n}=r,o=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!n||void 0===n[t.route.id]);if(t.route.lazy||o){a=!0,i=l>=0?i.slice(0,l+1):[i[0]];break}}}return i.reduceRight(((t,o,c)=>{let u,d=!1,h=null,p=null;r&&(u=s&&o.route.id?s[o.route.id]:void 0,h=o.route.errorElement||ne,a&&(l<0&&0===c?(he("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):l===c&&(d=!0,p=o.route.hydrateFallbackElement||null)));let f=n.concat(i.slice(0,c+1)),m=()=>{let n;return n=u?h:d?p:o.route.Component?e.createElement(o.route.Component,null):o.route.element?o.route.element:t,e.createElement(ie,{match:o,routeContext:{outlet:t,matches:f,isDataRoute:null!=r},children:n})};return r&&(o.route.ErrorBoundary||o.route.errorElement||0===c)?e.createElement(re,{location:r.location,revalidation:r.revalidation,component:h,error:u,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()}),null)}function se(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ae(t){let n=e.useContext(F);return o(n,se(t)),n}function le(t){let n=e.useContext(O);return o(n,se(t)),n}function ce(t){let n=function(t){let n=e.useContext(Y);return o(n,se(t)),n}(t),r=n.matches[n.matches.length-1];return o(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function ue(){let t=e.useContext(K),n=le("useRouteError"),r=ce("useRouteError");return void 0!==t?t:n.errors?.[r]}var de={};function he(e,t,n){t||de[e]||(de[e]=!0,s(!1,n))}e.memo((function(e){let{routes:t,future:n,state:r}=e;return ee(t,void 0,r,n)}));function pe(e){o(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function fe(t){let{basename:n="/",children:r=null,location:i,navigationType:a="POP",navigator:l,static:c=!1}=t;o(!X(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),h=e.useMemo((()=>({basename:d,navigator:l,static:c,future:{}})),[d,l,c]);"string"===typeof i&&(i=u(i));let{pathname:p="/",search:f="",hash:m="",state:g=null,key:x="default"}=i,v=e.useMemo((()=>{let e=z(p,d);return null==e?null:{location:{pathname:e,search:f,hash:m,state:g,key:x},navigationType:a}}),[d,p,f,m,g,x,a]);return s(null!=v,`<Router basename="${d}"> is not able to match the URL "${p}${f}${m}" because it does not start with the basename, so the <Router> won't render anything.`),null==v?null:e.createElement(H.Provider,{value:h},e.createElement(W.Provider,{children:r,value:v}))}function me(e){let{children:t,location:n}=e;return ee(ge(t),n)}e.Component;function ge(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return e.Children.forEach(t,((t,i)=>{if(!e.isValidElement(t))return;let s=[...n,i];if(t.type===e.Fragment)return void r.push.apply(r,ge(t.props.children,s));o(t.type===pe,`[${"string"===typeof t.type?t.type:t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),o(!t.props.index||!t.props.children,"An index route cannot have child routes.");let a={id:t.props.id||s.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,hydrateFallbackElement:t.props.hydrateFallbackElement,HydrateFallback:t.props.HydrateFallback,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:!0===t.props.hasErrorBoundary||null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(a.children=ge(t.props.children,s)),r.push(a)})),r}var xe="get",ve="application/x-www-form-urlencoded";function ye(e){return null!=e&&"string"===typeof e.tagName}var be=null;var we=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function je(e){return null==e||we.has(e)?e:(s(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ve}"`),null)}function Se(e,t){let n,r,i,o,s;if(ye(a=e)&&"form"===a.tagName.toLowerCase()){let s=e.getAttribute("action");r=s?z(s,t):null,n=e.getAttribute("method")||xe,i=je(e.getAttribute("enctype"))||ve,o=new FormData(e)}else if(function(e){return ye(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return ye(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let s=e.form;if(null==s)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let a=e.getAttribute("formaction")||s.getAttribute("action");if(r=a?z(a,t):null,n=e.getAttribute("formmethod")||s.getAttribute("method")||xe,i=je(e.getAttribute("formenctype"))||je(s.getAttribute("enctype"))||ve,o=new FormData(s,e),!function(){if(null===be)try{new FormData(document.createElement("form"),0),be=!1}catch(e){be=!0}return be}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";o.append(`${e}x`,"0"),o.append(`${e}y`,"0")}else t&&o.append(t,r)}}else{if(ye(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=xe,r=null,i=ve,s=e}var a;return o&&"text/plain"===i&&(s=o,o=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:o,body:s}}function ke(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}async function Ce(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise((()=>{}))}}function Ee(e){return null!=e&&"string"===typeof e.page}function ze(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function $e(e,t,n,r,i,o){let s=(e,t)=>!n[t]||e.route.id!==n[t].route.id,a=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===o?t.filter(((e,t)=>s(e,t)||a(e,t))):"data"===o?t.filter(((t,o)=>{let l=r.routes[t.route.id];if(!l||!l.hasLoader)return!1;if(s(t,o)||a(t,o))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0})):[]}function Pe(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map((e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i})).flat(1),[...new Set(r)];var r}function Te(e,t){let n=new Set,r=new Set(t);return e.reduce(((e,i)=>{if(t&&!Ee(i)&&"script"===i.as&&i.href&&r.has(i.href))return e;let o=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(i));return n.has(o)||(n.add(o),e.push({key:o,link:i})),e}),[])}function Me(e){return{__html:e}}Symbol("SingleFetchRedirect");function Ae(e){let t="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===t.pathname?t.pathname="_root.data":t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}e.Component;function Re(t){let{error:n,isOutsideRemixApp:r}=t;console.error(n);let i,o=e.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      '}});if(_(n))return e.createElement(Ie,{title:"Unhandled Thrown Response!"},e.createElement("h1",{style:{fontSize:"24px"}},n.status," ",n.statusText),o);if(n instanceof Error)0;else{let e=null==n?"Unknown Error":"object"===typeof n&&"toString"in n?n.toString():JSON.stringify(n);new Error(e)}return e.createElement(Ie,{title:"Application Error!",isOutsideRemixApp:r},e.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),e.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},i.stack),o)}function Ie(t){let{title:n,renderScripts:r,isOutsideRemixApp:i,children:o}=t,{routeModules:s}=Fe();return s.root?.Layout&&!i?o:e.createElement("html",{lang:"en"},e.createElement("head",null,e.createElement("meta",{charSet:"utf-8"}),e.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),e.createElement("title",null,n)),e.createElement("body",null,e.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},o,r?e.createElement(Ye,null):null)))}function Le(e){return!0===e}function _e(){let t=e.useContext(F);return ke(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function De(){let t=e.useContext(O);return ke(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Ve=e.createContext(void 0);function Fe(){let t=e.useContext(Ve);return ke(t,"You must render this element inside a <HydratedRouter> element"),t}function Oe(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Be(e,t,n){if(n&&!We)return[e[0]];if(t){let n=e.findIndex((e=>void 0!==t[e.route.id]));return e.slice(0,n+1)}return e}function Ne(t){let{page:n,...r}=t,{router:i}=_e(),o=e.useMemo((()=>h(i.routes,n,i.basename)),[i.routes,n,i.basename]);return o?e.createElement(He,{page:n,matches:o,...r}):null}function Ue(t){let{manifest:n,routeModules:r}=Fe(),[i,o]=e.useState([]);return e.useEffect((()=>{let e=!1;return async function(e,t,n){let r=await Promise.all(e.map((async e=>{let r=t.routes[e.route.id];if(r){let e=await Ce(r,n);return e.links?e.links():[]}return[]})));return Te(r.flat(1).filter(ze).filter((e=>"stylesheet"===e.rel||"preload"===e.rel)).map((e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"})))}(t,n,r).then((t=>{e||o(t)})),()=>{e=!0}}),[t,n,r]),i}function He(t){let{page:n,matches:r,...i}=t,o=G(),{manifest:s,routeModules:a}=Fe(),{loaderData:l,matches:c}=De(),u=e.useMemo((()=>$e(n,r,c,s,o,"data")),[n,r,c,s,o]),d=e.useMemo((()=>$e(n,r,c,s,o,"assets")),[n,r,c,s,o]),h=e.useMemo((()=>{if(n===o.pathname+o.search+o.hash)return[];let e=new Set,t=!1;if(r.forEach((n=>{let r=s.routes[n.route.id];r&&r.hasLoader&&(!u.some((e=>e.route.id===n.route.id))&&n.route.id in l&&a[n.route.id]?.shouldRevalidate||r.hasClientLoader?t=!0:e.add(n.route.id))})),0===e.size)return[];let i=Ae(n);return t&&e.size>0&&i.searchParams.set("_routes",r.filter((t=>e.has(t.route.id))).map((e=>e.route.id)).join(",")),[i.pathname+i.search]}),[l,o,s,u,r,n,a]),p=e.useMemo((()=>Pe(d,s)),[d,s]),f=Ue(d);return e.createElement(e.Fragment,null,h.map((t=>e.createElement("link",{key:t,rel:"prefetch",as:"fetch",href:t,...i}))),p.map((t=>e.createElement("link",{key:t,rel:"modulepreload",href:t,...i}))),f.map((t=>{let{key:n,link:r}=t;return e.createElement("link",{key:n,...r})})))}Ve.displayName="FrameworkContext";var We=!1;function Ye(t){let{manifest:n,serverHandoffString:r,isSpaMode:i,ssr:o,renderMeta:s}=Fe(),{router:a,static:l,staticContext:c}=_e(),{matches:u}=De(),d=Le(o);s&&(s.didRenderScripts=!0);let p=Be(u,null,i);e.useEffect((()=>{0}),[]);let f=e.useMemo((()=>{let i=c?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",o=l?`${n.hmr?.runtime?`import ${JSON.stringify(n.hmr.runtime)};`:""}${d?"":`import ${JSON.stringify(n.url)}`};\n${p.map(((e,t)=>{let r=`route${t}`,i=n.routes[e.route.id];ke(i,`Route ${e.route.id} not found in manifest`);let{clientActionModule:o,clientLoaderModule:s,hydrateFallbackModule:a,module:l}=i,c=[...o?[{module:o,varName:`${r}_clientAction`}]:[],...s?[{module:s,varName:`${r}_clientLoader`}]:[],...a?[{module:a,varName:`${r}_HydrateFallback`}]:[],{module:l,varName:`${r}_main`}];return 1===c.length?`import * as ${r} from ${JSON.stringify(l)};`:[c.map((e=>`import * as ${e.varName} from "${e.module}";`)).join("\n"),`const ${r} = {${c.map((e=>`...${e.varName}`)).join(",")}};`].join("\n")})).join("\n")}\n  ${d?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let n=new Set(t.state.matches.map((e=>e.route.id))),r=t.state.location.pathname.split("/").filter(Boolean),i=["/"];for(r.pop();r.length>0;)i.push(`/${r.join("/")}`),r.pop();i.forEach((e=>{let r=h(t.routes,e,t.basename);r&&r.forEach((e=>n.add(e.route.id)))}));let o=[...n].reduce(((t,n)=>Object.assign(t,{[n]:e.routes[n]})),{});return{...e,routes:o}}(n,a),null,2)};`:""}\n  window.__reactRouterRouteModules = {${p.map(((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`)).join(",")}};\n\nimport(${JSON.stringify(n.entry.module)});`:" ";return e.createElement(e.Fragment,null,e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Me(i),type:void 0}),e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Me(o),type:"module",async:!0}))}),[]),m=We?[]:n.entry.imports.concat(Pe(p,n,{includeHydrateFallback:!0}));return We?null:e.createElement(e.Fragment,null,d?null:e.createElement("link",{rel:"modulepreload",href:n.url,crossOrigin:t.crossOrigin}),e.createElement("link",{rel:"modulepreload",href:n.entry.module,crossOrigin:t.crossOrigin}),[...new Set(g)].map((n=>e.createElement("link",{key:n,rel:"modulepreload",href:n,crossOrigin:t.crossOrigin}))),f);var g}function Ke(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)}))}}var Xe="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{Xe&&(window.__reactRouterVersion="7.2.0")}catch(rj){}function Ge(t){let{basename:n,children:r,window:o}=t,s=e.useRef();null==s.current&&(s.current=i({window:o,v5Compat:!0}));let a=s.current,[l,c]=e.useState({action:a.action,location:a.location}),u=e.useCallback((t=>{e.startTransition((()=>c(t)))}),[c]);return e.useLayoutEffect((()=>a.listen(u)),[a,u]),e.createElement(fe,{basename:n,children:r,location:l.location,navigationType:l.action,navigator:a})}var Qe=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qe=e.forwardRef((function(t,n){let r,{onClick:i,discover:a="render",prefetch:l="none",relative:u,reloadDocument:d,replace:h,state:p,target:f,to:m,preventScrollReset:g,viewTransition:x,...v}=t,{basename:y}=e.useContext(H),b="string"===typeof m&&Qe.test(m),w=!1;if("string"===typeof m&&b&&(r=m,Xe))try{let e=new URL(window.location.href),t=m.startsWith("//")?new URL(e.protocol+m):new URL(m),n=z(t.pathname,y);t.origin===e.origin&&null!=n?m=n+t.search+t.hash:w=!0}catch(rj){s(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let j=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(X(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:i}=e.useContext(H),{hash:s,pathname:a,search:l}=J(t,{relative:n}),c=a;return"/"!==r&&(c="/"===a?r:A([r,a])),i.createHref({pathname:c,search:l,hash:s})}(m,{relative:u}),[S,k,C]=function(t,n){let r=e.useContext(Ve),[i,o]=e.useState(!1),[s,a]=e.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:d,onTouchStart:h}=n,p=e.useRef(null);e.useEffect((()=>{if("render"===t&&a(!0),"viewport"===t){let e=new IntersectionObserver((e=>{e.forEach((e=>{a(e.isIntersecting)}))}),{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}}),[t]),e.useEffect((()=>{if(i){let e=setTimeout((()=>{a(!0)}),100);return()=>{clearTimeout(e)}}}),[i]);let f=()=>{o(!0)},m=()=>{o(!1),a(!1)};return r?"intent"!==t?[s,p,{}]:[s,p,{onFocus:Oe(l,f),onBlur:Oe(c,m),onMouseEnter:Oe(u,f),onMouseLeave:Oe(d,m),onTouchStart:Oe(h,f)}]:[!1,p,{}]}(l,v),E=function(t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=Z(),u=G(),d=J(t,{relative:s});return e.useCallback((e=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(e,n)){e.preventDefault();let n=void 0!==r?r:c(u)===c(d);l(t,{replace:n,state:i,preventScrollReset:o,relative:s,viewTransition:a})}}),[u,l,d,r,i,n,t,o,s,a])}(m,{replace:h,state:p,target:f,preventScrollReset:g,relative:u,viewTransition:x});let $=e.createElement("a",{...v,...C,href:r||j,onClick:w||d?i:function(e){i&&i(e),e.defaultPrevented||E(e)},ref:Ke(n,k),target:f,"data-discover":b||"render"!==a?void 0:"true"});return S&&!b?e.createElement(e.Fragment,null,$,e.createElement(Ne,{page:j})):$}));qe.displayName="Link";var Ze=e.forwardRef((function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:a=!1,style:l,to:c,viewTransition:u,children:d,...h}=t,p=J(c,{relative:h.relative}),f=G(),m=e.useContext(O),{navigator:g,basename:x}=e.useContext(H),v=null!=m&&function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.useContext(B);o(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=tt("useViewTransitionState"),s=J(t,{relative:n.relative});if(!r.isTransitioning)return!1;let a=z(r.currentLocation.pathname,i)||r.currentLocation.pathname,l=z(r.nextLocation.pathname,i)||r.nextLocation.pathname;return null!=C(s.pathname,l)||null!=C(s.pathname,a)}(p)&&!0===u,y=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,b=f.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(b=b.toLowerCase(),w=w?w.toLowerCase():null,y=y.toLowerCase()),w&&x&&(w=z(w,x)||w);const j="/"!==y&&y.endsWith("/")?y.length-1:y.length;let S,k=b===y||!a&&b.startsWith(y)&&"/"===b.charAt(j),E=null!=w&&(w===y||!a&&w.startsWith(y)&&"/"===w.charAt(y.length)),$={isActive:k,isPending:E,isTransitioning:v},P=k?r:void 0;S="function"===typeof s?s($):[s,k?"active":null,E?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let T="function"===typeof l?l($):l;return e.createElement(qe,{...h,"aria-current":P,className:S,ref:n,style:T,to:c,viewTransition:u},"function"===typeof d?d($):d)}));Ze.displayName="NavLink";var Je=e.forwardRef(((t,n)=>{let{discover:r="render",fetcherKey:i,navigate:s,reloadDocument:a,replace:l,state:u,method:d=xe,action:h,onSubmit:p,relative:f,preventScrollReset:m,viewTransition:g,...x}=t,v=it(),y=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:r}=e.useContext(H),i=e.useContext(Y);o(i,"useFormAction must be used inside a RouteContext");let[s]=i.matches.slice(-1),a={...J(t||".",{relative:n})},l=G();if(null==t){a.search=l.search;let e=new URLSearchParams(a.search),t=e.getAll("index"),n=t.some((e=>""===e));if(n){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let n=e.toString();a.search=n?`?${n}`:""}}t&&"."!==t||!s.route.index||(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(a.pathname="/"===a.pathname?r:A([r,a.pathname]));return c(a)}(h,{relative:f}),b="get"===d.toLowerCase()?"get":"post",w="string"===typeof h&&Qe.test(h);return e.createElement("form",{ref:n,method:b,action:y,onSubmit:a?p:e=>{if(p&&p(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||d;v(t||e.currentTarget,{fetcherKey:i,method:n,navigate:s,replace:l,state:u,relative:f,preventScrollReset:m,viewTransition:g})},...x,"data-discover":w||"render"!==r?void 0:"true"})}));function et(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tt(t){let n=e.useContext(F);return o(n,et(t)),n}Je.displayName="Form";var nt=0,rt=()=>`__${String(++nt)}__`;function it(){let{router:t}=tt("useSubmit"),{basename:n}=e.useContext(H),r=ce("useRouteId");return e.useCallback((async function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:o,method:s,encType:a,formData:l,body:c}=Se(e,n);if(!1===i.navigate){let e=i.fetcherKey||rt();await t.fetch(e,r,i.action||o,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||s,formEncType:i.encType||a,flushSync:i.flushSync})}else await t.navigate(i.action||o,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||s,formEncType:i.encType||a,replace:i.replace,state:i.state,fromRouteId:r,flushSync:i.flushSync,viewTransition:i.viewTransition})}),[t,n,r])}new TextEncoder;var ot=function(){return ot=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},ot.apply(this,arguments)};Object.create;function st(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var at=n(324),lt=n.n(at),ct="-ms-",ut="-moz-",dt="-webkit-",ht="comm",pt="rule",ft="decl",mt="@keyframes",gt=Math.abs,xt=String.fromCharCode,vt=Object.assign;function yt(e){return e.trim()}function bt(e,t){return(e=t.exec(e))?e[0]:e}function wt(e,t,n){return e.replace(t,n)}function jt(e,t,n){return e.indexOf(t,n)}function St(e,t){return 0|e.charCodeAt(t)}function kt(e,t,n){return e.slice(t,n)}function Ct(e){return e.length}function Et(e){return e.length}function zt(e,t){return t.push(e),e}function $t(e,t){return e.filter((function(e){return!bt(e,t)}))}var Pt=1,Tt=1,Mt=0,At=0,Rt=0,It="";function Lt(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Pt,column:Tt,length:s,return:"",siblings:a}}function _t(e,t){return vt(Lt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Dt(e){for(;e.root;)e=_t(e.root,{children:[e]});zt(e,e.siblings)}function Vt(){return Rt=At>0?St(It,--At):0,Tt--,10===Rt&&(Tt=1,Pt--),Rt}function Ft(){return Rt=At<Mt?St(It,At++):0,Tt++,10===Rt&&(Tt=1,Pt++),Rt}function Ot(){return St(It,At)}function Bt(){return At}function Nt(e,t){return kt(It,e,t)}function Ut(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ht(e){return Pt=Tt=1,Mt=Ct(It=e),At=0,[]}function Wt(e){return It="",e}function Yt(e){return yt(Nt(At-1,Gt(91===e?e+2:40===e?e+1:e)))}function Kt(e){for(;(Rt=Ot())&&Rt<33;)Ft();return Ut(e)>2||Ut(Rt)>3?"":" "}function Xt(e,t){for(;--t&&Ft()&&!(Rt<48||Rt>102||Rt>57&&Rt<65||Rt>70&&Rt<97););return Nt(e,Bt()+(t<6&&32==Ot()&&32==Ft()))}function Gt(e){for(;Ft();)switch(Rt){case e:return At;case 34:case 39:34!==e&&39!==e&&Gt(Rt);break;case 40:41===e&&Gt(e);break;case 92:Ft()}return At}function Qt(e,t){for(;Ft()&&e+Rt!==57&&(e+Rt!==84||47!==Ot()););return"/*"+Nt(t,At-1)+"*"+xt(47===e?e:Ft())}function qt(e){for(;!Ut(Ot());)Ft();return Nt(e,At)}function Zt(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Jt(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case ft:return e.return=e.return||e.value;case ht:return"";case mt:return e.return=e.value+"{"+Zt(e.children,r)+"}";case pt:if(!Ct(e.value=e.props.join(",")))return""}return Ct(n=Zt(e.children,r))?e.return=e.value+"{"+n+"}":""}function en(e,t,n){switch(function(e,t){return 45^St(e,0)?(((t<<2^St(e,0))<<2^St(e,1))<<2^St(e,2))<<2^St(e,3):0}(e,t)){case 5103:return dt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return dt+e+e;case 4789:return ut+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return dt+e+ut+e+ct+e+e;case 5936:switch(St(e,t+11)){case 114:return dt+e+ct+wt(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return dt+e+ct+wt(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return dt+e+ct+wt(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return dt+e+ct+e+e;case 6165:return dt+e+ct+"flex-"+e+e;case 5187:return dt+e+wt(e,/(\w+).+(:[^]+)/,dt+"box-$1$2"+ct+"flex-$1$2")+e;case 5443:return dt+e+ct+"flex-item-"+wt(e,/flex-|-self/g,"")+(bt(e,/flex-|baseline/)?"":ct+"grid-row-"+wt(e,/flex-|-self/g,""))+e;case 4675:return dt+e+ct+"flex-line-pack"+wt(e,/align-content|flex-|-self/g,"")+e;case 5548:return dt+e+ct+wt(e,"shrink","negative")+e;case 5292:return dt+e+ct+wt(e,"basis","preferred-size")+e;case 6060:return dt+"box-"+wt(e,"-grow","")+dt+e+ct+wt(e,"grow","positive")+e;case 4554:return dt+wt(e,/([^-])(transform)/g,"$1"+dt+"$2")+e;case 6187:return wt(wt(wt(e,/(zoom-|grab)/,dt+"$1"),/(image-set)/,dt+"$1"),e,"")+e;case 5495:case 3959:return wt(e,/(image-set\([^]*)/,dt+"$1$`$1");case 4968:return wt(wt(e,/(.+:)(flex-)?(.*)/,dt+"box-pack:$3"+ct+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+dt+e+e;case 4200:if(!bt(e,/flex-|baseline/))return ct+"grid-column-align"+kt(e,t)+e;break;case 2592:case 3360:return ct+wt(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,bt(e.props,/grid-\w+-end/)}))?~jt(e+(n=n[t].value),"span",0)?e:ct+wt(e,"-start","")+e+ct+"grid-row-span:"+(~jt(n,"span",0)?bt(n,/\d+/):+bt(n,/\d+/)-+bt(e,/\d+/))+";":ct+wt(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return bt(e.props,/grid-\w+-start/)}))?e:ct+wt(wt(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return wt(e,/(.+)-inline(.+)/,dt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ct(e)-1-t>6)switch(St(e,t+1)){case 109:if(45!==St(e,t+4))break;case 102:return wt(e,/(.+:)(.+)-([^]+)/,"$1"+dt+"$2-$3$1"+ut+(108==St(e,t+3)?"$3":"$2-$3"))+e;case 115:return~jt(e,"stretch",0)?en(wt(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return wt(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,i,o,s,a){return ct+n+":"+r+a+(i?ct+n+"-span:"+(o?s:+s-+r)+a:"")+e}));case 4949:if(121===St(e,t+6))return wt(e,":",":"+dt)+e;break;case 6444:switch(St(e,45===St(e,14)?18:11)){case 120:return wt(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+dt+(45===St(e,14)?"inline-":"")+"box$3$1"+dt+"$2$3$1"+ct+"$2box$3")+e;case 100:return wt(e,":",":"+ct)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return wt(e,"scroll-","scroll-snap-")+e}return e}function tn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ft:return void(e.return=en(e.value,e.length,n));case mt:return Zt([_t(e,{value:wt(e.value,"@","@"+dt)})],r);case pt:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(bt(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Dt(_t(e,{props:[wt(t,/:(read-\w+)/,":-moz-$1")]})),Dt(_t(e,{props:[t]})),vt(e,{props:$t(n,r)});break;case"::placeholder":Dt(_t(e,{props:[wt(t,/:(plac\w+)/,":"+dt+"input-$1")]})),Dt(_t(e,{props:[wt(t,/:(plac\w+)/,":-moz-$1")]})),Dt(_t(e,{props:[wt(t,/:(plac\w+)/,ct+"input-$1")]})),Dt(_t(e,{props:[t]})),vt(e,{props:$t(n,r)})}return""}))}}function nn(e){return Wt(rn("",null,null,null,[""],e=Ht(e),0,[0],e))}function rn(e,t,n,r,i,o,s,a,l){for(var c=0,u=0,d=s,h=0,p=0,f=0,m=1,g=1,x=1,v=0,y="",b=i,w=o,j=r,S=y;g;)switch(f=v,v=Ft()){case 40:if(108!=f&&58==St(S,d-1)){-1!=jt(S+=wt(Yt(v),"&","&\f"),"&\f",gt(c?a[c-1]:0))&&(x=-1);break}case 34:case 39:case 91:S+=Yt(v);break;case 9:case 10:case 13:case 32:S+=Kt(f);break;case 92:S+=Xt(Bt()-1,7);continue;case 47:switch(Ot()){case 42:case 47:zt(sn(Qt(Ft(),Bt()),t,n,l),l);break;default:S+="/"}break;case 123*m:a[c++]=Ct(S)*x;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:-1==x&&(S=wt(S,/\f/g,"")),p>0&&Ct(S)-d&&zt(p>32?an(S+";",r,n,d-1,l):an(wt(S," ","")+";",r,n,d-2,l),l);break;case 59:S+=";";default:if(zt(j=on(S,t,n,c,u,i,a,y,b=[],w=[],d,o),o),123===v)if(0===u)rn(S,t,j,j,b,o,d,a,w);else switch(99===h&&110===St(S,3)?100:h){case 100:case 108:case 109:case 115:rn(e,j,j,r&&zt(on(e,j,j,0,0,i,a,y,i,b=[],d,w),w),i,w,d,a,r?b:w);break;default:rn(S,j,j,j,[""],w,0,a,w)}}c=u=p=0,m=x=1,y=S="",d=s;break;case 58:d=1+Ct(S),p=f;default:if(m<1)if(123==v)--m;else if(125==v&&0==m++&&125==Vt())continue;switch(S+=xt(v),v*m){case 38:x=u>0?1:(S+="\f",-1);break;case 44:a[c++]=(Ct(S)-1)*x,x=1;break;case 64:45===Ot()&&(S+=Yt(Ft())),h=Ot(),u=d=Ct(y=S+=qt(Bt())),v++;break;case 45:45===f&&2==Ct(S)&&(m=0)}}return o}function on(e,t,n,r,i,o,s,a,l,c,u,d){for(var h=i-1,p=0===i?o:[""],f=Et(p),m=0,g=0,x=0;m<r;++m)for(var v=0,y=kt(e,h+1,h=gt(g=s[m])),b=e;v<f;++v)(b=yt(g>0?p[v]+" "+y:wt(y,/&\f/g,p[v])))&&(l[x++]=b);return Lt(e,t,n,0===i?pt:a,l,c,u,d)}function sn(e,t,n,r){return Lt(e,t,n,ht,xt(Rt),kt(e,2,-2),0,r)}function an(e,t,n,r,i){return Lt(e,t,n,ft,kt(e,0,r),kt(e,r+1,-1),r,i)}var ln={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},cn="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/mufi_IR",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/mufi_IR",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/mufi_IR",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",un="active",dn="data-styled-version",hn="6.1.15",pn="/*!sc*/\n",fn="undefined"!=typeof window&&"HTMLElement"in window,mn=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/mufi_IR",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/mufi_IR",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/mufi_IR",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/mufi_IR",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/mufi_IR",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/mufi_IR",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/mufi_IR",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/mufi_IR",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/mufi_IR",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/mufi_IR",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),gn={},xn=(new Set,Object.freeze([])),vn=Object.freeze({});function yn(e,t,n){return void 0===n&&(n=vn),e.theme!==n.theme&&e.theme||t||n.theme}var bn=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),wn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,jn=/(^-|-$)/g;function Sn(e){return e.replace(wn,"-").replace(jn,"")}var kn=/(a)(d)/gi,Cn=function(e){return String.fromCharCode(e+(e>25?39:97))};function En(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Cn(t%52)+n;return(Cn(t%52)+n).replace(kn,"$1-$2")}var zn,$n=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Pn=function(e){return $n(5381,e)};function Tn(e){return En(Pn(e)>>>0)}function Mn(e){return e.displayName||e.name||"Component"}function An(e){return"string"==typeof e&&!0}var Rn="function"==typeof Symbol&&Symbol.for,In=Rn?Symbol.for("react.memo"):60115,Ln=Rn?Symbol.for("react.forward_ref"):60112,_n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Dn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Vn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Fn=((zn={})[Ln]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},zn[In]=Vn,zn);function On(e){return("type"in(t=e)&&t.type.$$typeof)===In?Vn:"$$typeof"in e?Fn[e.$$typeof]:_n;var t}var Bn=Object.defineProperty,Nn=Object.getOwnPropertyNames,Un=Object.getOwnPropertySymbols,Hn=Object.getOwnPropertyDescriptor,Wn=Object.getPrototypeOf,Yn=Object.prototype;function Kn(e,t,n){if("string"!=typeof t){if(Yn){var r=Wn(t);r&&r!==Yn&&Kn(e,r,n)}var i=Nn(t);Un&&(i=i.concat(Un(t)));for(var o=On(e),s=On(t),a=0;a<i.length;++a){var l=i[a];if(!(l in Dn||n&&n[l]||s&&l in s||o&&l in o)){var c=Hn(t,l);try{Bn(e,l,c)}catch(e){}}}}return e}function Xn(e){return"function"==typeof e}function Gn(e){return"object"==typeof e&&"styledComponentId"in e}function Qn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function qn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Zn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Jn(e,t,n){if(void 0===n&&(n=!1),!n&&!Zn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Jn(e[r],t[r]);else if(Zn(t))for(var r in t)e[r]=Jn(e[r],t[r]);return e}function er(e,t){Object.defineProperty(e,"toString",{value:t})}function tr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var nr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw tr(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var o=r;o<i;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(e+1),a=(o=0,t.length);o<a;o++)this.tag.insertRule(s,t[o])&&(this.groupSizes[e]++,s++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,o=r;o<i;o++)t+="".concat(this.tag.getRule(o)).concat(pn);return t},e}(),rr=new Map,ir=new Map,or=1,sr=function(e){if(rr.has(e))return rr.get(e);for(;ir.has(or);)or++;var t=or++;return rr.set(e,t),ir.set(t,e),t},ar=function(e,t){or=t+1,rr.set(e,t),ir.set(t,e)},lr="style[".concat(cn,"][").concat(dn,'="').concat(hn,'"]'),cr=new RegExp("^".concat(cn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ur=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},dr=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(pn),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(cr);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(ar(u,c),ur(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},hr=function(e){for(var t=document.querySelectorAll(lr),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(cn)!==un&&(dr(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function pr(){return n.nc}var fr=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(cn,"]")));return t[t.length-1]}(n),o=void 0!==i?i.nextSibling:null;r.setAttribute(cn,un),r.setAttribute(dn,hn);var s=pr();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},mr=function(){function e(e){this.element=fr(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw tr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),gr=function(){function e(e){this.element=fr(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),xr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),vr=fn,yr={isServer:!fn,useCSSOMInjection:!mn},br=function(){function e(e,t,n){void 0===e&&(e=vn),void 0===t&&(t={});var r=this;this.options=ot(ot({},yr),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&fn&&vr&&(vr=!1,hr(this)),er(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return ir.get(e)}(n);if(void 0===i)return"continue";var o=e.names.get(i),s=t.getGroup(n);if(void 0===o||!o.size||0===s.length)return"continue";var a="".concat(cn,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==o&&o.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),r+="".concat(s).concat(a,'{content:"').concat(l,'"}').concat(pn)},o=0;o<n;o++)i(o);return r}(r)}))}return e.registerId=function(e){return sr(e)},e.prototype.rehydrate=function(){!this.server&&fn&&hr(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(ot(ot({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new xr(n):t?new mr(n):new gr(n)}(this.options),new nr(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(sr(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(sr(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(sr(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),wr=/&/g,jr=/^\s*\/\/.*$/gm;function Sr(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Sr(e.children,t)),e}))}function kr(e){var t,n,r,i=void 0===e?vn:e,o=i.options,s=void 0===o?vn:o,a=i.plugins,l=void 0===a?xn:a,c=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push((function(e){e.type===pt&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(wr,n).replace(r,c))})),s.prefix&&u.push(tn),u.push(Jt);var d=function(e,i,o,a){void 0===i&&(i=""),void 0===o&&(o=""),void 0===a&&(a="&"),t=a,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(jr,""),c=nn(o||i?"".concat(o," ").concat(i," { ").concat(l," }"):l);s.namespace&&(c=Sr(c,s.namespace));var d,h=[];return Zt(c,function(e){var t=Et(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}(u.concat((d=function(e){return h.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),h};return d.hash=l.length?l.reduce((function(e,t){return t.name||tr(15),$n(e,t.name)}),5381).toString():"",d}var Cr=new br,Er=kr(),zr=e.createContext({shouldForwardProp:void 0,styleSheet:Cr,stylis:Er}),$r=(zr.Consumer,e.createContext(void 0));function Pr(){return(0,e.useContext)(zr)}function Tr(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],i=n[1],o=Pr().styleSheet,s=(0,e.useMemo)((function(){var e=o;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,o]),a=(0,e.useMemo)((function(){return kr({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){lt()(r,t.stylisPlugins)||i(t.stylisPlugins)}),[t.stylisPlugins]);var l=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:s,stylis:a}}),[t.shouldForwardProp,s,a]);return e.createElement(zr.Provider,{value:l},e.createElement($r.Provider,{value:a},t.children))}var Mr=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Er);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,er(this,(function(){throw tr(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Er),this.name+e.hash},e}(),Ar=function(e){return e>="A"&&e<="Z"};function Rr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Ar(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ir=function(e){return null==e||!1===e||""===e},Lr=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Ir(o)&&(Array.isArray(o)&&o.isCss||Xn(o)?r.push("".concat(Rr(i),":"),o,";"):Zn(o)?r.push.apply(r,st(st(["".concat(i," {")],Lr(o),!1),["}"],!1)):r.push("".concat(Rr(i),": ").concat((t=i,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in ln||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function _r(e,t,n,r){return Ir(e)?[]:Gn(e)?[".".concat(e.styledComponentId)]:Xn(e)?!Xn(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:_r(e(t),t,n,r):e instanceof Mr?n?(e.inject(n,r),[e.getName(r)]):[e]:Zn(e)?Lr(e):Array.isArray(e)?Array.prototype.concat.apply(xn,e.map((function(e){return _r(e,t,n,r)}))):[e.toString()];var i}function Dr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Xn(n)&&!Gn(n))return!1}return!0}var Vr=Pn(hn),Fr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Dr(e),this.componentId=t,this.baseHash=$n(Vr,t),this.baseStyle=n,br.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Qn(r,this.staticRulesId);else{var i=qn(_r(this.rules,e,t,n)),o=En($n(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,o)){var s=n(i,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,s)}r=Qn(r,o),this.staticRulesId=o}else{for(var a=$n(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=qn(_r(u,e,t,n));a=$n(a,d+c),l+=d}}if(l){var h=En(a>>>0);t.hasNameForId(this.componentId,h)||t.insertRules(this.componentId,h,n(l,".".concat(h),void 0,this.componentId)),r=Qn(r,h)}}return r},e}(),Or=e.createContext(void 0);Or.Consumer;var Br={};new Set;function Nr(t,n,r){var i=Gn(t),o=t,s=!An(t),a=n.attrs,l=void 0===a?xn:a,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Sn(e);Br[n]=(Br[n]||0)+1;var r="".concat(n,"-").concat(Tn(hn+n+Br[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,h=void 0===d?function(e){return An(e)?"styled.".concat(e):"Styled(".concat(Mn(e),")")}(t):d,p=n.displayName&&n.componentId?"".concat(Sn(n.displayName),"-").concat(n.componentId):n.componentId||u,f=i&&o.attrs?o.attrs.concat(l).filter(Boolean):l,m=n.shouldForwardProp;if(i&&o.shouldForwardProp){var g=o.shouldForwardProp;if(n.shouldForwardProp){var x=n.shouldForwardProp;m=function(e,t){return g(e,t)&&x(e,t)}}else m=g}var v=new Fr(r,p,i?o.componentStyle:void 0);function y(t,n){return function(t,n,r){var i=t.attrs,o=t.componentStyle,s=t.defaultProps,a=t.foldedComponentIds,l=t.styledComponentId,c=t.target,u=e.useContext(Or),d=Pr(),h=t.shouldForwardProp||d.shouldForwardProp,p=yn(n,u,s)||vn,f=function(e,t,n){for(var r,i=ot(ot({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var s=Xn(r=e[o])?r(i):r;for(var a in s)i[a]="className"===a?Qn(i[a],s[a]):"style"===a?ot(ot({},i[a]),s[a]):s[a]}return t.className&&(i.className=Qn(i.className,t.className)),i}(i,n,p),m=f.as||c,g={};for(var x in f)void 0===f[x]||"$"===x[0]||"as"===x||"theme"===x&&f.theme===p||("forwardedAs"===x?g.as=f.forwardedAs:h&&!h(x,m)||(g[x]=f[x]));var v=function(e,t){var n=Pr();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,f),y=Qn(a,l);return v&&(y+=" "+v),f.className&&(y+=" "+f.className),g[An(m)&&!bn.has(m)?"class":"className"]=y,r&&(g.ref=r),(0,e.createElement)(m,g)}(b,t,n)}y.displayName=h;var b=e.forwardRef(y);return b.attrs=f,b.componentStyle=v,b.displayName=h,b.shouldForwardProp=m,b.foldedComponentIds=i?Qn(o.foldedComponentIds,o.styledComponentId):"",b.styledComponentId=p,b.target=i?o.target:t,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)Jn(e,i[r],!0);return e}({},o.defaultProps,e):e}}),er(b,(function(){return".".concat(b.styledComponentId)})),s&&Kn(b,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function Ur(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Hr=function(e){return Object.assign(e,{isCss:!0})};function Wr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Xn(e)||Zn(e))return Hr(_r(Ur(xn,st([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?_r(r):Hr(_r(Ur(r,t)))}function Yr(e,t,n){if(void 0===n&&(n=vn),!t)throw tr(1,t);var r=function(r){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,Wr.apply(void 0,st([r],i,!1)))};return r.attrs=function(r){return Yr(e,t,ot(ot({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Yr(e,t,ot(ot({},n),r))},r}var Kr=function(e){return Yr(Nr,e)},Xr=Kr;bn.forEach((function(e){Xr[e]=Kr(e)}));var Gr=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Dr(e),br.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(qn(_r(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&br.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Qr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=qn(Wr.apply(void 0,st([e],t,!1))),i=Tn(r);return new Mr(i,r)}(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=pr(),r=qn([n&&'nonce="'.concat(n,'"'),"".concat(cn,'="true"'),"".concat(dn,'="').concat(hn,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw tr(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw tr(2);var r=t.instance.toString();if(!r)return[];var i=((n={})[cn]="",n[dn]=hn,n.dangerouslySetInnerHTML={__html:r},n),o=pr();return o&&(i.nonce=o),[e.createElement("style",ot({},i,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new br({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw tr(2);return e.createElement(Tr,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw tr(3)}})(),"__sc-".concat(cn,"__");var qr=n(579);const Zr=(0,e.createContext)({});function Jr(t){const n=(0,e.useRef)(null);return null===n.current&&(n.current=t()),n.current}const ei=(0,e.createContext)(null),ti=(0,e.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class ni extends e.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=t.offsetParent,n=e instanceof HTMLElement&&e.offsetWidth||0,r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft,r.right=n-r.width-r.left}return null}componentDidUpdate(){}render(){return this.props.children}}function ri(t){let{children:n,isPresent:r,anchorX:i}=t;const o=(0,e.useId)(),s=(0,e.useRef)(null),a=(0,e.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=(0,e.useContext)(ti);return(0,e.useInsertionEffect)((()=>{const{width:e,height:t,top:n,left:c,right:u}=a.current;if(r||!s.current||!e||!t)return;const d="left"===i?`left: ${c}`:`right: ${u}`;s.current.dataset.motionPopId=o;const h=document.createElement("style");return l&&(h.nonce=l),document.head.appendChild(h),h.sheet&&h.sheet.insertRule(`\n          [data-motion-pop-id="${o}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            ${d}px !important;\n            top: ${n}px !important;\n          }\n        `),()=>{document.head.removeChild(h)}}),[r]),(0,qr.jsx)(ni,{isPresent:r,childRef:s,sizeRef:a,children:e.cloneElement(n,{ref:s})})}const ii=t=>{let{children:n,initial:r,isPresent:i,onExitComplete:o,custom:s,presenceAffectsLayout:a,mode:l,anchorX:c}=t;const u=Jr(oi),d=(0,e.useId)(),h=(0,e.useCallback)((e=>{u.set(e,!0);for(const t of u.values())if(!t)return;o&&o()}),[u,o]),p=(0,e.useMemo)((()=>({id:d,initial:r,isPresent:i,custom:s,onExitComplete:h,register:e=>(u.set(e,!1),()=>u.delete(e))})),a?[Math.random(),h]:[i,h]);return(0,e.useMemo)((()=>{u.forEach(((e,t)=>u.set(t,!1)))}),[i]),e.useEffect((()=>{!i&&!u.size&&o&&o()}),[i]),"popLayout"===l&&(n=(0,qr.jsx)(ri,{isPresent:i,anchorX:c,children:n})),(0,qr.jsx)(ei.Provider,{value:p,children:n})};function oi(){return new Map}function si(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const n=(0,e.useContext)(ei);if(null===n)return[!0,null];const{isPresent:r,onExitComplete:i,register:o}=n,s=(0,e.useId)();(0,e.useEffect)((()=>{if(t)return o(s)}),[t]);const a=(0,e.useCallback)((()=>t&&i&&i(s)),[s,i,t]);return!r&&i?[!1,a]:[!0]}const ai=e=>e.key||"";function li(t){const n=[];return e.Children.forEach(t,(t=>{(0,e.isValidElement)(t)&&n.push(t)})),n}const ci="undefined"!==typeof window,ui=ci?e.useLayoutEffect:e.useEffect,di=t=>{let{children:n,custom:r,initial:i=!0,onExitComplete:o,presenceAffectsLayout:s=!0,mode:a="sync",propagate:l=!1,anchorX:c="left"}=t;const[u,d]=si(l),h=(0,e.useMemo)((()=>li(n)),[n]),p=l&&!u?[]:h.map(ai),f=(0,e.useRef)(!0),m=(0,e.useRef)(h),g=Jr((()=>new Map)),[x,v]=(0,e.useState)(h),[y,b]=(0,e.useState)(h);ui((()=>{f.current=!1,m.current=h;for(let e=0;e<y.length;e++){const t=ai(y[e]);p.includes(t)?g.delete(t):!0!==g.get(t)&&g.set(t,!1)}}),[y,p.length,p.join("-")]);const w=[];if(h!==x){let e=[...h];for(let t=0;t<y.length;t++){const n=y[t],r=ai(n);p.includes(r)||(e.splice(t,0,n),w.push(n))}return"wait"===a&&w.length&&(e=w),b(li(e)),v(h),null}const{forceRender:j}=(0,e.useContext)(Zr);return(0,qr.jsx)(qr.Fragment,{children:y.map((e=>{const t=ai(e),n=!(l&&!u)&&(h===y||p.includes(t));return(0,qr.jsx)(ii,{isPresent:n,initial:!(f.current&&!i)&&void 0,custom:r,presenceAffectsLayout:s,mode:a,onExitComplete:n?void 0:()=>{if(!g.has(t))return;g.set(t,!0);let e=!0;g.forEach((t=>{t||(e=!1)})),e&&(null===j||void 0===j||j(),b(m.current),l&&(null===d||void 0===d||d()),o&&o())},anchorX:c,children:e},t)}))})};function hi(e){if("undefined"===typeof Proxy)return e;const t=new Map;return new Proxy((function(){return e(...arguments)}),{get:(n,r)=>"create"===r?e:(t.has(r)||t.set(r,e(r)),t.get(r))})}function pi(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}function fi(e){const t=[{},{}];return null===e||void 0===e||e.values.forEach(((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()})),t}function mi(e,t,n,r){if("function"===typeof t){const[i,o]=fi(r);t=t(void 0!==n?n:e.custom,i,o)}if("string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t){const[i,o]=fi(r);t=t(void 0!==n?n:e.custom,i,o)}return t}function gi(e,t,n){const r=e.getProps();return mi(r,t,void 0!==n?n:r.custom,e)}function xi(e){let t;return()=>(void 0===t&&(t=e()),t)}const vi=xi((()=>void 0!==window.ScrollTimeline));class yi{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map((e=>"finished"in e?e.finished:e)))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=t}attachTimeline(e,t){const n=this.animations.map((n=>vi()&&n.attachTimeline?n.attachTimeline(e):"function"===typeof t?t(n):void 0));return()=>{n.forEach(((e,t)=>{e&&e(),this.animations[t].stop()}))}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach((t=>t[e]()))}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class bi extends yi{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function wi(e,t){return e?e[t]||e.default||e:void 0}const ji=2e4;function Si(e){let t=0;let n=e.next(t);for(;!n.done&&t<ji;)t+=50,n=e.next(t);return t>=ji?1/0:t}function ki(e){return"function"===typeof e}function Ci(e,t){e.timeline=t,e.onfinish=null}const Ei=e=>Array.isArray(e)&&"number"===typeof e[0],zi={linearEasing:void 0};function $i(e,t){const n=xi(e);return()=>{var e;return null!==(e=zi[t])&&void 0!==e?e:n()}}const Pi=$i((()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(rj){return!1}return!0}),"linearEasing"),Ti=(e,t,n)=>{const r=t-e;return 0===r?1:(n-e)/r},Mi=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=e(Ti(0,i-1,o))+", ";return`linear(${r.substring(0,r.length-2)})`};function Ai(e){return Boolean("function"===typeof e&&Pi()||!e||"string"===typeof e&&(e in Ii||Pi())||Ei(e)||Array.isArray(e)&&e.every(Ai))}const Ri=e=>{let[t,n,r,i]=e;return`cubic-bezier(${t}, ${n}, ${r}, ${i})`},Ii={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ri([0,.65,.55,1]),circOut:Ri([.55,0,1,.45]),backIn:Ri([.31,.01,.66,-.59]),backOut:Ri([.33,1.53,.69,.99])};function Li(e,t){return e?"function"===typeof e&&Pi()?Mi(e,t):Ei(e)?Ri(e):Array.isArray(e)?e.map((e=>Li(e,t)||Ii.easeOut)):Ii[e]:void 0}const _i={x:!1,y:!1};function Di(){return _i.x||_i.y}function Vi(e,t){const n=function(e,t,n){var r;if(e instanceof EventTarget)return[e];if("string"===typeof e){let i=document;t&&(i=t.current);const o=null!==(r=null===n||void 0===n?void 0:n[e])&&void 0!==r?r:i.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function Fi(e){return!("touch"===e.pointerType||Di())}function Oi(e,t){const n=`${t}PointerCapture`;if(e.target instanceof Element&&n in e.target&&void 0!==e.pointerId)try{e.target[n](e.pointerId)}catch(rj){}}const Bi=(e,t)=>!!t&&(e===t||Bi(e,t.parentElement)),Ni=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary,Ui=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);const Hi=new WeakSet;function Wi(e){return t=>{"Enter"===t.key&&e(t)}}function Yi(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}function Ki(e){return Ni(e)&&!Di()}function Xi(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[r,i,o]=Vi(e,n),s=e=>{const n=e.currentTarget;if(!n||!Ki(e)||Hi.has(n))return;Hi.add(n),Oi(e,"set");const r=t(n,e),o=(e,t)=>{n.removeEventListener("pointerup",s),n.removeEventListener("pointercancel",a),Oi(e,"release"),Ki(e)&&Hi.has(n)&&(Hi.delete(n),"function"===typeof r&&r(e,{success:t}))},s=e=>{const t=!!e.isTrusted&&(r=e,i=n instanceof Element?n.getBoundingClientRect():{left:0,top:0,right:window.innerWidth,bottom:window.innerHeight},r.clientX<i.left||r.clientX>i.right||r.clientY<i.top||r.clientY>i.bottom);var r,i;o(e,!t&&(!(n instanceof Element)||Bi(n,e.target)))},a=e=>{o(e,!1)};n.addEventListener("pointerup",s,i),n.addEventListener("pointercancel",a,i),n.addEventListener("lostpointercapture",a,i)};return r.forEach((e=>{let t=!1;var r;(e=n.useGlobalTarget?window:e)instanceof HTMLElement&&(t=!0,r=e,Ui.has(r.tagName)||-1!==r.tabIndex||null!==e.getAttribute("tabindex")||(e.tabIndex=0)),e.addEventListener("pointerdown",s,i),t&&e.addEventListener("focus",(e=>((e,t)=>{const n=e.currentTarget;if(!n)return;const r=Wi((()=>{if(Hi.has(n))return;Yi(n,"down");const e=Wi((()=>{Yi(n,"up")}));n.addEventListener("keyup",e,t),n.addEventListener("blur",(()=>Yi(n,"cancel")),t)}));n.addEventListener("keydown",r,t),n.addEventListener("blur",(()=>n.removeEventListener("keydown",r)),t)})(e,i)),i)})),o}const Gi=e=>1e3*e,Qi=e=>e/1e3,qi=e=>e;const Zi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ji=new Set(Zi),eo=new Set(["width","height","top","left","right","bottom",...Zi]),to=e=>Array.isArray(e),no=e=>to(e)?e[e.length-1]||0:e,ro=!1,io=!1,oo=["read","resolveKeyframes","update","preRender","render","postRender"],so={value:null,addProjectionMetrics:null};function ao(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=oo.reduce(((e,n)=>(e[n]=function(e,t){let n=new Set,r=new Set,i=!1,o=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1},l=0;function c(t){s.has(t)&&(u.schedule(t),e()),l++,t(a)}const u={schedule:function(e){const t=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&i?n:r;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&s.add(e),t.has(e)||t.add(e),e},cancel:e=>{r.delete(e),s.delete(e)},process:e=>{a=e,i?o=!0:(i=!0,[n,r]=[r,n],n.forEach(c),t&&so.value&&so.value.frameloop[t].push(l),l=0,n.clear(),i=!1,o&&(o=!1,u.process(e)))}};return u}(o,t?n:void 0),e)),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:d,postRender:h}=s,p=()=>{const o=io?i.timestamp:performance.now();n=!1,io||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,40),1)),i.timestamp=o,i.isProcessing=!0,a.process(i),l.process(i),c.process(i),u.process(i),d.process(i),h.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(p))},f=oo.reduce(((t,o)=>{const a=s[o];return t[o]=function(t){let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,r=!0,i.isProcessing||e(p)),a.schedule(t,o,s)},t}),{});return{schedule:f,cancel:e=>{for(let t=0;t<oo.length;t++)s[oo[t]].cancel(e)},state:i,steps:s}}const{schedule:lo,cancel:co,state:uo,steps:ho}=ao("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:qi,!0);let po;function fo(){po=void 0}const mo={now:()=>(void 0===po&&mo.set(uo.isProcessing||io?uo.timestamp:performance.now()),po),set:e=>{po=e,queueMicrotask(fo)}};function go(e,t){-1===e.indexOf(t)&&e.push(t)}function xo(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class vo{constructor(){this.subscriptions=[]}add(e){return go(this.subscriptions,e),()=>xo(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){const r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function yo(e,t){return t?e*(1e3/t):0}const bo={current:void 0};class wo{constructor(e){var t=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.version="12.4.7",this.canTrackVelocity=null,this.events={},this.updateAndNotify=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=mo.now();t.updatedAt!==r&&t.setPrevFrameValue(),t.prev=t.current,t.setCurrent(e),t.current!==t.prev&&t.events.change&&t.events.change.notify(t.current),n&&t.events.renderRequest&&t.events.renderRequest.notify(t.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){var t;this.current=e,this.updatedAt=mo.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=(t=this.current,!isNaN(parseFloat(t))))}setPrevFrameValue(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.current;this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new vo);const n=this.events[e].add(t);return"change"===e?()=>{n(),lo.read((()=>{this.events.change.getSize()||this.stop()}))}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return bo.current&&bo.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=mo.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,30);return yo(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise((t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function jo(e,t){return new wo(e,t)}function So(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,jo(n))}const ko=e=>Boolean(e&&e.getVelocity);function Co(e,t){const n=e.getValue("willChange");if(r=n,Boolean(ko(r)&&r.add))return n.add(t);var r}const Eo=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),zo="data-"+Eo("framerAppearId");function $o(e){return e.props[zo]}const Po=!1,To=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function Mo(e,t,n,r){if(e===t&&n===r)return qi;const i=t=>function(e,t,n,r,i){let o,s,a=0;do{s=t+(n-t)/2,o=To(s,r,i)-e,o>0?n=s:t=s}while(Math.abs(o)>1e-7&&++a<12);return s}(t,0,1,e,n);return e=>0===e||1===e?e:To(i(e),t,r)}const Ao=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Ro=e=>t=>1-e(1-t),Io=Mo(.33,1.53,.69,.99),Lo=Ro(Io),_o=Ao(Lo),Do=e=>(e*=2)<1?.5*Lo(e):.5*(2-Math.pow(2,-10*(e-1))),Vo=e=>1-Math.sin(Math.acos(e)),Fo=Ro(Vo),Oo=Ao(Vo),Bo=e=>/^0[^.\s]+$/u.test(e);const No=(e,t,n)=>n>t?t:n<e?e:n,Uo={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},Ho={...Uo,transform:e=>No(0,1,e)},Wo={...Uo,default:1},Yo=e=>Math.round(1e5*e)/1e5,Ko=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;const Xo=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Go=(e,t)=>n=>Boolean("string"===typeof n&&Xo.test(n)&&n.startsWith(e)||t&&!function(e){return null==e}(n)&&Object.prototype.hasOwnProperty.call(n,t)),Qo=(e,t,n)=>r=>{if("string"!==typeof r)return r;const[i,o,s,a]=r.match(Ko);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:void 0!==a?parseFloat(a):1}},qo={...Uo,transform:e=>Math.round((e=>No(0,255,e))(e))},Zo={test:Go("rgb","red"),parse:Qo("red","green","blue"),transform:e=>{let{red:t,green:n,blue:r,alpha:i=1}=e;return"rgba("+qo.transform(t)+", "+qo.transform(n)+", "+qo.transform(r)+", "+Yo(Ho.transform(i))+")"}};const Jo={test:Go("#"),parse:function(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}},transform:Zo.transform},es=e=>({test:t=>"string"===typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),ts=es("deg"),ns=es("%"),rs=es("px"),is=es("vh"),os=es("vw"),ss={...ns,parse:e=>ns.parse(e)/100,transform:e=>ns.transform(100*e)},as={test:Go("hsl","hue"),parse:Qo("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:r,alpha:i=1}=e;return"hsla("+Math.round(t)+", "+ns.transform(Yo(n))+", "+ns.transform(Yo(r))+", "+Yo(Ho.transform(i))+")"}},ls={test:e=>Zo.test(e)||Jo.test(e)||as.test(e),parse:e=>Zo.test(e)?Zo.parse(e):as.test(e)?as.parse(e):Jo.parse(e),transform:e=>"string"===typeof e?e:e.hasOwnProperty("red")?Zo.transform(e):as.transform(e)},cs=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;const us="number",ds="color",hs=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ps(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const s=t.replace(hs,(e=>(ls.test(e)?(r.color.push(o),i.push(ds),n.push(ls.parse(e))):e.startsWith("var(")?(r.var.push(o),i.push("var"),n.push(e)):(r.number.push(o),i.push(us),n.push(parseFloat(e))),++o,"${}"))).split("${}");return{values:n,split:s,indexes:r,types:i}}function fs(e){return ps(e).values}function ms(e){const{split:t,types:n}=ps(e),r=t.length;return e=>{let i="";for(let o=0;o<r;o++)if(i+=t[o],void 0!==e[o]){const t=n[o];i+=t===us?Yo(e[o]):t===ds?ls.transform(e[o]):e[o]}return i}}const gs=e=>"number"===typeof e?0:e;const xs={test:function(e){var t,n;return isNaN(e)&&"string"===typeof e&&((null===(t=e.match(Ko))||void 0===t?void 0:t.length)||0)+((null===(n=e.match(cs))||void 0===n?void 0:n.length)||0)>0},parse:fs,createTransformer:ms,getAnimatableNone:function(e){const t=fs(e);return ms(e)(t.map(gs))}},vs=new Set(["brightness","contrast","saturate","opacity"]);function ys(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[r]=n.match(Ko)||[];if(!r)return e;const i=n.replace(r,"");let o=vs.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const bs=/\b([a-z-]*)\(.*?\)/gu,ws={...xs,getAnimatableNone:e=>{const t=e.match(bs);return t?t.map(ys).join(" "):e}},js={borderWidth:rs,borderTopWidth:rs,borderRightWidth:rs,borderBottomWidth:rs,borderLeftWidth:rs,borderRadius:rs,radius:rs,borderTopLeftRadius:rs,borderTopRightRadius:rs,borderBottomRightRadius:rs,borderBottomLeftRadius:rs,width:rs,maxWidth:rs,height:rs,maxHeight:rs,top:rs,right:rs,bottom:rs,left:rs,padding:rs,paddingTop:rs,paddingRight:rs,paddingBottom:rs,paddingLeft:rs,margin:rs,marginTop:rs,marginRight:rs,marginBottom:rs,marginLeft:rs,backgroundPositionX:rs,backgroundPositionY:rs},Ss={rotate:ts,rotateX:ts,rotateY:ts,rotateZ:ts,scale:Wo,scaleX:Wo,scaleY:Wo,scaleZ:Wo,skew:ts,skewX:ts,skewY:ts,distance:rs,translateX:rs,translateY:rs,translateZ:rs,x:rs,y:rs,z:rs,perspective:rs,transformPerspective:rs,opacity:Ho,originX:ss,originY:ss,originZ:rs},ks={...Uo,transform:Math.round},Cs={...js,...Ss,zIndex:ks,size:rs,fillOpacity:Ho,strokeOpacity:Ho,numOctaves:ks},Es={...Cs,color:ls,backgroundColor:ls,outlineColor:ls,fill:ls,stroke:ls,borderColor:ls,borderTopColor:ls,borderRightColor:ls,borderBottomColor:ls,borderLeftColor:ls,filter:ws,WebkitFilter:ws},zs=e=>Es[e];function $s(e,t){let n=zs(e);return n!==ws&&(n=xs),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Ps=new Set(["auto","none","0"]);const Ts=e=>e===Uo||e===rs,Ms=(e,t)=>parseFloat(e.split(", ")[t]),As=(e,t)=>(n,r)=>{let{transform:i}=r;if("none"===i||!i)return 0;const o=i.match(/^matrix3d\((.+)\)$/u);if(o)return Ms(o[1],t);{const t=i.match(/^matrix\((.+)\)$/u);return t?Ms(t[1],e):0}},Rs=new Set(["x","y","z"]),Is=Zi.filter((e=>!Rs.has(e)));const Ls={width:(e,t)=>{let{x:n}=e,{paddingLeft:r="0",paddingRight:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},height:(e,t)=>{let{y:n}=e,{paddingTop:r="0",paddingBottom:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:r}=t;return parseFloat(r)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:r}=t;return parseFloat(r)+(n.max-n.min)},x:As(4,13),y:As(5,14)};Ls.translateX=Ls.x,Ls.translateY=Ls.y;const _s=new Set;let Ds=!1,Vs=!1;function Fs(){if(Vs){const e=Array.from(_s).filter((e=>e.needsMeasurement)),t=new Set(e.map((e=>e.element))),n=new Map;t.forEach((e=>{const t=function(e){const t=[];return Is.forEach((n=>{const r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))})),t}(e);t.length&&(n.set(e,t),e.render())})),e.forEach((e=>e.measureInitialState())),t.forEach((e=>{e.render();const t=n.get(e);t&&t.forEach((t=>{let[n,r]=t;var i;null===(i=e.getValue(n))||void 0===i||i.set(r)}))})),e.forEach((e=>e.measureEndState())),e.forEach((e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)}))}Vs=!1,Ds=!1,_s.forEach((e=>e.complete())),_s.clear()}function Os(){_s.forEach((e=>{e.readKeyframes(),e.needsMeasurement&&(Vs=!0)}))}class Bs{constructor(e,t,n,r,i){let o=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(_s.add(this),Ds||(Ds=!0,lo.read(Os),lo.resolveKeyframes(Fs))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;for(let i=0;i<e.length;i++)if(null===e[i])if(0===i){const i=null===r||void 0===r?void 0:r.get(),o=e[e.length-1];if(void 0!==i)e[0]=i;else if(n&&t){const r=n.readValue(t,o);void 0!==r&&null!==r&&(e[0]=r)}void 0===e[0]&&(e[0]=o),r&&void 0===i&&r.set(e[0])}else e[i]=e[i-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),_s.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,_s.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}let Ns=qi,Us=qi;const Hs=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Ws=e=>t=>"string"===typeof t&&t.startsWith(e),Ys=Ws("--"),Ks=Ws("var(--"),Xs=e=>!!Ks(e)&&Gs.test(e.split("/*")[0].trim()),Gs=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Qs=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function qs(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;Us(n<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);const[r,i]=function(e){const t=Qs.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${null!==n&&void 0!==n?n:r}`,i]}(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const e=o.trim();return Hs(e)?parseFloat(e):e}return Xs(i)?qs(i,t,n+1):i}const Zs=e=>t=>t.test(e),Js=[Uo,rs,ns,ts,os,is,{test:e=>"auto"===e,parse:e=>e}],ea=e=>Js.find(Zs(e));class ta extends Bs{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let a=0;a<e.length;a++){let n=e[a];if("string"===typeof n&&(n=n.trim(),Xs(n))){const r=qs(n,t.current);void 0!==r&&(e[a]=r),a===e.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!eo.has(n)||2!==e.length)return;const[r,i]=e,o=ea(r),s=ea(i);if(o!==s)if(Ts(o)&&Ts(s))for(let a=0;a<e.length;a++){const t=e[a];"string"===typeof t&&(e[a]=parseFloat(t))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,n=[];for(let i=0;i<e.length;i++)("number"===typeof(r=e[i])?0===r:null===r||"none"===r||"0"===r||Bo(r))&&n.push(i);var r;n.length&&function(e,t,n){let r,i=0;for(;i<e.length&&!r;){const t=e[i];"string"===typeof t&&!Ps.has(t)&&ps(t).values.length&&(r=e[i]),i++}if(r&&n)for(const o of t)e[o]=$s(n,r)}(e,n,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ls[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const r=t[t.length-1];void 0!==r&&e.getValue(n,r).jump(r,!1)}measureEndState(){var e;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const o=r.length-1,s=r[o];r[o]=Ls[n](t.measureViewportBox(),window.getComputedStyle(t.current)),null!==s&&void 0===this.finalKeyframe&&(this.finalKeyframe=s),(null===(e=this.removedTransforms)||void 0===e?void 0:e.length)&&this.removedTransforms.forEach((e=>{let[n,r]=e;t.getValue(n).set(r)})),this.resolveNoneKeyframes()}}const na=(e,t)=>"zIndex"!==t&&(!("number"!==typeof e&&!Array.isArray(e))||!("string"!==typeof e||!xs.test(e)&&"0"!==e||e.startsWith("url(")));function ra(e,t,n,r){const i=e[0];if(null===i)return!1;if("display"===t||"visibility"===t)return!0;const o=e[e.length-1],s=na(i,t),a=na(o,t);return Ns(s===a,`You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`),!(!s||!a)&&(function(e){const t=e[0];if(1===e.length)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}(e)||("spring"===n||ki(n))&&r)}const ia=e=>null!==e;function oa(e,t,n){let{repeat:r,repeatType:i="loop"}=t;const o=e.filter(ia),s=r&&"loop"!==i&&r%2===1?0:o.length-1;return s&&void 0!==n?n:o[s]}class sa{constructor(e){let{autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",...a}=e;this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=mo.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt}get resolved(){return this._resolved||this.hasAttemptedResolve||(Os(),Fs()),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=mo.now(),this.hasAttemptedResolve=!0;const{name:n,type:r,velocity:i,delay:o,onComplete:s,onUpdate:a,isGenerator:l}=this.options;if(!l&&!ra(e,n,r,i)){if(Po||!o)return a&&a(oa(e,this.options,t)),s&&s(),void this.resolveFinishedPromise();this.options.duration=0}const c=this.initPlayback(e,t);!1!==c&&(this._resolved={keyframes:e,finalKeyframe:t,...c},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise((e=>{this.resolveFinishedPromise=e}))}}const aa={layout:0,mainThread:0,waapi:0},la=(e,t,n)=>e+(t-e)*n;function ca(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ua(e,t){return n=>n>0?t:e}const da=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},ha=[Jo,Zo,as];function pa(e){const t=(e=>ha.find((t=>t.test(e))))(e);if(Ns(Boolean(t),`'${e}' is not an animatable color. Use the equivalent color code instead.`),!Boolean(t))return!1;let n=t.parse(e);return t===as&&(n=function(e){let{hue:t,saturation:n,lightness:r,alpha:i}=e;t/=360,n/=100,r/=100;let o=0,s=0,a=0;if(n){const e=r<.5?r*(1+n):r+n-r*n,i=2*r-e;o=ca(i,e,t+1/3),s=ca(i,e,t),a=ca(i,e,t-1/3)}else o=s=a=r;return{red:Math.round(255*o),green:Math.round(255*s),blue:Math.round(255*a),alpha:i}}(n)),n}const fa=(e,t)=>{const n=pa(e),r=pa(t);if(!n||!r)return ua(e,t);const i={...n};return e=>(i.red=da(n.red,r.red,e),i.green=da(n.green,r.green,e),i.blue=da(n.blue,r.blue,e),i.alpha=la(n.alpha,r.alpha,e),Zo.transform(i))},ma=(e,t)=>n=>t(e(n)),ga=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(ma)},xa=new Set(["none","hidden"]);function va(e,t){return n=>la(e,t,n)}function ya(e){return"number"===typeof e?va:"string"===typeof e?Xs(e)?ua:ls.test(e)?fa:ja:Array.isArray(e)?ba:"object"===typeof e?ls.test(e)?fa:wa:ua}function ba(e,t){const n=[...e],r=n.length,i=e.map(((e,n)=>ya(e)(e,t[n])));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function wa(e,t){const n={...e,...t},r={};for(const i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=ya(e[i])(e[i],t[i]));return e=>{for(const t in r)n[t]=r[t](e);return n}}const ja=(e,t)=>{const n=xs.createTransformer(t),r=ps(e),i=ps(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?xa.has(e)&&!i.values.length||xa.has(t)&&!r.values.length?function(e,t){return xa.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}(e,t):ga(ba(function(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const s=t.types[o],a=e.indexes[s][i[s]],l=null!==(n=e.values[a])&&void 0!==n?n:0;r[o]=l,i[s]++}return r}(r,i),i.values),n):(Ns(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),ua(e,t))};function Sa(e,t,n){if("number"===typeof e&&"number"===typeof t&&"number"===typeof n)return la(e,t,n);return ya(e)(e,t)}function ka(e,t,n){const r=Math.max(t-5,0);return yo(n-e(r),t-r)}const Ca={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ea=.001;function za(e){let t,n,{duration:r=Ca.duration,bounce:i=Ca.bounce,velocity:o=Ca.velocity,mass:s=Ca.mass}=e;Ns(r<=Gi(Ca.maxDuration),"Spring duration must be 10 seconds or less");let a=1-i;a=No(Ca.minDamping,Ca.maxDamping,a),r=No(Ca.minDuration,Ca.maxDuration,Qi(r)),a<1?(t=e=>{const t=e*a,n=t*r,i=t-o,s=Pa(e,a),l=Math.exp(-n);return Ea-i/s*l},n=e=>{const n=e*a*r,i=n*o+o,s=Math.pow(a,2)*Math.pow(e,2)*r,l=Math.exp(-n),c=Pa(Math.pow(e,2),a);return(-t(e)+Ea>0?-1:1)*((i-s)*l)/c}):(t=e=>Math.exp(-e*r)*((e-o)*r+1)-.001,n=e=>Math.exp(-e*r)*(r*r*(o-e)));const l=function(e,t,n){let r=n;for(let i=1;i<$a;i++)r-=e(r)/t(r);return r}(t,n,5/r);if(r=Gi(r),isNaN(l))return{stiffness:Ca.stiffness,damping:Ca.damping,duration:r};{const e=Math.pow(l,2)*s;return{stiffness:e,damping:2*a*Math.sqrt(s*e),duration:r}}}const $a=12;function Pa(e,t){return e*Math.sqrt(1-t*t)}const Ta=["duration","bounce"],Ma=["stiffness","damping","mass"];function Aa(e,t){return t.some((t=>void 0!==e[t]))}function Ra(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ca.visualDuration,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ca.bounce;const n="object"!==typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],a={done:!1,value:o},{stiffness:l,damping:c,mass:u,duration:d,velocity:h,isResolvedFromDuration:p}=function(e){let t={velocity:Ca.velocity,stiffness:Ca.stiffness,damping:Ca.damping,mass:Ca.mass,isResolvedFromDuration:!1,...e};if(!Aa(e,Ma)&&Aa(e,Ta))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(1.2*n),i=r*r,o=2*No(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Ca.mass,stiffness:i,damping:o}}else{const n=za(e);t={...t,...n,mass:Ca.mass},t.isResolvedFromDuration=!0}return t}({...n,velocity:-Qi(n.velocity||0)}),f=h||0,m=c/(2*Math.sqrt(l*u)),g=s-o,x=Qi(Math.sqrt(l/u)),v=Math.abs(g)<5;let y;if(r||(r=v?Ca.restSpeed.granular:Ca.restSpeed.default),i||(i=v?Ca.restDelta.granular:Ca.restDelta.default),m<1){const e=Pa(x,m);y=t=>{const n=Math.exp(-m*x*t);return s-n*((f+m*x*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)y=e=>s-Math.exp(-x*e)*(g+(f+x*g)*e);else{const e=x*Math.sqrt(m*m-1);y=t=>{const n=Math.exp(-m*x*t),r=Math.min(e*t,300);return s-n*((f+m*x*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}const b={calculatedDuration:p&&d||null,next:e=>{const t=y(e);if(p)a.done=e>=d;else{let n=0;m<1&&(n=0===e?Gi(f):ka(y,e,t));const o=Math.abs(n)<=r,l=Math.abs(s-t)<=i;a.done=o&&l}return a.value=a.done?s:t,a},toString:()=>{const e=Math.min(Si(b),ji),t=Mi((t=>b.next(e*t).value),e,30);return e+"ms "+t}};return b}function Ia(e){let{keyframes:t,velocity:n=0,power:r=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:s=500,modifyTarget:a,min:l,max:c,restDelta:u=.5,restSpeed:d}=e;const h=t[0],p={done:!1,value:h},f=e=>void 0===l?c:void 0===c||Math.abs(l-e)<Math.abs(c-e)?l:c;let m=r*n;const g=h+m,x=void 0===a?g:a(g);x!==g&&(m=x-h);const v=e=>-m*Math.exp(-e/i),y=e=>x+v(e),b=e=>{const t=v(e),n=y(e);p.done=Math.abs(t)<=u,p.value=p.done?x:n};let w,j;const S=e=>{(e=>void 0!==l&&e<l||void 0!==c&&e>c)(p.value)&&(w=e,j=Ra({keyframes:[p.value,f(p.value)],velocity:ka(y,e,p.value),damping:o,stiffness:s,restDelta:u,restSpeed:d}))};return S(0),{calculatedDuration:null,next:e=>{let t=!1;return j||void 0!==w||(t=!0,b(e),S(e)),void 0!==w&&e>=w?j.next(e-w):(!t&&b(e),p)}}}const La=Mo(.42,0,1,1),_a=Mo(0,0,.58,1),Da=Mo(.42,0,.58,1),Va={linear:qi,easeIn:La,easeInOut:Da,easeOut:_a,circIn:Vo,circInOut:Oo,circOut:Fo,backIn:Lo,backInOut:_o,backOut:Io,anticipate:Do},Fa=e=>{if(Ei(e)){Us(4===e.length,"Cubic bezier arrays must contain four numerical values.");const[t,n,r,i]=e;return Mo(t,n,r,i)}return"string"===typeof e?(Us(void 0!==Va[e],`Invalid easing type '${e}'`),Va[e]):e};function Oa(e,t){let{clamp:n=!0,ease:r,mixer:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=e.length;if(Us(o===t.length,"Both input and output ranges must be the same length"),1===o)return()=>t[0];if(2===o&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=function(e,t,n){const r=[],i=n||Sa,o=e.length-1;for(let s=0;s<o;s++){let n=i(e[s],e[s+1]);if(t){const e=Array.isArray(t)?t[s]||qi:t;n=ga(e,n)}r.push(n)}return r}(t,r,i),l=a.length,c=n=>{if(s&&n<e[0])return t[0];let r=0;if(l>1)for(;r<e.length-2&&!(n<e[r+1]);r++);const i=Ti(e[r],e[r+1],n);return a[r](i)};return n?t=>c(No(e[0],e[o-1],t)):c}function Ba(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Ti(0,t,r);e.push(la(n,1,i))}}(t,e.length-1),t}function Na(e){let{duration:t=300,keyframes:n,times:r,ease:i="easeInOut"}=e;const o=(e=>Array.isArray(e)&&"number"!==typeof e[0])(i)?i.map(Fa):Fa(i),s={done:!1,value:n[0]},a=function(e,t){return e.map((e=>e*t))}(r&&r.length===n.length?r:Ba(n),t),l=Oa(a,n,{ease:Array.isArray(o)?o:(c=n,u=o,c.map((()=>u||Da)).splice(0,c.length-1))});var c,u;return{calculatedDuration:t,next:e=>(s.value=l(e),s.done=e>=t,s)}}const Ua=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:()=>lo.update(t,!0),stop:()=>co(t),now:()=>uo.isProcessing?uo.timestamp:mo.now()}},Ha={decay:Ia,inertia:Ia,tween:Na,keyframes:Na,spring:Ra},Wa=e=>e/100;class Ya extends sa{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.teardown();const{onStop:e}=this.options;e&&e()};const{name:t,motionValue:n,element:r,keyframes:i}=this.options,o=(null===r||void 0===r?void 0:r.KeyframeResolver)||Bs;this.resolver=new o(i,((e,t)=>this.onKeyframesResolved(e,t)),t,n,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:o=0}=this.options,s=ki(t)?t:Ha[t]||Na;let a,l;s!==Na&&"number"!==typeof e[0]&&(a=ga(Wa,Sa(e[0],e[1])),e=[0,100]);const c=s({...this.options,keyframes:e});"mirror"===i&&(l=s({...this.options,keyframes:[...e].reverse(),velocity:-o})),null===c.calculatedDuration&&(c.calculatedDuration=Si(c));const{calculatedDuration:u}=c,d=u+r;return{generator:c,mirroredGenerator:l,mapPercentToKeyframes:a,calculatedDuration:u,resolvedDuration:d,totalDuration:d*(n+1)-r}}onPostResolved(){const{autoplay:e=!0}=this.options;aa.mainThread++,this.play(),"paused"!==this.pendingPlayState&&e?this.state=this.pendingPlayState:this.pause()}tick(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{resolved:n}=this;if(!n){const{keyframes:e}=this.options;return{done:!0,value:e[e.length-1]}}const{finalKeyframe:r,generator:i,mirroredGenerator:o,mapPercentToKeyframes:s,keyframes:a,calculatedDuration:l,totalDuration:c,resolvedDuration:u}=n;if(null===this.startTime)return i.next(0);const{delay:d,repeat:h,repeatType:p,repeatDelay:f,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-c/this.speed,this.startTime)),t?this.currentTime=e:null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const g=this.currentTime-d*(this.speed>=0?1:-1),x=this.speed>=0?g<0:g>c;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=c);let v=this.currentTime,y=i;if(h){const e=Math.min(this.currentTime,c)/u;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,h+1);Boolean(t%2)&&("reverse"===p?(n=1-n,f&&(n-=f/u)):"mirror"===p&&(y=o)),v=No(0,1,n)*u}const b=x?{done:!1,value:a[0]}:y.next(v);s&&(b.value=s(b.value));let{done:w}=b;x||null===l||(w=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const j=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return j&&void 0!==r&&(b.value=oa(a,this.options,r)),m&&m(b.value),j&&this.finish(),b}get duration(){const{resolved:e}=this;return e?Qi(e.calculatedDuration):0}get time(){return Qi(this.currentTime)}set time(e){e=Gi(e),this.currentTime=e,null!==this.holdTime||0===this.speed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=Qi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved)return void(this.pendingPlayState="running");if(this.isStopped)return;const{driver:e=Ua,onPlay:t,startTime:n}=this.options;this.driver||(this.driver=e((e=>this.tick(e)))),t&&t();const r=this.driver.now();null!==this.holdTime?this.startTime=r-this.holdTime:this.startTime?"finished"===this.state&&(this.startTime=r):this.startTime=null!==n&&void 0!==n?n:this.calcStartTime(),"finished"===this.state&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;this._resolved?(this.state="paused",this.holdTime=null!==(e=this.currentTime)&&void 0!==e?e:0):this.pendingPlayState="paused"}complete(){"running"!==this.state&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){null!==this.cancelTime&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel(),aa.mainThread--}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const Ka=new Set(["opacity","clipPath","filter","transform"]);const Xa=xi((()=>Object.hasOwnProperty.call(Element.prototype,"animate")));const Ga={anticipate:Do,backInOut:_o,circInOut:Oo};class Qa extends sa{constructor(e){super(e);const{name:t,motionValue:n,element:r,keyframes:i}=this.options;this.resolver=new ta(i,((e,t)=>this.onKeyframesResolved(e,t)),t,n,r),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:n=300,times:r,ease:i,type:o,motionValue:s,name:a,startTime:l}=this.options;if(!s.owner||!s.owner.current)return!1;var c;if("string"===typeof i&&Pi()&&i in Ga&&(i=Ga[i]),ki((c=this.options).type)||"spring"===c.type||!Ai(c.ease)){const{onComplete:t,onUpdate:s,motionValue:a,element:l,...c}=this.options,u=function(e,t){const n=new Ya({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let o=0;for(;!r.done&&o<2e4;)r=n.sample(o),i.push(r.value),o+=10;return{times:void 0,keyframes:i,duration:o-10,ease:"linear"}}(e,c);1===(e=u.keyframes).length&&(e[1]=e[0]),n=u.duration,r=u.times,i=u.ease,o="keyframes"}const u=function(e,t,n){let{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a="easeInOut",times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const c={[t]:n};l&&(c.offset=l);const u=Li(a,i);Array.isArray(u)&&(c.easing=u),so.value&&aa.waapi++;const d=e.animate(c,{delay:r,duration:i,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:o+1,direction:"reverse"===s?"alternate":"normal"});return so.value&&d.finished.finally((()=>{aa.waapi--})),d}(s.owner.current,a,e,{...this.options,duration:n,times:r,ease:i});return u.startTime=null!==l&&void 0!==l?l:this.calcStartTime(),this.pendingTimeline?(Ci(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:n}=this.options;s.set(oa(e,this.options,t)),n&&n(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:n,times:r,type:o,ease:i,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return Qi(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return Qi(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.currentTime=Gi(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(this._resolved){const{resolved:t}=this;if(!t)return qi;const{animation:n}=t;Ci(n,e)}else this.pendingTimeline=e;return qi}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;"finished"===t.playState&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:n,duration:r,type:i,ease:o,times:s}=e;if("idle"===t.playState||"finished"===t.playState)return;if(this.time){const{motionValue:e,onUpdate:t,onComplete:a,element:l,...c}=this.options,u=new Ya({...c,keyframes:n,duration:r,type:i,ease:o,times:s,isGenerator:!0}),d=Gi(this.time);e.setWithVelocity(u.sample(d-10).value,u.sample(d).value,10)}const{onStop:a}=this.options;a&&a(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:o,type:s}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:a,transformTemplate:l}=t.owner.getProps();return Xa()&&n&&Ka.has(n)&&!a&&!l&&!r&&"mirror"!==i&&0!==o&&"inertia"!==s}}const qa={type:"spring",stiffness:500,damping:25,restSpeed:10},Za={type:"keyframes",duration:.8},Ja={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},el=(e,t)=>{let{keyframes:n}=t;return n.length>2?Za:Ji.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:qa:Ja};const tl=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0;return s=>{const a=wi(r,e)||{},l=a.delay||r.delay||0;let{elapsed:c=0}=r;c-=Gi(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-c,onUpdate:e=>{t.set(e),a.onUpdate&&a.onUpdate(e)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:i};(function(e){let{when:t,delay:n,delayChildren:r,staggerChildren:i,staggerDirection:o,repeat:s,repeatType:a,repeatDelay:l,from:c,elapsed:u,...d}=e;return!!Object.keys(d).length})(a)||(u={...u,...el(e,u)}),u.duration&&(u.duration=Gi(u.duration)),u.repeatDelay&&(u.repeatDelay=Gi(u.repeatDelay)),void 0!==u.from&&(u.keyframes[0]=u.from);let d=!1;if((!1===u.type||0===u.duration&&!u.repeatDelay)&&(u.duration=0,0===u.delay&&(d=!0)),(Po||ro)&&(d=!0,u.duration=0,u.delay=0),d&&!o&&void 0!==t.get()){const e=oa(u.keyframes,a);if(void 0!==e)return lo.update((()=>{u.onUpdate(e),u.onComplete()})),new bi([])}return!o&&Qa.supports(u)?new Qa(u):new Ya(u)}};function nl(e,t){let{protectedKeys:n,needsAnimating:r}=e;const i=n.hasOwnProperty(t)&&!0!==r[t];return r[t]=!1,i}function rl(e,t){let{delay:n=0,transitionOverride:r,type:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var o;let{transition:s=e.getDefaultTransition(),transitionEnd:a,...l}=t;r&&(s=r);const c=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const d in l){const t=e.getValue(d,null!==(o=e.latestValues[d])&&void 0!==o?o:null),r=l[d];if(void 0===r||u&&nl(u,d))continue;const i={delay:n,...wi(s||{},d)};let a=!1;if(window.MotionHandoffAnimation){const t=$o(e);if(t){const e=window.MotionHandoffAnimation(t,d,lo);null!==e&&(i.startTime=e,a=!0)}}Co(e,d),t.start(tl(d,t,r,e.shouldReduceMotion&&eo.has(d)?{type:!1}:i,e,a));const h=t.animation;h&&c.push(h)}return a&&Promise.all(c).then((()=>{lo.update((()=>{a&&function(e,t){const n=gi(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o)So(e,s,no(o[s]))}(e,a)}))})),c}function il(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var r;const i=gi(e,t,"exit"===n.type?null===(r=e.presenceContext)||void 0===r?void 0:r.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const s=i?()=>Promise.all(rl(e,i,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:i=0,staggerChildren:s,staggerDirection:a}=o;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=arguments.length>5?arguments[5]:void 0;const s=[],a=(e.variantChildren.size-1)*r,l=1===i?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r}:function(){return a-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r};return Array.from(e.variantChildren).sort(ol).forEach(((e,r)=>{e.notify("AnimationStart",t),s.push(il(e,t,{...o,delay:n+l(r)}).then((()=>e.notify("AnimationComplete",t))))})),Promise.all(s)}(e,t,i+r,s,a,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[e,t]="beforeChildren"===l?[s,a]:[a,s];return e().then((()=>t()))}return Promise.all([s(),a(n.delay)])}function ol(e,t){return e.sortNodePosition(t)}function sl(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function al(e){return"string"===typeof e||Array.isArray(e)}const ll=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],cl=["initial",...ll],ul=cl.length;function dl(e){if(!e)return;if(!e.isControllingVariants){const t=e.parent&&dl(e.parent)||{};return void 0!==e.props.initial&&(t.initial=e.props.initial),t}const t={};for(let n=0;n<ul;n++){const r=cl[n],i=e.props[r];(al(i)||!1===i)&&(t[r]=i)}return t}const hl=[...ll].reverse(),pl=ll.length;function fl(e){return t=>Promise.all(t.map((t=>{let{animation:n,options:r}=t;return function(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const i=t.map((t=>il(e,t,r)));n=Promise.all(i)}else if("string"===typeof t)n=il(e,t,r);else{const i="function"===typeof t?gi(e,t,r.custom):t;n=Promise.all(rl(e,i,r))}return n.then((()=>{e.notify("AnimationComplete",t)}))}(e,n,r)})))}function ml(e){let t=fl(e),n=vl(),r=!0;const i=t=>(n,r)=>{var i;const o=gi(e,r,"exit"===t?null===(i=e.presenceContext)||void 0===i?void 0:i.custom:void 0);if(o){const{transition:e,transitionEnd:t,...r}=o;n={...n,...r,...t}}return n};function o(o){const{props:s}=e,a=dl(e.parent)||{},l=[],c=new Set;let u={},d=1/0;for(let t=0;t<pl;t++){const h=hl[t],p=n[h],f=void 0!==s[h]?s[h]:a[h],m=al(f),g=h===o?p.isActive:null;!1===g&&(d=t);let x=f===a[h]&&f!==s[h]&&m;if(x&&r&&e.manuallyAnimateOnMount&&(x=!1),p.protectedKeys={...u},!p.isActive&&null===g||!f&&!p.prevProp||pi(f)||"boolean"===typeof f)continue;const v=gl(p.prevProp,f);let y=v||h===o&&p.isActive&&!x&&m||t>d&&m,b=!1;const w=Array.isArray(f)?f:[f];let j=w.reduce(i(h),{});!1===g&&(j={});const{prevResolvedValues:S={}}=p,k={...S,...j},C=t=>{y=!0,c.has(t)&&(b=!0,c.delete(t)),p.needsAnimating[t]=!0;const n=e.getValue(t);n&&(n.liveStyle=!1)};for(const e in k){const t=j[e],n=S[e];if(u.hasOwnProperty(e))continue;let r=!1;r=to(t)&&to(n)?!sl(t,n):t!==n,r?void 0!==t&&null!==t?C(e):c.add(e):void 0!==t&&c.has(e)?C(e):p.protectedKeys[e]=!0}p.prevProp=f,p.prevResolvedValues=j,p.isActive&&(u={...u,...j}),r&&e.blockInitialAnimation&&(y=!1);y&&(!(x&&v)||b)&&l.push(...w.map((e=>({animation:e,options:{type:h}}))))}if(c.size){const t={};if("boolean"!==typeof s.initial){const n=gi(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}c.forEach((n=>{const r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=null!==r&&void 0!==r?r:null})),l.push({animation:t})}let h=Boolean(l.length);return!r||!1!==s.initial&&s.initial!==s.animate||e.manuallyAnimateOnMount||(h=!1),r=!1,h?t(l):Promise.resolve()}return{animateChanges:o,setActive:function(t,r){var i;if(n[t].isActive===r)return Promise.resolve();null===(i=e.variantChildren)||void 0===i||i.forEach((e=>{var n;return null===(n=e.animationState)||void 0===n?void 0:n.setActive(t,r)})),n[t].isActive=r;const s=o(t);for(const e in n)n[e].protectedKeys={};return s},setAnimateFunction:function(n){t=n(e)},getState:()=>n,reset:()=>{n=vl(),r=!0}}}function gl(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!sl(t,e)}function xl(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function vl(){return{animate:xl(!0),whileInView:xl(),whileHover:xl(),whileTap:xl(),whileDrag:xl(),whileFocus:xl(),exit:xl()}}class yl{constructor(e){this.isMounted=!1,this.node=e}update(){}}let bl=0;const wl={animation:{Feature:class extends yl{constructor(e){super(e),e.animationState||(e.animationState=ml(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();pi(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),null===(e=this.unmountControls)||void 0===e||e.call(this)}}},exit:{Feature:class extends yl{constructor(){super(...arguments),this.id=bl++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;const r=this.node.animationState.setActive("exit",!e);t&&!e&&r.then((()=>{t(this.id)}))}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function jl(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Sl(e){return{point:{x:e.pageX,y:e.pageY}}}function kl(e,t,n,r){return jl(e,t,(e=>t=>Ni(t)&&e(t,Sl(t)))(n),r)}function Cl(e){let{top:t,left:n,right:r,bottom:i}=e;return{x:{min:n,max:r},y:{min:t,max:i}}}function El(e){return e.max-e.min}function zl(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=r,e.originPoint=la(t.min,t.max,e.origin),e.scale=El(n)/El(t),e.translate=la(n.min,n.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function $l(e,t,n,r){zl(e.x,t.x,n.x,r?r.originX:void 0),zl(e.y,t.y,n.y,r?r.originY:void 0)}function Pl(e,t,n){e.min=n.min+t.min,e.max=e.min+El(t)}function Tl(e,t,n){e.min=t.min-n.min,e.max=e.min+El(t)}function Ml(e,t,n){Tl(e.x,t.x,n.x),Tl(e.y,t.y,n.y)}const Al=()=>({x:{min:0,max:0},y:{min:0,max:0}});function Rl(e){return[e("x"),e("y")]}function Il(e){return void 0===e||1===e}function Ll(e){let{scale:t,scaleX:n,scaleY:r}=e;return!Il(t)||!Il(n)||!Il(r)}function _l(e){return Ll(e)||Dl(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Dl(e){return Vl(e.x)||Vl(e.y)}function Vl(e){return e&&"0%"!==e}function Fl(e,t,n){return n+t*(e-n)}function Ol(e,t,n,r,i){return void 0!==i&&(e=Fl(e,i,r)),Fl(e,n,r)+t}function Bl(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;e.min=Ol(e.min,t,n,r,i),e.max=Ol(e.max,t,n,r,i)}function Nl(e,t){let{x:n,y:r}=t;Bl(e.x,n.translate,n.scale,n.originPoint),Bl(e.y,r.translate,r.scale,r.originPoint)}const Ul=.999999999999,Hl=1.0000000000001;function Wl(e,t){e.min=e.min+t,e.max=e.max+t}function Yl(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.5;Bl(e,t,n,la(e.min,e.max,i),r)}function Kl(e,t){Yl(e.x,t.x,t.scaleX,t.scale,t.originX),Yl(e.y,t.y,t.scaleY,t.scale,t.originY)}function Xl(e,t){return Cl(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}function Gl(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}const Ql=(e,t)=>Math.abs(e-t);class ql{constructor(e,t){let{transformPagePoint:n,dragSnapToOrigin:r=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=ec(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=Ql(e.x,t.x),r=Ql(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;const{point:r}=e,{timestamp:i}=uo;this.history.push({...r,timestamp:i});const{onStart:o,onMove:s}=this.handlers;t||(o&&o(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),s&&s(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{if(e.target instanceof Element&&e.target.hasPointerCapture&&void 0!==e.pointerId)try{if(!e.target.hasPointerCapture(e.pointerId))return}catch(rj){}this.lastMoveEvent=e,this.lastMoveEventInfo=Zl(t,this.transformPagePoint),lo.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{Oi(e,"release"),this.end();const{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const o=ec("pointercancel"===e.type||"lostpointercapture"===e.type?this.lastMoveEventInfo:Zl(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,o),r&&r(e,o)},!Ni(e))return;this.dragSnapToOrigin=r,this.handlers=t,this.transformPagePoint=n;const i=Zl(Sl(e),this.transformPagePoint),{point:o}=i,{timestamp:s}=uo;this.history=[{...o,timestamp:s}];const{onSessionStart:a}=t;a&&a(e,ec(i,this.history)),Oi(e,"set"),this.removeListeners=ga(kl(e.currentTarget,"pointermove",this.handlePointerMove),kl(e.currentTarget,"pointerup",this.handlePointerUp),kl(e.currentTarget,"pointercancel",this.handlePointerUp),kl(e.currentTarget,"lostpointercapture",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),co(this.updatePoint)}}function Zl(e,t){return t?{point:t(e.point)}:e}function Jl(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ec(e,t){let{point:n}=e;return{point:n,delta:Jl(n,nc(t)),offset:Jl(n,tc(t)),velocity:rc(t,.1)}}function tc(e){return e[0]}function nc(e){return e[e.length-1]}function rc(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=nc(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Gi(t)));)n--;if(!r)return{x:0,y:0};const o=Qi(i.timestamp-r.timestamp);if(0===o)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function ic(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function oc(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}const sc=.35;function ac(e,t,n){return{min:lc(e,t),max:lc(e,n)}}function lc(e,t){return"number"===typeof e?e:e[t]||0}const cc=new WeakMap;class uc{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;const{dragSnapToOrigin:r}=this.getProps();this.panSession=new ql(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Sl(e).point)},onStart:(e,t)=>{const{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock="x"===(o=n)||"y"===o?_i[o]?null:(_i[o]=!0,()=>{_i[o]=!1}):_i.x||_i.y?null:(_i.x=_i.y=!0,()=>{_i.x=_i.y=!1}),!this.openDragLock))return;var o;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Rl((e=>{let t=this.getAxisMotionValue(e).get()||0;if(ns.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const r=n.layout.layoutBox[e];if(r){t=El(r)*(parseFloat(t)/100)}}}this.originPoint[e]=t})),i&&lo.postRender((()=>i(e,t))),Co(this.visualElement,"transform");const{animationState:s}=this.visualElement;s&&s.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:o}=this.getProps();if(!n&&!this.openDragLock)return;const{offset:s}=t;if(r&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(s),void(null!==this.currentDirection&&i&&i(this.currentDirection));this.updateAxis("x",t.point,s),this.updateAxis("y",t.point,s),this.visualElement.render(),o&&o(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>Rl((e=>{var t;return"paused"===this.getAnimationState(e)&&(null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.play())}))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:r})}stop(e,t){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:r}=t;this.startAnimation(r);const{onDragEnd:i}=this.getProps();i&&lo.postRender((()=>i(e,t)))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!dc(e,r,this.currentDirection))return;const i=this.getAxisMotionValue(e);let o=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(o=function(e,t,n){let{min:r,max:i}=t;return void 0!==r&&e<r?e=n?la(r,e,n.min):Math.max(e,r):void 0!==i&&e>i&&(e=n?la(i,e,n.max):Math.min(e,i)),e}(o,this.constraints[e],this.elastic[e])),i.set(o)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(e=this.visualElement.projection)||void 0===e?void 0:e.layout,i=this.constraints;t&&Gl(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!t||!r)&&function(e,t){let{top:n,left:r,bottom:i,right:o}=t;return{x:ic(e.x,r,o),y:ic(e.y,n,i)}}(r.layoutBox,t),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sc;return!1===e?e=0:!0===e&&(e=sc),{x:ac(e,"left","right"),y:ac(e,"top","bottom")}}(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Rl((e=>{!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(r.layoutBox[e],this.constraints[e]))}))}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Gl(e))return!1;const n=e.current;Us(null!==n,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");const{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const i=function(e,t,n){const r=Xl(e,n),{scroll:i}=t;return i&&(Wl(r.x,i.offset.x),Wl(r.y,i.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let o=function(e,t){return{x:oc(e.x,t.x),y:oc(e.y,t.y)}}(r.layout.layoutBox,i);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(o));this.hasMutatedConstraints=!!e,e&&(o=Cl(e))}return o}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:o,onDragTransitionEnd:s}=this.getProps(),a=this.constraints||{},l=Rl((s=>{if(!dc(s,t,this.currentDirection))return;let l=a&&a[s]||{};o&&(l={min:0,max:0});const c=r?200:1e6,u=r?40:1e7,d={type:"inertia",velocity:n?e[s]:0,bounceStiffness:c,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(s,d)}));return Promise.all(l).then(s)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return Co(this.visualElement,e),n.start(tl(e,n,0,t,this.visualElement,!1))}stopAnimation(){Rl((e=>this.getAxisMotionValue(e).stop()))}pauseAnimation(){Rl((e=>{var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.pause()}))}getAnimationState(e){var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Rl((t=>{const{drag:n}=this.getProps();if(!dc(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){const{min:n,max:o}=r.layout.layoutBox[t];i.set(e[t]-la(n,o,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Gl(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Rl((e=>{const t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){const n=t.get();r[e]=function(e,t){let n=.5;const r=El(e),i=El(t);return i>r?n=Ti(t.min,t.max-r,e.min):r>i&&(n=Ti(e.min,e.max-i,t.min)),No(0,1,n)}({min:n,max:n},this.constraints[e])}}));const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),Rl((t=>{if(!dc(t,e,null))return;const n=this.getAxisMotionValue(t),{min:i,max:o}=this.constraints[t];n.set(la(i,o,r[t]))}))}addListeners(){if(!this.visualElement.current)return;cc.set(this.visualElement,this);const e=kl(this.visualElement.current,"pointerdown",(e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)})),t=()=>{const{dragConstraints:e}=this.getProps();Gl(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,r=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),lo.read(t);const i=jl(window,"resize",(()=>this.scalePositionWithinConstraints())),o=n.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&(Rl((e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))})),this.visualElement.render())}));return()=>{i(),e(),r(),o&&o()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:o=sc,dragMomentum:s=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:o,dragMomentum:s}}}function dc(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const hc=e=>(t,n)=>{e&&lo.postRender((()=>e(t,n)))};const pc=(0,e.createContext)({}),fc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function mc(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const gc={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!rs.test(e))return e;e=parseFloat(e)}return`${mc(e,t.target.x)}% ${mc(e,t.target.y)}%`}},xc={correct:(e,t)=>{let{treeScale:n,projectionDelta:r}=t;const i=e,o=xs.parse(e);if(o.length>5)return i;const s=xs.createTransformer(e),a="number"!==typeof o[0]?1:0,l=r.x.scale*n.x,c=r.y.scale*n.y;o[0+a]/=l,o[1+a]/=c;const u=la(l,c,.5);return"number"===typeof o[2+a]&&(o[2+a]/=u),"number"===typeof o[3+a]&&(o[3+a]/=u),s(o)}},vc={};const{schedule:yc,cancel:bc}=ao(queueMicrotask,!1);class wc extends e.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;!function(e){for(const t in e)vc[t]=e[t],Ys(t)&&(vc[t].isCSSVariable=!0)}(Sc),i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",(()=>{this.safeToRemove()})),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),fc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,o=n.projection;return o?(o.isPresent=i,r||e.layoutDependency!==t||void 0===t?o.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?o.promote():o.relegate()||lo.postRender((()=>{const e=o.getStack();e&&e.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),yc.postRender((()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function jc(t){const[n,r]=si(),i=(0,e.useContext)(Zr);return(0,qr.jsx)(wc,{...t,layoutGroup:i,switchLayoutGroup:(0,e.useContext)(pc),isPresent:n,safeToRemove:r})}const Sc={borderRadius:{...gc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:gc,borderTopRightRadius:gc,borderBottomLeftRadius:gc,borderBottomRightRadius:gc,boxShadow:xc};const kc=(e,t)=>e.depth-t.depth;class Cc{constructor(){this.children=[],this.isDirty=!1}add(e){go(this.children,e),this.isDirty=!0}remove(e){xo(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(kc),this.isDirty=!1,this.children.forEach(e)}}function Ec(e,t){const n=mo.now(),r=i=>{let{timestamp:o}=i;const s=o-n;s>=t&&(co(r),e(s-t))};return lo.read(r,!0),()=>co(r)}function zc(e){const t=ko(e)?e.get():e;return(e=>Boolean(e&&"object"===typeof e&&e.mix&&e.toValue))(t)?t.toValue():t}const $c=["TopLeft","TopRight","BottomLeft","BottomRight"],Pc=$c.length,Tc=e=>"string"===typeof e?parseFloat(e):e,Mc=e=>"number"===typeof e||rs.test(e);function Ac(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const Rc=Lc(0,.5,Fo),Ic=Lc(.5,.95,qi);function Lc(e,t,n){return r=>r<e?0:r>t?1:n(Ti(e,t,r))}function _c(e,t){e.min=t.min,e.max=t.max}function Dc(e,t){_c(e.x,t.x),_c(e.y,t.y)}function Vc(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Fc(e,t,n,r,i){return e=Fl(e-=t,1/n,r),void 0!==i&&(e=Fl(e,1/i,r)),e}function Oc(e,t,n,r,i){let[o,s,a]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;ns.test(t)&&(t=parseFloat(t),t=la(s.min,s.max,t/100)-s.min);if("number"!==typeof t)return;let a=la(o.min,o.max,r);e===o&&(a-=t),e.min=Fc(e.min,t,n,a,i),e.max=Fc(e.max,t,n,a,i)}(e,t[o],t[s],t[a],t.scale,r,i)}const Bc=["x","scaleX","originX"],Nc=["y","scaleY","originY"];function Uc(e,t,n,r){Oc(e.x,t,Bc,n?n.x:void 0,r?r.x:void 0),Oc(e.y,t,Nc,n?n.y:void 0,r?r.y:void 0)}function Hc(e){return 0===e.translate&&1===e.scale}function Wc(e){return Hc(e.x)&&Hc(e.y)}function Yc(e,t){return e.min===t.min&&e.max===t.max}function Kc(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Xc(e,t){return Kc(e.x,t.x)&&Kc(e.y,t.y)}function Gc(e){return El(e.x)/El(e.y)}function Qc(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class qc{constructor(){this.members=[]}add(e){go(this.members,e),e.scheduleRender()}remove(e){if(xo(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex((t=>e===t));if(0===t)return!1;let n;for(let r=t;r>=0;r--){const e=this.members[r];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;!1===r&&n.hide()}}exitAnimationComplete(){this.members.forEach((e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()}))}scheduleRender(){this.members.forEach((e=>{e.instance&&e.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const Zc={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},Jc=["","X","Y","Z"],eu={visibility:"hidden"};let tu=0;function nu(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function ru(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=$o(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",lo,!(t||r))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&ru(r)}function iu(e){let{attachResizeListener:t,defaultParent:n,measureScroll:r,checkIsScrollRoot:i,resetTransform:o}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===n||void 0===n?void 0:n();this.id=tu++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,so.value&&(Zc.nodes=Zc.calculatedTargetDeltas=Zc.calculatedProjections=0),this.nodes.forEach(au),this.nodes.forEach(fu),this.nodes.forEach(mu),this.nodes.forEach(lu),so.addProjectionMetrics&&so.addProjectionMetrics(Zc)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new Cc)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new vo),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];t&&t.notify(...r)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root.hasTreeAnimated;if(this.instance)return;var r;this.isSVG=(r=e)instanceof SVGElement&&"svg"!==r.tagName,this.instance=e;const{layoutId:i,layout:o,visualElement:s}=this.options;if(s&&!s.current&&s.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(o||i)&&(this.isLayoutDirty=!0),t){let n;const r=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,n&&n(),n=Ec(r,250),fc.hasAnimatedSinceResize&&(fc.hasAnimatedSinceResize=!1,this.nodes.forEach(pu))}))}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&s&&(i||o)&&this.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n,hasRelativeLayoutChanged:r,layout:i}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const o=this.options.transition||s.getDefaultTransition()||wu,{onLayoutAnimationStart:a,onLayoutAnimationComplete:l}=s.getProps(),c=!this.targetLayout||!Xc(this.targetLayout,i),u=!n&&r;if(this.options.layoutRoot||this.resumeFrom||u||n&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,u);const e={...wi(o,"layout"),onPlay:a,onComplete:l};(s.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else n||pu(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,co(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(gu),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&ru(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let i=0;i<this.path.length;i++){const e=this.path[i];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(uu);this.isUpdating||this.nodes.forEach(du),this.isUpdating=!1,this.nodes.forEach(hu),this.nodes.forEach(ou),this.nodes.forEach(su),this.clearAllSnapshots();const e=mo.now();uo.delta=No(0,1e3/60,e-uo.timestamp),uo.timestamp=e,uo.isProcessing=!0,ho.update.process(uo),ho.preRender.process(uo),ho.render.process(uo),uo.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,yc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(cu),this.sharedNodes.forEach(xu)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,lo.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){lo.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||El(this.snapshot.measuredBox.x)||El(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t){const t=i(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!o)return;const e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Wc(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,i=r!==this.prevTransformTemplateValue;e&&(t||_l(this.latestValues)||i)&&(o(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);var r;return e&&(n=this.removeTransform(n)),ku((r=n).x),ku(r.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){var e;const{visualElement:t}=this.options;if(!t)return{x:{min:0,max:0},y:{min:0,max:0}};const n=t.measureViewportBox();if(!((null===(e=this.scroll)||void 0===e?void 0:e.wasRoot)||this.path.some(Eu))){const{scroll:e}=this.root;e&&(Wl(n.x,e.offset.x),Wl(n.y,e.offset.y))}return n}removeElementScroll(e){var t;const n={x:{min:0,max:0},y:{min:0,max:0}};if(Dc(n,e),null===(t=this.scroll)||void 0===t?void 0:t.wasRoot)return n;for(let r=0;r<this.path.length;r++){const t=this.path[r],{scroll:i,options:o}=t;t!==this.root&&i&&o.layoutScroll&&(i.wasRoot&&Dc(n,e),Wl(n.x,i.offset.x),Wl(n.y,i.offset.y))}return n}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n={x:{min:0,max:0},y:{min:0,max:0}};Dc(n,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&Kl(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),_l(e.latestValues)&&Kl(n,e.latestValues)}return _l(this.latestValues)&&Kl(n,this.latestValues),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};Dc(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!_l(e.latestValues))continue;Ll(e.latestValues)&&e.updateSnapshot();const r={x:{min:0,max:0},y:{min:0,max:0}};Dc(r,e.measurePageBox()),Uc(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,r)}return _l(this.latestValues)&&Uc(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==uo.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t;const n=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=n.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=n.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=n.isSharedProjectionDirty);const r=Boolean(this.resumingFrom)||this!==n;if(!(e||r&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:i,layoutId:o}=this.options;if(this.layout&&(i||o)){if(this.resolvedRelativeTargetAt=uo.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Ml(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),Dc(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var s,a,l;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),s=this.target,a=this.relativeTarget,l=this.relativeParent.target,Pl(s.x,a.x,l.x),Pl(s.y,a.y,l.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):Dc(this.target,this.layout.layoutBox),Nl(this.target,this.targetDelta)):Dc(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Ml(this.relativeTargetOrigin,this.target,e.target),Dc(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}so.value&&Zc.calculatedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!Ll(this.parent.latestValues)&&!Dl(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;const t=this.getLead(),n=Boolean(this.resumingFrom)||this!==t;let r=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(r=!1),n&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(r=!1),this.resolvedRelativeTargetAt===uo.timestamp&&(r=!1),r)return;const{layout:i,layoutId:o}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!i&&!o)return;Dc(this.layoutCorrected,this.layout.layoutBox);const s=this.treeScale.x,a=this.treeScale.y;!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=n.length;if(!i)return;let o,s;t.x=t.y=1;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const{visualElement:i}=o.options;i&&i.props.style&&"contents"===i.props.style.display||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Kl(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,Nl(e,s)),r&&_l(o.latestValues)&&Kl(e,o.latestValues))}t.x<Hl&&t.x>Ul&&(t.x=1),t.y<Hl&&t.y>Ul&&(t.y=1)}(this.layoutCorrected,this.treeScale,this.path,n),!t.layout||t.target||1===this.treeScale.x&&1===this.treeScale.y||(t.target=t.layout.layoutBox,t.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}});const{target:l}=t;l?(this.projectionDelta&&this.prevProjectionDelta?(Vc(this.prevProjectionDelta.x,this.projectionDelta.x),Vc(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),$l(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.treeScale.x===s&&this.treeScale.y===a&&Qc(this.projectionDelta.x,this.prevProjectionDelta.x)&&Qc(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),so.value&&Zc.calculatedProjections++):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];var t;if(null===(t=this.options.visualElement)||void 0===t||t.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const s={x:{min:0,max:0},y:{min:0,max:0}},a=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,u=Boolean(a&&!c&&!0===this.options.crossfade&&!this.path.some(bu));let d;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;vu(o.x,e.x,n),vu(o.y,e.y,n),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ml(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,n,r){yu(e.x,t.x,n.x,r),yu(e.y,t.y,n.y,r)}(this.relativeTarget,this.relativeTargetOrigin,s,n),d&&function(e,t){return Yc(e.x,t.x)&&Yc(e.y,t.y)}(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),Dc(d,this.relativeTarget)),a&&(this.animationValues=i,function(e,t,n,r,i,o){i?(e.opacity=la(0,void 0!==n.opacity?n.opacity:1,Rc(r)),e.opacityExit=la(void 0!==t.opacity?t.opacity:1,0,Ic(r))):o&&(e.opacity=la(void 0!==t.opacity?t.opacity:1,void 0!==n.opacity?n.opacity:1,r));for(let s=0;s<Pc;s++){const i=`border${$c[s]}Radius`;let o=Ac(t,i),a=Ac(n,i);void 0===o&&void 0===a||(o||(o=0),a||(a=0),0===o||0===a||Mc(o)===Mc(a)?(e[i]=Math.max(la(Tc(o),Tc(a),r),0),(ns.test(a)||ns.test(o))&&(e[i]+="%")):e[i]=a)}(t.rotate||n.rotate)&&(e.rotate=la(t.rotate||0,n.rotate||0,r))}(i,r,this.latestValues,n,u,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(co(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=lo.update((()=>{fc.hasAnimatedSinceResize=!0,aa.layout++,this.currentAnimation=function(e,t,n){const r=ko(e)?e:jo(e);return r.start(tl("",r,t,n)),r.animation}(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{aa.layout--},onComplete:()=>{aa.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&Cu(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=El(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const r=El(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}Dc(t,n),Kl(t,i),$l(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new qc);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){var e;const{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;const{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;const r={};n.z&&nu("z",e,r,this.animationValues);for(let i=0;i<Jc.length;i++)nu(`rotate${Jc[i]}`,e,r,this.animationValues),nu(`skew${Jc[i]}`,e,r,this.animationValues);e.render();for(const i in r)e.setStaticValue(i,r[i]),this.animationValues&&(this.animationValues[i]=r[i]);e.scheduleRender()}getProjectionStyles(e){var t,n;if(!this.instance||this.isSVG)return;if(!this.isVisible)return eu;const r={visibility:""},i=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,r.opacity="",r.pointerEvents=zc(null===e||void 0===e?void 0:e.pointerEvents)||"",r.transform=i?i(this.latestValues,""):"none",r;const o=this.getLead();if(!this.projectionDelta||!this.layout||!o.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=zc(null===e||void 0===e?void 0:e.pointerEvents)||""),this.hasProjected&&!_l(this.latestValues)&&(t.transform=i?i({},""):"none",this.hasProjected=!1),t}const s=o.animationValues||o.latestValues;this.applyTransformsToTarget(),r.transform=function(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(null===n||void 0===n?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),1===t.x&&1===t.y||(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:e,rotate:t,rotateX:i,rotateY:o,skewX:s,skewY:a}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),o&&(r+=`rotateY(${o}deg) `),s&&(r+=`skewX(${s}deg) `),a&&(r+=`skewY(${a}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return 1===a&&1===l||(r+=`scale(${a}, ${l})`),r||"none"}(this.projectionDeltaWithTransform,this.treeScale,s),i&&(r.transform=i(s,r.transform));const{x:a,y:l}=this.projectionDelta;r.transformOrigin=`${100*a.origin}% ${100*l.origin}% 0`,o.animationValues?r.opacity=o===this?null!==(n=null!==(t=s.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==n?n:1:this.preserveOpacity?this.latestValues.opacity:s.opacityExit:r.opacity=o===this?void 0!==s.opacity?s.opacity:"":void 0!==s.opacityExit?s.opacityExit:0;for(const c in vc){if(void 0===s[c])continue;const{correct:e,applyTo:t,isCSSVariable:n}=vc[c],i="none"===r.transform?s[c]:e(s[c],o);if(t){const e=t.length;for(let n=0;n<e;n++)r[t[n]]=i}else n?this.options.visualElement.renderState.vars[c]=i:r[c]=i}return this.options.layoutId&&(r.pointerEvents=o===this?zc(null===e||void 0===e?void 0:e.pointerEvents)||"":"none"),r}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()})),this.root.nodes.forEach(uu),this.root.sharedNodes.clear()}}}function ou(e){e.updateLayout()}function su(e){var t;const n=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:r}=e.layout,{animationType:i}=e.options,o=n.source!==e.layout.source;"size"===i?Rl((e=>{const r=o?n.measuredBox[e]:n.layoutBox[e],i=El(r);r.min=t[e].min,r.max=r.min+i})):Cu(i,n.layoutBox,t)&&Rl((r=>{const i=o?n.measuredBox[r]:n.layoutBox[r],s=El(t[r]);i.max=i.min+s,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+s)}));const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};$l(s,t,n.layoutBox);const a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};o?$l(a,e.applyTransform(r,!0),n.measuredBox):$l(a,t,n.layoutBox);const l=!Wc(s);let c=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:i,layout:o}=r;if(i&&o){const s={x:{min:0,max:0},y:{min:0,max:0}};Ml(s,n.layoutBox,i.layoutBox);const a={x:{min:0,max:0},y:{min:0,max:0}};Ml(a,t,o.layoutBox),Xc(s,a)||(c=!0),r.options.layoutRoot&&(e.relativeTarget=a,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:n,delta:a,layoutDelta:s,hasLayoutChanged:l,hasRelativeLayoutChanged:c})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function au(e){so.value&&Zc.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function lu(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function cu(e){e.clearSnapshot()}function uu(e){e.clearMeasurements()}function du(e){e.isLayoutDirty=!1}function hu(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function pu(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function fu(e){e.resolveTargetDelta()}function mu(e){e.calcProjection()}function gu(e){e.resetSkewAndRotation()}function xu(e){e.removeLeadSnapshot()}function vu(e,t,n){e.translate=la(t.translate,0,n),e.scale=la(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function yu(e,t,n,r){e.min=la(t.min,n.min,r),e.max=la(t.max,n.max,r)}function bu(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const wu={duration:.45,ease:[.4,0,.1,1]},ju=e=>"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Su=ju("applewebkit/")&&!ju("chrome/")?Math.round:qi;function ku(e){e.min=Su(e.min),e.max=Su(e.max)}function Cu(e,t,n){return"position"===e||"preserve-aspect"===e&&(r=Gc(t),i=Gc(n),o=.2,!(Math.abs(r-i)<=o));var r,i,o}function Eu(e){var t;return e!==e.root&&(null===(t=e.scroll)||void 0===t?void 0:t.wasRoot)}const zu=iu({attachResizeListener:(e,t)=>jl(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),$u={current:void 0},Pu=iu({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!$u.current){const e=new zu({});e.mount(window),e.setOptions({layoutScroll:!0}),$u.current=e}return $u.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),Tu={pan:{Feature:class extends yl{constructor(){super(...arguments),this.removePointerDownListener=qi}onPointerDown(e){this.session=new ql(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint()})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:hc(e),onStart:hc(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&lo.postRender((()=>r(e,t)))}}}mount(){this.removePointerDownListener=kl(this.node.current,"pointerdown",(e=>this.onPointerDown(e)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends yl{constructor(e){super(e),this.removeGroupControls=qi,this.removeListeners=qi,this.controls=new uc(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||qi}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:Pu,MeasureLayout:jc}};function Mu(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover","Start"===n);const i=r["onHover"+n];i&&lo.postRender((()=>i(t,Sl(t))))}function Au(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap","Start"===n);const i=r["onTap"+("End"===n?"":n)];i&&lo.postRender((()=>i(t,Sl(t))))}const Ru=new WeakMap,Iu=new WeakMap,Lu=e=>{const t=Ru.get(e.target);t&&t(e)},_u=e=>{e.forEach(Lu)};function Du(e,t,n){const r=function(e){let{root:t,...n}=e;const r=t||document;Iu.has(r)||Iu.set(r,{});const i=Iu.get(r),o=JSON.stringify(n);return i[o]||(i[o]=new IntersectionObserver(_u,{root:t,...n})),i[o]}(t);return Ru.set(e,n),r.observe(e),()=>{Ru.delete(e),r.unobserve(e)}}const Vu={some:0,all:1};const Fu={inView:{Feature:class extends yl{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:i}=e,o={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof r?r:Vu[r]};return Du(this.node.current,o,(e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,i&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),o=t?n:r;o&&o(e)}))}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends yl{mount(){const{current:e}=this.node;e&&(this.unmount=Xi(e,((e,t)=>(Au(this.node,t,"Start"),(e,t)=>{let{success:n}=t;return Au(this.node,e,n?"End":"Cancel")})),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}},focus:{Feature:class extends yl{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(rj){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ga(jl(this.node.current,"focus",(()=>this.onFocus())),jl(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends yl{mount(){const{current:e}=this.node;e&&(this.unmount=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[r,i,o]=Vi(e,n),s=e=>{if(!Fi(e))return;const{target:n}=e,r=t(n,e);if("function"!==typeof r||!n)return;const o=e=>{Fi(e)&&(r(e),n.removeEventListener("pointerleave",o))};n.addEventListener("pointerleave",o,i)};return r.forEach((e=>{e.addEventListener("pointerenter",s,i)})),o}(e,((e,t)=>(Mu(this.node,t,"Start"),e=>Mu(this.node,e,"End")))))}unmount(){}}}},Ou={layout:{ProjectionNode:Pu,MeasureLayout:jc}},Bu=(0,e.createContext)({strict:!1}),Nu=(0,e.createContext)({});function Uu(e){return pi(e.animate)||cl.some((t=>al(e[t])))}function Hu(e){return Boolean(Uu(e)||e.variants)}function Wu(t){const{initial:n,animate:r}=function(e,t){if(Uu(e)){const{initial:t,animate:n}=e;return{initial:!1===t||al(t)?t:void 0,animate:al(n)?n:void 0}}return!1!==e.inherit?t:{}}(t,(0,e.useContext)(Nu));return(0,e.useMemo)((()=>({initial:n,animate:r})),[Yu(n),Yu(r)])}function Yu(e){return Array.isArray(e)?e.join(" "):e}const Ku={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Xu={};for(const n in Ku)Xu[n]={isEnabled:e=>Ku[n].some((t=>!!e[t]))};const Gu=Symbol.for("motionComponentSymbol");function Qu(t,n,r){return(0,e.useCallback)((e=>{e&&t.onMount&&t.onMount(e),n&&(e?n.mount(e):n.unmount()),r&&("function"===typeof r?r(e):Gl(r)&&(r.current=e))}),[n])}function qu(t,n,r,i,o){var s,a;const{visualElement:l}=(0,e.useContext)(Nu),c=(0,e.useContext)(Bu),u=(0,e.useContext)(ei),d=(0,e.useContext)(ti).reducedMotion,h=(0,e.useRef)(null);i=i||c.renderer,!h.current&&i&&(h.current=i(t,{visualState:n,parent:l,props:r,presenceContext:u,blockInitialAnimation:!!u&&!1===u.initial,reducedMotionConfig:d}));const p=h.current,f=(0,e.useContext)(pc);!p||p.projection||!o||"html"!==p.type&&"svg"!==p.type||function(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:c}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Zu(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:Boolean(s)||a&&Gl(a),visualElement:e,animationType:"string"===typeof o?o:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:c})}(h.current,r,o,f);const m=(0,e.useRef)(!1);(0,e.useInsertionEffect)((()=>{p&&m.current&&p.update(r,u)}));const g=r[zo],x=(0,e.useRef)(Boolean(g)&&!(null===(s=window.MotionHandoffIsComplete)||void 0===s?void 0:s.call(window,g))&&(null===(a=window.MotionHasOptimisedAnimation)||void 0===a?void 0:a.call(window,g)));return ui((()=>{p&&(m.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),yc.render(p.render),x.current&&p.animationState&&p.animationState.animateChanges())})),(0,e.useEffect)((()=>{p&&(!x.current&&p.animationState&&p.animationState.animateChanges(),x.current&&(queueMicrotask((()=>{var e;null===(e=window.MotionHandoffMarkAsComplete)||void 0===e||e.call(window,g)})),x.current=!1))})),p}function Zu(e){if(e)return!1!==e.options.allowProjection?e.projection:Zu(e.parent)}function Ju(t){let{preloadedFeatures:n,createVisualElement:r,useRender:i,useVisualState:o,Component:s}=t;var a,l;function c(t,n){let a;const l={...(0,e.useContext)(ti),...t,layoutId:ed(t)},{isStatic:c}=l,u=Wu(t),d=o(t,c);if(!c&&ci){!function(){(0,e.useContext)(Bu).strict;0}();const t=function(e){const{drag:t,layout:n}=Xu;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:(null===t||void 0===t?void 0:t.isEnabled(e))||(null===n||void 0===n?void 0:n.isEnabled(e))?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}(l);a=t.MeasureLayout,u.visualElement=qu(s,d,l,r,t.ProjectionNode)}return(0,qr.jsxs)(Nu.Provider,{value:u,children:[a&&u.visualElement?(0,qr.jsx)(a,{visualElement:u.visualElement,...l}):null,i(s,t,Qu(d,u.visualElement,n),d,c,u.visualElement)]})}n&&function(e){for(const t in e)Xu[t]={...Xu[t],...e[t]}}(n),c.displayName=`motion.${"string"===typeof s?s:`create(${null!==(l=null!==(a=s.displayName)&&void 0!==a?a:s.name)&&void 0!==l?l:""})`}`;const u=(0,e.forwardRef)(c);return u[Gu]=s,u}function ed(t){let{layoutId:n}=t;const r=(0,e.useContext)(Zr).id;return r&&void 0!==n?r+"-"+n:n}function td(e,t){let{layout:n,layoutId:r}=t;return Ji.has(e)||e.startsWith("origin")||(n||void 0!==r)&&(!!vc[e]||"opacity"===e)}const nd=(e,t)=>t&&"number"===typeof e?t.transform(e):e,rd={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},id=Zi.length;function od(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,a=!1;for(const l in t){const e=t[l];if(Ji.has(l))s=!0;else if(Ys(l))i[l]=e;else{const t=nd(e,Cs[l]);l.startsWith("origin")?(a=!0,o[l]=t):r[l]=t}}if(t.transform||(s||n?r.transform=function(e,t,n){let r="",i=!0;for(let o=0;o<id;o++){const s=Zi[o],a=e[s];if(void 0===a)continue;let l=!0;if(l="number"===typeof a?a===(s.startsWith("scale")?1:0):0===parseFloat(a),!l||n){const e=nd(a,Cs[s]);l||(i=!1,r+=`${rd[s]||s}(${e}) `),n&&(t[s]=e)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:e="50%",originY:t="50%",originZ:n=0}=o;r.transformOrigin=`${e} ${t} ${n}`}}const sd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function ad(e,t,n){for(const r in t)ko(t[r])||td(r,n)||(e[r]=t[r])}function ld(t,n){const r={};return ad(r,t.style||{},t),Object.assign(r,function(t,n){let{transformTemplate:r}=t;return(0,e.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return od(e,n,r),Object.assign({},e.vars,e.style)}),[n])}(t,n)),r}function cd(e,t){const n={},r=ld(e,t);return e.drag&&!1!==e.dragListener&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const ud=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function dd(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||ud.has(e)}let hd=e=>!dd(e);try{(pd=require("@emotion/is-prop-valid").default)&&(hd=e=>e.startsWith("on")?!dd(e):pd(e))}catch(ij){}var pd;const fd=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function md(e){return"string"===typeof e&&!e.includes("-")&&!!(fd.indexOf(e)>-1||/[A-Z]/u.test(e))}const gd={offset:"stroke-dashoffset",array:"stroke-dasharray"},xd={offset:"strokeDashoffset",array:"strokeDasharray"};function vd(e,t,n){return"string"===typeof e?e:rs.transform(t+n*e)}function yd(e,t,n,r){let{attrX:i,attrY:o,attrScale:s,originX:a,originY:l,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h}=t;if(od(e,h,r),n)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:p,style:f,dimensions:m}=e;p.transform&&(m&&(f.transform=p.transform),delete p.transform),m&&(void 0!==a||void 0!==l||f.transform)&&(f.transformOrigin=function(e,t,n){return`${vd(t,e.x,e.width)} ${vd(n,e.y,e.height)}`}(m,void 0!==a?a:.5,void 0!==l?l:.5)),void 0!==i&&(p.x=i),void 0!==o&&(p.y=o),void 0!==s&&(p.scale=s),void 0!==c&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const o=i?gd:xd;e[o.offset]=rs.transform(-r);const s=rs.transform(t),a=rs.transform(n);e[o.array]=`${s} ${a}`}(p,c,u,d,!1)}const bd=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),wd=e=>"string"===typeof e&&"svg"===e.toLowerCase();function jd(t,n,r,i){const o=(0,e.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return yd(e,n,wd(i),t.transformTemplate),{...e.attrs,style:{...e.style}}}),[n]);if(t.style){const e={};ad(e,t.style,t),o.style={...e,...o.style}}return o}function Sd(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(n,r,i,o,s)=>{let{latestValues:a}=o;const l=(md(n)?jd:cd)(r,a,s,n),c=function(e,t,n){const r={};for(const i in e)"values"===i&&"object"===typeof e.values||(hd(i)||!0===n&&dd(i)||!t&&!dd(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}(r,"string"===typeof n,t),u=n!==e.Fragment?{...c,...l,ref:i}:{},{children:d}=r,h=(0,e.useMemo)((()=>ko(d)?d.get():d),[d]);return(0,e.createElement)(n,{...u,children:h})}}const kd=t=>(n,r)=>{const i=(0,e.useContext)(Nu),o=(0,e.useContext)(ei),s=()=>function(e,t,n,r){let{scrapeMotionValuesFromProps:i,createRenderState:o,onUpdate:s}=e;const a={latestValues:Cd(t,n,r,i),renderState:o()};return s&&(a.onMount=e=>s({props:t,current:e,...a}),a.onUpdate=e=>s(e)),a}(t,n,i,o);return r?s():Jr(s)};function Cd(e,t,n,r){const i={},o=r(e,{});for(const h in o)i[h]=zc(o[h]);let{initial:s,animate:a}=e;const l=Uu(e),c=Hu(e);t&&c&&!l&&!1!==e.inherit&&(void 0===s&&(s=t.initial),void 0===a&&(a=t.animate));let u=!!n&&!1===n.initial;u=u||!1===s;const d=u?a:s;if(d&&"boolean"!==typeof d&&!pi(d)){const t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){const r=mi(e,t[n]);if(r){const{transitionEnd:e,transition:t,...n}=r;for(const r in n){let e=n[r];if(Array.isArray(e)){e=e[u?e.length-1:0]}null!==e&&(i[r]=e)}for(const r in e)i[r]=e[r]}}}return i}function Ed(e,t,n){var r;const{style:i}=e,o={};for(const s in i)(ko(i[s])||t.style&&ko(t.style[s])||td(s,e)||void 0!==(null===(r=null===n||void 0===n?void 0:n.getValue(s))||void 0===r?void 0:r.liveStyle))&&(o[s]=i[s]);return o}const zd={useVisualState:kd({scrapeMotionValuesFromProps:Ed,createRenderState:sd})};function $d(e,t){try{t.dimensions="function"===typeof e.getBBox?e.getBBox():e.getBoundingClientRect()}catch(rj){t.dimensions={x:0,y:0,width:0,height:0}}}function Pd(e,t,n,r){let{style:i,vars:o}=t;Object.assign(e.style,i,r&&r.getProjectionStyles(n));for(const s in o)e.style.setProperty(s,o[s])}const Td=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Md(e,t,n,r){Pd(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Td.has(i)?i:Eo(i),t.attrs[i])}function Ad(e,t,n){const r=Ed(e,t,n);for(const i in e)if(ko(e[i])||ko(t[i])){r[-1!==Zi.indexOf(i)?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i]=e[i]}return r}const Rd=["x","y","width","height","cx","cy","r"],Id={useVisualState:kd({scrapeMotionValuesFromProps:Ad,createRenderState:bd,onUpdate:e=>{let{props:t,prevProps:n,current:r,renderState:i,latestValues:o}=e;if(!r)return;let s=!!t.drag;if(!s)for(const l in o)if(Ji.has(l)){s=!0;break}if(!s)return;let a=!n;if(n)for(let l=0;l<Rd.length;l++){const e=Rd[l];t[e]!==n[e]&&(a=!0)}a&&lo.read((()=>{$d(r,i),lo.render((()=>{yd(i,o,wd(r.tagName),t.transformTemplate),Md(r,i)}))}))}})};function Ld(e,t){return function(n){let{forwardMotionProps:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{forwardMotionProps:!1};return Ju({...md(n)?Id:zd,preloadedFeatures:e,useRender:Sd(r),createVisualElement:t,Component:n})}}const _d={current:null},Dd={current:!1};const Vd=[...Js,ls,xs],Fd=new WeakMap;const Od=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Bd{scrapeMotionValuesFromProps(e,t,n){return{}}constructor(e){let{parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:s}=e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Bs,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const e=mo.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,lo.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=s;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=Boolean(o),this.isControllingVariants=Uu(n),this.isVariantNode=Hu(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:d,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in h){const e=h[p];void 0!==l[p]&&ko(e)&&e.set(l[p],!1)}}mount(e){this.current=e,Fd.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((e,t)=>this.bindToMotionValue(t,e))),Dd.current||function(){if(Dd.current=!0,ci)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>_d.current=e.matches;e.addListener(t),t()}else _d.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||_d.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),co(this.notifyUpdate),co(this.render),this.valueSubscriptions.forEach((e=>e())),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const n=Ji.has(e);n&&this.onBindTransform&&this.onBindTransform();const r=t.on("change",(t=>{this.latestValues[e]=t,this.props.onUpdate&&lo.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)})),i=t.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,(()=>{r(),i(),o&&o(),t.owner&&t.stop()}))}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in Xu){const t=Xu[e];if(!t)continue;const{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<Od.length;n++){const t=Od[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const r=e["on"+t];r&&(this.propEventSubscriptions[t]=this.on(t,r))}this.prevMotionValues=function(e,t,n){for(const r in t){const i=t[r],o=n[r];if(ko(i))e.addValue(r,i);else if(ko(o))e.addValue(r,jo(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const t=e.getValue(r);!0===t.liveStyle?t.jump(i):t.hasAnimated||t.set(i)}else{const t=e.getStaticValue(r);e.addValue(r,jo(void 0!==t?t:i,{owner:e}))}}for(const r in n)void 0===t[r]&&e.removeValue(r);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=jo(null===t?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){var n;let r=void 0===this.latestValues[e]&&this.current?null!==(n=this.getBaseTargetFromProps(this.props,e))&&void 0!==n?n:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];return void 0!==r&&null!==r&&("string"===typeof r&&(Hs(r)||Bo(r))?r=parseFloat(r):!(e=>Vd.find(Zs(e)))(r)&&xs.test(t)&&(r=$s(e,t)),this.setBaseTarget(e,ko(r)?r.get():r)),ko(r)?r.get():r}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:n}=this.props;let r;if("string"===typeof n||"object"===typeof n){const i=mi(this.props,n,null===(t=this.presenceContext)||void 0===t?void 0:t.custom);i&&(r=i[e])}if(n&&void 0!==r)return r;const i=this.getBaseTargetFromProps(this.props,e);return void 0===i||ko(i)?void 0!==this.initialValues[e]&&void 0===r?void 0:this.baseTarget[e]:i}on(e,t){return this.events[e]||(this.events[e]=new vo),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e].notify(...n)}}}class Nd extends Bd{constructor(){super(...arguments),this.KeyframeResolver=ta}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:r}=t;delete n[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;ko(e)&&(this.childSubscription=e.on("change",(e=>{this.current&&(this.current.textContent=`${e}`)})))}}class Ud extends Nd{constructor(){super(...arguments),this.type="html",this.renderInstance=Pd}readValueFromInstance(e,t){if(Ji.has(t)){const e=zs(t);return e&&e.default||0}{const r=(n=e,window.getComputedStyle(n)),i=(Ys(t)?r.getPropertyValue(t):r[t])||0;return"string"===typeof i?i.trim():i}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return Xl(e,n)}build(e,t,n){od(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Ed(e,t,n)}}class Hd extends Nd{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Al,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&$d(this.current,this.renderState)}}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Ji.has(t)){const e=zs(t);return e&&e.default||0}return t=Td.has(t)?t:Eo(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Ad(e,t,n)}onBindTransform(){this.current&&!this.renderState.dimensions&&lo.postRender(this.updateDimensions)}build(e,t,n){yd(e,t,this.isSVGTag,n.transformTemplate)}renderInstance(e,t,n,r){Md(e,t,0,r)}mount(e){this.isSVGTag=wd(e.tagName),super.mount(e)}}const Wd=(t,n)=>md(t)?new Hd(n):new Ud(n,{allowProjection:t!==e.Fragment}),Yd=Ld({...wl,...Fu,...Tu,...Ou},Wd),Kd=hi(Yd),Xd="#1F1F1F",Gd="#6E7CF3",Qd="#4285F4",qd="#34A853",Zd="#FBBC05",Jd="#FFFFFF",eh="320px",th="768px",nh="1024px",rh="1440px",ih=`@media (min-width: ${eh})`,oh=`@media (min-width: ${th})`,sh=`@media (min-width: ${nh})`,ah=`@media (min-width: ${rh})`,lh=[{M:"M",U:"uin",F:"F",I:"ilm"},{M:"Multi",U:"Unit",F:"Functional",I:"Intelligence"},{M:"My",U:"University",F:"Friends",I:"Interact"}],ch=[{icon:(0,qr.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",children:(0,qr.jsx)("path",{d:"M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.05l1.83-2h4.24l1.83 2H20v12zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z",fill:"currentColor"})}),texts:["\ud3ec\ud1a0\ubd80\uc2a4","\ub300\uc5ec","\ud50c\ub7ab\ud3fc","\uc11c\ube44\uc2a4"]},{icon:(0,qr.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",children:(0,qr.jsx)("path",{d:"M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z",fill:"currentColor"})}),texts:["\uae30\uc5c5","\ub9de\ucda4\ud615","AI","Agent"]},{icon:(0,qr.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",children:(0,qr.jsx)("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18h14v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18h6v-1.5c0-2.33-4.67-3.5-7-3.5z",fill:"currentColor"})}),texts:["\ub300\ud559\uc0dd","\uc18c\uc15c","\ud50c\ub7ab\ud3fc","\uc11c\ube44\uc2a4"]}],uh=Qr`
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.5;
  }
`,dh=Qr`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(-20px, 20px) scale(1.2);
  }
  75% {
    transform: translate(20px, -20px) scale(0.9);
  }
`,hh=Xr.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Xd};
  padding: 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    right: -10%;
    bottom: -10%;
    width: 40%;
    height: 40%;
    background: linear-gradient(135deg, ${Gd} 0%, rgba(234,67,67,0) 100%);
    filter: blur(120px);
    border-radius: 50%;
    opacity: 0.3;
  }

  &::after {
    content: '';
    position: absolute;
    left: -5%;
    top: -5%;
    width: 30%;
    height: 30%;
    background: linear-gradient(135deg, ${Gd} 0%, rgba(234,67,67,0) 100%);
    filter: blur(100px);
    border-radius: 50%;
    opacity: 0.2;
  }
`,ph=Xr.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
`,fh=Xr.div`
  position: absolute;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  top: ${e=>e.top}%;
  left: ${e=>e.left}%;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  animation: ${dh} 12s infinite ease-in-out;
  animation-delay: ${e=>e.delay}s;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 350px;
    height: 2px;
    background: linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%);
    transform-origin: left center;
    animation: ${uh} 6s infinite ease-in-out;
    animation-delay: ${e=>e.delay+1}s;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 2px;
    background: linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%);
    transform: rotate(120deg);
    transform-origin: left center;
    animation: ${uh} 8s infinite ease-in-out;
    animation-delay: ${e=>e.delay+2}s;
  }
`,mh=()=>{const[t,n]=(0,e.useState)(0),[r,i]=(0,e.useState)(!1),[o,s]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{const e=setInterval((()=>{i(!1),s(!1),n((e=>(e+1)%lh.length))}),5e3);return()=>clearInterval(e)}),[]),(0,e.useEffect)((()=>{const e=setTimeout((()=>{i(!0)}),1800),t=setTimeout((()=>{s(!0)}),2e3);return()=>{clearTimeout(e),clearTimeout(t)}}),[t]),(0,qr.jsxs)(hh,{children:[(0,qr.jsxs)(ph,{children:[(0,qr.jsx)(fh,{size:16,top:15,left:15,delay:0}),(0,qr.jsx)(fh,{size:20,top:25,left:75,delay:2}),(0,qr.jsx)(fh,{size:18,top:65,left:25,delay:4}),(0,qr.jsx)(fh,{size:22,top:75,left:85,delay:1}),(0,qr.jsx)(fh,{size:14,top:45,left:55,delay:3}),(0,qr.jsx)(fh,{size:18,top:35,left:35,delay:5}),(0,qr.jsx)(fh,{size:20,top:55,left:65,delay:2.5})]}),(0,qr.jsxs)(xh,{children:[(0,qr.jsx)(vh,{children:(0,qr.jsxs)(yh,{children:[(0,qr.jsxs)(bh,{children:["MUFI\ub85c \ub9cc\ub4dc\ub294",(0,qr.jsx)("br",{}),"\uc5f0\uacb0\uc758 \uc2dc\uc791"]}),(0,qr.jsxs)(wh,{children:["MUFI\ub294 \uc11c\ube44\uc2a4\uc640 \uc0ac\ub78c\uc744 \uc5f0\uacb0\ud574",(0,qr.jsx)("br",{}),"\uc0c8\ub85c\uc6b4 \uac00\ub2a5\uc131\uc744 \ub9cc\ub4ed\ub2c8\ub2e4"]})]})}),(0,qr.jsx)(jh,{children:(0,qr.jsxs)(Sh,{children:[(0,qr.jsxs)(kh,{children:[(0,qr.jsxs)(Ch,{children:[(0,qr.jsx)(Eh,{children:"M"}),(0,qr.jsx)(di,{mode:"wait",children:(0,qr.jsx)(Kd.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,y:10},transition:{duration:.2},children:(0,qr.jsx)(zh,{isComplete:r,textLength:lh[t].M.length,delay:.2,children:(0,qr.jsx)("span",{children:lh[t].M})})},t)})]}),(0,qr.jsxs)(Ch,{children:[(0,qr.jsx)(Eh,{children:"U"}),(0,qr.jsx)(di,{mode:"wait",children:(0,qr.jsx)(Kd.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,y:10},transition:{duration:.2},children:(0,qr.jsx)(zh,{isComplete:r,textLength:lh[t].U.length,delay:.4,children:(0,qr.jsx)("span",{children:lh[t].U})})},t)})]}),(0,qr.jsxs)(Ch,{children:[(0,qr.jsx)(Eh,{children:"F"}),(0,qr.jsx)(di,{mode:"wait",children:(0,qr.jsx)(Kd.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,y:10},transition:{duration:.2},children:(0,qr.jsx)(zh,{isComplete:r,textLength:lh[t].F.length,delay:.6,children:(0,qr.jsx)("span",{children:lh[t].F})})},t)})]}),(0,qr.jsxs)(Ch,{children:[(0,qr.jsx)(Eh,{children:"I"}),(0,qr.jsx)(di,{mode:"wait",children:(0,qr.jsx)(Kd.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,y:10},transition:{duration:.2},children:(0,qr.jsx)(zh,{isComplete:r,textLength:lh[t].I.length,delay:.8,children:(0,qr.jsx)("span",{children:lh[t].I})})},t)})]})]}),(0,qr.jsx)($h,{children:(0,qr.jsx)(di,{mode:"wait",children:o&&(0,qr.jsx)(Kd.div,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},transition:{duration:.4,ease:"easeOut"},style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,qr.jsxs)(Mh,{children:[(0,qr.jsx)(Ph,{children:ch[t].icon}),(0,qr.jsx)(Th,{children:ch[t].texts.map(((e,n)=>(0,qr.jsxs)("span",{children:[e,n<ch[t].texts.length-1&&" "]},n)))})]})},t)})})]})})]})]})},gh=Qr`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`,xh=(Qr`
  from, to {
    border-right-color: ${Jd};
  }
  50% {
    border-right-color: transparent;
  }
`,Qr`
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-1px);
  }
  75% {
    transform: translateX(1px);
  }
`,Qr`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Qr`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`,Qr`
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
`,Qr`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`,Xr.div`
  text-align: left;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;

  ${oh} {
    flex-direction: row;
    align-items: center;
    gap: 8rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    justify-content: space-between;
  }
`),vh=Xr.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  margin-top: 4rem;
  order: 1;
  width: 100%;

  ${oh} {
    width: 50%;
    margin-top: 0;
    padding-left: 0;
    padding-right: 3rem;
  }
`,yh=Xr.div`
  width: 100%;
  max-width: 600px;
`,bh=Xr.h1`
  font-family: 'Pretendard';
  font-size: 2.5rem;
  font-weight: 700;
  color: ${Jd};
  margin-bottom: 2rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-align: left;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: -2rem;
    top: -1rem;
    width: 4rem;
    height: 4rem;
    background: linear-gradient(135deg, ${Gd} 0%, rgba(234,67,67,0) 100%);
    filter: blur(30px);
    border-radius: 50%;
    z-index: -1;
  }

  br {
    display: none;
    ${oh} {
      display: block;
    }
  }
  
  ${oh} {
    font-size: 3.5rem;
  }

  ${sh} {
    font-size: 4.5rem;
  }
`,wh=Xr.h2`
  font-family: 'Pretendard';
  font-size: 1.25rem;
  font-weight: 400;
  color: ${Jd};
  opacity: 0.9;
  line-height: 1.6;
  letter-spacing: -0.01em;

  br {
    display: none;
    ${oh} {
      display: block;
    }
  }
  
  ${oh} {
    font-size: 1.75rem;
  }

  ${sh} {
    font-size: 2rem;
  }
`,jh=Xr.div`
  width: fit-content;
  display: flex;
  justify-content: flex-start;
  padding: 1.5rem;
  order: 2;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  ${oh} {
    width: 500px;
    margin: 0;
    padding: 2rem;
  }

  ${sh} {
    width: 550px;
    padding: 2.5rem;
  }
`,Sh=Xr.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`,kh=Xr.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow: visible;
`,Ch=Xr.div`
  display: flex;
  align-items: center;
  height: 3.5rem;
  overflow: visible;
  position: relative;

  ${oh} {
    height: 4rem;
  }

  ${sh} {
    height: 4.5rem;
  }
`,Eh=Xr.span`
  font-size: 2.5rem;
  color: ${Jd};
  font-weight: 700;
  font-family: 'Pretendard';
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  width: 3rem;
  text-align: center;
  position: relative;

  ${oh} {
    font-size: 3rem;
    width: 3.5rem;
  }

  ${sh} {
    font-size: 3.5rem;
    width: 4rem;
  }
`,zh=Xr.span`
  font-family: 'Pretendard';
  font-size: 1rem;
  font-weight: 500;
  color: ${Jd};
  height: 2rem;
  overflow: visible;
  white-space: normal;
  width: auto;
  min-width: ${e=>`${e.textLength}ch`};
  display: flex;
  align-items: center;
  position: relative;
  opacity: 0.9;
  margin-left: 1rem;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  backdrop-filter: blur(5px);

  & > span {
    display: block;
    white-space: normal;
    word-break: keep-all;
    overflow: hidden;
    width: 0;
    animation: 
      ${gh} ${e=>Math.max(.15*e.textLength,.3)}s steps(${e=>e.textLength}, end) ${e=>e.delay}s forwards;
  }

  ${oh} {
    font-size: 1.25rem;
    height: 2.5rem;
    padding: 0.375rem 1rem;
  }

  ${sh} {
    font-size: 1.5rem;
    height: 3rem;
    padding: 0.5rem 1.25rem;
  }
`,$h=Xr.div`
  margin-top: 0.75rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  padding: 0 1rem;

  ${oh} {
    height: 7rem;
    padding: 0 1.5rem;
  }

  ${sh} {
    height: 8rem;
    padding: 0 2rem;
  }
`,Ph=Xr.div`
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    color: ${Jd};
    opacity: 0.8;
    width: 24px;
    height: 24px;
    
    ${oh} {
      width: 32px;
      height: 32px;
    }

    ${sh} {
      width: 40px;
      height: 40px;
    }
  }
`,Th=Xr.div`
  text-align: center;
  word-break: keep-all;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  width: 100%;
  font-size: 1.125rem;
  line-height: 1.4;
  
  span {
    display: inline-block;
    line-height: 1.4;
  }

  ${oh} {
    font-size: 1.25rem;
    gap: 0.375rem;
  }

  ${sh} {
    font-size: 1.5rem;
    gap: 0.5rem;
  }
`,Mh=Xr.div`
  font-family: 'Pretendard';
  color: ${Jd};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  will-change: opacity, transform;
  opacity: 0.9;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100%;
  max-width: 400px;
  margin: 0 auto;

  ${oh} {
    padding: 1.25rem 2rem;
    max-width: 450px;
  }

  ${sh} {
    padding: 1.5rem 2.5rem;
    max-width: 500px;
  }
`,Ah=[{id:"home",label:"Home"},{id:"photobooth",label:"\ud3ec\ud1a0\ubd80\uc2a4"},{id:"ai-agent",label:"AI Agent"},{id:"platform",label:"\uc18c\uc15c \ud50c\ub7ab\ud3fc"},{id:"contact",label:"Contact"}],Rh=()=>{const[t,n]=(0,e.useState)(!1),[r,i]=(0,e.useState)("home"),o="/"===G().pathname;(0,e.useEffect)((()=>{const e=()=>{if(n(window.scrollY>50),o){const e=Ah.map((e=>document.getElementById(e.id))),t=window.scrollY+window.innerHeight/3;e.forEach((e=>{if(e){const n=e.offsetTop,r=n+e.offsetHeight;t>=n&&t<r&&i(e.id)}}))}};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[o]);return(0,qr.jsxs)(Ih,{isScrolled:t,children:[(0,qr.jsx)(Lh,{as:qe,to:"/",children:"MUFI"}),(0,qr.jsxs)(_h,{children:[o&&Ah.map((e=>(0,qr.jsx)(Dh,{isActive:r===e.id,onClick:()=>(e=>{if(o){const t=document.getElementById(e);t&&window.scrollTo({top:t.offsetTop-80,behavior:"smooth"})}})(e.id),children:e.label},e.id))),(0,qr.jsx)(Vh,{to:"/ir",children:"IR"})]})]})},Ih=Xr.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background: ${e=>e.isScrolled?"rgba(31, 31, 31, 0.95)":"transparent"};
  backdrop-filter: ${e=>e.isScrolled?"blur(10px)":"none"};
  transition: all 0.3s ease;
  z-index: 1000;
`,Lh=Xr.div`
  font-family: 'Pretendard';
  font-size: 1.75rem;
  font-weight: 700;
  color: ${Jd};
  cursor: pointer;
  transition: opacity 0.2s ease;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`,_h=Xr.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  ${oh} {
    gap: 3rem;
  }
`,Dh=Xr.div`
  font-family: 'Pretendard';
  font-size: 1rem;
  color: ${Jd};
  opacity: ${e=>e.isActive?1:.7};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${e=>e.isActive?"100%":"0"};
    height: 2px;
    background: ${Gd};
    transition: all 0.2s ease;
  }

  &:hover {
    opacity: 1;
    
    &::after {
      width: 100%;
    }
  }

  ${oh} {
    font-size: 1.125rem;
  }
`,Vh=Xr(qe)`
  font-family: 'Pretendard';
  font-size: 1rem;
  color: ${Jd};
  background-color: ${Gd};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.2s ease;
  font-weight: 600;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  ${oh} {
    font-size: 1.125rem;
  }
`,Fh=()=>(0,qr.jsx)(Oh,{id:"about",children:(0,qr.jsx)(Bh,{children:(0,qr.jsxs)(Nh,{children:[(0,qr.jsxs)(Uh,{children:[(0,qr.jsxs)(Wh,{children:[(0,qr.jsxs)(Xh,{children:[(0,qr.jsx)(Gh,{children:"MUFI"}),"\uc5f0\uacb0\uc774 \ub9cc\ub4dc\ub294",(0,qr.jsx)("br",{}),"\uc0c8\ub85c\uc6b4 \uac00\ub2a5\uc131"]}),(0,qr.jsxs)(Qh,{children:["MUFI\ub294 Multi Unit Functional Intelligence\uc758 \uc57d\uc790\ub85c,",(0,qr.jsx)("br",{}),"AI \uae30\ubc18 \ud3ec\ud1a0\ubd80\uc2a4, \uae30\uc5c5\uc6a9 AI \uc194\ub8e8\uc158, \ub300\ud559\uc0dd \uc18c\uc15c \ud50c\ub7ab\ud3fc\uc744 \uac1c\ubc1c\ud569\ub2c8\ub2e4.",(0,qr.jsx)("br",{}),"\uc6b0\ub9ac\ub294 \ucd5c\uc2e0 \uc778\uacf5\uc9c0\ub2a5 \uae30\uc220\uc744 \ud65c\uc6a9\ud574 \uc77c\uc0c1 \uc18d \uc0ac\uc9c4 \ucd2c\uc601 \uacbd\ud5d8\uc744 \uac1c\uc120\ud558\uace0,",(0,qr.jsx)("br",{}),"\uae30\uc5c5\uc758 \uc5c5\ubb34 \ud6a8\uc728\uc131\uc744 \ub192\uc774\uba70, \ub300\ud559\uc0dd\ub4e4\uc758 \uc18c\ud1b5\uacfc \uad50\ub958\ub97c \ucd09\uc9c4\ud569\ub2c8\ub2e4."]}),(0,qr.jsx)(Op,{children:(0,qr.jsxs)(Bp,{to:"/ir",children:[(0,qr.jsx)(Np,{children:"\uc0ac\uc5c5 IR \ubcf4\uae30"}),(0,qr.jsx)(Up,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",fill:"currentColor"})})})]})})]}),(0,qr.jsxs)(Yh,{children:[(0,qr.jsxs)(ep,{children:[(0,qr.jsx)(np,{children:"\ube44\uc804 \ubc0f \uac00\uce58"}),(0,qr.jsxs)(rp,{children:[(0,qr.jsxs)(ip,{children:[(0,qr.jsx)(op,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z",fill:"currentColor"})})}),(0,qr.jsxs)(sp,{children:[(0,qr.jsx)(ap,{children:"\ubbf8\uc158"}),(0,qr.jsx)(lp,{children:"AI \uae30\uc220\ub85c \uc77c\uc0c1\uc758 \uc21c\uac04\uc744 \ud2b9\ubcc4\ud558\uac8c \ub9cc\ub4e4\uace0, \uc0ac\ub78c\uacfc \uc11c\ube44\uc2a4\ub97c \uc790\uc5f0\uc2a4\ub7fd\uac8c \uc5f0\uacb0\ud569\ub2c8\ub2e4"})]})]}),(0,qr.jsxs)(ip,{children:[(0,qr.jsx)(op,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",fill:"currentColor"})})}),(0,qr.jsxs)(sp,{children:[(0,qr.jsx)(ap,{children:"\ube44\uc804"}),(0,qr.jsx)(lp,{children:"2025\ub144\uae4c\uc9c0 \uad6d\ub0b4 AI \ud3ec\ud1a0\ubd80\uc2a4 \uc2dc\uc7a5 \uc810\uc720\uc728 1\uc704, \uae30\uc5c5\uc6a9 AI \uc5d0\uc774\uc804\ud2b8 \uc194\ub8e8\uc158 \uc0c1\uc6a9\ud654\ub97c \ub2ec\uc131\ud569\ub2c8\ub2e4"})]})]}),(0,qr.jsxs)(ip,{children:[(0,qr.jsx)(op,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z",fill:"currentColor"})})}),(0,qr.jsxs)(sp,{children:[(0,qr.jsx)(ap,{children:"\ud575\uc2ec\uac00\uce58"}),(0,qr.jsx)(lp,{children:"\uc2e4\uc6a9\uc131 \xb7 \ud6a8\uc728\uc131 \xb7 \uc811\uadfc\uc131 \xb7 \uc2e0\ub8b0\uc131 \xb7 \uc9c0\uc18d\uc131"})]})]})]})]}),(0,qr.jsxs)(tp,{children:[(0,qr.jsx)(np,{children:"\uc8fc\uc694 \uc9c0\ud45c"}),(0,qr.jsxs)(cp,{children:[(0,qr.jsxs)(up,{children:[(0,qr.jsx)(dp,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2v-4h4v-2h-4V7h-2v4H8v2h4z",fill:"currentColor"})})}),(0,qr.jsxs)(hp,{children:[(0,qr.jsx)(pp,{children:"\uc131\uc7a5\ub960"}),(0,qr.jsx)(fp,{children:"250%"}),(0,qr.jsx)(mp,{children:"\uc804\ub144 \ub300\ube44"})]})]}),(0,qr.jsxs)(up,{children:[(0,qr.jsx)(dp,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18h14v-1.5c0-2.33-4.67-3.5-7-3.5z",fill:"currentColor"})})}),(0,qr.jsxs)(hp,{children:[(0,qr.jsx)(pp,{children:"\ud300 \uad6c\uc131"}),(0,qr.jsx)(fp,{children:"3 + AI"}),(0,qr.jsx)(mp,{children:"\ucf54\uc5b4\ud300 + AI \uc5d0\uc774\uc804\ud2b8"})]})]}),(0,qr.jsxs)(up,{children:[(0,qr.jsx)(dp,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",fill:"currentColor"})})}),(0,qr.jsxs)(hp,{children:[(0,qr.jsx)(pp,{children:"\uc11c\ube44\uc2a4 \uc774\uc6a9\uc790"}),(0,qr.jsx)(fp,{children:"100K+"}),(0,qr.jsx)(mp,{children:"\ub204\uc801 \uc0ac\uc6a9\uc790"})]})]})]})]}),(0,qr.jsx)(Kh,{children:(0,qr.jsxs)(qh,{children:[(0,qr.jsx)(Zh,{src:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",alt:"MUFI \ud300"}),(0,qr.jsx)(Jh,{children:"MUFI \ucf54\uc5b4\ud300"})]})})]})]}),(0,qr.jsxs)(Hh,{children:[(0,qr.jsxs)(gp,{children:[(0,qr.jsx)(yp,{children:"Brand Story"}),(0,qr.jsxs)(bp,{children:["MUFI\ub294 2023\ub144, \ud3ec\ud1a0\ud0a4\uc624\uc2a4\ud06c \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ud50c\ub7ab\ud3fc\uc73c\ub85c \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4. '\uae30\uc220\ub85c \ub9cc\ub4dc\ub294 \ub530\ub73b\ud55c \uc5f0\uacb0'\uc774\ub77c\ub294 \uc0dd\uac01\uc73c\ub85c, \uc0ac\ub78c\uacfc \uae30\uc220, \uc11c\ube44\uc2a4\ub97c \uc774\uc5b4\uc8fc\ub294 \ub2e4\ub9ac\uac00 \ub418\uace0\uc790 \ud569\ub2c8\ub2e4.",(0,qr.jsx)("br",{}),(0,qr.jsx)("br",{}),"\ucc98\uc74c\uc5d0\ub294 '\ubaa8\ub4e0 \uc21c\uac04\uc744 \ud2b9\ubcc4\ud558\uac8c'\ub77c\ub294 \uc791\uc740 \uc0dd\uac01\uc73c\ub85c \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4. \uc624\ud504\ub77c\uc778 \ud3ec\ud1a0\ubd80\uc2a4 \uc11c\ube44\uc2a4\ub97c \uc628\ub77c\uc778\uc73c\ub85c \uac00\uc838\uc624\uba74\uc11c, \ub354 \ub9ce\uc740 \uc0ac\ub78c\ub4e4\uc774 \uc27d\uac8c \uc774\uc6a9\ud560 \uc218 \uc788\uac8c \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4.",(0,qr.jsx)("br",{}),(0,qr.jsx)("br",{}),"\uc5ec\uae30\uc5d0 AI \uae30\uc220\uc744 \ub354\ud574 \uc0ac\uc9c4 \ucd2c\uc601\uc758 \ud004\ub9ac\ud2f0\ub97c \ub192\uc774\uace0, \ub204\uad6c\ub098 \uc27d\uac8c \uba4b\uc9c4 \uc0ac\uc9c4\uc744 \ucc0d\uc744 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\ub4dc\ub9ac\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc81c\ub294 \ub2e8\uc21c\ud55c \uc0ac\uc9c4 \ucd2c\uc601\uc774 \uc544\ub2cc, \ucd94\uc5b5\uc744 \ub9cc\ub4dc\ub294 \ud50c\ub7ab\ud3fc\uc774 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.",(0,qr.jsx)("br",{}),(0,qr.jsx)("br",{}),"\uc55e\uc73c\ub85c\ub294 \uae30\uc5c5\uc6a9 AI \uc11c\ube44\uc2a4\uc640 \ub300\ud559\uc0dd \uc18c\uc15c \ud50c\ub7ab\ud3fc\uae4c\uc9c0, \ub354 \ub2e4\uc591\ud55c \ubc29\ubc95\uc73c\ub85c \uc0ac\ub78c\uacfc \uc0ac\ub78c\uc744 \uc774\uc5b4\uc8fc\ub294 \ub530\ub73b\ud55c \uc11c\ube44\uc2a4\ub97c \ub9cc\ub4e4\uc5b4\uac00\uaca0\uc2b5\ub2c8\ub2e4."]}),(0,qr.jsx)(xp,{children:(0,qr.jsx)(vp,{src:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",alt:"MUFI \ud3ec\ud1a0\ubd80\uc2a4"})})]}),(0,qr.jsxs)(wp,{children:[(0,qr.jsx)(jp,{children:"\ud568\uaed8\ud558\ub294 \ud30c\ud2b8\ub108\uc0ac"}),(0,qr.jsxs)(Sp,{children:[(0,qr.jsxs)(kp,{children:[(0,qr.jsxs)(Cp,{children:[(0,qr.jsx)(Ep,{src:"https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",alt:"\ud30c\ud2b8\ub108\uc0ac 1"}),(0,qr.jsxs)(zp,{children:[(0,qr.jsx)($p,{children:"ABC \uae30\uc5c5"}),(0,qr.jsx)(Pp,{children:"AI \uae30\uc220 \ud30c\ud2b8\ub108"})]})]}),(0,qr.jsxs)(Cp,{children:[(0,qr.jsx)(Ep,{src:"https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",alt:"\ud30c\ud2b8\ub108\uc0ac 2"}),(0,qr.jsxs)(zp,{children:[(0,qr.jsx)($p,{children:"XYZ \uc2a4\ud29c\ub514\uc624"}),(0,qr.jsx)(Pp,{children:"\ub514\uc790\uc778 \ud30c\ud2b8\ub108"})]})]}),(0,qr.jsxs)(Cp,{children:[(0,qr.jsx)(Ep,{src:"https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",alt:"\ud30c\ud2b8\ub108\uc0ac 3"}),(0,qr.jsxs)(zp,{children:[(0,qr.jsx)($p,{children:"\ud14c\ud06c \uc194\ub8e8\uc158"}),(0,qr.jsx)(Pp,{children:"\uae30\uc220 \uc778\ud504\ub77c \ud30c\ud2b8\ub108"})]})]}),(0,qr.jsxs)(Cp,{children:[(0,qr.jsx)(Ep,{src:"https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",alt:"\ud30c\ud2b8\ub108\uc0ac 4"}),(0,qr.jsxs)(zp,{children:[(0,qr.jsx)($p,{children:"\uae00\ub85c\ubc8c \ubbf8\ub514\uc5b4"}),(0,qr.jsx)(Pp,{children:"\ub9c8\ucf00\ud305 \ud30c\ud2b8\ub108"})]})]}),(0,qr.jsxs)(Cp,{children:[(0,qr.jsx)(Ep,{src:"https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",alt:"\ud30c\ud2b8\ub108\uc0ac 5"}),(0,qr.jsxs)(zp,{children:[(0,qr.jsx)($p,{children:"\uc2a4\ub9c8\ud2b8 \uc2dc\uc2a4\ud15c\uc988"}),(0,qr.jsx)(Pp,{children:"\ud558\ub4dc\uc6e8\uc5b4 \ud30c\ud2b8\ub108"})]})]}),(0,qr.jsxs)(Cp,{children:[(0,qr.jsx)(Ep,{src:"https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",alt:"\ud30c\ud2b8\ub108\uc0ac 6"}),(0,qr.jsxs)(zp,{children:[(0,qr.jsx)($p,{children:"\uc774\ub178\ubca0\uc774\uc158 \ub7a9"}),(0,qr.jsx)(Pp,{children:"\uc5f0\uad6c\uac1c\ubc1c \ud30c\ud2b8\ub108"})]})]})]}),(0,qr.jsxs)(Tp,{children:[(0,qr.jsx)(Mp,{children:"\uc606\uc73c\ub85c \uc2a4\ud06c\ub864\ud558\uc5ec \ub354 \ubcf4\uae30"}),(0,qr.jsx)(Ap,{children:"\u2192"})]})]})]}),(0,qr.jsxs)(Rp,{children:[(0,qr.jsx)(np,{children:"\uc131\uc7a5 \uacfc\uc815"}),(0,qr.jsxs)(Ip,{children:[(0,qr.jsxs)(Lp,{children:[(0,qr.jsx)(_p,{children:"2023.Q1"}),(0,qr.jsxs)(Dp,{children:[(0,qr.jsx)(Vp,{children:"\uccab MVP \ucd9c\uc2dc"}),(0,qr.jsx)(Fp,{children:"MUFI-1 \uc11c\ube44\uc2a4 \ub7f0\uce6d \ubc0f \ud575\uc2ec \uae30\uc220 \uac1c\ubc1c \ucc29\uc218"})]})]}),(0,qr.jsxs)(Lp,{children:[(0,qr.jsx)(_p,{children:"2023.Q3"}),(0,qr.jsxs)(Dp,{children:[(0,qr.jsx)(Vp,{children:"\ud3ec\ud1a0\ubd80\uc2a4 \uc11c\ube44\uc2a4 \ub7f0\uce6d"}),(0,qr.jsx)(Fp,{children:"AI \uae30\ubc18 \ud504\ub9ac\ubbf8\uc5c4 \ud3ec\ud1a0\ubd80\uc2a4 \uc11c\ube44\uc2a4 \uc815\uc2dd \ucd9c\uc2dc"})]})]}),(0,qr.jsxs)(Lp,{children:[(0,qr.jsx)(_p,{children:"2024"}),(0,qr.jsxs)(Dp,{children:[(0,qr.jsx)(Vp,{children:"\uc18c\uc15c \ud50c\ub7ab\ud3fc \ucd9c\uc2dc"}),(0,qr.jsx)(Fp,{children:"\ub300\ud559\uc0dd \ub9de\ucda4\ud615 \uc18c\uc15c \ub124\ud2b8\uc6cc\ud0b9 \ud50c\ub7ab\ud3fc \ubca0\ud0c0 \uc11c\ube44\uc2a4 \uc2dc\uc791"})]})]}),(0,qr.jsxs)(Lp,{children:[(0,qr.jsx)(_p,{children:"2025"}),(0,qr.jsxs)(Dp,{children:[(0,qr.jsx)(Vp,{children:"AI \uc11c\ube44\uc2a4 \ud655\uc7a5"}),(0,qr.jsx)(Fp,{children:"\uae30\uc5c5\uc6a9 AI \uc194\ub8e8\uc158 \uac1c\ubc1c \ubc0f \uae00\ub85c\ubc8c \uc2dc\uc7a5 \uc9c4\ucd9c \uc900\ube44"})]})]})]})]})]})]})})}),Oh=Xr.section`
  background: ${Jd};
  padding: 80px 0;
  color: ${Xd};
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`,Bh=Xr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
  
  ${oh} {
    padding: 0 2rem;
  }
`,Nh=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  ${oh} {
    grid-template-columns: 45% 55%;
    gap: 2.5rem;
    align-items: start;
  }
`,Uh=Xr.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  ${oh} {
    gap: 2rem;
  }
`,Hh=Xr.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  ${oh} {
    gap: 2rem;
  }
`,Wh=Xr.div`
  text-align: center;
  
  ${oh} {
    text-align: left;
  }
`,Yh=Xr.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  ${oh} {
    gap: 1.5rem;
  }
`,Kh=Xr.div`
  margin-top: 1rem;
`,Xh=Xr.h2`
  font-family: 'Pretendard';
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  position: relative;
  letter-spacing: -0.02em;
  color: ${Xd};

  &::before {
    content: 'ABOUT US';
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    color: ${Gd};
    opacity: 0.9;
    font-family: 'Pretendard';

    ${oh} {
      left: 0;
      transform: none;
    }
  }

  ${oh} {
    font-size: 3rem;
    text-align: left;
  }

  ${sh} {
    font-size: 3.5rem;
  }
`,Gh=Xr.span`
  display: block;
  font-size: 3rem;
  color: ${Gd};
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background: ${Gd};

    ${oh} {
      left: 0;
      transform: none;
    }
  }

  ${oh} {
    font-size: 3.5rem;
  }

  ${sh} {
    font-size: 4rem;
  }
`,Qh=Xr.p`
  font-size: 1.125rem;
  opacity: 0.8;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: ${Xd};
  font-weight: 400;

  ${oh} {
    font-size: 1.25rem;
    text-align: left;
    margin-bottom: 2rem;
  }

  ${sh} {
    font-size: 1.375rem;
  }
`,qh=Xr.div`
  margin-top: 2rem;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
`,Zh=Xr.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.03);
  }
`,Jh=Xr.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.75rem;
  font-size: 0.875rem;
  text-align: center;
`,ep=Xr.div`
  background: ${Jd};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
  }
`,tp=Xr.div`
  background: ${Jd};
  padding: 1.5rem 1.25rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
  }
  
  ${oh} {
    padding: 1.5rem 1rem;
  }
  
  @media (min-width: 992px) {
    padding: 1.5rem 1.25rem;
  }
`,np=Xr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${Xd};
  position: relative;
  padding-left: 1rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.25rem;
    height: 1.25rem;
    width: 4px;
    background: ${Gd};
    border-radius: 2px;
  }
`,rp=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  
  ${oh} {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`,ip=Xr.div`
  background: ${Jd};
  padding: 1.25rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${Gd};
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  &:hover::after {
    opacity: 0.7;
  }
`,op=Xr.div`
  font-size: 2rem;
  margin-right: 1rem;
  margin-bottom: 0;
  color: ${Gd};
  opacity: 0.9;
  flex-shrink: 0;
  
  svg {
    width: 36px;
    height: 36px;
    transition: all 0.3s ease;
  }

  ${ip}:hover & svg {
    transform: scale(1.1);
  }
`,sp=Xr.div`
  flex: 1;
  min-width: 0;
`,ap=Xr.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
  color: ${Xd};
`,lp=Xr.p`
  font-size: 0.9rem;
  opacity: 0.8;
  line-height: 1.5;
  color: ${Xd};
`,cp=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  
  ${oh} {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }
`,up=Xr.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1.25rem 0.75rem;
  background: ${Jd};
  border-radius: 12px;
  transition: all 0.3s ease;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${Gd};
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  &:hover::after {
    opacity: 0.7;
  }
  
  ${oh} {
    padding: 1.25rem 0.5rem;
    gap: 0.5rem;
  }
  
  @media (min-width: 992px) {
    padding: 1.25rem 0.75rem;
    gap: 0.75rem;
  }
`,dp=Xr.div`
  width: 24px;
  height: 24px;
  color: ${Gd};
  opacity: 0.9;
  flex-shrink: 0;
  margin-top: 0.25rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
  
  @media (min-width: 992px) {
    width: 28px;
    height: 28px;
  }
`,hp=Xr.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  max-width: calc(100% - 30px);
`,pp=Xr.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${Xd};
  opacity: 0.7;
  margin-bottom: 0.3rem;
  letter-spacing: -0.01em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (min-width: 992px) {
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }
`,fp=Xr.div`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${Xd};
  font-family: 'Pretendard';
  letter-spacing: -0.01em;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (min-width: 992px) {
    font-size: 1.25rem;
  }
`,mp=Xr.div`
  font-size: 0.65rem;
  color: ${Xd};
  opacity: 0.6;
  margin-top: 0.15rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (min-width: 992px) {
    font-size: 0.7rem;
    margin-top: 0.2rem;
  }
`,gp=Xr.div`
  background: ${Jd};
  padding: 1.5rem;
  border-radius: 12px;
  text-align: left;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
  
  ${oh} {
    padding: 2rem;
  }
`,xp=Xr.div`
  margin-top: 2rem;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
`,vp=Xr.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.03);
  }
`,yp=Xr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${Xd};
  margin-bottom: 1.5rem;
  letter-spacing: -0.01em;
  position: relative;
  padding-left: 1rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.25rem;
    height: 1.25rem;
    width: 4px;
    background: ${Gd};
    border-radius: 2px;
  }
`,bp=Xr.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${Xd};
  opacity: 0.8;
  
  ${oh} {
    font-size: 1.125rem;
  }
`,wp=Xr.div`
  padding: 2rem;
  background: ${Jd};
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
  }
`,jp=Xr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${Xd};
  position: relative;
  padding-left: 1rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.25rem;
    height: 1.25rem;
    width: 4px;
    background: ${Gd};
    border-radius: 2px;
  }
`,Sp=Xr.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`,kp=Xr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
  width: 100%;
  padding: 0.5rem 0 1rem 0;
  
  ${oh} {
    display: flex;
    gap: 1.5rem;
    overflow-x: auto;
    padding: 0.5rem 0.5rem 1.5rem 0.5rem;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scroll-behavior: smooth;
    
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
  }
`,Cp=Xr.div`
  background: ${Jd};
  border-radius: 12px;
  padding: 1.25rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
  
  ${oh} {
    flex: 0 0 auto;
    width: 180px;
  }
`,Ep=Xr.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 0.75rem;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;
  
  ${Cp}:hover & {
    filter: grayscale(0);
    opacity: 1;
  }
`,zp=Xr.div`
  text-align: center;
  width: 100%;
`,$p=Xr.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${Xd};
`,Pp=Xr.p`
  font-size: 0.875rem;
  color: ${Xd};
  opacity: 0.7;
`,Tp=Xr.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  font-size: 0.75rem;
  color: ${Xd};
  opacity: 0.6;
  
  @media (min-width: 1200px) {
    display: none;
  }
`,Mp=Xr.span`
  font-size: 0.75rem;
`,Ap=Xr.span`
  animation: scrollHint 1.5s infinite;
  
  @keyframes scrollHint {
    0%, 100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(5px);
    }
  }
`,Rp=Xr.div`
  width: 100%;
  background: ${Jd};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
  }
`,Ip=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  
  ${oh} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Lp=Xr.div`
  background: ${Jd};
  padding: 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.03);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${Gd};
    opacity: 0.7;
  }
`,_p=Xr.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${Gd};
  margin-bottom: 1rem;
  opacity: 0.9;
  font-family: 'Pretendard';
  letter-spacing: -0.01em;
`,Dp=Xr.div``,Vp=Xr.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${Xd};
  letter-spacing: -0.01em;
`,Fp=Xr.p`
  font-size: 1rem;
  opacity: 0.8;
  line-height: 1.6;
  color: ${Xd};
`,Op=Xr.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  
  ${oh} {
    justify-content: flex-start;
    margin-top: 1.5rem;
  }
`,Bp=Xr(qe)`
  display: flex;
  align-items: center;
  background-color: ${Gd};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`,Np=Xr.span`
  font-size: 1rem;
  margin-right: 0.5rem;
`,Up=Xr.span`
  display: flex;
  align-items: center;
  
  svg {
    width: 20px;
    height: 20px;
  }
`,Hp=Qr`
  0% {
    opacity: 0;
    transform: scale(0.1);
  }
  5% {
    opacity: 1;
    transform: scale(1);
  }
  15% {
    opacity: 0.4;
  }
  30% {
    opacity: 0;
    transform: scale(2);
  }
  100% {
    opacity: 0;
    transform: scale(2);
  }
`,Wp=Xr.section`
  min-height: 100vh;
  background-color: ${Xd};
  padding: 120px 0;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      rgba(255,255,255,0) 0%, 
      rgba(255,255,255,0.2) 50%, 
      rgba(255,255,255,0) 100%
    );
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      rgba(255,255,255,0) 0%, 
      rgba(255,255,255,0.2) 50%, 
      rgba(255,255,255,0) 100%
    );
  }
`,Yp=Xr.div`
  position: absolute;
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  animation: ${Hp} 2.5s infinite 0.6s;
`,Kp=()=>(0,qr.jsxs)(Wp,{id:"photobooth",children:[(0,qr.jsx)(Yp,{}),(0,qr.jsx)(Xp,{children:(0,qr.jsxs)(Gp,{children:[(0,qr.jsxs)(Qp,{children:[(0,qr.jsx)(qp,{children:"MUINFILM"}),"\ub2f9\uc2e0\uc758 \ud2b9\ubcc4\ud55c \uc21c\uac04\uc744",(0,qr.jsx)("br",{}),"\uc644\ubcbd\ud558\uac8c \ub2f4\uc544\ub0b4\ub2e4"]}),(0,qr.jsxs)(Zp,{children:["MUINFILM\uc758 \ud504\ub9ac\ubbf8\uc5c4 \ud3ec\ud1a0\ubd80\uc2a4\ub294 \ub2e8\uc21c\ud55c \uc0ac\uc9c4 \ucd2c\uc601\uc744 \ub118\uc5b4",(0,qr.jsx)("br",{}),"\uc18c\uc911\ud55c \ucd94\uc5b5\uc744 \uc791\ud488\uc73c\ub85c \ub9cc\ub4dc\ub294 \uc0c8\ub85c\uc6b4 \uacbd\ud5d8\uc744 \uc120\uc0ac\ud569\ub2c8\ub2e4"]}),(0,qr.jsxs)(Jp,{children:[(0,qr.jsxs)(ef,{children:[(0,qr.jsx)(tf,{children:"\ud83d\udcf8"}),(0,qr.jsx)(nf,{children:"\uace0\ud488\uc9c8 \ucd2c\uc601"}),(0,qr.jsx)(rf,{children:"DSLR\uae09 \ud654\uc9c8\uacfc \uc804\ubb38 \uc870\uba85\uc73c\ub85c \uc644\uc131\ub3c4 \ub192\uc740 \uc0ac\uc9c4"}),(0,qr.jsxs)(of,{children:[(0,qr.jsx)(sf,{children:"\u2022 Full Frame \uce74\uba54\ub77c \uc7a5\ucc29"}),(0,qr.jsx)(sf,{children:"\u2022 \uc804\ubb38\uac00\uae09 \uc870\uba85 \uc2dc\uc2a4\ud15c"}),(0,qr.jsx)(sf,{children:"\u2022 AI \ubcf4\uc815 \uae30\uc220 \uc801\uc6a9"})]})]}),(0,qr.jsxs)(ef,{children:[(0,qr.jsx)(tf,{children:"\ud83c\udfa8"}),(0,qr.jsx)(nf,{children:"\ub2e4\uc591\ud55c \ud14c\ub9c8"}),(0,qr.jsx)(rf,{children:"\uacc4\uc808, \uc774\ubca4\ud2b8\ubcc4 \ub9de\ucda4\ud615 \ucd2c\uc601 \ud14c\ub9c8 \uc81c\uacf5"}),(0,qr.jsxs)(of,{children:[(0,qr.jsx)(sf,{children:"\u2022 \uc2dc\uc98c\ubcc4 \ud2b9\ubcc4 \ud14c\ub9c8"}),(0,qr.jsx)(sf,{children:"\u2022 \ucee4\uc2a4\ud140 \ud504\ub808\uc784 \uc81c\uc791"}),(0,qr.jsx)(sf,{children:"\u2022 \uc2e4\uc2dc\uac04 \ud544\ud130 \uc801\uc6a9"})]})]}),(0,qr.jsxs)(ef,{children:[(0,qr.jsx)(tf,{children:"\ud83d\udd04"}),(0,qr.jsx)(nf,{children:"\uc989\uc2dc \uacf5\uc720"}),(0,qr.jsx)(rf,{children:"\ucd2c\uc601 \uc989\uc2dc \ubaa8\ubc14\uc77c\ub85c \uc804\uc1a1\ub418\ub294 \ud3b8\ub9ac\ud55c \uc11c\ube44\uc2a4"}),(0,qr.jsxs)(of,{children:[(0,qr.jsx)(sf,{children:"\u2022 QR\ucf54\ub4dc \uc989\uc2dc \uc804\uc1a1"}),(0,qr.jsx)(sf,{children:"\u2022 SNS \uc2e4\uc2dc\uac04 \uacf5\uc720"}),(0,qr.jsx)(sf,{children:"\u2022 \ubb34\uc81c\ud55c \ub2e4\uc6b4\ub85c\ub4dc"})]})]})]}),(0,qr.jsxs)(af,{children:[(0,qr.jsxs)(lf,{children:[(0,qr.jsx)(cf,{children:"1,000+"}),(0,qr.jsx)(uf,{children:"\ud589\uc0ac \uc9c4\ud589"})]}),(0,qr.jsxs)(lf,{children:[(0,qr.jsx)(cf,{children:"50,000+"}),(0,qr.jsx)(uf,{children:"\ucd2c\uc601 \ucef7"})]}),(0,qr.jsxs)(lf,{children:[(0,qr.jsx)(cf,{children:"98%"}),(0,qr.jsx)(uf,{children:"\ub9cc\uc871\ub3c4"})]})]}),(0,qr.jsxs)(df,{onClick:()=>{window.open("https://rental.muinfilm.com","_blank")},children:["\uc790\uc138\ud788 \ubcf4\ub7ec\uac00\uae30",(0,qr.jsx)(hf,{children:"\u2192"})]})]})})]}),Xp=Xr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
`,Gp=Xr.div`
  text-align: center;
  color: ${Jd};
`,Qp=Xr.h2`
  font-family: 'Pretendard';
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
  color: ${Jd};
  position: relative;

  &::before {
    content: 'BUSINESS AREA 01';
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    color: ${Gd};
    opacity: 0.8;
  }

  ${oh} {
    font-size: 3.5rem;

    &::before {
      top: -3rem;
      font-size: 1.125rem;
    }
  }

  ${sh} {
    font-size: 4rem;

    &::before {
      top: -4rem;
      font-size: 1.25rem;
    }
  }
`,qp=Xr.span`
  display: block;
  font-size: 3.5rem;
  color: ${Gd};
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;

  ${oh} {
    font-size: 4.5rem;
  }

  ${sh} {
    font-size: 5.5rem;
  }
`,Zp=Xr.p`
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 4rem;
  line-height: 1.6;
  color: ${Jd};

  ${oh} {
    font-size: 1.5rem;
  }
`,Jp=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 4rem;

  ${oh} {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
`,ef=Xr.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
    border-color: ${Gd};
  }
`,tf=Xr.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`,nf=Xr.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${Jd};
`,rf=Xr.p`
  font-size: 1rem;
  opacity: 0.8;
  line-height: 1.5;
  color: ${Jd};
`,of=Xr.div`
  margin-top: 1rem;
  text-align: left;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,sf=Xr.p`
  font-size: 0.9rem;
  color: ${Jd};
  opacity: 0.7;
  margin: 0.5rem 0;
  transition: opacity 0.2s ease;

  ${ef}:hover & {
    opacity: 0.9;
  }
`,af=Xr.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 5rem 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  ${oh} {
    gap: 4rem;
  }
`,lf=Xr.div`
  text-align: center;
`,cf=Xr.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${Gd};
  margin-bottom: 0.5rem;
  font-family: 'Pretendard';

  ${oh} {
    font-size: 3rem;
  }
`,uf=Xr.div`
  font-size: 1rem;
  color: ${Jd};
  opacity: 0.8;
`,df=Xr.button`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${Jd};
  background: linear-gradient(135deg, ${Gd} 0%, #A5B0FF 100%);
  border-radius: 12px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(110, 124, 243, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`,hf=Xr.span`
  font-size: 1.25rem;
  transition: transform 0.3s ease;

  ${df}:hover & {
    transform: translateX(5px);
  }
`,pf=()=>(0,qr.jsx)(ff,{id:"ai-agent",children:(0,qr.jsx)(mf,{children:(0,qr.jsxs)(gf,{children:[(0,qr.jsxs)(xf,{children:["AI\ub85c \uc2e4\ud604\ud558\ub294",(0,qr.jsx)("br",{}),"\ub9de\ucda4\ud615 \ube44\uc988\ub2c8\uc2a4"]}),(0,qr.jsxs)(vf,{children:["MUFI\uc758 AI Agent\ub294 \uae30\uc5c5\uc758 \uc694\uad6c\uc0ac\ud56d\uc744 \uc815\ud655\ud788 \ud30c\uc545\ud558\uace0",(0,qr.jsx)("br",{}),"\ucd5c\uc801\ud654\ub41c \uc194\ub8e8\uc158\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4"]}),(0,qr.jsxs)(yf,{children:[(0,qr.jsxs)(bf,{children:[(0,qr.jsx)(wf,{children:"\ud83e\udd16"}),(0,qr.jsx)(jf,{children:"\ub9de\ucda4\ud615 AI"}),(0,qr.jsxs)(Sf,{children:["\uae30\uc5c5\uc758 \ud2b9\uc131\uacfc \uc694\uad6c\uc0ac\ud56d\uc5d0 \ub9de\ucd98",(0,qr.jsx)("br",{}),"\ucee4\uc2a4\ud140 AI \uc194\ub8e8\uc158 \uac1c\ubc1c"]})]}),(0,qr.jsxs)(bf,{children:[(0,qr.jsx)(wf,{children:"\ud83d\udcca"}),(0,qr.jsx)(jf,{children:"\ub370\uc774\ud130 \ubd84\uc11d"}),(0,qr.jsxs)(Sf,{children:["\ube45\ub370\uc774\ud130 \uae30\ubc18\uc758 \uc815\ud655\ud55c",(0,qr.jsx)("br",{}),"\uc2dc\uc7a5 \ubd84\uc11d \ubc0f \uc778\uc0ac\uc774\ud2b8 \uc81c\uacf5"]})]}),(0,qr.jsxs)(bf,{children:[(0,qr.jsx)(wf,{children:"\ud83d\udca1"}),(0,qr.jsx)(jf,{children:"\uc790\ub3d9\ud654"}),(0,qr.jsxs)(Sf,{children:["\ubc18\ubcf5\uc801\uc778 \uc5c5\ubb34\uc758",(0,qr.jsx)("br",{}),"\ud6a8\uc728\uc801\uc778 \uc790\ub3d9\ud654 \uad6c\ud604"]})]}),(0,qr.jsxs)(bf,{children:[(0,qr.jsx)(wf,{children:"\ud83d\udd0d"}),(0,qr.jsx)(jf,{children:"\uc2e4\uc2dc\uac04 \ubaa8\ub2c8\ud130\ub9c1"}),(0,qr.jsxs)(Sf,{children:["24/7 \uc2dc\uc2a4\ud15c \ubaa8\ub2c8\ud130\ub9c1\uc73c\ub85c",(0,qr.jsx)("br",{}),"\uc548\uc815\uc801\uc778 \uc11c\ube44\uc2a4 \uc6b4\uc601"]})]})]})]})})}),ff=Xr.section`
  min-height: 100vh;
  background-color: ${Jd};
  padding: 120px 0;
  display: flex;
  align-items: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      rgba(0,0,0,0) 0%, 
      rgba(0,0,0,0.2) 50%, 
      rgba(0,0,0,0) 100%
    );
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      rgba(0,0,0,0) 0%, 
      rgba(0,0,0,0.2) 50%, 
      rgba(0,0,0,0) 100%
    );
  }
`,mf=Xr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  position: relative;
  z-index: 1;
`,gf=Xr.div`
  text-align: center;
  color: ${Xd};
`,xf=Xr.h2`
  font-family: 'Pretendard';
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  line-height: 1.2;
  color: ${Xd};
  position: relative;

  &::before {
    content: 'BUSINESS AREA 02';
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    color: ${Gd};
    opacity: 0.8;
  }

  ${oh} {
    font-size: 3.5rem;

    &::before {
      top: -3rem;
      font-size: 1.125rem;
    }
  }

  ${sh} {
    font-size: 4rem;

    &::before {
      top: -4rem;
      font-size: 1.25rem;
    }
  }
`,vf=Xr.p`
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 4rem;
  line-height: 1.6;
  color: ${Xd};

  ${oh} {
    font-size: 1.5rem;
  }
`,yf=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 4rem;

  ${oh} {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
`,bf=Xr.div`
  background: ${Jd};
  padding: 3rem 2rem;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(234,67,67,0.1) 0%, rgba(234,67,67,0) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: ${Gd};

    &::before {
      opacity: 1;
    }
  }
`,wf=Xr.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: ${Xd};
`,jf=Xr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${Xd};
`,Sf=Xr.p`
  font-size: 1.125rem;
  opacity: 0.8;
  line-height: 1.6;
  color: ${Xd};
`,kf=()=>(0,qr.jsx)(Cf,{id:"platform",children:(0,qr.jsx)(Ef,{children:(0,qr.jsxs)(zf,{children:[(0,qr.jsxs)($f,{children:["\ub300\ud559\uc0dd\uc744 \uc704\ud55c",(0,qr.jsx)("br",{}),"\uc0c8\ub85c\uc6b4 \uc18c\uc15c \ud50c\ub7ab\ud3fc"]}),(0,qr.jsxs)(Pf,{children:["MUFI \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uac19\uc740 \uad00\uc2ec\uc0ac\ub97c \uac00\uc9c4",(0,qr.jsx)("br",{}),"\ub300\ud559\uc0dd\ub4e4\uacfc \uc5f0\uacb0\ub418\uc5b4 \ubcf4\uc138\uc694"]}),(0,qr.jsxs)(Tf,{children:[(0,qr.jsxs)(Mf,{children:[(0,qr.jsxs)(Af,{children:[(0,qr.jsx)(Rf,{children:"\ud83d\udc65"}),(0,qr.jsxs)(If,{children:[(0,qr.jsx)(Lf,{children:"\uad00\uc2ec\uc0ac \uae30\ubc18 \ub9e4\uce6d"}),(0,qr.jsx)(_f,{children:"\ucde8\ubbf8, \uc804\uacf5, \ubaa9\ud45c\uac00 \ube44\uc2b7\ud55c \uce5c\uad6c\ub4e4\uacfc \uc790\uc5f0\uc2a4\ub7fd\uac8c \uc5f0\uacb0\ub429\ub2c8\ub2e4"})]})]}),(0,qr.jsxs)(Af,{children:[(0,qr.jsx)(Rf,{children:"\ud83c\udfaf"}),(0,qr.jsxs)(If,{children:[(0,qr.jsx)(Lf,{children:"\uc2a4\ud130\ub514 \uadf8\ub8f9"}),(0,qr.jsx)(_f,{children:"\ud568\uaed8 \uacf5\ubd80\ud558\uace0 \uc131\uc7a5\ud560 \uc218 \uc788\ub294 \uc2a4\ud130\ub514 \uadf8\ub8f9\uc744 \ub9cc\ub098\ubcf4\uc138\uc694"})]})]})]}),(0,qr.jsx)(Df,{children:(0,qr.jsx)(Vf,{children:(0,qr.jsx)(Ff,{})})}),(0,qr.jsxs)(Mf,{children:[(0,qr.jsxs)(Af,{children:[(0,qr.jsx)(Rf,{children:"\ud83c\udf89"}),(0,qr.jsxs)(If,{children:[(0,qr.jsx)(Lf,{children:"\uc774\ubca4\ud2b8 \ucc38\uc5ec"}),(0,qr.jsx)(_f,{children:"\ub2e4\uc591\ud55c \ucea0\ud37c\uc2a4 \uc774\ubca4\ud2b8\uc640 \ubaa8\uc784\uc5d0 \ucc38\uc5ec\ud574\ubcf4\uc138\uc694"})]})]}),(0,qr.jsxs)(Af,{children:[(0,qr.jsx)(Rf,{children:"\ud83d\udcac"}),(0,qr.jsxs)(If,{children:[(0,qr.jsx)(Lf,{children:"\uc2e4\uc2dc\uac04 \uc18c\ud1b5"}),(0,qr.jsx)(_f,{children:"\ucc44\ud305\uacfc \uac8c\uc2dc\ud310\uc744 \ud1b5\ud574 \uc790\uc720\ub86d\uac8c \uc758\uacac\uc744 \ub098\ub20c \uc218 \uc788\uc2b5\ub2c8\ub2e4"})]})]})]})]})]})})}),Cf=Xr.section`
  min-height: 100vh;
  background-color: ${Jd};
  padding: 120px 0;
  display: flex;
  align-items: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      rgba(0,0,0,0) 0%, 
      rgba(0,0,0,0.2) 50%, 
      rgba(0,0,0,0) 100%
    );
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      rgba(0,0,0,0) 0%, 
      rgba(0,0,0,0.2) 50%, 
      rgba(0,0,0,0) 100%
    );
  }
`,Ef=Xr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  position: relative;
  z-index: 1;
`,zf=Xr.div`
  text-align: center;
  color: ${Xd};
`,$f=Xr.h2`
  font-family: 'Pretendard';
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  line-height: 1.2;
  color: ${Xd};
  position: relative;

  &::before {
    content: 'BUSINESS AREA 03';
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    color: ${Gd};
    opacity: 0.8;
  }

  ${oh} {
    font-size: 3.5rem;

    &::before {
      top: -3rem;
      font-size: 1.125rem;
    }
  }

  ${sh} {
    font-size: 4rem;

    &::before {
      top: -4rem;
      font-size: 1.25rem;
    }
  }
`,Pf=Xr.p`
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 4rem;
  line-height: 1.6;
  color: ${Xd};

  ${oh} {
    font-size: 1.5rem;
  }
`,Tf=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 4rem;

  ${oh} {
    grid-template-columns: 1fr 1.2fr 1fr;
    gap: 3rem;
    align-items: center;
  }
`,Mf=Xr.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,Af=Xr.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  background: ${Jd};
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(234,67,67,0.1) 0%, rgba(234,67,67,0) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: ${Gd};

    &::before {
      opacity: 1;
    }
  }
`,Rf=Xr.div`
  font-size: 2rem;
  flex-shrink: 0;
`,If=Xr.div`
  text-align: left;
`,Lf=Xr.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${Xd};
`,_f=Xr.p`
  font-size: 1rem;
  opacity: 0.8;
  line-height: 1.5;
  color: ${Xd};
`,Df=Xr.div`
  display: none;
  
  ${oh} {
    display: block;
    padding: 2rem;
  }
`,Vf=Xr.div`
  position: relative;
  width: 100%;
  height: 100%;
`,Ff=Xr.div`
  width: 100%;
  aspect-ratio: 9/16;
  background: ${Jd};
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(234,67,67,0.05) 0%, rgba(234,67,67,0.02) 100%);
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: ${Gd};

    &::before {
      opacity: 1;
    }
  }
`,Of=Xr.section`
  background: ${Jd};
  padding: 100px 0;
  color: ${Xd};
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`,Bf=Xr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
`,Nf=Xr.header`
  text-align: center;
  margin-bottom: 4rem;
`,Uf=Xr.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${Xd};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: ${Gd};
  }
  
  ${oh} {
    font-size: 3.5rem;
  }
`,Hf=Xr.p`
  font-size: 1.25rem;
  opacity: 0.8;
  margin-top: 1.5rem;
  
  ${oh} {
    font-size: 1.5rem;
  }
`,Wf=Xr.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`,Yf=(Xr.section`
  background: ${Jd};
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
  }
  
  ${oh} {
    padding: 3rem;
  }
`,Xr.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: ${Xd};
  position: relative;
  padding-left: 1.25rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    height: 1.5rem;
    width: 5px;
    background: ${Gd};
    border-radius: 2px;
  }
  
  ${oh} {
    font-size: 2rem;
  }
`,Xr.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,()=>{const[t,n]=(0,e.useState)({vision:!1,mission:!1,about:!1}),r=e=>{n((t=>({...t,[e]:!t[e]})))},i={vision:"AI \uae30\uc220\uc744 \ud65c\uc6a9\ud574 \uc0ac\uc9c4 \uacbd\ud5d8\uacfc \uc18c\uc15c \uc5f0\uacb0\uc744 \ud601\uc2e0\ud558\uba70, \ud558\ub4dc\uc6e8\uc5b4 \uc81c\uc870\ubd80\ud130 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc11c\ube44\uc2a4, \ub370\uc774\ud130 \ubd84\uc11d\uae4c\uc9c0 \uc804 \uac00\uce58 \uc0ac\uc2ac\uc744 \ud1b5\ud569\ud574 \uae00\ub85c\ubc8c AI \ub9ac\ub354\ub85c \uc790\ub9ac \uc7a1\ub294 \uac83\uc785\ub2c8\ub2e4. \n\n\uc6b0\ub9ac\ub294 \ud53c\ud130 \ud2f8\uc758 \uc811\uadfc\ubc95\uc744 \ubc18\uc601\ud558\uc5ec \uacbd\uc7c1\uc774 \ub35c \uce58\uc5f4\ud55c \ud2c8\uc0c8 \uc2dc\uc7a5\uc5d0\uc11c \uc2dc\uc791\ud574 \ub3c5\uc810\uc801 \uc9c0\uc704\ub97c \ud655\ubcf4\ud558\uace0\uc790 \ud569\ub2c8\ub2e4.\n\n\ud2b9\ud788 \ub2e4\uc74c \uc601\uc5ed\uc5d0\uc11c \ud601\uc2e0\uc744 \uc774\ub8e8\uace0\uc790 \ud569\ub2c8\ub2e4:\n\u2022 AI \uc790\uc728 \uc6b4\uc601 \uc2dc\uc2a4\ud15c\uc744 \ud1b5\ud55c \uc6b4\uc601 \ud6a8\uc728\ud654\n\u2022 \uc2e4\uc2dc\uac04 \ub370\uc774\ud130 \uc218\uc9d1 \ubc0f \ubd84\uc11d \uc778\ud504\ub77c \uad6c\ucd95\n\u2022 \ub300\ud559\uc0dd \ucee4\ubba4\ub2c8\ud2f0\ub97c \uc704\ud55c \ucc28\ubcc4\ud654\ub41c \uc18c\uc15c \uacbd\ud5d8 \uc81c\uacf5\n\u2022 \uc218\uc9d1\ub41c \ub370\uc774\ud130\ub97c \ud65c\uc6a9\ud55c \uc0c8\ub85c\uc6b4 \ube44\uc988\ub2c8\uc2a4 \uac00\uce58 \ucc3d\ucd9c",mission:"\uc0ac\uc6a9\uc790\uc5d0\uac8c \uc0c8\ub85c\uc6b4 \uc0ac\uc9c4 \uacbd\ud5d8\uc744 \uc81c\uacf5\ud558\uace0, \ub300\ud559\uc0dd \ucee4\ubba4\ub2c8\ud2f0\ub97c \uc5f0\uacb0\ud558\uba70, \ub370\uc774\ud130 \uae30\ubc18\uc73c\ub85c AI \ubc1c\uc804\uc5d0 \uae30\uc5ec\ud569\ub2c8\ub2e4. \n\n\uc6b0\ub9ac\ub294 \ud3ec\ud1a0\ubd80\uc2a4 \uc6b4\uc601, AI \uc5d0\uc774\uc804\ud2b8, \ub300\ud559\uc0dd \uc18c\uc15c \ud50c\ub7ab\ud3fc\uc744 \uc911\uc2ec\uc73c\ub85c \uc0ac\uc5c5\uc744 \uc804\uac1c\ud558\uba70, \ud2b9\ud788 \ub300\ud559\uc0dd\ub4e4\uc774 \ub124\ucef7\uc0ac\uc9c4\uc73c\ub85c \uc5f0\ub77d\ucc98\ub97c \uad50\ud658\ud558\uba70 \uc18c\uc15c \uc11c\ube44\uc2a4\ub85c \uc804\ud658\ub418\ub294 \uacbd\ud5d8\uc744 \ud14c\uc2a4\ud2b8 \uc911\uc785\ub2c8\ub2e4.\n\nMUFI\uc758 \ud575\uc2ec \ubbf8\uc158:\n\u2022 \uc0ac\uc6a9\uc790 \uc911\uc2ec\uc758 \ud601\uc2e0\uc801\uc778 \uc0ac\uc9c4 \uacbd\ud5d8 \ucc3d\ucd9c\n\u2022 \ub300\ud559\uc0dd \ucee4\ubba4\ub2c8\ud2f0\ub97c \uc704\ud55c \uc18c\uc15c \ud50c\ub7ab\ud3fc \uad6c\ucd95\n\u2022 \uc2e4\uc138\uacc4 \ub370\uc774\ud130 \uc218\uc9d1\uc744 \ud1b5\ud55c AI \ubc1c\uc804 \uae30\uc5ec\n\u2022 \uc9c0\uc18d \uac00\ub2a5\ud55c \ube44\uc988\ub2c8\uc2a4 \ubaa8\ub378 \ud655\ub9bd",about:"MUFI\ub294 AI \uae30\uc220\uc744 \ud65c\uc6a9\ud574 \uc0ac\uc9c4 \uacbd\ud5d8\uacfc \uc18c\uc15c \uc5f0\uacb0\uc744 \ud601\uc2e0\ud558\ub294 \ubbf8\ub798 \uc9c0\ud5a5\uc801 \uae30\uc220 \ud68c\uc0ac\uc785\ub2c8\ub2e4. \n\n\uc6b0\ub9ac\ub294 \ud3ec\ud1a0\ubd80\uc2a4\ub97c \ud1b5\ud574 \ucd95\uc81c \uc2dc\uc7a5\uc5d0\uc11c \ubbf8\ub514\uc5b4 \ucf58\ud150\uce20\uc640 \uc735\ud569\ud574 \uc11c\ube44\uc2a4\ub97c \ud655\uc7a5\ud558\uba70, \uc0ac\uc6a9\uc790 \ub370\uc774\ud130\ub97c \uc218\uc9d1\ud574 \uc2e4\uc138\uacc4 \ub370\uc774\ud130 \uc218\uc9d1 \uc778\ud504\ub77c\ub97c \uad6c\ucd95\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \n\n\uc774 \ub370\uc774\ud130\ub97c \uae30\ubc18\uc73c\ub85c B2B \ub370\uc774\ud130 \ud30c\uc774\ud504\ub77c\uc778\uc744 \uacf5\uae09\ud574 \ucd94\uac00 \uc218\uc775\uc744 \ucc3d\ucd9c\ud558\uace0 AI \uc5f0\uad6c \ubc1c\uc804\uc5d0 \uae30\uc5ec\ud560 \uacc4\ud68d\uc785\ub2c8\ub2e4. \uc774\ub294 \ub2e8\uc21c\ud55c \uc0ac\uc9c4 \uc11c\ube44\uc2a4\ub97c \ub118\uc5b4 \ub370\uc774\ud130 \uae30\ubc18 \ube44\uc988\ub2c8\uc2a4 \ubaa8\ub378\ub85c\uc758 \uc804\ud658\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.\n\n\uc8fc\uc694 \ube44\uc988\ub2c8\uc2a4 \uc601\uc5ed:\n\u2022 AI \uc790\uc728 \uc6b4\uc601 \ud3ec\ud1a0\ubd80\uc2a4 \uc11c\ube44\uc2a4\n\u2022 \uae30\uc5c5\uc6a9 AI \uc5d0\uc774\uc804\ud2b8 \uac1c\ubc1c \ubc0f \uacf5\uae09\n\u2022 \ub300\ud559\uc0dd \ud2b9\ud654 \uc18c\uc15c \ud50c\ub7ab\ud3fc \uc6b4\uc601\n\u2022 \ub370\uc774\ud130 \uc218\uc9d1 \ubc0f \ubd84\uc11d \ud30c\uc774\ud504\ub77c\uc778 \uad6c\ucd95"},o={vision:[(0,qr.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,qr.jsx)("path",{d:"M12 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6-4c0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6 6-2.7 6-6z",fill:"currentColor"}),(0,qr.jsx)("path",{d:"M2.9 12c0-.4.1-.8.2-1.2.1-.3.5-.4.8-.3.3.1.4.5.3.8-.1.3-.2.5-.2.7 0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8c-1 0-2 .2-2.9.5-.3.1-.7-.1-.8-.4-.1-.3.1-.7.4-.8 1.1-.4 2.2-.6 3.3-.6 5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12c0-.4.1-.8.1-1.2.1-.3.5-.5.8-.4.3.1.5.5.4.8 0 .3-.1.5-.1.8 0 4.9 4 8.9 8.9 8.9s8.9-4 8.9-8.9-4-8.9-8.9-8.9c-.9 0-1.8.1-2.6.4-.3.1-.7-.1-.8-.4-.1-.3.1-.7.4-.8 1-.3 2-.5 3-.5 5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12z",fill:"currentColor"})]},"v1"),(0,qr.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,qr.jsx)("path",{d:"M19.8 10.7L5.2 5.6c-.4-.1-.8.1-.9.5-.1.4.1.8.5.9l14.6 5.1c.4.1.8-.1.9-.5.1-.4-.1-.8-.5-.9zm-1.7 4.9c.4-.1.6-.5.5-.9-.1-.4-.5-.6-.9-.5L4.1 18.3c-.4.1-.6.5-.5.9.1.3.4.5.7.5.1 0 .1 0 .2 0l13.6-4.1z",fill:"currentColor"}),(0,qr.jsx)("path",{d:"M20 12V7c0-.6-.4-1-1-1s-1 .4-1 1v5c0 .6.4 1 1 1s1-.4 1-1zM6 17c0 .6-.4 1-1 1s-1-.4-1-1v-5c0-.6.4-1 1-1s1 .4 1 1v5z",fill:"currentColor"})]},"v2"),(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",fill:"currentColor"})},"v3"),(0,qr.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,qr.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1.6 16H6.6c-.9 0-1.6-.7-1.6-1.6V6.6C5 5.7 5.7 5 6.6 5h10.8c.9 0 1.6.7 1.6 1.6v10.8c0 .9-.7 1.6-1.6 1.6z",fill:"currentColor"}),(0,qr.jsx)("path",{d:"M7 13h10v1H7zM7 10h10v1H7zM7 7h10v1H7zM7 16h7v1H7z",fill:"currentColor"})]},"v4")],mission:[(0,qr.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,qr.jsx)("path",{d:"M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm0-18c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8z",fill:"currentColor"}),(0,qr.jsx)("path",{d:"M12 17c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1zM12 9c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z",fill:"currentColor"})]},"m1"),(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",fill:"currentColor"})},"m2"),(0,qr.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,qr.jsx)("path",{d:"M19.8 10.7L5.2 5.6c-.4-.1-.8.1-.9.5-.1.4.1.8.5.9l14.6 5.1c.4.1.8-.1.9-.5.1-.4-.1-.8-.5-.9zm-1.7 4.9c.4-.1.6-.5.5-.9-.1-.4-.5-.6-.9-.5L4.1 18.3c-.4.1-.6.5-.5.9.1.3.4.5.7.5.1 0 .1 0 .2 0l13.6-4.1z",fill:"currentColor"}),(0,qr.jsx)("path",{d:"M20 12V7c0-.6-.4-1-1-1s-1 .4-1 1v5c0 .6.4 1 1 1s1-.4 1-1zM6 17c0 .6-.4 1-1 1s-1-.4-1-1v-5c0-.6.4-1 1-1s1 .4 1 1v5z",fill:"currentColor"})]},"m3"),(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z",fill:"currentColor"})},"m4")],about:[(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z",fill:"currentColor"})},"a1"),(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z",fill:"currentColor"})},"a2"),(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",fill:"currentColor"})},"a3"),(0,qr.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,qr.jsx)("path",{d:"M19.8 10.7L5.2 5.6c-.4-.1-.8.1-.9.5-.1.4.1.8.5.9l14.6 5.1c.4.1.8-.1.9-.5.1-.4-.1-.8-.5-.9zm-1.7 4.9c.4-.1.6-.5.5-.9-.1-.4-.5-.6-.9-.5L4.1 18.3c-.4.1-.6.5-.5.9.1.3.4.5.7.5.1 0 .1 0 .2 0l13.6-4.1z",fill:"currentColor"}),(0,qr.jsx)("path",{d:"M20 12V7c0-.6-.4-1-1-1s-1 .4-1 1v5c0 .6.4 1 1 1s1-.4 1-1zM6 17c0 .6-.4 1-1 1s-1-.4-1-1v-5c0-.6.4-1 1-1s1 .4 1 1v5z",fill:"currentColor"})]},"a4")]},s=(e,t)=>{const n=e.split("\n"),r=[];let i=!1;for(let o=0;o<n.length;o++){const e=n[o].trim();e.includes(t)?i=!0:i&&e.startsWith("\u2022")&&r.push(e.substring(1).trim())}return r},a=e=>{const t=e.split("\n\n"),n=[];return t.forEach(((t,r)=>{if(t.includes("\ud2b9\ud788 \ub2e4\uc74c \uc601\uc5ed\uc5d0\uc11c \ud601\uc2e0\uc744 \uc774\ub8e8\uace0\uc790 \ud569\ub2c8\ub2e4:")){const i=t.split("\ud2b9\ud788 \ub2e4\uc74c \uc601\uc5ed\uc5d0\uc11c \ud601\uc2e0\uc744 \uc774\ub8e8\uace0\uc790 \ud569\ub2c8\ub2e4:")[0],a=s(e,"\ud2b9\ud788 \ub2e4\uc74c \uc601\uc5ed\uc5d0\uc11c \ud601\uc2e0\uc744 \uc774\ub8e8\uace0\uc790 \ud569\ub2c8\ub2e4:");i.trim()&&n.push((0,qr.jsx)(im,{children:i.trim()},`para-${r}`)),n.push((0,qr.jsx)(Jf,{children:"\ud2b9\ud788 \ub2e4\uc74c \uc601\uc5ed\uc5d0\uc11c \ud601\uc2e0\uc744 \uc774\ub8e8\uace0\uc790 \ud569\ub2c8\ub2e4:"},`intro-${r}`)),n.push((0,qr.jsx)(em,{children:a.map(((e,t)=>(0,qr.jsxs)(tm,{children:[(0,qr.jsx)(nm,{children:o.vision[t%o.vision.length]}),(0,qr.jsx)(rm,{children:e})]},`feature-${t}`)))},`grid-${r}`))}else if(t.includes("MUFI\uc758 \ud575\uc2ec \ubbf8\uc158:")){const i=t.split("MUFI\uc758 \ud575\uc2ec \ubbf8\uc158:")[0],a=s(e,"MUFI\uc758 \ud575\uc2ec \ubbf8\uc158:");i.trim()&&n.push((0,qr.jsx)(im,{children:i.trim()},`para-${r}`)),n.push((0,qr.jsx)(Jf,{children:"MUFI\uc758 \ud575\uc2ec \ubbf8\uc158:"},`intro-${r}`)),n.push((0,qr.jsx)(em,{children:a.map(((e,t)=>(0,qr.jsxs)(tm,{children:[(0,qr.jsx)(nm,{children:o.mission[t%o.mission.length]}),(0,qr.jsx)(rm,{children:e})]},`feature-${t}`)))},`grid-${r}`))}else if(t.includes("\uc8fc\uc694 \ube44\uc988\ub2c8\uc2a4 \uc601\uc5ed:")){const i=t.split("\uc8fc\uc694 \ube44\uc988\ub2c8\uc2a4 \uc601\uc5ed:")[0],a=s(e,"\uc8fc\uc694 \ube44\uc988\ub2c8\uc2a4 \uc601\uc5ed:");i.trim()&&n.push((0,qr.jsx)(im,{children:i.trim()},`para-${r}`)),n.push((0,qr.jsx)(Jf,{children:"\uc8fc\uc694 \ube44\uc988\ub2c8\uc2a4 \uc601\uc5ed:"},`intro-${r}`)),n.push((0,qr.jsx)(em,{children:a.map(((e,t)=>(0,qr.jsxs)(tm,{children:[(0,qr.jsx)(nm,{children:o.about[t%o.about.length]}),(0,qr.jsx)(rm,{children:e})]},`feature-${t}`)))},`grid-${r}`))}else t.includes("\u2022")||n.push((0,qr.jsx)(im,{children:t},`para-${r}`))})),n};return(0,qr.jsxs)(Kf,{children:[(0,qr.jsxs)(Xf,{children:[(0,qr.jsxs)(om,{expanded:t.vision,children:[(0,qr.jsx)(Gf,{children:(0,qr.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,qr.jsx)("path",{d:"M12 6c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z",fill:"currentColor"}),(0,qr.jsx)("path",{d:"M12 10c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",fill:"currentColor"}),(0,qr.jsx)("path",{d:"M2 12h2c0-4.97 4.03-9 9-9v-2c-6.07 0-11 4.93-11 11z",fill:"currentColor"}),(0,qr.jsx)("path",{d:"M20 12h2c0-6.07-4.93-11-11-11v2c4.97 0 9 4.03 9 9z",fill:"currentColor"})]})}),(0,qr.jsx)(Qf,{children:"\ube44\uc804"}),t.vision?(0,qr.jsx)(Zf,{children:a(i.vision)}):(0,qr.jsx)(qf,{children:"AI \uae30\uc220\uc744 \ud65c\uc6a9\ud574 \uc0ac\uc9c4 \uacbd\ud5d8\uacfc \uc18c\uc15c \uc5f0\uacb0\uc744 \ud601\uc2e0\ud558\uba70, \ud558\ub4dc\uc6e8\uc5b4 \uc81c\uc870\ubd80\ud130 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc11c\ube44\uc2a4, \ub370\uc774\ud130 \ubd84\uc11d\uae4c\uc9c0 \uc804 \uac00\uce58 \uc0ac\uc2ac\uc744 \ud1b5\ud569\ud574 \uae00\ub85c\ubc8c AI \ub9ac\ub354\ub85c \uc790\ub9ac \uc7a1\ub294 \uac83\uc785\ub2c8\ub2e4."}),(0,qr.jsxs)(dm,{onClick:()=>r("vision"),expanded:t.vision,children:[t.vision?"\uc811\uae30":"\uc790\uc138\ud788 \ubcf4\uae30",(0,qr.jsx)(hm,{expanded:t.vision})]})]}),(0,qr.jsxs)(sm,{expanded:t.mission,children:[(0,qr.jsx)(Gf,{children:(0,qr.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,qr.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z",fill:"currentColor"}),(0,qr.jsx)("path",{d:"M7 12h2v5H7v-5zm8-5h2v10h-2V7zm-4 7h2v3h-2v-3zm0-4h2v2h-2v-2z",fill:"currentColor"})]})}),(0,qr.jsx)(Qf,{children:"\uc0ac\uba85"}),t.mission?(0,qr.jsx)(Zf,{children:a(i.mission)}):(0,qr.jsx)(qf,{children:"\uc0ac\uc6a9\uc790\uc5d0\uac8c \uc0c8\ub85c\uc6b4 \uc0ac\uc9c4 \uacbd\ud5d8\uc744 \uc81c\uacf5\ud558\uace0, \ub300\ud559\uc0dd \ucee4\ubba4\ub2c8\ud2f0\ub97c \uc5f0\uacb0\ud558\uba70, \ub370\uc774\ud130 \uae30\ubc18\uc73c\ub85c AI \ubc1c\uc804\uc5d0 \uae30\uc5ec\ud569\ub2c8\ub2e4."}),(0,qr.jsxs)(dm,{onClick:()=>r("mission"),expanded:t.mission,children:[t.mission?"\uc811\uae30":"\uc790\uc138\ud788 \ubcf4\uae30",(0,qr.jsx)(hm,{expanded:t.mission})]})]})]}),(0,qr.jsxs)(lm,{expanded:t.about,children:[(0,qr.jsxs)(cm,{children:[(0,qr.jsx)(am,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",fill:"currentColor"})})}),"\ud68c\uc0ac \uc18c\uac1c"]}),t.about?(0,qr.jsx)(Zf,{children:a(i.about)}):(0,qr.jsx)(um,{children:"MUFI\ub294 AI \uae30\uc220\uc744 \ud65c\uc6a9\ud574 \uc0ac\uc9c4 \uacbd\ud5d8\uacfc \uc18c\uc15c \uc5f0\uacb0\uc744 \ud601\uc2e0\ud558\ub294 \ubbf8\ub798 \uc9c0\ud5a5\uc801 \uae30\uc220 \ud68c\uc0ac\uc785\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 \ud3ec\ud1a0\ubd80\uc2a4\ub97c \ud1b5\ud574 \ucd95\uc81c \uc2dc\uc7a5\uc5d0\uc11c \ubbf8\ub514\uc5b4 \ucf58\ud150\uce20\uc640 \uc735\ud569\ud574 \uc11c\ube44\uc2a4\ub97c \ud655\uc7a5\ud558\uba70, \uc0ac\uc6a9\uc790 \ub370\uc774\ud130\ub97c \uc218\uc9d1\ud574 \uc2e4\uc138\uacc4 \ub370\uc774\ud130 \uc218\uc9d1 \uc778\ud504\ub77c\ub97c \uad6c\ucd95\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),(0,qr.jsxs)(dm,{onClick:()=>r("about"),expanded:t.about,variant:"secondary",children:[t.about?"\uc811\uae30":"\uc790\uc138\ud788 \uc54c\uc544\ubcf4\uae30",(0,qr.jsx)(hm,{expanded:t.about})]})]})]})}),Kf=Xr.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`,Xf=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin-top: 1rem;
  
  ${oh} {
    grid-template-columns: repeat(2, 1fr);
  }
`,Gf=Xr.div`
  width: 48px;
  height: 48px;
  color: ${Gd};
  margin-bottom: 1.5rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,Qf=Xr.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: ${Xd};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: ${Gd};
    border-radius: 2px;
  }
`,qf=Xr.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${Xd};
  opacity: 0.85;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Zf=Xr.div`
  margin-bottom: 1.5rem;
  animation: expandContent 0.3s ease-out;
  
  @keyframes expandContent {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,Jf=Xr.p`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: ${Xd};
`,em=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
  
  ${oh} {
    grid-template-columns: repeat(2, 1fr);
  }
`,tm=Xr.div`
  background: ${Jd};
  border: 1px solid rgba(110, 124, 243, 0.1);
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
    border-color: rgba(110, 124, 243, 0.3);
  }
`,nm=Xr.div`
  width: 32px;
  height: 32px;
  min-width: 32px;
  color: ${Gd};
  background-color: rgba(110, 124, 243, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 6px;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,rm=Xr.p`
  font-size: 1.0625rem;
  line-height: 1.6;
  color: ${Xd};
  margin: 0;
`,im=Xr.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${Xd};
  opacity: 0.85;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,om=Xr.div`
  background: ${Jd};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  ${e=>e.expanded&&"\n    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);\n    border-color: rgba(110, 124, 243, 0.2);\n  "}
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
    border-color: rgba(110, 124, 243, 0.2);
  }
`,sm=Xr(om)`
  /* 미션 카드에 특별한 스타일이 필요하면 여기에 추가 */
`,am=Xr.div`
  width: 32px;
  height: 32px;
  color: ${Gd};
  margin-right: 1rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,lm=Xr.div`
  background: linear-gradient(to right, rgba(110, 124, 243, 0.05), rgba(255, 255, 255, 0.8));
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(110, 124, 243, 0.1);
  margin-top: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  ${e=>e.expanded&&"\n    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);\n    border-color: rgba(110, 124, 243, 0.2);\n  "}
  
  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
    border-color: rgba(110, 124, 243, 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(to bottom, ${Gd}, ${Qd});
    border-radius: 4px 0 0 4px;
  }
`,cm=Xr.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${Xd};
  display: flex;
  align-items: center;
`,um=Xr.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${Xd};
  opacity: 0.85;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,dm=Xr.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: ${e=>"secondary"===e.variant?Qd:Gd};
  font-weight: 600;
  font-size: 1.05rem;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: auto;
  
  &:hover {
    opacity: 0.8;
    transform: translateX(${e=>e.expanded?"-5px":"5px"});
  }
`,hm=Xr.span`
  display: inline-block;
  width: 18px;
  height: 18px;
  position: relative;
  transition: transform 0.3s ease;
  transform: ${e=>e.expanded?"rotate(90deg)":"rotate(0deg)"};
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 12px;
    height: 2px;
    background-color: currentColor;
    transform: translateY(-50%);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: ${e=>e.expanded?"6px":"0"};
    width: 8px;
    height: 8px;
    border-top: 2px solid currentColor;
    border-right: 2px solid currentColor;
    transform: translateY(-50%) rotate(${e=>e.expanded?"135deg":"45deg"});
  }
`,pm=()=>(0,qr.jsxs)(fm,{id:"relationship-graph",children:[(0,qr.jsx)(mm,{children:"\uc0ac\uc5c5 \uc694\uc18c \uad00\uacc4\ub3c4"}),(0,qr.jsx)(gm,{children:"MUFI\uc758 \ud575\uc2ec \uc0ac\uc5c5 \uc601\uc5ed\uacfc \ub370\uc774\ud130 \ud750\ub984, \uc218\uc775 \ucc3d\ucd9c \uad6c\uc870\ub97c \uc2dc\uac01\ud654\ud55c \uad00\uacc4\ub3c4\uc785\ub2c8\ub2e4."}),(0,qr.jsx)(xm,{children:(0,qr.jsxs)("svg",{width:"100%",height:"400",viewBox:"0 0 800 400",xmlns:"http://www.w3.org/2000/svg",children:[(0,qr.jsxs)("g",{className:"central-node",children:[(0,qr.jsx)("circle",{cx:"400",cy:"100",r:"40",fill:"white",stroke:Xd,strokeWidth:"2"}),(0,qr.jsx)("text",{x:"400",y:"105",textAnchor:"middle",dominantBaseline:"middle",fill:Xd,fontWeight:"bold",children:"MUFI"})]}),(0,qr.jsxs)("g",{className:"business-node",children:[(0,qr.jsx)("rect",{x:"150",y:"200",width:"120",height:"50",rx:"5",fill:"white",stroke:Gd,strokeWidth:"2"}),(0,qr.jsx)("text",{x:"210",y:"225",textAnchor:"middle",dominantBaseline:"middle",fill:Gd,children:"\ud3ec\ud1a0\ubd80\uc2a4"})]}),(0,qr.jsxs)("g",{className:"business-node",children:[(0,qr.jsx)("rect",{x:"340",y:"200",width:"120",height:"50",rx:"5",fill:"white",stroke:Gd,strokeWidth:"2"}),(0,qr.jsx)("text",{x:"400",y:"225",textAnchor:"middle",dominantBaseline:"middle",fill:Gd,children:"AI \uc5d0\uc774\uc804\ud2b8"})]}),(0,qr.jsxs)("g",{className:"business-node",children:[(0,qr.jsx)("rect",{x:"530",y:"200",width:"120",height:"50",rx:"5",fill:"white",stroke:Gd,strokeWidth:"2"}),(0,qr.jsx)("text",{x:"590",y:"225",textAnchor:"middle",dominantBaseline:"middle",fill:Gd,children:"\uc18c\uc15c \ud50c\ub7ab\ud3fc"})]}),(0,qr.jsxs)("g",{className:"data-node",children:[(0,qr.jsx)("rect",{x:"250",y:"300",width:"120",height:"50",rx:"5",fill:"white",stroke:Xd,strokeWidth:"2"}),(0,qr.jsx)("text",{x:"310",y:"325",textAnchor:"middle",dominantBaseline:"middle",fill:Xd,children:"\ub370\uc774\ud130 \uc218\uc9d1"})]}),(0,qr.jsxs)("g",{className:"revenue-node",children:[(0,qr.jsx)("rect",{x:"450",y:"300",width:"120",height:"50",rx:"5",fill:"white",stroke:Gd,strokeWidth:"2"}),(0,qr.jsx)("text",{x:"510",y:"325",textAnchor:"middle",dominantBaseline:"middle",fill:Gd,children:"\uc218\uc775 \ucc3d\ucd9c"})]}),(0,qr.jsx)("line",{x1:"380",y1:"130",x2:"210",y2:"200",stroke:Xd,strokeWidth:"2"}),(0,qr.jsx)("line",{x1:"400",y1:"140",x2:"400",y2:"200",stroke:Xd,strokeWidth:"2"}),(0,qr.jsx)("line",{x1:"420",y1:"130",x2:"590",y2:"200",stroke:Xd,strokeWidth:"2"}),(0,qr.jsx)("line",{x1:"210",y1:"250",x2:"310",y2:"300",stroke:Xd,strokeWidth:"2",strokeDasharray:"5,5"}),(0,qr.jsx)("line",{x1:"400",y1:"250",x2:"310",y2:"300",stroke:Xd,strokeWidth:"2",strokeDasharray:"5,5"}),(0,qr.jsx)("line",{x1:"590",y1:"250",x2:"310",y2:"300",stroke:Xd,strokeWidth:"2",strokeDasharray:"5,5"}),(0,qr.jsx)("line",{x1:"370",y1:"325",x2:"450",y2:"325",stroke:Xd,strokeWidth:"2"}),(0,qr.jsx)("line",{x1:"210",y1:"250",x2:"510",y2:"300",stroke:Gd,strokeWidth:"2"}),(0,qr.jsx)("line",{x1:"400",y1:"250",x2:"510",y2:"300",stroke:Gd,strokeWidth:"2"}),(0,qr.jsx)("line",{x1:"590",y1:"250",x2:"510",y2:"300",stroke:Gd,strokeWidth:"2"})]})}),(0,qr.jsxs)(vm,{children:[(0,qr.jsxs)(ym,{children:[(0,qr.jsx)(bm,{className:"business"}),(0,qr.jsx)(wm,{children:"\uc0ac\uc5c5 \uc601\uc5ed"})]}),(0,qr.jsxs)(ym,{children:[(0,qr.jsx)(bm,{className:"data"}),(0,qr.jsx)(wm,{children:"\ub370\uc774\ud130 \ud750\ub984"})]}),(0,qr.jsxs)(ym,{children:[(0,qr.jsx)(bm,{className:"revenue"}),(0,qr.jsx)(wm,{children:"\uc218\uc775 \ucc3d\ucd9c"})]})]})]}),fm=Xr.div`
  margin-top: 3rem;
  padding: 2rem;
  background: ${Jd};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`,mm=Xr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${Xd};
`,gm=Xr.p`
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: ${Xd};
  opacity: 0.8;
`,xm=Xr.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto 2rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 1rem;
  background: ${Jd};
  
  svg {
    overflow: visible;
    
    text {
      font-family: 'Pretendard', sans-serif;
      font-size: 14px;
    }
    
    @media (max-width: 768px) {
      text {
        font-size: 12px;
      }
    }
  }
`,vm=Xr.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
  
  ${ih} {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`,ym=Xr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,bm=Xr.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  
  &.business {
    background-color: ${Gd};
  }
  
  &.data {
    background-color: ${Xd};
  }
  
  &.revenue {
    background-color: ${Gd};
  }
`,wm=Xr.span`
  font-size: 0.875rem;
  color: ${Xd};
`,jm=()=>(0,qr.jsxs)(Sm,{children:[(0,qr.jsx)(km,{children:"\ud604\uc7ac \uc0ac\uc5c5 \uc601\uc5ed"}),(0,qr.jsxs)(Cm,{children:[(0,qr.jsxs)(Em,{children:[(0,qr.jsx)(zm,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z",fill:"currentColor"})})}),(0,qr.jsx)($m,{children:"\ud3ec\ud1a0\ubd80\uc2a4 \uc0ac\uc5c5"}),(0,qr.jsx)(Pm,{children:"\uc9c1\uc811 \uc6b4\uc601\ud558\uba70, AI\ub85c \uc0ac\uc9c4 \ud488\uc9c8 \uac1c\uc120, \uac1c\uc778\ud654\ub41c \ud544\ud130 \uc81c\uacf5. \ud604\uc7ac \ub300\ud559\uc0dd\ub4e4\uc774 \ub124\ucef7\uc0ac\uc9c4\uc73c\ub85c \uc5f0\ub77d\ucc98\ub97c \uad50\ud658\ud558\uba70 \uc18c\uc15c \ud50c\ub7ab\ud3fc\uc73c\ub85c \uc804\ud658\ub418\ub294 \uacbd\ud5d8\uc744 \ud14c\uc2a4\ud2b8 \uc911\uc785\ub2c8\ub2e4."})]}),(0,qr.jsxs)(Em,{children:[(0,qr.jsx)(zm,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z",fill:"currentColor"})})}),(0,qr.jsx)($m,{children:"AI \uc5d0\uc774\uc804\ud2b8 \uc0ac\uc5c5"}),(0,qr.jsx)(Pm,{children:"\uace0\uac1d \uc9c0\uc6d0, \uac1c\uc778\ud654\ub41c \ucd94\ucc9c \ub4f1 AI \uae30\ubc18 \uc194\ub8e8\uc158 \uc81c\uacf5. \uae30\uc5c5\uc6a9 \ub9de\ucda4\ud615 AI \uc5d0\uc774\uc804\ud2b8 \uac1c\ubc1c\uacfc SaaS \uae30\ubc18 \uc6d4 \uad6c\ub3c5 \ubaa8\ub378\uc744 \ud1b5\ud574 \uc218\uc775\uc744 \ucc3d\ucd9c\ud569\ub2c8\ub2e4."})]}),(0,qr.jsxs)(Em,{children:[(0,qr.jsx)(zm,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z",fill:"currentColor"})})}),(0,qr.jsx)($m,{children:"\ub300\ud559\uc0dd \uc18c\uc15c \ud50c\ub7ab\ud3fc"}),(0,qr.jsx)(Pm,{children:"\uc0ac\uc9c4 \uacf5\uc720\uc640 \ub124\ud2b8\uc6cc\ud0b9 \uc911\uc2ec, AI\ub85c \uce5c\uad6c \ucd94\ucc9c \ubc0f \ucf58\ud150\uce20 \ucd94\ucc9c. \ud504\ub9ac\ubbf8\uc5c4 \uba64\ubc84\uc2ed, \ud0c0\uac9f \uad11\uace0 \uc218\uc775, \ub300\ud559 \ubc0f \uae30\uc5c5 \ud30c\ud2b8\ub108\uc2ed\uc744 \ud1b5\ud574 \uc218\uc775 \ubaa8\ub378\uc744 \uad6c\ucd95\ud569\ub2c8\ub2e4."})]})]})]}),Sm=Xr.div`
  margin-top: 2rem;
`,km=Xr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${Xd};
`,Cm=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${oh} {
    grid-template-columns: repeat(3, 1fr);
  }
`,Em=Xr.div`
  background: ${Jd};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`,zm=Xr.div`
  width: 40px;
  height: 40px;
  color: ${Gd};
  margin-bottom: 1rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,$m=Xr.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${Xd};
`,Pm=Xr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${Xd};
  opacity: 0.8;
`,Tm=e=>{let{color:t,inverted:n=!1,children:r}=e;return(0,qr.jsx)(Cg,{color:(()=>{if(n)switch(t){case"primary":default:return Jd;case"secondary":return"#A5B0FF";case"tertiary":return"#8FD9A3"}else switch(t){case"primary":default:return Gd;case"secondary":return Qd;case"tertiary":return qd}})(),children:r})},Mm=e=>{let{height:t,label:n,type:r,children:i}=e;return(0,qr.jsxs)(Eg,{style:{height:t},color:(()=>{switch(r){case"primary":default:return Gd;case"secondary":return Qd;case"tertiary":return qd}})(),className:"market-bar",children:[(0,qr.jsx)(zg,{children:i}),(0,qr.jsx)($g,{children:n})]})},Am=()=>{const t=(0,e.useRef)(null),n=(0,e.useRef)(null);return(0,e.useEffect)((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&e.target.classList.add("animate")}))}),{threshold:.1});return t.current&&e.observe(t.current),n.current&&e.observe(n.current),()=>{t.current&&e.unobserve(t.current),n.current&&e.unobserve(n.current)}}),[]),(0,qr.jsxs)(Im,{children:[(0,qr.jsxs)(Lm,{children:[(0,qr.jsx)(_m,{}),(0,qr.jsx)(Dm,{children:(0,qr.jsxs)(Vm,{children:[(0,qr.jsxs)(Fm,{children:[(0,qr.jsx)(Tm,{color:"primary",children:"AI"}),"\ub85c \uc5f0\uacb0\ub418\ub294 ",(0,qr.jsx)("br",{}),(0,qr.jsx)(Tm,{color:"secondary",children:"\uc0c8\ub85c\uc6b4 \uc0ac\uc9c4 \uacbd\ud5d8"}),"\uc758 \uc2dc\uc7a5"]}),(0,qr.jsx)(Om,{children:"Expanding Market of AI-Powered Photo Experiences"})]})})]}),(0,qr.jsxs)(Pg,{children:[(0,qr.jsxs)(Nm,{children:[(0,qr.jsx)(Um,{}),(0,qr.jsxs)(Hm,{children:["\uc2dc\uc7a5 \uac1c\uc694 \ubc0f ",(0,qr.jsx)(Tm,{color:"primary",children:"\uc131\uc7a5\uc131"})]}),(0,qr.jsx)(Um,{})]}),(0,qr.jsxs)(Tg,{children:[(0,qr.jsxs)(Mg,{children:["\uae00\ub85c\ubc8c \ud3ec\ud1a0\ubd80\uc2a4 \uc2dc\uc7a5\uc740 2023\ub144 \uae30\uc900 \uc57d ",(0,qr.jsx)(Ag,{children:"38\uc5b5 \ub2ec\ub7ec"}),"\ub85c \ud3c9\uac00\ub418\uba70, 2030\ub144\uae4c\uc9c0 ",(0,qr.jsx)(Ag,{children:"\uc5f0\ud3c9\uade0 \uc131\uc7a5\ub960(CAGR) 9.7%"}),"\ub85c \ud655\ub300\ub418\uc5b4",(0,qr.jsx)(Ag,{children:"78\uc5b5 \ub2ec\ub7ec"})," \uaddc\ubaa8\uc5d0 \uc774\ub97c \uac83\uc73c\ub85c \uc804\ub9dd\ub429\ub2c8\ub2e4. \ud2b9\ud788 \ud55c\uad6d\uc758 \ud3ec\ud1a0\ubd80\uc2a4 \uc2dc\uc7a5\uc740 \ub192\uc740 \ubb38\ud654\uc801 \uce5c\ud654\uc131\uacfc MZ\uc138\ub300\uc758 \uac15\ub825\ud55c \uc218\uc694\ub85c \uc778\ud574 \uae00\ub85c\ubc8c \ud3c9\uade0\uc744 \uc0c1\ud68c\ud558\ub294 ",(0,qr.jsx)(Ag,{children:"\uc5f0\uac04 11.2%"}),"\uc758 \uc131\uc7a5\ub960\uc744 \ubcf4\uc774\uace0 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,qr.jsxs)(Rg,{children:[(0,qr.jsxs)(Ig,{children:[(0,qr.jsx)(Lg,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z",fill:"currentColor"})})}),(0,qr.jsx)(_g,{children:"\ud3ec\ud1a0\ubd80\uc2a4 \uc2dc\uc7a5"}),(0,qr.jsx)(Dg,{children:"\uc5f0\uac04 11.2% \uc131\uc7a5"}),(0,qr.jsx)(Vg,{children:"\ud55c\uad6d \ub0b4 \ubb38\ud654\uc801 \ud2b8\ub80c\ub4dc\uc640 MZ\uc138\ub300 \uc218\uc694 \uc99d\uac00"})]}),(0,qr.jsxs)(Ig,{children:[(0,qr.jsx)(Lg,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 7h3V5h-3v5zm-4 0h3V5H8v5zm-3 4h10v5H5v-5z",fill:"currentColor"})})}),(0,qr.jsx)(_g,{children:"AI \uc194\ub8e8\uc158 \uc2dc\uc7a5"}),(0,qr.jsx)(Dg,{children:"\uc5f0\uac04 26.8% \uc131\uc7a5"}),(0,qr.jsx)(Vg,{children:"B2B AI \uc194\ub8e8\uc158 \uc218\uc694 \uae09\uc99d \ubc0f \uae30\uc220 \ud601\uc2e0 \uac00\uc18d\ud654"})]}),(0,qr.jsxs)(Ig,{children:[(0,qr.jsx)(Lg,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",fill:"currentColor"})})}),(0,qr.jsx)(_g,{children:"\ub300\ud559\uc0dd \uc2dc\uc7a5 \uaddc\ubaa8"}),(0,qr.jsx)(Dg,{children:"\uc57d 270\ub9cc \uba85"}),(0,qr.jsx)(Vg,{children:"\ud55c\uad6d \ub0b4 \ub300\ud559\uc0dd \uc778\uad6c \ubc0f \uc5f0\uac04 \uc57d 3.7\uc870\uc6d0 \uc18c\ube44\uc2dc\uc7a5"})]})]})]})]}),(0,qr.jsxs)(Bm,{ref:t,children:[(0,qr.jsxs)(Nm,{children:[(0,qr.jsx)(Um,{}),(0,qr.jsxs)(Hm,{children:["\ud601\uc2e0\uc801\uc778 ",(0,qr.jsx)(Tm,{color:"primary",children:"3\ub300 \uc194\ub8e8\uc158"})]}),(0,qr.jsx)(Um,{})]}),(0,qr.jsxs)(Wm,{children:[(0,qr.jsxs)(Ym,{className:"product-item",children:[(0,qr.jsx)(Km,{children:(0,qr.jsx)(Xm,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z",fill:"currentColor"})})})}),(0,qr.jsx)(Gm,{children:(0,qr.jsxs)(Qm,{children:[(0,qr.jsx)(Tm,{color:"primary",inverted:!0,children:"AI \uc790\uc728 \uc6b4\uc601"})," \ud3ec\ud1a0\ubd80\uc2a4"]})}),(0,qr.jsxs)(qm,{children:[(0,qr.jsxs)(Zm,{children:[(0,qr.jsxs)(Jm,{children:[(0,qr.jsx)(eg,{children:"\ubb34\uc778 \uad00\ub9ac"})," \uc2dc\uc2a4\ud15c (\uc6d4 \uc6b4\uc601\ube44 52% \uc808\uac10)"]}),(0,qr.jsxs)(Jm,{children:[(0,qr.jsx)(eg,{children:"AI \uae30\ubc18"})," \uc0ac\uc9c4 \ud488\uc9c8 \ucd5c\uc801\ud654 (\ub9cc\uc871\ub3c4 37% \uc0c1\uc2b9)"]}),(0,qr.jsxs)(Jm,{children:[(0,qr.jsx)(eg,{children:"\uc2e4\uc2dc\uac04"})," \uc6d0\uaca9 \ubaa8\ub2c8\ud130\ub9c1 \ubc0f \uc720\uc9c0\ubcf4\uc218"]})]}),(0,qr.jsxs)(Fg,{children:[(0,qr.jsx)(Og,{children:"\uc2dc\uc7a5 \uc810\uc720\uc728 \ubaa9\ud45c (2027\ub144)"}),(0,qr.jsx)(Bg,{children:"20%"})]})]})]}),(0,qr.jsxs)(Ym,{className:"product-item",children:[(0,qr.jsx)(Km,{children:(0,qr.jsx)(Xm,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z",fill:"currentColor"})})})}),(0,qr.jsx)(Gm,{children:(0,qr.jsxs)(Qm,{children:[(0,qr.jsx)(Tm,{color:"primary",inverted:!0,children:"AI"})," \uc5d0\uc774\uc804\ud2b8 \uc194\ub8e8\uc158"]})}),(0,qr.jsxs)(qm,{children:[(0,qr.jsxs)(Zm,{children:[(0,qr.jsxs)(Jm,{children:[(0,qr.jsx)(eg,{children:"\uae30\uc5c5 \ub9de\ucda4\ud615"})," AI \uc194\ub8e8\uc158 (ROI \ud3c9\uade0 148%)"]}),(0,qr.jsxs)(Jm,{children:[(0,qr.jsx)(eg,{children:"\uc0b0\uc5c5\ubcc4 \ud2b9\ud654"})," \uc5d0\uc774\uc804\ud2b8 (\uc791\uc5c5 \ud6a8\uc728\uc131 35% \ud5a5\uc0c1)"]}),(0,qr.jsxs)(Jm,{children:[(0,qr.jsx)(eg,{children:"\uc2e4\uc2dc\uac04 \ud559\uc2b5"})," \uae30\ub2a5\uc73c\ub85c \uc9c0\uc18d\uc801 \uc131\ub2a5 \uac1c\uc120"]})]}),(0,qr.jsxs)(Fg,{children:[(0,qr.jsx)(Og,{children:"\ud2b9\ud654 AI \uc194\ub8e8\uc158 \uc2dc\uc7a5 \ub0b4 \ubaa9\ud45c \uc810\uc720\uc728"}),(0,qr.jsx)(Bg,{children:"7%"})]})]})]}),(0,qr.jsxs)(Ym,{className:"product-item",children:[(0,qr.jsx)(Km,{children:(0,qr.jsx)(Xm,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z",fill:"currentColor"})})})}),(0,qr.jsx)(Gm,{children:(0,qr.jsxs)(Qm,{children:[(0,qr.jsx)(Tm,{color:"primary",inverted:!0,children:"\ub300\ud559\uc0dd"})," \uc18c\uc15c \ud50c\ub7ab\ud3fc"]})}),(0,qr.jsxs)(qm,{children:[(0,qr.jsxs)(Zm,{children:[(0,qr.jsxs)(Jm,{children:[(0,qr.jsx)(eg,{children:"\ub124\ucef7\uc0ac\uc9c4 \uae30\ubc18"})," \ud504\ub85c\ud544 (\uce5c\uad6c \ucd94\uac00\uc728 142% \uc99d\uac00)"]}),(0,qr.jsxs)(Jm,{children:[(0,qr.jsx)(eg,{children:"\ucea0\ud37c\uc2a4\ubcc4"})," \ucee4\ubba4\ub2c8\ud2f0 (DAU/MAU \ube44\uc728 83%)"]}),(0,qr.jsxs)(Jm,{children:[(0,qr.jsx)(eg,{children:"AI \ucd94\ucc9c"})," \uc2dc\uc2a4\ud15c\uc73c\ub85c \uc778\uac8c\uc774\uc9c0\uba3c\ud2b8 \ucd5c\uc801\ud654"]})]}),(0,qr.jsxs)(Fg,{children:[(0,qr.jsx)(Og,{children:"\ub300\ud559\uc0dd \ud0c0\uac9f \ud50c\ub7ab\ud3fc \ubaa9\ud45c \uc0ac\uc6a9\uc790 \uc218 (2027\ub144)"}),(0,qr.jsx)(Bg,{children:"50\ub9cc+"})]})]})]})]}),(0,qr.jsxs)(tg,{ref:n,children:[(0,qr.jsx)(ng,{children:(0,qr.jsx)(Tm,{color:"primary",children:"\uc194\ub8e8\uc158\ubcc4 \uc5f0\uac04 \uc131\uc7a5\ub960"})}),(0,qr.jsxs)(rg,{className:"chart-animation",children:[(0,qr.jsxs)(Mm,{height:"70%",label:"11.2%",type:"primary",children:["AI \uc790\uc728 \uc6b4\uc601",(0,qr.jsx)("br",{}),"\ud3ec\ud1a0\ubd80\uc2a4"]}),(0,qr.jsxs)(Mm,{height:"85%",label:"26.8%",type:"secondary",children:["\uae30\uc5c5\uc6a9",(0,qr.jsx)("br",{}),"AI \uc194\ub8e8\uc158"]}),(0,qr.jsxs)(Mm,{height:"60%",label:"18.5%",type:"tertiary",children:["\ub300\ud559\uc0dd",(0,qr.jsx)("br",{}),"\uc18c\uc15c \ud50c\ub7ab\ud3fc"]})]})]})]}),(0,qr.jsxs)(Ng,{children:[(0,qr.jsxs)(Nm,{children:[(0,qr.jsx)(Um,{}),(0,qr.jsxs)(Hm,{children:["\uc2dc\uc7a5 \uc870\uc0ac ",(0,qr.jsx)(Tm,{color:"primary",children:"\ud575\uc2ec \ub370\uc774\ud130"})]}),(0,qr.jsx)(Um,{})]}),(0,qr.jsx)(ig,{children:"\ud3ec\ud1a0\ubd80\uc2a4, AI \uc194\ub8e8\uc158, \uc18c\uc15c \ud50c\ub7ab\ud3fc \uc2dc\uc7a5\uc5d0 \ub300\ud55c \uc2ec\uce35 \ubd84\uc11d\uc744 \ud1b5\ud574 MUFI\uc758 \uc0ac\uc5c5 \uc601\uc5ed\ubcc4 \uc131\uc7a5 \uc7a0\uc7ac\ub825\uacfc \uacbd\uc7c1 \ud658\uacbd\uc744 \ud3c9\uac00\ud558\uc600\uc2b5\ub2c8\ub2e4:"}),(0,qr.jsxs)(og,{children:[(0,qr.jsx)("thead",{children:(0,qr.jsxs)("tr",{children:[(0,qr.jsx)(sg,{children:"\uc0ac\uc5c5 \uc601\uc5ed"}),(0,qr.jsx)(sg,{children:"\ud604\uc7ac \uc2dc\uc7a5 \uaddc\ubaa8 (2023)"}),(0,qr.jsx)(sg,{children:"\uc608\uc0c1 \uc2dc\uc7a5 \uaddc\ubaa8 (2027)"}),(0,qr.jsx)(sg,{children:"\uc5f0\ud3c9\uade0 \uc131\uc7a5\ub960"})]})}),(0,qr.jsxs)("tbody",{children:[(0,qr.jsxs)("tr",{children:[(0,qr.jsx)(ag,{children:"AI \uc790\uc728 \uc6b4\uc601 \ud3ec\ud1a0\ubd80\uc2a4"}),(0,qr.jsx)(ag,{children:"6,720\uc5b5 \uc6d0"}),(0,qr.jsx)(ag,{children:"1\uc870 2,800\uc5b5 \uc6d0"}),(0,qr.jsx)(ag,{children:"11.2% \uc774\uc0c1"})]}),(0,qr.jsxs)("tr",{children:[(0,qr.jsx)(ag,{children:"\uae30\uc5c5\uc6a9 AI \uc194\ub8e8\uc158"}),(0,qr.jsx)(ag,{children:"2\uc870 1,300\uc5b5 \uc6d0"}),(0,qr.jsx)(ag,{children:"5\uc870 4,800\uc5b5 \uc6d0"}),(0,qr.jsx)(ag,{children:"26.8% \uc774\uc0c1"})]}),(0,qr.jsxs)("tr",{children:[(0,qr.jsx)(ag,{children:"\ub300\ud559\uc0dd \uc18c\uc15c \ud50c\ub7ab\ud3fc"}),(0,qr.jsx)(ag,{children:"3,650\uc5b5 \uc6d0"}),(0,qr.jsx)(ag,{children:"7,230\uc5b5 \uc6d0"}),(0,qr.jsx)(ag,{children:"18.5% \uc774\uc0c1"})]})]})]}),(0,qr.jsxs)(lg,{children:[(0,qr.jsxs)(cg,{children:[(0,qr.jsx)(ug,{children:"AI \uc790\uc728 \uc6b4\uc601 \ud3ec\ud1a0\ubd80\uc2a4 \uc2dc\uc7a5 \ubd84\uc11d"}),(0,qr.jsxs)(dg,{children:[(0,qr.jsxs)("p",{children:["\ud55c\uad6d \ub0b4 \ud3ec\ud1a0\ubd80\uc2a4 \uc2dc\uc7a5\uc740 \uc9c0\uc18d\uc801\uc778 \uc131\uc7a5\uc138\ub97c \ubcf4\uc774\uace0 \uc788\uc73c\uba70, \uc790\uc728 \uc6b4\uc601 AI \ub3c4\uc785\uc740 \ucd08\uae30 \ub2e8\uacc4\uc785\ub2c8\ub2e4. \ud604\uc7ac \ud55c\uad6d\uc758 \ud3ec\ud1a0\ubd80\uc2a4 \uc218\ub294 \uc57d ",(0,qr.jsx)(Ag,{children:"14,500\ub300"}),"\ub85c \ucd94\uc815\ub418\uba70, \uc774 \uc911 AI \uc790\uc728 \uad00\ub9ac \uc2dc\uc2a4\ud15c\uc744 \uac16\ucd98 \ud3ec\ud1a0\ubd80\uc2a4\ub294 ",(0,qr.jsx)(Ag,{children:"3% \ubbf8\ub9cc"}),"\uc785\ub2c8\ub2e4."]}),(0,qr.jsxs)("p",{children:["\ud2b9\ud788 \uc11c\uc6b8 \ub0b4 \uc57d 4,000\uac1c \uce74\ud398, \uc18c\ub9e4\uc810\uc5d0\uc11c \ud3ec\ud1a0\ubd80\uc2a4 \uc124\uce58 \uc218\uc694\uac00 \uc788\uc73c\ub098, \uc778\ub825 \uad00\ub9ac \ubb38\uc81c\ub85c \ub3c4\uc785\uc744 \uc8fc\uc800\ud558\ub294 \uc0ac\ub840\uac00 ",(0,qr.jsx)(Ag,{children:"42%"}),"\uc5d0 \ub2ec\ud569\ub2c8\ub2e4. MUFI\uc758 AI \uc790\uc728 \uc6b4\uc601 \uc2dc\uc2a4\ud15c\uc740 \uc774 \uc2dc\uc7a5 \uac04\uadf9\uc744 \uc815\ud655\ud788 \uacf5\ub7b5\ud569\ub2c8\ub2e4."]})]})]}),(0,qr.jsxs)(cg,{children:[(0,qr.jsx)(ug,{children:"\uae30\uc5c5\uc6a9 AI \uc194\ub8e8\uc158 \uc2dc\uc7a5 \uae30\ud68c"}),(0,qr.jsxs)(dg,{children:[(0,qr.jsxs)("p",{children:["\uae00\ub85c\ubc8c AI \uc2dc\uc7a5\uc740 2023\ub144\ubd80\ud130 2030\ub144\uae4c\uc9c0 ",(0,qr.jsx)(Ag,{children:"\uc5f0\ud3c9\uade0 36.8% \uc131\uc7a5"}),"\uc774 \uc608\uc0c1\ub418\uba70, \ud2b9\ud788 \ud55c\uad6d\uc758 \uc911\uc18c\uae30\uc5c5 \ub300\uc0c1 AI \uc194\ub8e8\uc158 \uc2dc\uc7a5\uc740 \uc815\ubd80 \uc9c0\uc6d0\uc73c\ub85c \uc131\uc7a5\uc774 \uac00\uc18d\ud654\ub418\uace0 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,qr.jsxs)("p",{children:["2023\ub144 \uad6d\ub0b4 \uc911\uc18c\uae30\uc5c5 \uc911 ",(0,qr.jsx)(Ag,{children:"87%"}),"\uac00 AI \uae30\uc220 \ub3c4\uc785 \ud544\uc694\uc131\uc744 \uc778\uc2dd\ud558\uace0 \uc788\uc73c\ub098, \uc2e4\uc81c \ub3c4\uc785\ub960\uc740 ",(0,qr.jsx)(Ag,{children:"23%"}),"\uc5d0 \ubd88\uacfc\ud558\uc5ec \uc2dc\uc7a5 \uce68\ud22c \uae30\ud68c\uac00 \uc0c1\ub2f9\ud569\ub2c8\ub2e4."]})]})]}),(0,qr.jsxs)(cg,{children:[(0,qr.jsx)(ug,{children:"\ub300\ud559\uc0dd \uc18c\uc15c \ud50c\ub7ab\ud3fc \uc2dc\uc7a5 \uc778\uc0ac\uc774\ud2b8"}),(0,qr.jsxs)(dg,{children:[(0,qr.jsxs)("p",{children:["\ud55c\uad6d\uc758 \ub300\ud559\uc0dd \uc778\uad6c\ub294 \uc57d ",(0,qr.jsx)(Ag,{children:"270\ub9cc\uba85"}),"\uc73c\ub85c, \uc5f0\uac04 \uc18c\ube44 \uc2dc\uc7a5 \uaddc\ubaa8\ub294",(0,qr.jsx)(Ag,{children:"3.7\uc870\uc6d0"}),"\uc73c\ub85c \ucd94\uc815\ub429\ub2c8\ub2e4. \ub300\ud559\uc0dd \ud2b9\ud654 \uc18c\uc15c \ubbf8\ub514\uc5b4 \uc0ac\uc6a9 \ube44\uc728\uc740",(0,qr.jsx)(Ag,{children:"92%"}),"\uc774\ub098, \ucea0\ud37c\uc2a4 \ud2b9\ud654 \ud50c\ub7ab\ud3fc\uc740 \ubd80\uc7ac\ud569\ub2c8\ub2e4."]}),(0,qr.jsxs)("p",{children:["\uc2dc\uc7a5 \uc124\ubb38\uc870\uc0ac \uacb0\uacfc, \ub300\ud559\uc0dd\uc758 ",(0,qr.jsx)(Ag,{children:"78%"}),"\uac00 \ucea0\ud37c\uc2a4 \ub0b4 \ub124\ud2b8\uc6cc\ud0b9\uc5d0 \ud2b9\ud654\ub41c \ud50c\ub7ab\ud3fc \ud544\uc694\uc131\uc744 \uc778\uc2dd\ud558\uace0 \uc788\uc5b4, \uce68\ud22c \uae30\ud68c\uac00 \ub192\uc740 \ube14\ub8e8\uc624\uc158 \uc2dc\uc7a5\uc785\ub2c8\ub2e4."]})]})]})]})]}),(0,qr.jsxs)(hg,{children:[(0,qr.jsx)(pg,{children:"\uacbd\uc7c1 \ubd84\uc11d \ubc0f \uc2dc\uc7a5 \ucc28\ubcc4\ud654 \uc804\ub7b5"}),(0,qr.jsxs)(fg,{children:[(0,qr.jsxs)(mg,{children:[(0,qr.jsx)(gg,{children:"\uacbd\uc7c1 \ud658\uacbd \ubd84\uc11d"}),(0,qr.jsx)(xg,{children:(0,qr.jsxs)("ul",{children:[(0,qr.jsxs)("li",{children:[(0,qr.jsx)("strong",{children:"\ud3ec\ud1a0\ubd80\uc2a4 \uc2dc\uc7a5:"})," \uc57d 87\uac1c\uc758 \uc5c5\uccb4\uac00 \uacbd\uc7c1 \uc911\uc774\ub098, 93%\uac00 \ub2e8\uc21c \ud558\ub4dc\uc6e8\uc5b4 \ud3ec\ud1a0\ubd80\uc2a4 \uc81c\uacf5 \uc5c5\uccb4\ub85c \uae30\uc220\uc801 \ucc28\ubcc4\ud654 \ubd80\uc7ac"]}),(0,qr.jsxs)("li",{children:[(0,qr.jsx)("strong",{children:"AI \uc5d0\uc774\uc804\ud2b8:"})," \ub300\ud615 IT \uae30\uc5c5 \uc911\uc2ec\uc73c\ub85c \uc194\ub8e8\uc158 \uc81c\uacf5, \uc911\uc18c\uae30\uc5c5 \ub9de\ucda4\ud615\uc740 7\uac1c \uc5c5\uccb4\ub9cc \ud65c\ub3d9 \uc911"]}),(0,qr.jsxs)("li",{children:[(0,qr.jsx)("strong",{children:"\ub300\ud559\uc0dd \ud50c\ub7ab\ud3fc:"})," \uc885\ud569 SNS(\uc778\uc2a4\ud0c0\uadf8\ub7a8, \ud398\uc774\uc2a4\ubd81 \ub4f1)\uc774 \uc810\uc720, \ub300\ud559\uc0dd \ud2b9\ud654\ub294 \uc5d0\ube0c\ub9ac\ud0c0\uc784(\ud559\uc5c5 \uc911\uc2ec)"]})]})})]}),(0,qr.jsxs)(Yg,{children:[(0,qr.jsx)(gg,{children:"MUFI\uc758 \ud575\uc2ec \uacbd\uc7c1 \uc6b0\uc704"}),(0,qr.jsxs)(Kg,{children:[(0,qr.jsxs)(Xg,{children:[(0,qr.jsx)(Gg,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",fill:"currentColor"})})}),(0,qr.jsxs)(Qg,{children:[(0,qr.jsx)("strong",{children:"\ud1b5\ud569 \ub370\uc774\ud130 \uc5d0\ucf54\uc2dc\uc2a4\ud15c:"})," \ud3ec\ud1a0\ubd80\uc2a4, AI \uc194\ub8e8\uc158, \uc18c\uc15c \ud50c\ub7ab\ud3fc\uc744 \uc5f0\uacb0\ud558\ub294 \uc720\uc77c\ud55c \ud1b5\ud569 \ub370\uc774\ud130 \ud30c\uc774\ud504\ub77c\uc778 \uad6c\ucd95"]})]}),(0,qr.jsxs)(Xg,{children:[(0,qr.jsx)(Gg,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",fill:"currentColor"})})}),(0,qr.jsxs)(Qg,{children:[(0,qr.jsx)("strong",{children:"AI \uc790\uc728 \uc6b4\uc601 \uc2dc\uc2a4\ud15c:"})," \uc6b4\uc601\ube44 52% \uc808\uac10 \ubc0f \uac00\ub3d9\ub960 97% \uc774\uc0c1 \ub2ec\uc131 (\uc5c5\uacc4 \ud3c9\uade0 82% \ub300\ube44 \uc6b0\uc704)"]})]}),(0,qr.jsxs)(Xg,{children:[(0,qr.jsx)(Gg,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",fill:"currentColor"})})}),(0,qr.jsxs)(Qg,{children:[(0,qr.jsx)("strong",{children:"\ub300\ud559\uc0dd \ud2b9\ud654 \uc628/\uc624\ud504\ub77c\uc778 \uc5f0\uacc4:"})," \ub124\ucef7\uc0ac\uc9c4\uc744 \ud1b5\ud55c \ubb3c\ub9ac\uc801 \uc811\uc810\uacfc \ub514\uc9c0\ud138 \ud50c\ub7ab\ud3fc\uc744 \uc5f0\uacb0\ud558\ub294 \ub3c5\uc790\uc801 \uc804\ub7b5"]})]}),(0,qr.jsxs)(Xg,{children:[(0,qr.jsx)(Gg,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",fill:"currentColor"})})}),(0,qr.jsxs)(Qg,{children:[(0,qr.jsx)("strong",{children:"\ub3c5\uc810 \uc2e4\uc138\uacc4 \ub370\uc774\ud130:"})," \ud3ec\ud1a0\ubd80\uc2a4\uc5d0\uc11c \uc218\uc9d1\ub418\ub294 \ud2b8\ub80c\ub4dc, \uc0ac\uc6a9\uc790 \ud328\ud134 \ub370\uc774\ud130\ub97c \ub3c5\uc810\uc801\uc73c\ub85c \ud655\ubcf4"]})]})]})]}),(0,qr.jsxs)(mg,{children:[(0,qr.jsx)(gg,{children:"\uc9c4\uc785 \uc7a5\ubcbd \uad6c\ucd95 \uc804\ub7b5"}),(0,qr.jsx)(xg,{children:(0,qr.jsxs)("ul",{children:[(0,qr.jsxs)("li",{children:[(0,qr.jsx)("strong",{children:"IP \ubcf4\ud638:"})," AI \uc790\uc728 \uc6b4\uc601 \uc2dc\uc2a4\ud15c \ud2b9\ud5c8 3\uac74 \ucd9c\uc6d0 \uc9c4\ud589 \uc911 (2024\ub144 2\ubd84\uae30 \ub0b4 \uc2b9\uc778 \uc608\uc0c1)"]}),(0,qr.jsxs)("li",{children:[(0,qr.jsx)("strong",{children:"\ub3c5\uc810 \uacc4\uc57d:"})," \uc11c\uc6b8 \uc8fc\uc694 5\uac1c \ub300\ud559\uacfc \ucea0\ud37c\uc2a4 \ub0b4 \ub3c5\uc810\uc801 \ub9c8\ucf00\ud305 \ubc0f \uc124\uce58 \uacc4\uc57d \uccb4\uacb0 (3\ub144\uac04)"]}),(0,qr.jsxs)("li",{children:[(0,qr.jsx)("strong",{children:"\ub370\uc774\ud130 \ub124\ud2b8\uc6cc\ud06c \ud6a8\uacfc:"})," \ucd08\uae30 \ub370\uc774\ud130 \ud655\ubcf4\ub97c \ud1b5\ud55c AI \ud559\uc2b5\uc73c\ub85c \ud6c4\ubc1c\uc8fc\uc790 \ub300\ube44 \uae30\uc220\uc801 \uc6b0\uc704 \ud655\ub9bd"]}),(0,qr.jsxs)("li",{children:[(0,qr.jsx)("strong",{children:"\uc218\uc9c1\uc801 \ud1b5\ud569:"})," \ud558\ub4dc\uc6e8\uc5b4\ubd80\ud130 \uc18c\ud504\ud2b8\uc6e8\uc5b4, \ub370\uc774\ud130\uae4c\uc9c0 \uc218\uc9c1 \ud1b5\ud569\ub41c \uc194\ub8e8\uc158\uc73c\ub85c \uc9c4\uc785\uc7a5\ubcbd \uac15\ud654"]})]})})]})]})]}),(0,qr.jsxs)(vg,{children:[(0,qr.jsx)(yg,{children:"\ud0c0\uac9f \uc2dc\uc7a5 \uc9c4\uc785 \uc804\ub7b5"}),(0,qr.jsx)(bg,{children:"\ud53c\ud130 \ud2f8\uc758 \uc804\ub7b5\uc801 \uc811\uadfc\ubc95\uc5d0 \ub530\ub77c, MUFI\ub294 \uacbd\uc7c1\uc774 \ub35c \uce58\uc5f4\ud55c \ud2c8\uc0c8 \uc2dc\uc7a5\uc5d0\uc11c \uc2dc\uc791\ud558\uc5ec \ub2e8\uacc4\uc801 \ud655\uc7a5\uc744 \ud1b5\ud574 \uc2dc\uc7a5 \uc9c0\ubc30\ub825\uc744 \ud655\ub9bd\ud558\ub294 \uc804\ub7b5\uc744 \uad6c\uc0ac\ud569\ub2c8\ub2e4:"}),(0,qr.jsxs)(wg,{children:[(0,qr.jsxs)(jg,{children:[(0,qr.jsx)(Sg,{children:"1\ub2e8\uacc4: \ub300\ud559\uac00 \uc911\uc2ec \ucd08\uae30 \uce68\ud22c (2025)"}),(0,qr.jsx)(Wg,{value:30}),(0,qr.jsx)(kg,{children:(0,qr.jsxs)(Ug,{children:[(0,qr.jsx)(Hg,{children:"5\uac1c \uc8fc\uc694 \ub300\ud559 \ucea0\ud37c\uc2a4 \uc8fc\ubcc0 50\uac1c \uc0c1\uc810\uc5d0 \uc6b0\uc120 \uc124\uce58"}),(0,qr.jsx)(Hg,{children:"\uc11c\uc6b8 \ub300\ud559\uac00 \uce74\ud398 \ub300\uc0c1 \uc9c1\uc811 \uc601\uc5c5 (\ubc29\ubb38\uc728\uc774 \ub192\uc740 \uc0c1\uc704 20% \ud0c0\uac9f)"}),(0,qr.jsx)(Hg,{children:"\ubca0\ud0c0 \ud14c\uc2a4\ud130 5,000\uba85 \ubaa8\uc9d1 \ubc0f \ucd08\uae30 \ud53c\ub4dc\ubc31 \uc218\uc9d1"})]})})]}),(0,qr.jsxs)(jg,{children:[(0,qr.jsx)(Sg,{children:"2\ub2e8\uacc4: \ub3c4\uc2dc \uc911\uc2ec \ud655\uc7a5 (2026)"}),(0,qr.jsx)(Wg,{value:70}),(0,qr.jsx)(kg,{children:(0,qr.jsxs)(Ug,{children:[(0,qr.jsx)(Hg,{children:"\uc11c\uc6b8 \uc804\uc5ed \ubc0f \ubd80\uc0b0, \ub300\uad6c, \uad11\uc8fc \uc8fc\uc694 \ub300\ud559\uac00\ub85c \ud655\uc7a5"}),(0,qr.jsx)(Hg,{children:"\ud504\ub79c\ucc28\uc774\uc988 \uce74\ud398 \uccb4\uc778\uacfc \uc804\ub7b5\uc801 \ud30c\ud2b8\ub108\uc2ed \uad6c\ucd95 (5\uac1c \uccb4\uc778, 50\uac1c \uc9c0\uc810)"}),(0,qr.jsx)(Hg,{children:"\uc18c\uc15c \ud50c\ub7ab\ud3fc \uc815\uc2dd \ucd9c\uc2dc \ubc0f \ub300\ud559\ubcc4 \uc570\ubc30\uc11c\ub354 \ud504\ub85c\uadf8\ub7a8 \uc6b4\uc601"})]})})]}),(0,qr.jsxs)(jg,{children:[(0,qr.jsx)(Sg,{children:"3\ub2e8\uacc4: \uc804\uad6d \ubc0f \uc544\uc2dc\uc544 \uc9c4\ucd9c (2027-)"}),(0,qr.jsx)(Wg,{value:100}),(0,qr.jsx)(kg,{children:(0,qr.jsxs)(Ug,{children:[(0,qr.jsx)(Hg,{children:"\uc804\uad6d 200\uac1c \uc774\uc0c1 \uc9c0\uc810\uc73c\ub85c \ud3ec\ud1a0\ubd80\uc2a4 \ud655\uc7a5"}),(0,qr.jsx)(Hg,{children:"\uc77c\ubcf8(\ub3c4\ucfc4, \uc624\uc0ac\uce74), \ub300\ub9cc(\ud0c0\uc774\ud398\uc774), \uc2f1\uac00\ud3ec\ub974 \uc2dc\uc7a5 \uc9c4\ucd9c"}),(0,qr.jsx)(Hg,{children:"\ud604\uc9c0 \ud30c\ud2b8\ub108\uc2ed\uc744 \ud1b5\ud55c \ubb38\ud654\uc801 \ud604\uc9c0\ud654 \ubc0f \ub9c8\ucf00\ud305 \uc804\ub7b5 \uc218\ub9bd"})]})})]})]})]})]})},Rm=(Qr`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Qr`
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
`),Im=(Qr`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,Xr.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`),Lm=Xr.div`
  position: relative;
  height: 300px;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 2rem;
`,_m=Xr.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Gd};
  opacity: 0.1;
  border-radius: 12px;
`,Dm=Xr.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 12px;
`,Vm=Xr.div`
  text-align: center;
`,Fm=Xr.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${Xd};
  margin-bottom: 0.5rem;
  line-height: 1.3;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  ${oh} {
    font-size: 3.5rem;
  }
`,Om=Xr.p`
  font-size: 1.25rem;
  color: ${Gd};
  opacity: 0.9;
  font-weight: 500;
`,Bm=Xr.div`
  margin-bottom: 3rem;
  text-align: center;
`,Nm=Xr.div`
  margin-bottom: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`,Um=Xr.div`
  height: 2px;
  background-color: ${Gd};
  width: 80px;
`,Hm=Xr.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${Xd};
  white-space: nowrap;
`,Wm=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  ${oh} {
    grid-template-columns: repeat(3, 1fr);
  }
`,Ym=Xr.div`
  background: ${Jd};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  }
`,Km=Xr.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
`,Xm=Xr.div`
  width: 100%;
  height: 100%;
  color: ${Gd};
  
  svg {
    width: 100%;
    height: 100%;
  }
`,Gm=Xr.div`
  background-color: ${Gd};
  border-radius: 12px;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  display: inline-block;
`,Qm=Xr.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${Jd};
  margin: 0;
`,qm=Xr.div`
  font-size: 1rem;
  line-height: 1.6;
  color: ${Xd};
  opacity: 0.8;
`,Zm=Xr.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`,Jm=Xr.li`
  margin-bottom: 0.5rem;
  opacity: 0.8;
  
  &:last-child {
    margin-bottom: 0;
  }
`,eg=Xr.span`
  font-weight: 700;
  color: ${Gd};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${Gd};
    opacity: 0.3;
  }
`,tg=Xr.div`
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(to bottom right, ${Jd}, rgba(110, 124, 243, 0.05));
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(110, 124, 243, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, ${Gd}, ${Qd});
  }
`,ng=Xr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: ${Xd};
  
  span {
    padding: 0 8px;
    border-radius: 8px;
    background-color: rgba(110, 124, 243, 0.1);
  }
`,rg=Xr.div`
  height: 250px;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.05);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  &.animate .market-bar {
    animation: ${Rm} 1.5s ease-out forwards;
  }
`,ig=Xr.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${Xd};
  opacity: 0.8;
`,og=Xr.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 1rem 0 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  overflow: hidden;
`,sg=Xr.th`
  background-color: ${Gd};
  color: white;
  padding: 1.2rem 1rem;
  text-align: left;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  position: relative;
  
  &:first-child {
    width: 40%;
  }
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 25%;
    height: 50%;
    width: 1px;
    background-color: rgba(255, 255, 255, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 0.5rem;
    font-size: 0.875rem;
  }
`,ag=Xr.td`
  padding: 1.2rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 0.75rem 0.5rem;
    font-size: 0.875rem;
  }
  
  &:nth-child(2), &:nth-child(3) {
    text-align: center;
    font-weight: 500;
  }
  
  &:nth-child(3) {
    color: ${Gd};
    font-weight: 600;
  }
  
  tr:last-child & {
    border-bottom: none;
  }
  
  tr:hover & {
    background-color: rgba(110, 124, 243, 0.05);
  }
`,lg=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${oh} {
    grid-template-columns: repeat(3, 1fr);
  }
`,cg=Xr.div`
  background: ${Jd};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`,ug=Xr.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${Xd};
`,dg=Xr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${Xd};
  opacity: 0.8;
`,hg=Xr.div`
  margin-top: 2rem;
  padding: 2rem;
  background: ${Jd};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`,pg=Xr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${Xd};
`,fg=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${oh} {
    grid-template-columns: repeat(3, 1fr);
  }
`,mg=Xr.div`
  background: ${Jd};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  height: 100%;
`,gg=Xr.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${Xd};
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${Gd};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: ${Xd};
  }
`,xg=Xr.div`
  font-size: 1rem;
  line-height: 1.6;
  color: ${Xd};
  
  ul {
    padding-left: 1.25rem;
    margin: 0;
    
    li {
      margin-bottom: 0.75rem;
      opacity: 0.8;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`,vg=Xr.div`
  margin-top: 2rem;
  padding: 2rem;
  background: ${Jd};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`,yg=Xr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${Xd};
`,bg=Xr.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${Xd};
  opacity: 0.8;
  margin-bottom: 1.5rem;
`,wg=Xr.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  ${oh} {
    flex-direction: row;
  }
`,jg=Xr.div`
  flex: 1;
  background: ${Jd};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.25rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`,Sg=Xr.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${Gd};
`,kg=Xr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${Xd};
  opacity: 0.8;
`,Cg=Xr.span`
  color: ${e=>e.color};
  font-weight: 700;
  position: relative;
  padding: 0 2px;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
  }
`,Eg=Xr.div`
  position: relative;
  width: 30%;
  background-color: ${e=>e.color};
  display: inline-block;
  margin: 0 1%;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: height 1.5s ease-out;
  height: 0;
  
  &.animate {
    height: 100%;
  }
  
  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
  }
`,zg=Xr.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
  color: ${Jd};
  font-weight: 600;
  font-size: 0.9rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  padding: 0 5px;
`,$g=Xr.div`
  position: absolute;
  top: -30px;
  width: 100%;
  text-align: center;
  color: ${Xd};
  font-weight: 700;
  font-size: 1.2rem;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  padding: 2px 8px;
  width: auto;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
`,Pg=Xr.div`
  margin-bottom: 3rem;
`,Tg=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  ${oh} {
    grid-template-columns: 1fr 1fr;
  }
`,Mg=Xr.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${Xd};
  opacity: 0.85;
  margin-bottom: 1rem;
`,Ag=Xr.span`
  font-weight: 700;
  color: ${Gd};
  background-color: rgba(110, 124, 243, 0.08);
  padding: 0 5px;
  border-radius: 4px;
`,Rg=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  
  ${ih} {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
`,Ig=Xr.div`
  background: ${Jd};
  border: 1px solid rgba(110, 124, 243, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`,Lg=Xr.div`
  width: 40px;
  height: 40px;
  margin: 0 auto 1rem;
  color: ${Gd};
  
  svg {
    width: 100%;
    height: 100%;
  }
`,_g=Xr.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${Xd};
`,Dg=Xr.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${Gd};
  margin-bottom: 0.75rem;
`,Vg=Xr.p`
  font-size: 0.9375rem;
  color: ${Xd};
  opacity: 0.8;
`,Fg=Xr.div`
  margin-top: 1.5rem;
  background-color: rgba(110, 124, 243, 0.08);
  padding: 0.75rem;
  border-radius: 8px;
  text-align: center;
`,Og=Xr.div`
  font-size: 0.875rem;
  opacity: 0.8;
  margin-bottom: 0.5rem;
`,Bg=Xr.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${Gd};
`,Ng=Xr.div`
  margin-top: 4rem;
  margin-bottom: 3rem;
`,Ug=Xr.ul`
  padding-left: 1.25rem;
  margin: 0.5rem 0 0;
`,Hg=Xr.li`
  font-size: 0.9375rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Wg=Xr.div`
  height: 8px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 0.75rem 0;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${e=>e.value}%;
    background-color: ${Gd};
    border-radius: 4px;
  }
`,Yg=Xr(mg)`
  grid-column: span 2;
  background: linear-gradient(to bottom right, rgba(110, 124, 243, 0.08), rgba(255, 255, 255, 0.8));
  border: 1px solid rgba(110, 124, 243, 0.15);
  
  ${ih} {
    grid-column: span 1;
  }
`,Kg=Xr.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  ${ih} {
    grid-template-columns: 1fr;
  }
`,Xg=Xr.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`,Gg=Xr.div`
  width: 24px;
  height: 24px;
  color: ${Gd};
  flex-shrink: 0;
  margin-top: 0.25rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,Qg=Xr.div`
  font-size: 1rem;
  line-height: 1.5;
  
  strong {
    display: block;
    margin-bottom: 0.25rem;
  }
`,qg=()=>(0,qr.jsxs)(Zg,{children:[(0,qr.jsxs)(Jg,{children:[(0,qr.jsx)(ex,{}),(0,qr.jsxs)(tx,{children:["\ud1b5\ud569 \ub370\uc774\ud130 \uc5d0\ucf54\uc2dc\uc2a4\ud15c ",(0,qr.jsx)(nx,{children:"\ube44\uc988\ub2c8\uc2a4 \ubaa8\ub378"})]}),(0,qr.jsx)(ex,{})]}),(0,qr.jsx)(rx,{children:(0,qr.jsxs)(ix,{children:["MUFI\ub294 AI \uae30\uc220\uc744 \ud65c\uc6a9\ud55c ",(0,qr.jsx)(nx,{children:"\ud3ec\ud1a0\ubd80\uc2a4 \uc6b4\uc601"}),", ",(0,qr.jsx)(nx,{children:"AI \uc5d0\uc774\uc804\ud2b8 \uac1c\ubc1c"}),", ",(0,qr.jsx)(nx,{children:"\ub300\ud559\uc0dd \uc18c\uc15c \ud50c\ub7ab\ud3fc"})," \uad6c\ucd95\uc744 \ud1b5\ud574 \ub2e4\uc591\ud55c \uc218\uc775 \ubaa8\ub378\uc744 \uad6c\ucd95\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ud2b9\ud788 \uac01 \uc0ac\uc5c5 \uc601\uc5ed\uc5d0\uc11c \uc218\uc9d1\ub41c \ub370\uc774\ud130\uac00 \uc21c\ud658\ud558\ub294 ",(0,qr.jsx)(nx,{children:"\ud1b5\ud569 \ub370\uc774\ud130 \uc5d0\ucf54\uc2dc\uc2a4\ud15c"}),"\uc744 \uad6c\ucd95\ud558\uc5ec \uc9c0\uc18d\uc801\uc778 \uacbd\uc7c1 \uc6b0\uc704\uc640 \ube44\uc988\ub2c8\uc2a4 \ud655\uc7a5\uc131\uc744 \ud655\ubcf4\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."]})}),(0,qr.jsxs)(ox,{children:[(0,qr.jsx)(sx,{children:"\uc0ac\uc5c5 \ubd84\uc57c\ubcc4 \ub9e4\ucd9c \uae30\uc5ec\ub3c4 \ubcc0\ud654 (2025-2027)"}),(0,qr.jsx)(ax,{children:[{year:2025,photobooth:84,aiAgent:16,social:0,dataAsset:0},{year:2026,photobooth:60,aiAgent:24,social:13,dataAsset:3},{year:2027,photobooth:48,aiAgent:28,social:14,dataAsset:10}].map(((e,t)=>(0,qr.jsxs)(lx,{children:[(0,qr.jsxs)(cx,{children:[e.year,"\ub144"]}),(0,qr.jsxs)(ux,{children:[(0,qr.jsx)(dx,{height:`${e.photobooth}%`,color:Gd,tooltip:`\ud3ec\ud1a0\ubd80\uc2a4 \uc0ac\uc5c5: ${e.photobooth}%`}),(0,qr.jsx)(dx,{height:`${e.aiAgent}%`,color:Qd,tooltip:`AI \uc5d0\uc774\uc804\ud2b8: ${e.aiAgent}%`}),(0,qr.jsx)(dx,{height:`${e.social}%`,color:qd,tooltip:`\uc18c\uc15c \ud50c\ub7ab\ud3fc: ${e.social}%`}),(0,qr.jsx)(dx,{height:`${e.dataAsset}%`,color:Zd,tooltip:`\ub370\uc774\ud130 \uc790\uc0b0: ${e.dataAsset}%`})]})]},t)))}),(0,qr.jsxs)(hx,{children:[(0,qr.jsxs)(px,{children:[(0,qr.jsx)(fx,{color:Gd}),(0,qr.jsx)(mx,{children:"\ud3ec\ud1a0\ubd80\uc2a4 \uc0ac\uc5c5"})]}),(0,qr.jsxs)(px,{children:[(0,qr.jsx)(fx,{color:Qd}),(0,qr.jsx)(mx,{children:"AI \uc5d0\uc774\uc804\ud2b8"})]}),(0,qr.jsxs)(px,{children:[(0,qr.jsx)(fx,{color:qd}),(0,qr.jsx)(mx,{children:"\uc18c\uc15c \ud50c\ub7ab\ud3fc"})]}),(0,qr.jsxs)(px,{children:[(0,qr.jsx)(fx,{color:Zd}),(0,qr.jsx)(mx,{children:"\ub370\uc774\ud130 \uc790\uc0b0"})]})]})]}),(0,qr.jsxs)(gx,{children:[(0,qr.jsxs)(xx,{children:[(0,qr.jsxs)(vx,{children:[(0,qr.jsx)(yx,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z",fill:"currentColor"})})}),(0,qr.jsx)(bx,{children:"\ud3ec\ud1a0\ubd80\uc2a4 \uc0ac\uc5c5 \ubaa8\ub378"})]}),(0,qr.jsxs)(wx,{children:[(0,qr.jsxs)(jx,{children:[(0,qr.jsxs)(Sx,{children:[(0,qr.jsx)(kx,{children:"\ucd08\uae30 \ud22c\uc790 \ube44\uc6a9"}),(0,qr.jsx)(Cx,{children:"1,200\ub9cc \uc6d0/\ub300"})]}),(0,qr.jsxs)(Sx,{children:[(0,qr.jsx)(kx,{children:"\uc6d4 \ud3c9\uade0 \ub9e4\ucd9c"}),(0,qr.jsx)(Cx,{children:"180\ub9cc \uc6d0/\ub300"})]}),(0,qr.jsxs)(Sx,{children:[(0,qr.jsx)(kx,{children:"\uc6d4 \ud3c9\uade0 \uc6b4\uc601\ube44"}),(0,qr.jsx)(Cx,{children:"45\ub9cc \uc6d0/\ub300"})]}),(0,qr.jsxs)(Sx,{children:[(0,qr.jsx)(kx,{children:"\uc6d4 \uc21c\uc774\uc775"}),(0,qr.jsx)(Cx,{children:"85\ub9cc \uc6d0/\ub300"})]}),(0,qr.jsxs)(Sx,{children:[(0,qr.jsx)(kx,{children:"ROI \ud68c\uc218 \uae30\uac04"}),(0,qr.jsx)(Cx,{children:"14\uac1c\uc6d4"})]})]}),(0,qr.jsx)(Ex,{}),(0,qr.jsxs)(zx,{children:[(0,qr.jsxs)($x,{children:[(0,qr.jsx)("strong",{children:"\uc784\ub300 \uc218\uc775:"})," \uc18c\uaddc\ubaa8 \uc0ac\uc5c5\uc790(\uce74\ud398, \uc18c\ub9e4\uc810)\uc5d0 \uc6d4 70\ub9cc \uc6d0 \uae30\uc900 \ud3ec\ud1a0\ubd80\uc2a4 \uc784\ub300 (\uc2dc\uc911 80-100\ub9cc\uc6d0 \ub300\ube44 \uacbd\uc7c1\ub825)"]}),(0,qr.jsxs)($x,{children:[(0,qr.jsx)("strong",{children:"\ub9e4\ucd9c \uacf5\uc720:"})," \ud3ec\ud1a0\ubd80\uc2a4 \ub9e4\ucd9c\uc758 30% \uacf5\uc720 \ubaa8\ub378 (\uc6d4 \ud3c9\uade0 50-60\ub9cc \uc6d0 \ucd94\uac00 \uc218\uc775)"]}),(0,qr.jsxs)($x,{children:[(0,qr.jsx)("strong",{children:"\uc774\ubca4\ud2b8 \uc218\uc775:"})," \ucd95\uc81c, \ud589\uc0ac \ub4f1\uc5d0 \uc784\uc2dc \uc124\uce58 (\uc77c 50-100\ub9cc \uc6d0, \uc8fc\ub9d0 \ud589\uc0ac \uae30\uc900 \uc6d4 4\ud68c, 200-400\ub9cc \uc6d0)"]}),(0,qr.jsxs)($x,{children:[(0,qr.jsx)("strong",{children:"\ucf58\ud150\uce20 \ud310\ub9e4:"})," \ud504\ub9ac\ubbf8\uc5c4 \ud544\ud130, \ud2b9\uc218 \ud6a8\uacfc \ub4f1 \uc778\uc571 \uad6c\ub9e4 (\uc0ac\uc6a9\uc790\ub2f9 \ud3c9\uade0 2,500\uc6d0, \uc804\ud658\uc728 18%)"]}),(0,qr.jsxs)($x,{children:[(0,qr.jsx)("strong",{children:"\uad11\uace0 \uc218\uc775:"})," \ud3ec\ud1a0\ubd80\uc2a4 \ub300\uae30 \ud654\uba74 \ubc0f \uacb0\uacfc\ubb3c \ud504\ub808\uc784\uc5d0 \ub85c\uceec \ube44\uc988\ub2c8\uc2a4 \uad11\uace0 \ub178\ucd9c (\uc6d4 15-30\ub9cc \uc6d0/\ub300)"]})]}),(0,qr.jsxs)(Px,{children:[(0,qr.jsx)(Tx,{children:"\uacbd\uc7c1 \ucc28\ubcc4\ud654 \ud3ec\uc778\ud2b8"}),(0,qr.jsx)(Mx,{children:"\ud0c0 \ud3ec\ud1a0\ubd80\uc2a4 \ub300\ube44 AI \uc790\uc728 \uc6b4\uc601\uc73c\ub85c \uc778\uac74\ube44 52% \uc808\uac10, \uc6d0\uaca9 \ubaa8\ub2c8\ud130\ub9c1 \uc2dc\uc2a4\ud15c\uc73c\ub85c \uac00\ub3d9\ub960 97% \uc774\uc0c1 \uc720\uc9c0 (\uc5c5\uacc4 \ud3c9\uade0 82%)"})]})]})]}),(0,qr.jsxs)(xx,{children:[(0,qr.jsxs)(vx,{children:[(0,qr.jsx)(yx,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z",fill:"currentColor"})})}),(0,qr.jsx)(bx,{children:"AI \uc5d0\uc774\uc804\ud2b8 \uc0ac\uc5c5 \ubaa8\ub378"})]}),(0,qr.jsxs)(wx,{children:[(0,qr.jsxs)(jx,{children:[(0,qr.jsxs)(Sx,{children:[(0,qr.jsx)(kx,{children:"\uace0\uac1d \ud68d\ub4dd \ube44\uc6a9"}),(0,qr.jsx)(Cx,{children:"120\ub9cc \uc6d0/\uae30\uc5c5"})]}),(0,qr.jsxs)(Sx,{children:[(0,qr.jsx)(kx,{children:"\uace0\uac1d \uc0dd\uc560 \uac00\uce58"}),(0,qr.jsx)(Cx,{children:"5,670\ub9cc \uc6d0"})]}),(0,qr.jsxs)(Sx,{children:[(0,qr.jsx)(kx,{children:"\uc11c\ube44\uc2a4 \ub9c8\uc9c4\uc728"}),(0,qr.jsx)(Cx,{children:"68%"})]}),(0,qr.jsxs)(Sx,{children:[(0,qr.jsx)(kx,{children:"\uad6c\ub3c5 \uc720\uc9c0\uc728"}),(0,qr.jsx)(Cx,{children:"92%"})]}),(0,qr.jsxs)(Sx,{children:[(0,qr.jsx)(kx,{children:"\uacc4\uc57d \uac31\uc2e0\ub960"}),(0,qr.jsx)(Cx,{children:"78%"})]})]}),(0,qr.jsx)(Ex,{}),(0,qr.jsxs)(zx,{children:[(0,qr.jsxs)($x,{children:[(0,qr.jsx)("strong",{children:"\ub9de\ucda4\ud615 \uac1c\ubc1c:"})," \uae30\uc5c5\uc6a9 AI \uc5d0\uc774\uc804\ud2b8 \ub9de\ucda4 \uac1c\ubc1c (\uac74\ub2f9 500-2,000\ub9cc \uc6d0, \uac1c\ubc1c \uae30\uac04 3-6\uac1c\uc6d4)"]}),(0,qr.jsxs)($x,{children:[(0,qr.jsx)("strong",{children:"SaaS \uad6c\ub3c5:"})," \uc6d4 \uad6c\ub3c5 \ubaa8\ub378 (\uc0ac\uc6a9\uc790\ub2f9 \uc6d4 5-15\ub9cc \uc6d0, \ucd5c\uc18c \uacc4\uc57d \uae30\uac04 12\uac1c\uc6d4)"]}),(0,qr.jsxs)($x,{children:[(0,qr.jsx)("strong",{children:"API \uc0ac\uc6a9\ub8cc:"})," API \ud638\ucd9c \uae30\ubc18 \uacfc\uae08 (1,000\ud68c \ud638\ucd9c\ub2f9 1-3\ub9cc \uc6d0, \uc6d4 \ud3c9\uade0 \ud638\ucd9c\ub7c9 10\ub9cc\ud68c)"]}),(0,qr.jsxs)($x,{children:[(0,qr.jsx)("strong",{children:"\uc720\uc9c0\ubcf4\uc218:"})," \uc5f0\uac04 \uacc4\uc57d \uae30\ubc18 \uc720\uc9c0\ubcf4\uc218 (\ucd08\uae30 \uac1c\ubc1c\ube44\uc758 15-20%, \ud3c9\uade0 \uacc4\uc57d \uae30\uac04 3\ub144)"]}),(0,qr.jsxs)($x,{children:[(0,qr.jsx)("strong",{children:"\ud655\uc7a5 \ubaa8\ub4c8:"})," \ucd94\uac00 \uae30\ub2a5 \ubc0f \ubd84\uc11d \ub3c4\uad6c (\ubaa8\ub4c8\ub2f9 100-300\ub9cc \uc6d0, \ud3c9\uade0 \ub3c4\uc785 \ubaa8\ub4c8 \uc218 2.5\uac1c)"]})]}),(0,qr.jsxs)(Px,{children:[(0,qr.jsx)(Tx,{children:"\uacbd\uc7c1 \ucc28\ubcc4\ud654 \ud3ec\uc778\ud2b8"}),(0,qr.jsx)(Mx,{children:"\ub3c5\uc790\uc801 \uc2e4\uc138\uacc4 \ub370\uc774\ud130 \uae30\ubc18 \ud559\uc2b5\uc73c\ub85c \uacbd\uc7c1\uc0ac \ub300\ube44 \uc815\ud655\ub3c4 23% \ud5a5\uc0c1, \uc0b0\uc5c5 \ud2b9\ud654 \ubaa8\ub4c8\ub85c \uad6c\ud604 \uc2dc\uac04 68% \ub2e8\ucd95"})]})]})]}),(0,qr.jsxs)(xx,{children:[(0,qr.jsxs)(vx,{children:[(0,qr.jsx)(yx,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z",fill:"currentColor"})})}),(0,qr.jsx)(bx,{children:"\uc18c\uc15c \ud50c\ub7ab\ud3fc \uc0ac\uc5c5 \ubaa8\ub378"})]}),(0,qr.jsxs)(wx,{children:[(0,qr.jsxs)(jx,{children:[(0,qr.jsxs)(Sx,{children:[(0,qr.jsx)(kx,{children:"\uc0ac\uc6a9\uc790 \ud68d\ub4dd \ube44\uc6a9"}),(0,qr.jsx)(Cx,{children:"2,500\uc6d0/\uba85"})]}),(0,qr.jsxs)(Sx,{children:[(0,qr.jsx)(kx,{children:"\uc0ac\uc6a9\uc790 \uc0dd\uc560 \uac00\uce58"}),(0,qr.jsx)(Cx,{children:"28,000\uc6d0"})]}),(0,qr.jsxs)(Sx,{children:[(0,qr.jsx)(kx,{children:"\uc6d4 \ud65c\uc131 \uc0ac\uc6a9\uc790"}),(0,qr.jsx)(Cx,{children:"12.2\ub9cc\uba85(2027)"})]}),(0,qr.jsxs)(Sx,{children:[(0,qr.jsx)(kx,{children:"DAU/MAU \ube44\uc728"}),(0,qr.jsx)(Cx,{children:"68%"})]}),(0,qr.jsxs)(Sx,{children:[(0,qr.jsx)(kx,{children:"\ud504\ub9ac\ubbf8\uc5c4 \uc804\ud658\uc728"}),(0,qr.jsx)(Cx,{children:"8.3%"})]})]}),(0,qr.jsx)(Ex,{}),(0,qr.jsxs)(zx,{children:[(0,qr.jsxs)($x,{children:[(0,qr.jsx)("strong",{children:"\ud504\ub9ac\ubbf8\uc5c4 \uba64\ubc84\uc2ed:"})," \uc6d4 9,900\uc6d0\uc758 \uad6c\ub3c5\ub8cc\ub85c \uace0\uae09 \uae30\ub2a5 \uc81c\uacf5 (\uc804\ud658\uc728 8.3%, \uc0b0\uc5c5 \ud3c9\uade0 2-5%)"]}),(0,qr.jsxs)($x,{children:[(0,qr.jsx)("strong",{children:"\ud0c0\uac9f \uad11\uace0:"})," \ub300\ud559\uc0dd \ud2b9\ud654 \uad11\uace0 (CPM \uae30\uc900 8,000\uc6d0, \uc5c5\uacc4 \ud3c9\uade0 5,000\uc6d0 \ub300\ube44 60% \ud504\ub9ac\ubbf8\uc5c4)"]}),(0,qr.jsxs)($x,{children:[(0,qr.jsx)("strong",{children:"\ud30c\ud2b8\ub108\uc2ed:"})," \ub300\ud559, \uae30\uc5c5\uacfc\uc758 \ud611\ub825 \ud504\ub85c\uadf8\ub7a8 (\uac74\ub2f9 500-1,000\ub9cc \uc6d0, \uc5f0 \uacc4\uc57d 15-20\uac74)"]}),(0,qr.jsxs)($x,{children:[(0,qr.jsx)("strong",{children:"\uc774\ubca4\ud2b8 \ud64d\ubcf4:"})," \ub300\ud559 \ucd95\uc81c, \uae30\uc5c5 \ucc44\uc6a9 \ub4f1 \uc774\ubca4\ud2b8 \ud64d\ubcf4 (\uac74\ub2f9 200-500\ub9cc \uc6d0, \uc6d4 \ud3c9\uade0 12\uac74)"]}),(0,qr.jsxs)($x,{children:[(0,qr.jsx)("strong",{children:"\ub370\uc774\ud130 \uc218\uc775\ud654:"})," \uc775\uba85\ud654\ub41c \uc9d1\uacc4 \ub370\uc774\ud130 \ud310\ub9e4 (\uc5f0\uac04 \uacc4\uc57d \uae30\uc900, 2027\ub144\ubd80\ud130 \ubcf8\uaca9\ud654)"]})]}),(0,qr.jsxs)(Px,{children:[(0,qr.jsx)(Tx,{children:"\uacbd\uc7c1 \ucc28\ubcc4\ud654 \ud3ec\uc778\ud2b8"}),(0,qr.jsx)(Mx,{children:"\ub124\ucef7\uc0ac\uc9c4\uc73c\ub85c \ubb3c\ub9ac\uc801 \uc5f0\uacb0 \uacbd\ud5d8\uacfc \ub514\uc9c0\ud138 \uc5f0\uacb0 \ud1b5\ud569, \uc2e4\uba85 \uae30\ubc18 \ub300\ud559 \uc778\uc99d \uc2dc\uc2a4\ud15c\uc73c\ub85c \ud0c0 SNS \ub300\ube44 \uc2e0\ub8b0\ub3c4 87% \uc0c1\uc2b9"})]})]})]})]}),(0,qr.jsxs)(Ax,{children:[(0,qr.jsxs)(Jg,{children:[(0,qr.jsx)(ex,{}),(0,qr.jsxs)(tx,{children:["\ub370\uc774\ud130 \uae30\ubc18 ",(0,qr.jsx)(nx,{children:"\ube44\uc988\ub2c8\uc2a4 \uc804\ub7b5"})]}),(0,qr.jsx)(ex,{})]}),(0,qr.jsx)(Rx,{children:"MUFI\ub294 \ud3ec\ud1a0\ubd80\uc2a4\uc640 \uc18c\uc15c \ud50c\ub7ab\ud3fc\uc744 \ud1b5\ud574 \uc218\uc9d1\ub41c \ub370\uc774\ud130\ub97c \ud65c\uc6a9\ud558\uc5ec \ucd94\uac00\uc801\uc778 \uc218\uc775 \ucc3d\ucd9c \ubc0f AI \uae30\uc220 \ubc1c\uc804\uc5d0 \uae30\uc5ec\ud558\ub294 \ub370\uc774\ud130 \uae30\ubc18 \ube44\uc988\ub2c8\uc2a4 \ubaa8\ub378\uc744 \uad6c\ucd95\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc2e4\uc138\uacc4 \ub370\uc774\ud130 \uc218\uc9d1\uacfc B2B \ub370\uc774\ud130 \ud30c\uc774\ud504\ub77c\uc778\uc740 \uc7a5\uae30\uc801\uc73c\ub85c MUFI\uc758 \ud575\uc2ec \uacbd\uc7c1\ub825\uc774\uc790 \uc0c8\ub85c\uc6b4 \uc218\uc775\uc6d0\uc774 \ub420 \uac83\uc785\ub2c8\ub2e4."}),(0,qr.jsxs)(Ix,{children:[(0,qr.jsx)(Lx,{src:"/images/data-flow-diagram.png",alt:"\ub370\uc774\ud130 \ud750\ub984\ub3c4"}),(0,qr.jsx)(_x,{children:"MUFI\uc758 \ud1b5\ud569 \ub370\uc774\ud130 \uc5d0\ucf54\uc2dc\uc2a4\ud15c \ud750\ub984\ub3c4"})]}),(0,qr.jsxs)(Dx,{children:[(0,qr.jsxs)(Vx,{children:[(0,qr.jsx)(Fx,{children:"\uc2e4\uc138\uacc4 \ub370\uc774\ud130 \uc218\uc9d1 \uc778\ud504\ub77c"}),(0,qr.jsxs)(Ox,{children:[(0,qr.jsx)("p",{children:"\ud3ec\ud1a0\ubd80\uc2a4\uc640 \uc18c\uc15c \ud50c\ub7ab\ud3fc\uc5d0\uc11c \uc218\uc9d1\ub41c 20\uc5ec \uc885\uc758 \ub370\uc774\ud130 \ud3ec\uc778\ud2b8(\uc0ac\uc9c4 \uba54\ud0c0\ub370\uc774\ud130, \uc0ac\uc6a9\uc790 \ud328\ud134, \uc120\ud638\ub3c4 \ub4f1)\ub97c \uc775\uba85\ud654\ud558\uc5ec AI \ubaa8\ub378 \ud6c8\ub828 \ubc0f \uac1c\uc120\uc5d0 \ud65c\uc6a9\ud569\ub2c8\ub2e4."}),(0,qr.jsxs)(Bx,{children:[(0,qr.jsxs)(Nx,{children:[(0,qr.jsx)(Ux,{children:"\uc77c 5.2TB"}),(0,qr.jsx)(Hx,{children:"\ub370\uc774\ud130 \uc218\uc9d1\ub7c9"})]}),(0,qr.jsxs)(Nx,{children:[(0,qr.jsx)(Ux,{children:"27\uc885"}),(0,qr.jsx)(Hx,{children:"\ub370\uc774\ud130 \ud3ec\uc778\ud2b8"})]}),(0,qr.jsxs)(Nx,{children:[(0,qr.jsx)(Ux,{children:"4\ub2e8\uacc4"}),(0,qr.jsx)(Hx,{children:"\uc775\uba85\ud654 \ud504\ub85c\uc138\uc2a4"})]})]})]})]}),(0,qr.jsxs)(Vx,{children:[(0,qr.jsx)(Fx,{children:"B2B \ub370\uc774\ud130 \ud30c\uc774\ud504\ub77c\uc778"}),(0,qr.jsxs)(Ox,{children:[(0,qr.jsxs)("p",{children:["\uc9d1\uacc4 \ubc0f \uc775\uba85\ud654\ub41c \ub370\uc774\ud130\ub97c AI \uc5f0\uad6c \uae30\uad00, \ub9c8\ucf00\ud305 \ud68c\uc0ac \ub4f1\uc5d0 \ub77c\uc774\uc120\uc2a4 \ud615\ud0dc\ub85c \uc81c\uacf5\ud558\uc5ec 2027\ub144\ubd80\ud130 \uc5f0\uac04 ",(0,qr.jsx)(nx,{children:"18\uc5b5 \uc6d0 \uc774\uc0c1"}),"\uc758 \ucd94\uac00 \uc218\uc775\uc744 \ucc3d\ucd9c\ud560 \uacc4\ud68d\uc785\ub2c8\ub2e4."]}),(0,qr.jsxs)(Bx,{children:[(0,qr.jsxs)(Nx,{children:[(0,qr.jsx)(Ux,{children:"94%"}),(0,qr.jsx)(Hx,{children:"\ub9c8\uc9c4\uc728"})]}),(0,qr.jsxs)(Nx,{children:[(0,qr.jsx)(Ux,{children:"12\uac1c"}),(0,qr.jsx)(Hx,{children:"\ucd08\uae30 B2B \uacc4\uc57d"})]}),(0,qr.jsxs)(Nx,{children:[(0,qr.jsx)(Ux,{children:"3.2\uc5b5 \uc6d0"}),(0,qr.jsx)(Hx,{children:"\uacc4\uc57d\ub2f9 \ud3c9\uade0\uac00"})]})]})]})]}),(0,qr.jsxs)(Vx,{children:[(0,qr.jsx)(Fx,{children:"\ub370\uc774\ud130 \uc724\ub9ac \ubc0f \ubcf4\uc548 \uccb4\uacc4"}),(0,qr.jsxs)(Ox,{children:[(0,qr.jsx)("p",{children:"\uae00\ub85c\ubc8c \ub370\uc774\ud130 \ubcf4\ud638 \ud45c\uc900(GDPR, CCPA \ub4f1)\uc744 \uc900\uc218\ud558\ub294 \uac15\ub825\ud55c \ub370\uc774\ud130 \uc724\ub9ac \ubc0f \ubcf4\uc548 \uccb4\uacc4\ub97c \uad6c\ucd95\ud558\uc5ec \uc0ac\uc6a9\uc790 \uc2e0\ub8b0\ub97c \ud655\ubcf4\ud558\uace0 \uaddc\uc81c \ub9ac\uc2a4\ud06c\ub97c \ucd5c\uc18c\ud654\ud569\ub2c8\ub2e4."}),(0,qr.jsxs)(Bx,{children:[(0,qr.jsxs)(Nx,{children:[(0,qr.jsx)(Ux,{children:"ISO 27001"}),(0,qr.jsx)(Hx,{children:"\ubcf4\uc548 \uc778\uc99d"})]}),(0,qr.jsxs)(Nx,{children:[(0,qr.jsx)(Ux,{children:"\ubd84\uae30\ubcc4"}),(0,qr.jsx)(Hx,{children:"\uc678\ubd80 \ubcf4\uc548 \uac10\uc0ac"})]}),(0,qr.jsxs)(Nx,{children:[(0,qr.jsx)(Ux,{children:"\ub370\uc774\ud130 \uc724\ub9ac \uc704\uc6d0\ud68c"}),(0,qr.jsx)(Hx,{children:"\uac70\ubc84\ub10c\uc2a4"})]})]})]})]}),(0,qr.jsxs)(Vx,{children:[(0,qr.jsx)(Fx,{children:"AI \ubaa8\ub378 \ud6c8\ub828 \ubc0f \uac1c\uc120 \uc2dc\uc2a4\ud15c"}),(0,qr.jsxs)(Ox,{children:[(0,qr.jsx)("p",{children:"\uc218\uc9d1\ub41c \ub370\uc774\ud130\ub97c \ud65c\uc6a9\ud55c \uc790\uccb4 AI \ubaa8\ub378 \uac1c\ubc1c\uacfc \uc9c0\uc18d\uc801 \uac1c\uc120\uc744 \ud1b5\ud574 \uc11c\ube44\uc2a4 \ud488\uc9c8\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\uace0, \ubaa8\ub378 \ub77c\uc774\uc120\uc2f1\uc744 \ud1b5\ud55c \ucd94\uac00 \uc218\uc775\uc6d0\uc744 \ud655\ubcf4\ud569\ub2c8\ub2e4."}),(0,qr.jsxs)(Bx,{children:[(0,qr.jsxs)(Nx,{children:[(0,qr.jsx)(Ux,{children:"31%"}),(0,qr.jsx)(Hx,{children:"\uc815\ud655\ub3c4 \ud5a5\uc0c1"})]}),(0,qr.jsxs)(Nx,{children:[(0,qr.jsx)(Ux,{children:"12.4\uc5b5 \uc6d0"}),(0,qr.jsx)(Hx,{children:"\uc5f0\uac04 \uac1c\ubc1c \ube44\uc6a9 \uc808\uac10"})]}),(0,qr.jsxs)(Nx,{children:[(0,qr.jsx)(Ux,{children:"7.5\uc5b5 \uc6d0"}),(0,qr.jsx)(Hx,{children:"\ubaa8\ub378 \ub77c\uc774\uc120\uc2f1 \uc608\uc0c1 \uc218\uc775"})]})]})]})]})]})]})]}),Zg=Xr.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`,Jg=Xr.div`
  margin-bottom: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`,ex=Xr.div`
  height: 2px;
  background-color: ${Gd};
  width: 80px;
`,tx=Xr.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${Xd};
  white-space: nowrap;
`,nx=Xr.span`
  color: ${Gd};
  font-weight: 700;
`,rx=Xr.div`
  margin-bottom: 1rem;
`,ix=Xr.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${Xd};
  opacity: 0.85;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`,ox=Xr.div`
  background: ${Jd};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
`,sx=Xr.h3`
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  color: ${Xd};
`,ax=Xr.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 250px;
  margin-bottom: 2rem;
`,lx=Xr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
`,cx=Xr.div`
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${Xd};
`,ux=Xr.div`
  width: 60px;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,dx=Xr.div`
  width: 100%;
  height: ${e=>e.height};
  background-color: ${e=>e.color};
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
  
  &:hover::after {
    content: '${e=>e.tooltip}';
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.75rem;
    white-space: nowrap;
    z-index: 10;
  }
`,hx=Xr.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`,px=Xr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,fx=Xr.div`
  width: 16px;
  height: 16px;
  background-color: ${e=>e.color};
  border-radius: 4px;
`,mx=Xr.span`
  font-size: 0.875rem;
  color: ${Xd};
`,gx=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  ${oh} {
    grid-template-columns: repeat(3, 1fr);
  }
`,xx=Xr.div`
  background: ${Jd};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    border-color: rgba(110, 124, 243, 0.2);
  }
`,vx=Xr.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(to right, rgba(110, 124, 243, 0.05), rgba(255, 255, 255, 0.8));
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`,yx=Xr.div`
  width: 40px;
  height: 40px;
  color: ${Gd};
  flex-shrink: 0;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,bx=Xr.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${Xd};
  margin: 0;
`,wx=Xr.div`
  padding: 1.5rem;
`,jx=Xr.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Sx=Xr.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,kx=Xr.span`
  font-size: 0.75rem;
  color: ${Xd};
  opacity: 0.6;
`,Cx=Xr.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${Xd};
`,Ex=Xr.hr`
  border: none;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.05);
  margin: 1.5rem 0;
`,zx=Xr.ul`
  padding-left: 1.25rem;
  margin: 0 0 1.5rem;
`,$x=Xr.li`
  font-size: 0.938rem;
  line-height: 1.6;
  margin-bottom: 0.75rem;
  color: ${Xd};
  opacity: 0.8;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  strong {
    font-weight: 600;
    opacity: 1;
    color: ${Gd};
  }
`,Px=Xr.div`
  background-color: rgba(110, 124, 243, 0.05);
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
`,Tx=Xr.h4`
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${Xd};
`,Mx=Xr.p`
  font-size: 0.875rem;
  line-height: 1.5;
  color: ${Xd};
  margin: 0;
`,Ax=Xr.div`
  margin-top: 3rem;
`,Rx=Xr.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${Xd};
  opacity: 0.85;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
`,Ix=Xr.div`
  text-align: center;
  margin-bottom: 3rem;
`,Lx=Xr.img`
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`,_x=Xr.p`
  font-size: 0.875rem;
  opacity: 0.7;
  margin-top: 1rem;
`,Dx=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  ${oh} {
    grid-template-columns: repeat(2, 1fr);
  }
`,Vx=Xr.div`
  background: ${Jd};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    border-color: rgba(110, 124, 243, 0.2);
  }
`,Fx=Xr.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${Xd};
  position: relative;
  padding-bottom: 0.75rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: ${Gd};
    border-radius: 1.5px;
  }
`,Ox=Xr.div`
  font-size: 1rem;
  line-height: 1.6;
  color: ${Xd};
  
  p {
    opacity: 0.8;
    margin-bottom: 1.5rem;
  }
`,Bx=Xr.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.5rem;
`,Nx=Xr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`,Ux=Xr.div`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${Gd};
  margin-bottom: 0.25rem;
  text-align: center;
`,Hx=Xr.div`
  font-size: 0.75rem;
  color: ${Xd};
  opacity: 0.7;
  text-align: center;
`,Wx=()=>(0,qr.jsxs)(Yx,{children:[(0,qr.jsx)(Kx,{children:"MUFI\ub294 \uc791\uac8c \uc2dc\uc791\ud574 \uc810\uc9c4\uc801\uc73c\ub85c \ud655\uc7a5\ud558\ub294 \uc804\ub7b5\uc744 \ucc44\ud0dd\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub2e8\uacc4\ubcc4 \uc0ac\uc5c5 \ud655\uc7a5 \uc804\ub7b5\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"}),(0,qr.jsx)(Xx,{children:(0,qr.jsxs)(Gx,{children:[(0,qr.jsxs)(Qx,{children:[(0,qr.jsx)(qx,{}),(0,qr.jsxs)(Zx,{children:[(0,qr.jsx)(Jx,{children:"2025-2026"}),(0,qr.jsx)(ev,{children:"1\ub2e8\uacc4: \ucd08\uae30 \uc2dc\uc7a5 \uce68\ud22c"}),(0,qr.jsx)(tv,{children:(0,qr.jsxs)(nv,{children:[(0,qr.jsx)(rv,{children:"\uc11c\uc6b8 \ub0b4 \uc18c\uaddc\ubaa8 \uc0ac\uc5c5\uc790 10-50\uac1c\uc640 \ud3ec\ud1a0\ubd80\uc2a4 \uc784\ub300 \uacc4\uc57d \uccb4\uacb0"}),(0,qr.jsx)(rv,{children:"\ub300\ud559\uc0dd \uc18c\uc15c \ud50c\ub7ab\ud3fc \ubca0\ud0c0 \ud14c\uc2a4\ud2b8 \ubc0f \ucd08\uae30 \uc0ac\uc6a9\uc790 \ud655\ubcf4"}),(0,qr.jsx)(rv,{children:"\ub300\ud559\uc0dd \ub300\uc0c1 \uc0ac\uc9c4 \uae30\ubc18 \uc5f0\ub77d\ucc98 \uad50\ud658 \uae30\ub2a5 \ud14c\uc2a4\ud2b8"}),(0,qr.jsx)(rv,{children:"\ucd95\uc81c \uc2dc\uc7a5\uc5d0\uc11c \ubbf8\ub514\uc5b4 \ucf58\ud150\uce20 \ud1b5\ud569 \uc2dc\ubc94 \uc6b4\uc601"})]})})]})]}),(0,qr.jsxs)(Qx,{children:[(0,qr.jsx)(qx,{}),(0,qr.jsxs)(Zx,{children:[(0,qr.jsx)(Jx,{children:"2027-2028"}),(0,qr.jsx)(ev,{children:"2\ub2e8\uacc4: \uc2dc\uc7a5 \ud655\ub300"}),(0,qr.jsx)(tv,{children:(0,qr.jsxs)(nv,{children:[(0,qr.jsx)(rv,{children:"\uc804\uad6d\uc73c\ub85c \ud0c0\uac9f \ud655\uc7a5, \uc9c0\uc5ed \uc0ac\uc5c5\uc790 \ud611\ud68c\uc640 \ud30c\ud2b8\ub108\uc2ed \uad6c\ucd95"}),(0,qr.jsx)(rv,{children:"\ud3ec\ud1a0\ubd80\uc2a4 \uc124\uce58 \uc9c0\uc810 200\uac1c \uc774\uc0c1\uc73c\ub85c \ud655\ub300"}),(0,qr.jsx)(rv,{children:"\ub370\uc774\ud130 \uc218\uc9d1 \uc778\ud504\ub77c \ubcf8\uaca9\ud654, \ucd08\uae30 B2B \ub370\uc774\ud130 \ub77c\uc774\uc120\uc2a4 \uc81c\uacf5 \uc2dc\uc791"}),(0,qr.jsx)(rv,{children:"AI \uc5d0\uc774\uc804\ud2b8 \uc0ac\uc5c5 \ud655\ub300 \ubc0f \uc0b0\uc5c5\ubcc4 \ud2b9\ud654 \uc194\ub8e8\uc158 \uac1c\ubc1c"})]})})]})]}),(0,qr.jsxs)(Qx,{children:[(0,qr.jsx)(qx,{}),(0,qr.jsxs)(Zx,{children:[(0,qr.jsx)(Jx,{children:"2029 \uc774\ud6c4"}),(0,qr.jsx)(ev,{children:"3\ub2e8\uacc4: \uad6d\uc81c \uc9c4\ucd9c"}),(0,qr.jsx)(tv,{children:(0,qr.jsxs)(nv,{children:[(0,qr.jsx)(rv,{children:"\uc77c\ubcf8, \ub3d9\ub0a8\uc544\uc2dc\uc544 \uc2dc\uc7a5 \uc9c4\ucd9c, \ud604\uc9c0 \ud30c\ud2b8\ub108\uc640 \ud611\ub825"}),(0,qr.jsx)(rv,{children:"\ubb38\ud654\uc801 \uc801\ud569\uc131\uc744 \uace0\ub824\ud55c \ud604\uc9c0\ud654 \uc804\ub7b5 \uc218\ub9bd"}),(0,qr.jsx)(rv,{children:"\uae00\ub85c\ubc8c \ub370\uc774\ud130 \uc218\uc9d1 \ub124\ud2b8\uc6cc\ud06c \uad6c\ucd95"}),(0,qr.jsx)(rv,{children:"AI \uae30\uc220 \ub77c\uc774\uc120\uc2a4 \uc0ac\uc5c5 \ud655\ub300"})]})})]})]})]})}),(0,qr.jsxs)(iv,{children:[(0,qr.jsxs)(ov,{children:[(0,qr.jsx)(sv,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",fill:"currentColor"})})}),(0,qr.jsx)(av,{children:"\uc9c0\uc5ed \ud655\uc7a5 \uc804\ub7b5"}),(0,qr.jsx)(lv,{children:"\uc11c\uc6b8 \uc911\uc2ec\uc758 \ucd08\uae30 \uc2dc\uc7a5\uc5d0\uc11c \uc2dc\uc791\ud558\uc5ec \uc8fc\uc694 \ub300\ub3c4\uc2dc, \uc804\uad6d, \uadf8\ub9ac\uace0 \uc544\uc2dc\uc544 \uc2dc\uc7a5\uc73c\ub85c \ub2e8\uacc4\uc801 \ud655\uc7a5\uc744 \uc9c4\ud589\ud569\ub2c8\ub2e4. \uac01 \uc9c0\uc5ed\uc758 \ud2b9\uc131\uacfc \ubb38\ud654\ub97c \uace0\ub824\ud55c \ud604\uc9c0\ud654 \uc804\ub7b5\uc744 \uc218\ub9bd\ud558\uace0, \ud604\uc9c0 \ud30c\ud2b8\ub108\uc640\uc758 \ud611\ub825\uc744 \ud1b5\ud574 \uc2dc\uc7a5 \uc9c4\uc785 \uc7a5\ubcbd\uc744 \ub0ae\ucda5\ub2c8\ub2e4."})]}),(0,qr.jsxs)(ov,{children:[(0,qr.jsx)(sv,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z",fill:"currentColor"})})}),(0,qr.jsx)(av,{children:"\uc218\uc9c1\uc801 \ud1b5\ud569 \uc804\ub7b5"}),(0,qr.jsx)(lv,{children:"\ud3ec\ud1a0\ubd80\uc2a4 \ud558\ub4dc\uc6e8\uc5b4 \uc81c\uc870\ubd80\ud130 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c, \ub370\uc774\ud130 \ubd84\uc11d, AI \ubaa8\ub378 \ud6c8\ub828\uae4c\uc9c0 \uac00\uce58 \uc0ac\uc2ac \uc804\ubc18\uc744 \ud1b5\ud569\ud558\uc5ec \uacbd\uc7c1 \uc6b0\uc704\ub97c \ud655\ubcf4\ud569\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \ube44\uc6a9 \ud6a8\uc728\uc131\uc744 \ub192\uc774\uace0 \ud488\uc9c8 \uad00\ub9ac\ub97c \uac15\ud654\ud558\uba70, \ud601\uc2e0\uc801\uc778 \uc81c\ud488\uacfc \uc11c\ube44\uc2a4\ub97c \uc9c0\uc18d\uc801\uc73c\ub85c \uac1c\ubc1c\ud569\ub2c8\ub2e4."})]}),(0,qr.jsxs)(ov,{children:[(0,qr.jsx)(sv,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z",fill:"currentColor"})})}),(0,qr.jsx)(av,{children:"\uc7ac\ubb34 \uc131\uc7a5 \uc804\ub7b5"}),(0,qr.jsx)(lv,{children:"\ucd08\uae30\uc5d0\ub294 \ud3ec\ud1a0\ubd80\uc2a4 \uc784\ub300 \uc218\uc775\uc744 \uae30\ubc18\uc73c\ub85c \uc548\uc815\uc801\uc778 \ud604\uae08 \ud750\ub984\uc744 \ud655\ubcf4\ud558\uace0, \uc810\ucc28 \uc18c\uc15c \ud50c\ub7ab\ud3fc\uc758 \uad6c\ub3c5 \ubaa8\ub378\uacfc \ub370\uc774\ud130 \ud310\ub9e4 \uc218\uc775\uc73c\ub85c \ud655\uc7a5\ud569\ub2c8\ub2e4. 2025\ub144 \ub9e4\ucd9c 10\uc5b5 \uc6d0, 2026\ub144 42\uc5b5 \uc6d0, 2027\ub144 168\uc5b5 \uc6d0\uc744 \ubaa9\ud45c\ub85c \ud558\uba70, B2B \ub370\uc774\ud130 \ud310\ub9e4\ub294 2027\ub144\ubd80\ud130 \uc5f0\uac04 5\uc5b5 \uc6d0 \uc774\uc0c1\uc758 \ucd94\uac00 \uc218\uc775\uc744 \ucc3d\ucd9c\ud560 \uacc4\ud68d\uc785\ub2c8\ub2e4."})]})]}),(0,qr.jsxs)(cv,{children:[(0,qr.jsx)(uv,{children:"\uc704\ud5d8 \uc694\uc778 \ubc0f \ub300\uc751 \uc804\ub7b5"}),(0,qr.jsxs)(dv,{children:[(0,qr.jsxs)(hv,{children:[(0,qr.jsx)(pv,{children:"\uacbd\uc7c1 \uc704\ud5d8"}),(0,qr.jsx)(fv,{children:"\ucd08\uae30 \uc2dc\uc7a5\uc5d0\uc11c \uacbd\uc7c1\uc790 \uc9c4\uc785 \uac00\ub2a5\uc131\uc774 \uc788\uc2b5\ub2c8\ub2e4."}),(0,qr.jsxs)(mv,{children:[(0,qr.jsx)("strong",{children:"\ub300\uc751 \uc804\ub7b5:"})," \uc9c0\uc18d\uc801\uc778 \uae30\uc220 \ud601\uc2e0\uacfc \ub3c5\uc810\uc801 \ub370\uc774\ud130 \uc218\uc9d1\uc744 \ud1b5\ud55c \uc9c4\uc785 \uc7a5\ubcbd \uad6c\ucd95"]})]}),(0,qr.jsxs)(hv,{children:[(0,qr.jsx)(pv,{children:"\ub370\uc774\ud130 \ud504\ub77c\uc774\ubc84\uc2dc"}),(0,qr.jsx)(fv,{children:"\uac1c\uc778\uc815\ubcf4 \ubcf4\ud638 \uaddc\uc81c \uac15\ud654\ub85c \uc778\ud55c \ub370\uc774\ud130 \ud65c\uc6a9 \uc81c\ud55c \uac00\ub2a5\uc131\uc774 \uc788\uc2b5\ub2c8\ub2e4."}),(0,qr.jsxs)(mv,{children:[(0,qr.jsx)("strong",{children:"\ub300\uc751 \uc804\ub7b5:"})," GDPR, CCPA \ub4f1 \uae00\ub85c\ubc8c \uac1c\uc778\uc815\ubcf4 \ubcf4\ud638 \uaddc\uc815 \uc900\uc218 \ubc0f \uc775\uba85\ud654 \uae30\uc220 \uac15\ud654"]})]}),(0,qr.jsxs)(hv,{children:[(0,qr.jsx)(pv,{children:"\uacbd\uc81c \uce68\uccb4"}),(0,qr.jsx)(fv,{children:"\uacbd\uae30 \uce68\uccb4\ub85c \uc778\ud55c \uc18c\ube44\uc790 \uc9c0\ucd9c \uac10\uc18c \uac00\ub2a5\uc131\uc774 \uc788\uc2b5\ub2c8\ub2e4."}),(0,qr.jsxs)(mv,{children:[(0,qr.jsx)("strong",{children:"\ub300\uc751 \uc804\ub7b5:"})," \uc720\uc5f0\ud55c \uac00\uaca9 \uc815\ucc45\uacfc \ub2e4\uc591\ud55c \uc218\uc775 \ubaa8\ub378 \uad6c\ucd95\uc73c\ub85c \ub9ac\uc2a4\ud06c \ubd84\uc0b0"]})]})]})]})]}),Yx=Xr.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,Kx=Xr.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${Xd};
  opacity: 0.8;
`,Xx=Xr.div`
  margin: 2rem 0;
`,Gx=Xr.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 20px;
    height: 100%;
    width: 2px;
    background: ${Gd};
    
    ${oh} {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`,Qx=Xr.div`
  position: relative;
  padding-left: 50px;
  margin-bottom: 3rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  ${oh} {
    padding-left: 0;
    width: 50%;
    
    &:nth-child(odd) {
      padding-right: 40px;
      text-align: right;
      margin-left: 0;
      margin-right: auto;
    }
    
    &:nth-child(even) {
      padding-left: 40px;
      text-align: left;
      margin-left: auto;
      margin-right: 0;
    }
  }
`,qx=Xr.div`
  position: absolute;
  top: 0;
  left: 15px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${Gd};
  border: 2px solid white;
  box-shadow: 0 0 0 4px rgba(255, 59, 48, 0.2);
  
  ${oh} {
    left: auto;
    right: -6px;
    
    ${Qx}:nth-child(even) & {
      right: auto;
      left: -6px;
    }
  }
`,Zx=Xr.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
`,Jx=Xr.div`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: ${Gd};
  color: white;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`,ev=Xr.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${Xd};
`,tv=Xr.div`
  color: ${Xd};
  opacity: 0.8;
`,nv=Xr.ul`
  padding-left: 1.25rem;
  margin: 0;
`,rv=Xr.li`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,iv=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 1rem;
  
  ${oh} {
    grid-template-columns: repeat(3, 1fr);
  }
`,ov=Xr.div`
  background: ${Jd};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`,sv=Xr.div`
  width: 40px;
  height: 40px;
  color: ${Gd};
  margin-bottom: 1rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,av=Xr.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${Xd};
`,lv=Xr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${Xd};
  opacity: 0.8;
`,cv=Xr.div`
  margin-top: 2rem;
  padding: 2rem;
  background: ${Jd};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`,uv=Xr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${Xd};
`,dv=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${oh} {
    grid-template-columns: repeat(3, 1fr);
  }
`,hv=Xr.div`
  background: ${Jd};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`,pv=Xr.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${Xd};
`,fv=Xr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${Xd};
  opacity: 0.8;
  margin-bottom: 1rem;
`,mv=Xr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${Xd};
  opacity: 0.8;
  
  strong {
    font-weight: 600;
    opacity: 1;
  }
`,gv=()=>(0,qr.jsxs)(xv,{children:[(0,qr.jsx)(vv,{children:"MUFI\ub294 \ud604\uc2e4\uc801\uc778 \uc7ac\ubb34 \ubaa9\ud45c\ub97c \uc124\uc815\ud558\uace0 \ub2e8\uacc4\uc801\uc778 \uc131\uc7a5\uc744 \uacc4\ud68d\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ucd08\uae30\uc5d0\ub294 \ud3ec\ud1a0\ubd80\uc2a4 \uc784\ub300 \uc218\uc775\uc744 \uae30\ubc18\uc73c\ub85c \uc548\uc815\uc801\uc778 \ud604\uae08 \ud750\ub984\uc744 \ud655\ubcf4\ud558\uace0, \uc810\ucc28 \uc18c\uc15c \ud50c\ub7ab\ud3fc\uc758 \uad6c\ub3c5 \ubaa8\ub378\uacfc \ub370\uc774\ud130 \ud310\ub9e4 \uc218\uc775\uc73c\ub85c \ud655\uc7a5\ud560 \uc608\uc815\uc785\ub2c8\ub2e4."}),(0,qr.jsxs)(yv,{children:[(0,qr.jsx)(bv,{children:"\uc5f0\ub3c4\ubcc4 \uc7ac\ubb34 \ubaa9\ud45c"}),(0,qr.jsx)(wv,{children:(0,qr.jsxs)("svg",{width:"100%",height:"300",viewBox:"0 0 800 300",xmlns:"http://www.w3.org/2000/svg",children:[(0,qr.jsx)("line",{x1:"50",y1:"250",x2:"750",y2:"250",stroke:Xd,strokeWidth:"2"}),(0,qr.jsx)("line",{x1:"50",y1:"50",x2:"50",y2:"250",stroke:Xd,strokeWidth:"2"}),(0,qr.jsx)("text",{x:"150",y:"280",textAnchor:"middle",fill:Xd,children:"2025\ub144"}),(0,qr.jsx)("text",{x:"350",y:"280",textAnchor:"middle",fill:Xd,children:"2026\ub144"}),(0,qr.jsx)("text",{x:"550",y:"280",textAnchor:"middle",fill:Xd,children:"2027\ub144"}),(0,qr.jsx)("text",{x:"30",y:"250",textAnchor:"end",fill:Xd,children:"0"}),(0,qr.jsx)("text",{x:"30",y:"200",textAnchor:"end",fill:Xd,children:"50\uc5b5"}),(0,qr.jsx)("text",{x:"30",y:"150",textAnchor:"end",fill:Xd,children:"100\uc5b5"}),(0,qr.jsx)("text",{x:"30",y:"100",textAnchor:"end",fill:Xd,children:"150\uc5b5"}),(0,qr.jsx)("text",{x:"30",y:"50",textAnchor:"end",fill:Xd,children:"200\uc5b5"}),(0,qr.jsx)("line",{x1:"50",y1:"200",x2:"750",y2:"200",stroke:Xd,strokeWidth:"0.5",strokeDasharray:"5,5"}),(0,qr.jsx)("line",{x1:"50",y1:"150",x2:"750",y2:"150",stroke:Xd,strokeWidth:"0.5",strokeDasharray:"5,5"}),(0,qr.jsx)("line",{x1:"50",y1:"100",x2:"750",y2:"100",stroke:Xd,strokeWidth:"0.5",strokeDasharray:"5,5"}),(0,qr.jsx)("line",{x1:"50",y1:"50",x2:"750",y2:"50",stroke:Xd,strokeWidth:"0.5",strokeDasharray:"5,5"}),(0,qr.jsx)("rect",{x:"100",y:"245",width:"100",height:"5",fill:Gd}),(0,qr.jsx)("rect",{x:"300",y:"229",width:"100",height:"21",fill:Gd}),(0,qr.jsx)("rect",{x:"500",y:"166",width:"100",height:"84",fill:Gd}),(0,qr.jsx)("text",{x:"150",y:"240",textAnchor:"middle",fill:Xd,fontWeight:"bold",children:"10\uc5b5"}),(0,qr.jsx)("text",{x:"350",y:"220",textAnchor:"middle",fill:Xd,fontWeight:"bold",children:"42\uc5b5"}),(0,qr.jsx)("text",{x:"550",y:"160",textAnchor:"middle",fill:Xd,fontWeight:"bold",children:"168\uc5b5"}),(0,qr.jsx)("rect",{x:"600",y:"30",width:"20",height:"10",fill:Gd}),(0,qr.jsx)("text",{x:"630",y:"38",fill:Xd,children:"\uc5f0\uac04 \ub9e4\ucd9c"})]})})]}),(0,qr.jsxs)(jv,{children:[(0,qr.jsxs)(Sv,{children:[(0,qr.jsx)(kv,{children:"2025\ub144"}),(0,qr.jsxs)(Cv,{children:[(0,qr.jsxs)(Ev,{children:[(0,qr.jsx)(zv,{children:"\ub9e4\ucd9c"}),(0,qr.jsx)($v,{children:"10\uc5b5 \uc6d0"})]}),(0,qr.jsxs)(Ev,{children:[(0,qr.jsx)(zv,{children:"\ud3ec\ud1a0\ubd80\uc2a4 \uc124\uce58"}),(0,qr.jsx)($v,{children:"10\uac1c"})]}),(0,qr.jsxs)(Ev,{children:[(0,qr.jsx)(zv,{children:"\uc6d4 \uc784\ub300\ub8cc"}),(0,qr.jsx)($v,{children:"70\ub9cc \uc6d0"})]}),(0,qr.jsxs)(Ev,{children:[(0,qr.jsx)(zv,{children:"\uc190\uc775\ubd84\uae30\uc810"}),(0,qr.jsx)($v,{children:"\ub2ec\uc131"})]})]}),(0,qr.jsx)(Pv,{children:"\ucd08\uae30 \uc2dc\uc7a5 \uc9c4\uc785 \ub2e8\uacc4\ub85c, \uc11c\uc6b8 \ub0b4 \uc18c\uaddc\ubaa8 \uc0ac\uc5c5\uc790 10\uac1c\uc640 \ud3ec\ud1a0\ubd80\uc2a4 \uc784\ub300 \uacc4\uc57d\uc744 \uccb4\uacb0\ud558\uace0 \uc548\uc815\uc801\uc778 \ud604\uae08 \ud750\ub984\uc744 \ud655\ubcf4\ud558\uc5ec \uc190\uc775\ubd84\uae30\uc810 \ub2ec\uc131\uc744 \ubaa9\ud45c\ub85c \ud569\ub2c8\ub2e4."})]}),(0,qr.jsxs)(Sv,{children:[(0,qr.jsx)(kv,{children:"2026\ub144"}),(0,qr.jsxs)(Cv,{children:[(0,qr.jsxs)(Ev,{children:[(0,qr.jsx)(zv,{children:"\ub9e4\ucd9c"}),(0,qr.jsx)($v,{children:"42\uc5b5 \uc6d0"})]}),(0,qr.jsxs)(Ev,{children:[(0,qr.jsx)(zv,{children:"\ud3ec\ud1a0\ubd80\uc2a4 \uc124\uce58"}),(0,qr.jsx)($v,{children:"50\uac1c"})]}),(0,qr.jsxs)(Ev,{children:[(0,qr.jsx)(zv,{children:"\uc601\uc5c5\uc774\uc775"}),(0,qr.jsx)($v,{children:"5\uc5b5 \uc6d0"})]}),(0,qr.jsxs)(Ev,{children:[(0,qr.jsx)(zv,{children:"\uc18c\uc15c \ud50c\ub7ab\ud3fc \uc0ac\uc6a9\uc790"}),(0,qr.jsx)($v,{children:"5\ub9cc \uba85"})]})]}),(0,qr.jsx)(Pv,{children:"\uc2dc\uc7a5 \ud655\ub300 \ub2e8\uacc4\ub85c, \ud3ec\ud1a0\ubd80\uc2a4 \uc124\uce58 \uc9c0\uc810\uc744 50\uac1c\ub85c \ud655\ub300\ud558\uace0 \uc18c\uc15c \ud50c\ub7ab\ud3fc \uc0ac\uc6a9\uc790\ub97c 5\ub9cc \uba85\uae4c\uc9c0 \ud655\ubcf4\ud558\uc5ec \uc601\uc5c5\uc774\uc775 5\uc5b5 \uc6d0 \ub2ec\uc131\uc744 \ubaa9\ud45c\ub85c \ud569\ub2c8\ub2e4."})]}),(0,qr.jsxs)(Sv,{children:[(0,qr.jsx)(kv,{children:"2027\ub144"}),(0,qr.jsxs)(Cv,{children:[(0,qr.jsxs)(Ev,{children:[(0,qr.jsx)(zv,{children:"\ub9e4\ucd9c"}),(0,qr.jsx)($v,{children:"168\uc5b5 \uc6d0"})]}),(0,qr.jsxs)(Ev,{children:[(0,qr.jsx)(zv,{children:"\ud3ec\ud1a0\ubd80\uc2a4 \uc124\uce58"}),(0,qr.jsx)($v,{children:"200\uac1c"})]}),(0,qr.jsxs)(Ev,{children:[(0,qr.jsx)(zv,{children:"\uc2dc\uc7a5 \uc810\uc720\uc728"}),(0,qr.jsx)($v,{children:"20%"})]}),(0,qr.jsxs)(Ev,{children:[(0,qr.jsx)(zv,{children:"B2B \ub370\uc774\ud130 \ud310\ub9e4"}),(0,qr.jsx)($v,{children:"5\uc5b5 \uc6d0+"})]})]}),(0,qr.jsx)(Pv,{children:"\ubcf8\uaca9\uc801\uc778 \uc131\uc7a5 \ub2e8\uacc4\ub85c, \ud3ec\ud1a0\ubd80\uc2a4 \uc124\uce58 \uc9c0\uc810\uc744 200\uac1c \uc774\uc0c1\uc73c\ub85c \ud655\ub300\ud558\uace0 B2B \ub370\uc774\ud130 \ud310\ub9e4\ub97c \ud1b5\ud574 \uc5f0\uac04 5\uc5b5 \uc6d0 \uc774\uc0c1\uc758 \ucd94\uac00 \uc218\uc775\uc744 \ucc3d\ucd9c\ud558\uba70, \uc2dc\uc7a5 \uc810\uc720\uc728 20% \ub2ec\uc131\uc744 \ubaa9\ud45c\ub85c \ud569\ub2c8\ub2e4."})]})]}),(0,qr.jsxs)(Tv,{children:[(0,qr.jsx)(Mv,{children:"\uc218\uc775\uc6d0 \ub2e4\uac01\ud654 \uc804\ub7b5"}),(0,qr.jsxs)(Av,{children:[(0,qr.jsxs)(Rv,{children:[(0,qr.jsx)(Iv,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z",fill:"currentColor"})})}),(0,qr.jsx)(Lv,{children:"\ud3ec\ud1a0\ubd80\uc2a4 \uc784\ub300 \uc218\uc775"}),(0,qr.jsx)(_v,{children:(0,qr.jsxs)(Dv,{children:[(0,qr.jsx)(Vv,{children:"\uc6d4 70\ub9cc \uc6d0 \uae30\uc900 \uc784\ub300\ub8cc"}),(0,qr.jsx)(Vv,{children:"2025\ub144: 10\uac1c \uc124\uce58 (\uc5f0 8.4\uc5b5 \uc6d0)"}),(0,qr.jsx)(Vv,{children:"2026\ub144: 50\uac1c \uc124\uce58 (\uc5f0 42\uc5b5 \uc6d0)"}),(0,qr.jsx)(Vv,{children:"2027\ub144: 200\uac1c \uc124\uce58 (\uc5f0 168\uc5b5 \uc6d0)"})]})})]}),(0,qr.jsxs)(Rv,{children:[(0,qr.jsx)(Iv,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",fill:"currentColor"})})}),(0,qr.jsx)(Lv,{children:"\uc18c\uc15c \ud50c\ub7ab\ud3fc \uc218\uc775"}),(0,qr.jsx)(_v,{children:(0,qr.jsxs)(Dv,{children:[(0,qr.jsx)(Vv,{children:"\ud504\ub9ac\ubbf8\uc5c4 \uba64\ubc84\uc2ed: \uc6d4 9,900\uc6d0"}),(0,qr.jsx)(Vv,{children:"2026\ub144: 5\ub9cc \uc0ac\uc6a9\uc790 \uc911 5% \uad6c\ub3c5 (\uc5f0 3\uc5b5 \uc6d0)"}),(0,qr.jsx)(Vv,{children:"2027\ub144: 20\ub9cc \uc0ac\uc6a9\uc790 \uc911 8% \uad6c\ub3c5 (\uc5f0 19\uc5b5 \uc6d0)"}),(0,qr.jsx)(Vv,{children:"\uad11\uace0 \uc218\uc775: CPM \uae30\uc900 5,000-10,000\uc6d0"})]})})]}),(0,qr.jsxs)(Rv,{children:[(0,qr.jsx)(Iv,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",fill:"currentColor"})})}),(0,qr.jsx)(Lv,{children:"\ub370\uc774\ud130 \ud310\ub9e4 \uc218\uc775"}),(0,qr.jsx)(_v,{children:(0,qr.jsxs)(Dv,{children:[(0,qr.jsx)(Vv,{children:"2027\ub144\ubd80\ud130 \ubcf8\uaca9\ud654"}),(0,qr.jsx)(Vv,{children:"\uc775\uba85\ud654\ub41c \uc9d1\uacc4 \ub370\uc774\ud130 \ub77c\uc774\uc120\uc2a4"}),(0,qr.jsx)(Vv,{children:"AI \uc5f0\uad6c \uae30\uad00, \ub9c8\ucf00\ud305 \ud68c\uc0ac \ub300\uc0c1"}),(0,qr.jsx)(Vv,{children:"\uc5f0\uac04 5\uc5b5 \uc6d0 \uc774\uc0c1 \ucd94\uac00 \uc218\uc775 \ucc3d\ucd9c"})]})})]})]})]})]}),xv=Xr.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,vv=Xr.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${Xd};
  opacity: 0.8;
`,yv=Xr.div`
  margin-top: 1rem;
  padding: 2rem;
  background: ${Jd};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`,bv=Xr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${Xd};
  text-align: center;
`,wv=Xr.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  
  svg {
    overflow: visible;
    
    text {
      font-family: 'Pretendard', sans-serif;
      font-size: 12px;
      
      @media (max-width: 768px) {
        font-size: 10px;
      }
    }
  }
`,jv=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${oh} {
    grid-template-columns: repeat(3, 1fr);
  }
`,Sv=Xr.div`
  background: ${Jd};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`,kv=Xr.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${Xd};
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`,Cv=Xr.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Ev=Xr.div`
  display: flex;
  flex-direction: column;
`,zv=Xr.span`
  font-size: 0.875rem;
  color: ${Xd};
  opacity: 0.6;
  margin-bottom: 0.25rem;
`,$v=Xr.span`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${Xd};
`,Pv=Xr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${Xd};
  opacity: 0.8;
`,Tv=Xr.div`
  margin-top: 2rem;
  padding: 2rem;
  background: ${Jd};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`,Mv=Xr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${Xd};
`,Av=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${oh} {
    grid-template-columns: repeat(3, 1fr);
  }
`,Rv=Xr.div`
  background: ${Jd};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`,Iv=Xr.div`
  width: 40px;
  height: 40px;
  color: ${Gd};
  margin-bottom: 1rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,Lv=Xr.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${Xd};
`,_v=Xr.div`
  color: ${Xd};
`,Dv=Xr.ul`
  padding-left: 1.25rem;
  margin: 0;
`,Vv=Xr.li`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  opacity: 0.8;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Fv=()=>(0,qr.jsxs)(Ov,{children:[(0,qr.jsx)(Bv,{children:"MUFI\ub294 AI, \ud558\ub4dc\uc6e8\uc5b4, \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc804\ubb38\uac00\ub85c \uad6c\uc131\ub41c \ub2e4\uc591\ud55c \ubc30\uacbd\uc758 \ud300\uc6d0\ub4e4\uc774 \ubaa8\uc5ec \ud601\uc2e0\uc801\uc778 \uc81c\ud488\uacfc \uc11c\ube44\uc2a4\ub97c \uac1c\ubc1c\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uac01 \ubd84\uc57c\uc758 \uc804\ubb38\uc131\uc744 \ubc14\ud0d5\uc73c\ub85c \ud3ec\ud1a0\ubd80\uc2a4 \uc6b4\uc601, AI \uc5d0\uc774\uc804\ud2b8 \uac1c\ubc1c, \uc18c\uc15c \ud50c\ub7ab\ud3fc \uad6c\ucd95\uc744 \uc704\ud55c \ucd5c\uc801\uc758 \ud300\uc744 \uad6c\uc131\ud588\uc2b5\ub2c8\ub2e4."}),(0,qr.jsxs)(Nv,{children:[(0,qr.jsxs)(Uv,{children:[(0,qr.jsx)(Hv,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",fill:"currentColor"})})}),(0,qr.jsxs)(Wv,{children:[(0,qr.jsx)(Yv,{children:"CEO"}),(0,qr.jsx)(Kv,{children:"\ucd5c\uace0\uacbd\uc601\uc790"}),(0,qr.jsx)(Xv,{children:"AI \ubd84\uc57c 5\ub144 \uacbd\ub825\uc744 \ubcf4\uc720\ud55c \uc804\ubb38\uac00\ub85c, \uc2a4\ud0c0\ud2b8\uc5c5 \ucc3d\uc5c5 \ubc0f \uc6b4\uc601 \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ube44\uc804 \uc218\ub9bd, \uc804\ub7b5 \uae30\ud68d, \ud22c\uc790 \uc720\uce58\ub97c \ub2f4\ub2f9\ud558\uba70 \ud300\uc744 \uc774\ub04c\uace0 \uc788\uc2b5\ub2c8\ub2e4."})]})]}),(0,qr.jsxs)(Uv,{children:[(0,qr.jsx)(Hv,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",fill:"currentColor"})})}),(0,qr.jsxs)(Wv,{children:[(0,qr.jsx)(Yv,{children:"CTO"}),(0,qr.jsx)(Kv,{children:"\ucd5c\uace0\uae30\uc220\ucc45\uc784\uc790"}),(0,qr.jsx)(Xv,{children:"AI \uc774\ubbf8\uc9c0 \ucc98\ub9ac \uc804\ubb38\uac00\ub85c, \ucef4\ud4e8\ud130 \ube44\uc804 \ubc0f \uba38\uc2e0\ub7ec\ub2dd \ubd84\uc57c\uc5d0\uc11c \ub2e4\uc218\uc758 \ud504\ub85c\uc81d\ud2b8\ub97c \uc218\ud589\ud588\uc2b5\ub2c8\ub2e4. \uae30\uc220 \uac1c\ubc1c \uc804\ub7b5 \uc218\ub9bd \ubc0f R&D \ud300\uc744 \uc774\ub04c\uace0 \uc788\uc2b5\ub2c8\ub2e4."})]})]}),(0,qr.jsxs)(Uv,{children:[(0,qr.jsx)(Hv,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",fill:"currentColor"})})}),(0,qr.jsxs)(Wv,{children:[(0,qr.jsx)(Yv,{children:"COO"}),(0,qr.jsx)(Kv,{children:"\ucd5c\uace0\uc6b4\uc601\ucc45\uc784\uc790"}),(0,qr.jsx)(Xv,{children:"\uc18c\uaddc\ubaa8 \uc0ac\uc5c5 \uc6b4\uc601 3\ub144 \uacbd\ub825\uc744 \ubcf4\uc720\ud558\uace0 \uc788\uc73c\uba70, \ud3ec\ud1a0\ubd80\uc2a4 \uc0ac\uc5c5 \uc6b4\uc601 \ubc0f \ud30c\ud2b8\ub108\uc2ed \uad00\ub9ac\ub97c \ub2f4\ub2f9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ud6a8\uc728\uc801\uc778 \uc6b4\uc601 \ud504\ub85c\uc138\uc2a4 \uad6c\ucd95\uc5d0 \uc804\ubb38\uc131\uc744 \uac16\ucd94\uace0 \uc788\uc2b5\ub2c8\ub2e4."})]})]}),(0,qr.jsxs)(Uv,{children:[(0,qr.jsx)(Hv,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",fill:"currentColor"})})}),(0,qr.jsxs)(Wv,{children:[(0,qr.jsx)(Yv,{children:"CSO"}),(0,qr.jsx)(Kv,{children:"\ucd5c\uace0\uc601\uc5c5\ucc45\uc784\uc790"}),(0,qr.jsx)(Xv,{children:"B2B \uc601\uc5c5 4\ub144 \uacbd\ub825\uc744 \ubcf4\uc720\ud558\uace0 \uc788\uc73c\uba70, \uae30\uc5c5 \uace0\uac1d \ubc1c\uad74 \ubc0f \ud30c\ud2b8\ub108\uc2ed \uad6c\ucd95\uc744 \ub2f4\ub2f9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub370\uc774\ud130 \ud310\ub9e4 \ubc0f AI \uc5d0\uc774\uc804\ud2b8 \uc0ac\uc5c5\uc758 \uc601\uc5c5 \uc804\ub7b5\uc744 \uc218\ub9bd\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."})]})]}),(0,qr.jsxs)(Uv,{children:[(0,qr.jsx)(Hv,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",fill:"currentColor"})})}),(0,qr.jsxs)(Wv,{children:[(0,qr.jsx)(Yv,{children:"CPO"}),(0,qr.jsx)(Kv,{children:"\ucd5c\uace0\uc81c\ud488\ucc45\uc784\uc790"}),(0,qr.jsx)(Xv,{children:"UX/UI \ub514\uc790\uc778 \ubc0f \uc81c\ud488 \uac1c\ubc1c \uacbd\ud5d8\uc774 \ud48d\ubd80\ud558\uba70, \uc0ac\uc6a9\uc790 \uc911\uc2ec\uc758 \uc81c\ud488 \uc124\uacc4\ub97c \ub2f4\ub2f9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc18c\uc15c \ud50c\ub7ab\ud3fc \ubc0f \ud3ec\ud1a0\ubd80\uc2a4 \uc778\ud130\ud398\uc774\uc2a4 \uac1c\ubc1c\uc744 \uc8fc\ub3c4\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."})]})]})]}),(0,qr.jsxs)(Gv,{children:[(0,qr.jsx)(Qv,{children:"\uc790\ubb38\ub2e8"}),(0,qr.jsxs)(qv,{children:[(0,qr.jsxs)(Zv,{children:[(0,qr.jsx)(Jv,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",fill:"currentColor"})})}),(0,qr.jsxs)(ey,{children:[(0,qr.jsx)(ty,{children:"AI \uc5f0\uad6c \uc790\ubb38"}),(0,qr.jsx)(ny,{children:"\uad6d\ub0b4 \uc720\uc218 \ub300\ud559 AI \uc5f0\uad6c\uc18c \uad50\uc218\ub85c, \ucef4\ud4e8\ud130 \ube44\uc804 \ubc0f \uba38\uc2e0\ub7ec\ub2dd \ubd84\uc57c\uc758 \uc804\ubb38\uac00\uc785\ub2c8\ub2e4. \uae30\uc220 \uac1c\ubc1c \ubc29\ud5a5 \ubc0f \uc5f0\uad6c \ud611\ub825\uc744 \uc790\ubb38\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."})]})]}),(0,qr.jsxs)(Zv,{children:[(0,qr.jsx)(Jv,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",fill:"currentColor"})})}),(0,qr.jsxs)(ey,{children:[(0,qr.jsx)(ty,{children:"\ube44\uc988\ub2c8\uc2a4 \uc804\ub7b5 \uc790\ubb38"}),(0,qr.jsx)(ny,{children:"\ubca4\ucc98\uce90\ud53c\ud0c8 \ud30c\ud2b8\ub108\ub85c, \uc2a4\ud0c0\ud2b8\uc5c5 \ud22c\uc790 \ubc0f \uc131\uc7a5 \uc804\ub7b5 \uc218\ub9bd\uc5d0 \ud48d\ubd80\ud55c \uacbd\ud5d8\uc744 \ubcf4\uc720\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc0ac\uc5c5 \ud655\uc7a5 \ubc0f \ud22c\uc790 \uc720\uce58 \uc804\ub7b5\uc744 \uc790\ubb38\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."})]})]}),(0,qr.jsxs)(Zv,{children:[(0,qr.jsx)(Jv,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",fill:"currentColor"})})}),(0,qr.jsxs)(ey,{children:[(0,qr.jsx)(ty,{children:"\ubc95\ub960 \ubc0f \uaddc\uc81c \uc790\ubb38"}),(0,qr.jsx)(ny,{children:"IT \ubc0f \ub370\uc774\ud130 \ud504\ub77c\uc774\ubc84\uc2dc \uc804\ubb38 \ubcc0\ud638\uc0ac\ub85c, \uac1c\uc778\uc815\ubcf4 \ubcf4\ud638 \ubc0f \ub370\uc774\ud130 \ud65c\uc6a9\uc5d0 \uad00\ud55c \ubc95\ub960 \uc790\ubb38\uc744 \uc81c\uacf5\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."})]})]})]})]}),(0,qr.jsxs)(ry,{children:[(0,qr.jsx)(iy,{children:"\ud611\ub825 \uae30\uad00"}),(0,qr.jsxs)(oy,{children:[(0,qr.jsxs)(sy,{children:[(0,qr.jsx)(ay,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z",fill:"currentColor"})})}),(0,qr.jsxs)(ly,{children:[(0,qr.jsx)(cy,{children:"\ub300\ud559 \uc5f0\uad6c \ud611\ub825"}),(0,qr.jsx)(uy,{children:"\uad6d\ub0b4 \uc8fc\uc694 \ub300\ud559 AI \uc5f0\uad6c\uc18c\uc640 \ud611\ub825\ud558\uc5ec \ucd5c\uc2e0 \uae30\uc220 \uac1c\ubc1c \ubc0f \uc778\uc7ac \ud655\ubcf4\ub97c \uc704\ud55c \ud30c\ud2b8\ub108\uc2ed\uc744 \uad6c\ucd95\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."})]})]}),(0,qr.jsxs)(sy,{children:[(0,qr.jsx)(ay,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z",fill:"currentColor"})})}),(0,qr.jsxs)(ly,{children:[(0,qr.jsx)(cy,{children:"\uae30\uc5c5 \ud30c\ud2b8\ub108\uc2ed"}),(0,qr.jsx)(uy,{children:"\uad6d\ub0b4 \uc8fc\uc694 \uae30\uc5c5\ub4e4\uacfc AI \uae30\uc220 \ubc0f \ub370\uc774\ud130 \ud65c\uc6a9\uc744 \uc704\ud55c \uc804\ub7b5\uc801 \ud30c\ud2b8\ub108\uc2ed\uc744 \uad6c\ucd95\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."})]})]}),(0,qr.jsxs)(sy,{children:[(0,qr.jsx)(ay,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z",fill:"currentColor"})})}),(0,qr.jsxs)(ly,{children:[(0,qr.jsx)(cy,{children:"\uc2a4\ud0c0\ud2b8\uc5c5 \uc0dd\ud0dc\uacc4"}),(0,qr.jsx)(uy,{children:"\uad6d\ub0b4 \uc8fc\uc694 \uc2a4\ud0c0\ud2b8\uc5c5 \uc561\uc140\ub7ec\ub808\uc774\ud130 \ubc0f \uc778\ud050\ubca0\uc774\ud130\uc640 \ud611\ub825\ud558\uc5ec \uc131\uc7a5 \uc9c0\uc6d0 \ubc0f \ub124\ud2b8\uc6cc\ud0b9 \uae30\ud68c\ub97c \ud655\ubcf4\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."})]})]})]})]})]}),Ov=Xr.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,Bv=Xr.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${Xd};
  opacity: 0.8;
`,Nv=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${oh} {
    grid-template-columns: repeat(2, 1fr);
  }
  
  ${ah} {
    grid-template-columns: repeat(3, 1fr);
  }
`,Uv=Xr.div`
  display: flex;
  flex-direction: column;
  background: ${Jd};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`,Hv=Xr.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${Gd};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  
  svg {
    width: 60%;
    height: 60%;
  }
`,Wv=Xr.div`
  text-align: center;
`,Yv=Xr.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: ${Xd};
`,Kv=Xr.h5`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: ${Gd};
`,Xv=Xr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${Xd};
  opacity: 0.8;
`,Gv=Xr.div`
  margin-top: 2rem;
  padding: 2rem;
  background: ${Jd};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`,Qv=Xr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${Xd};
`,qv=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${oh} {
    grid-template-columns: repeat(3, 1fr);
  }
`,Zv=Xr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${Jd};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`,Jv=Xr.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${Xd};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  
  svg {
    width: 60%;
    height: 60%;
  }
`,ey=Xr.div`
  text-align: center;
`,ty=Xr.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${Xd};
`,ny=Xr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${Xd};
  opacity: 0.8;
`,ry=Xr.div`
  margin-top: 2rem;
`,iy=Xr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${Xd};
`,oy=Xr.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,sy=Xr.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  background: ${Jd};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`,ay=Xr.div`
  width: 40px;
  height: 40px;
  color: ${Gd};
  flex-shrink: 0;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,ly=Xr.div`
  flex: 1;
`,cy=Xr.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${Xd};
`,uy=Xr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${Xd};
  opacity: 0.8;
`,dy=()=>(0,qr.jsxs)(hy,{children:[(0,qr.jsx)(py,{children:"MUFI\ub294 \ub2e8\uacc4\uc801\uc778 \ud22c\uc790 \uc720\uce58 \uacc4\ud68d\uc744 \ud1b5\ud574 \uc0ac\uc5c5 \ud655\uc7a5\uacfc \uae30\uc220 \uac1c\ubc1c\uc744 \uac00\uc18d\ud654\ud558\uace0\uc790 \ud569\ub2c8\ub2e4. \ucd08\uae30 \uc2dc\ub4dc \ud22c\uc790\ub97c \uc2dc\uc791\uc73c\ub85c \uc2dc\ub9ac\uc988 A \ud22c\uc790 \uc720\uce58\uae4c\uc9c0\uc758 \ub85c\ub4dc\ub9f5\uc744 \uc218\ub9bd\ud558\uc600\uc73c\uba70, \uac01 \ub2e8\uacc4\ubcc4 \uba85\ud655\ud55c \ubaa9\ud45c\uc640 \uc790\uae08 \ud65c\uc6a9 \uacc4\ud68d\uc744 \uc81c\uc2dc\ud569\ub2c8\ub2e4."}),(0,qr.jsxs)(fy,{children:[(0,qr.jsxs)(my,{children:[(0,qr.jsxs)(gy,{children:[(0,qr.jsx)(xy,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",fill:"currentColor"})})}),(0,qr.jsx)(vy,{children:"\uc2dc\ub4dc \ud22c\uc790 (\ud604\uc7ac)"})]}),(0,qr.jsxs)(yy,{children:[(0,qr.jsx)(by,{children:"3\uc5b5\uc6d0"}),(0,qr.jsx)(wy,{children:(0,qr.jsxs)("ul",{children:[(0,qr.jsx)("li",{children:"\ucd08\uae30 \ud504\ub85c\ud1a0\ud0c0\uc785 \uac1c\ubc1c \ubc0f \ud14c\uc2a4\ud2b8"}),(0,qr.jsx)("li",{children:"\uccab 10\uac1c \ud3ec\ud1a0\ubd80\uc2a4 \uc124\uce58 \ubc0f \uc6b4\uc601"}),(0,qr.jsx)("li",{children:"\ud575\uc2ec \ud300\uc6d0 \uad6c\uc131 \ubc0f \uc6b4\uc601 \ube44\uc6a9"})]})})]})]}),(0,qr.jsxs)(my,{children:[(0,qr.jsxs)(gy,{children:[(0,qr.jsx)(xy,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z",fill:"currentColor"})})}),(0,qr.jsx)(vy,{children:"\ud504\ub9ac \uc2dc\ub9ac\uc988 A (2025\ub144 Q3)"})]}),(0,qr.jsxs)(yy,{children:[(0,qr.jsx)(by,{children:"10\uc5b5\uc6d0"}),(0,qr.jsx)(wy,{children:(0,qr.jsxs)("ul",{children:[(0,qr.jsx)("li",{children:"\ud3ec\ud1a0\ubd80\uc2a4 50\ub300 \ud655\uc7a5 \uc124\uce58"}),(0,qr.jsx)("li",{children:"\uc18c\uc15c \ud50c\ub7ab\ud3fc \ubca0\ud0c0 \ubc84\uc804 \ucd9c\uc2dc"}),(0,qr.jsx)("li",{children:"AI \uae30\uc220 \uace0\ub3c4\ud654 \ubc0f \ub370\uc774\ud130 \uc218\uc9d1 \uc778\ud504\ub77c \uad6c\ucd95"}),(0,qr.jsx)("li",{children:"\ub9c8\ucf00\ud305 \ubc0f \uc0ac\uc6a9\uc790 \ud655\ubcf4 \uc804\ub7b5 \uc2e4\ud589"})]})})]})]}),(0,qr.jsxs)(my,{children:[(0,qr.jsxs)(gy,{children:[(0,qr.jsx)(xy,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8c0 1.11-.9 2-2 2h-2v2h4v2H9v-4c0-1.11.9-2 2-2h2V9H9V7h4c1.1 0 2 .89 2 2v2z",fill:"currentColor"})})}),(0,qr.jsx)(vy,{children:"\uc2dc\ub9ac\uc988 A (2026\ub144 Q4)"})]}),(0,qr.jsxs)(yy,{children:[(0,qr.jsx)(by,{children:"50\uc5b5\uc6d0"}),(0,qr.jsx)(wy,{children:(0,qr.jsxs)("ul",{children:[(0,qr.jsx)("li",{children:"\uc804\uad6d 200\ub300 \uc774\uc0c1 \ud3ec\ud1a0\ubd80\uc2a4 \ud655\uc7a5"}),(0,qr.jsx)("li",{children:"\uc18c\uc15c \ud50c\ub7ab\ud3fc \uc815\uc2dd \ucd9c\uc2dc \ubc0f \uc0ac\uc6a9\uc790 100,000\uba85 \ud655\ubcf4"}),(0,qr.jsx)("li",{children:"B2B \ub370\uc774\ud130 \ud310\ub9e4 \ubaa8\ub378 \uad6c\ucd95"}),(0,qr.jsx)("li",{children:"\ud574\uc678 \uc2dc\uc7a5 \uc9c4\ucd9c \uc900\ube44 (\uc77c\ubcf8, \ub3d9\ub0a8\uc544\uc2dc\uc544)"})]})})]})]})]}),(0,qr.jsxs)(jy,{children:[(0,qr.jsx)(Sy,{children:"\ud22c\uc790\uae08 \ud65c\uc6a9 \uacc4\ud68d"}),(0,qr.jsx)(ky,{children:(0,qr.jsxs)("svg",{width:"100%",height:"300",viewBox:"0 0 600 300",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,qr.jsx)("path",{d:"M300 150 L300 0 A150 150 0 0 1 429.9 75 Z",fill:Gd,fillOpacity:"0.8"}),(0,qr.jsx)("text",{x:"350",y:"60",fill:Xd,fontWeight:"bold",children:"R&D 35%"}),(0,qr.jsx)("path",{d:"M300 150 L429.9 75 A150 150 0 0 1 429.9 225 Z",fill:Qd,fillOpacity:"0.8"}),(0,qr.jsx)("text",{x:"450",y:"150",fill:Xd,fontWeight:"bold",children:"\uc0ac\uc5c5 \ud655\uc7a5 30%"}),(0,qr.jsx)("path",{d:"M300 150 L429.9 225 A150 150 0 0 1 300 300 Z",fill:qd,fillOpacity:"0.8"}),(0,qr.jsx)("text",{x:"350",y:"250",fill:Xd,fontWeight:"bold",children:"\ub9c8\ucf00\ud305 20%"}),(0,qr.jsx)("path",{d:"M300 150 L300 300 A150 150 0 0 1 170.1 225 Z",fill:Zd,fillOpacity:"0.8"}),(0,qr.jsx)("text",{x:"220",y:"250",fill:Xd,fontWeight:"bold",children:"\uc6b4\uc601 \ube44\uc6a9 15%"})]})}),(0,qr.jsxs)(Cy,{children:[(0,qr.jsxs)(Ey,{children:[(0,qr.jsx)(zy,{style:{background:Gd}}),(0,qr.jsx)($y,{children:"\uc5f0\uad6c \uac1c\ubc1c (35%)"}),(0,qr.jsx)(Py,{children:"AI \uc54c\uace0\ub9ac\uc998 \uac1c\ubc1c, \uc774\ubbf8\uc9c0 \ucc98\ub9ac \uae30\uc220 \uace0\ub3c4\ud654, \uc18c\uc15c \ud50c\ub7ab\ud3fc \uac1c\ubc1c, \ub370\uc774\ud130 \uc218\uc9d1 \ubc0f \ubd84\uc11d \uc778\ud504\ub77c \uad6c\ucd95"})]}),(0,qr.jsxs)(Ey,{children:[(0,qr.jsx)(zy,{style:{background:Qd}}),(0,qr.jsx)($y,{children:"\uc0ac\uc5c5 \ud655\uc7a5 (30%)"}),(0,qr.jsx)(Py,{children:"\ud3ec\ud1a0\ubd80\uc2a4 \ud558\ub4dc\uc6e8\uc5b4 \uc81c\uc791 \ubc0f \uc124\uce58, \uc9c0\uc5ed \ud655\uc7a5, \ud30c\ud2b8\ub108\uc2ed \uad6c\ucd95, \ud574\uc678 \uc2dc\uc7a5 \uc9c4\ucd9c \uc900\ube44"})]}),(0,qr.jsxs)(Ey,{children:[(0,qr.jsx)(zy,{style:{background:qd}}),(0,qr.jsx)($y,{children:"\ub9c8\ucf00\ud305 (20%)"}),(0,qr.jsx)(Py,{children:"\ube0c\ub79c\ub4dc \uc778\uc9c0\ub3c4 \uad6c\ucd95, \uc0ac\uc6a9\uc790 \ud655\ubcf4 \ucea0\ud398\uc778, \ub300\ud559 \ub0b4 \ub9c8\ucf00\ud305 \ud65c\ub3d9, \uc628\ub77c\uc778 \uad11\uace0"})]}),(0,qr.jsxs)(Ey,{children:[(0,qr.jsx)(zy,{style:{background:Zd}}),(0,qr.jsx)($y,{children:"\uc6b4\uc601 \ube44\uc6a9 (15%)"}),(0,qr.jsx)(Py,{children:"\uc778\ub825 \ucc44\uc6a9 \ubc0f \uc720\uc9c0, \uc0ac\ubb34\uc2e4 \uc6b4\uc601, \ubc95\ub960 \ubc0f \ud589\uc815 \ube44\uc6a9, \uae30\ud0c0 \uc6b4\uc601 \uacbd\ube44"})]})]})]}),(0,qr.jsxs)(Ty,{children:[(0,qr.jsx)(My,{children:"\ud22c\uc790\uc790 \uac00\uce58 \uc81c\uc548"}),(0,qr.jsxs)(Ay,{children:[(0,qr.jsxs)(Ry,{children:[(0,qr.jsx)(Iy,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z",fill:"currentColor"})})}),(0,qr.jsx)(Ly,{children:"\ub192\uc740 \uc131\uc7a5 \uc7a0\uc7ac\ub825"}),(0,qr.jsx)(_y,{children:"\ub300\ud559\uc0dd \ud0c0\uac9f \uc2dc\uc7a5\uc5d0\uc11c \uc2dc\uc791\ud558\uc5ec \uc804\uad6d \ubc0f \uc544\uc2dc\uc544 \uc2dc\uc7a5\uc73c\ub85c \ud655\uc7a5 \uac00\ub2a5\ud55c \ube44\uc988\ub2c8\uc2a4 \ubaa8\ub378\ub85c, 2027\ub144\uae4c\uc9c0 \uc5f0 \ub9e4\ucd9c 100\uc5b5\uc6d0 \uc774\uc0c1 \ubaa9\ud45c"})]}),(0,qr.jsxs)(Ry,{children:[(0,qr.jsx)(Iy,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 2c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.48-.81 2.75-2 3.45l1 1.74c1.79-1.04 3-2.97 3-5.19zM12 3C6.48 3 2 7.48 2 13c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 18.53 4 15.96 4 13c0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.96-1.61 5.53-4 6.92l1 1.73c2.99-1.73 5-4.95 5-8.65 0-5.52-4.48-10-10-10z",fill:"currentColor"})})}),(0,qr.jsx)(Ly,{children:"\ub3c5\uc790\uc801 \ub370\uc774\ud130 \uc790\uc0b0"}),(0,qr.jsx)(_y,{children:"\uc2e4\uc81c \uc0ac\uc6a9\uc790 \ub370\uc774\ud130\ub97c \uae30\ubc18\uc73c\ub85c \ud55c AI \ubaa8\ub378 \uac1c\ubc1c \ubc0f B2B \ub370\uc774\ud130 \ud310\ub9e4\ub97c \ud1b5\ud55c \ucd94\uac00 \uc218\uc775 \ucc3d\ucd9c \uac00\ub2a5\uc131"})]}),(0,qr.jsxs)(Ry,{children:[(0,qr.jsx)(Iy,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 2h1.5v3l2-3h1.7l-2 3 2 3h-1.7l-2-3v3H12V5zM7 7.25h2.5V6.5H7V5h4v3.75H8.5v.75H11V11H7V7.25zM19 13l-6 6-4-4-4 4v-2.5l4-4 4 4 6-6V13z",fill:"currentColor"})})}),(0,qr.jsx)(Ly,{children:"\ub2e4\uc591\ud55c \uc218\uc775 \ubaa8\ub378"}),(0,qr.jsx)(_y,{children:"\ud3ec\ud1a0\ubd80\uc2a4 \ub80c\ud0c8, \uc18c\uc15c \ud50c\ub7ab\ud3fc \ud504\ub9ac\ubbf8\uc5c4 \uad6c\ub3c5, \uad11\uace0 \uc218\uc775, B2B \ub370\uc774\ud130 \ud310\ub9e4 \ub4f1 \ub2e4\uc591\ud55c \uc218\uc775\uc6d0\uc744 \ud1b5\ud55c \uc548\uc815\uc801 \uc131\uc7a5"})]})]})]}),(0,qr.jsxs)(Dy,{children:[(0,qr.jsx)(Vy,{children:"\ud22c\uc790\uae08 \ud68c\uc218 \uc804\ub7b5"}),(0,qr.jsxs)(Fy,{children:[(0,qr.jsxs)(Oy,{children:[(0,qr.jsx)(By,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 5h-1.5v7h-1.5V8H12V6.5h5V8zm-5 5h-1.5V9H9v4H7.5V9H6V7.5h6V13z",fill:"currentColor"})})}),(0,qr.jsx)(Ny,{children:"M&A (2028-2029)"}),(0,qr.jsx)(Uy,{children:"\ub300\ud615 IT \uae30\uc5c5 \ub610\ub294 \uc5d4\ud130\ud14c\uc778\uba3c\ud2b8 \uae30\uc5c5\uc5d0 \uc758\ud55c \uc778\uc218 \ud569\ubcd1\uc744 \ud1b5\ud55c \ud22c\uc790\uae08 \ud68c\uc218. \uc608\uc0c1 \uae30\uc5c5 \uac00\uce58 500\uc5b5\uc6d0 \uc774\uc0c1."})]}),(0,qr.jsxs)(Oy,{children:[(0,qr.jsx)(By,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-2.5 11.5h-7v-1h7v1zm0-2h-7v-1h7v1zm0-2h-7v-1h7v1zm0-2h-7v-1h7v1z",fill:"currentColor"})})}),(0,qr.jsx)(Ny,{children:"IPO (2030 \uc774\ud6c4)"}),(0,qr.jsx)(Uy,{children:"\uad6d\ub0b4 \ucf54\uc2a4\ub2e5 \uc2dc\uc7a5 \uc0c1\uc7a5\uc744 \ud1b5\ud55c \ud22c\uc790\uae08 \ud68c\uc218. \uc608\uc0c1 \uae30\uc5c5 \uac00\uce58 1,000\uc5b5\uc6d0 \uc774\uc0c1."})]})]})]})]}),hy=Xr.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`,py=Xr.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${Xd};
  opacity: 0.8;
`,fy=Xr.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  ${oh} {
    flex-direction: row;
  }
`,my=Xr.div`
  flex: 1;
  background: ${Jd};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`,gy=Xr.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,xy=Xr.div`
  width: 40px;
  height: 40px;
  color: ${Gd};
  
  svg {
    width: 100%;
    height: 100%;
  }
`,vy=Xr.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${Xd};
`,yy=Xr.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,by=Xr.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${Gd};
`,wy=Xr.div`
  font-size: 1rem;
  line-height: 1.6;
  color: ${Xd};
  opacity: 0.8;
  
  ul {
    padding-left: 1.5rem;
    margin: 0;
    
    li {
      margin-bottom: 0.5rem;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`,jy=Xr.div`
  margin-top: 1rem;
`,Sy=Xr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${Xd};
`,ky=Xr.div`
  margin-bottom: 2rem;
  
  svg {
    max-height: 300px;
    margin: 0 auto;
    display: block;
  }
`,Cy=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${oh} {
    grid-template-columns: repeat(2, 1fr);
  }
`,Ey=Xr.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: ${Jd};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
`,zy=Xr.div`
  width: 40px;
  height: 8px;
  border-radius: 4px;
`,$y=Xr.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${Xd};
`,Py=Xr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${Xd};
  opacity: 0.8;
`,Ty=Xr.div`
  margin-top: 1rem;
`,My=Xr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${Xd};
`,Ay=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${oh} {
    grid-template-columns: repeat(3, 1fr);
  }
`,Ry=Xr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: ${Jd};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`,Iy=Xr.div`
  width: 60px;
  height: 60px;
  color: ${Gd};
  margin-bottom: 1rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,Ly=Xr.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${Xd};
`,_y=Xr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${Xd};
  opacity: 0.8;
`,Dy=Xr.div`
  margin-top: 1rem;
`,Vy=Xr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${Xd};
`,Fy=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${oh} {
    grid-template-columns: repeat(2, 1fr);
  }
`,Oy=Xr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: ${Jd};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`,By=Xr.div`
  width: 60px;
  height: 60px;
  color: ${Gd};
  margin-bottom: 1rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,Ny=Xr.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${Xd};
`,Uy=Xr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${Xd};
  opacity: 0.8;
`,Hy=()=>(0,qr.jsxs)(Wy,{children:[(0,qr.jsx)(Yy,{children:"MUFI\uc5d0 \uad00\uc2ec\uc744 \uac00\uc838\uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4. \ud22c\uc790 \ubc0f \ud30c\ud2b8\ub108\uc2ed\uc5d0 \uad00\ud55c \ubb38\uc758\uc0ac\ud56d\uc774 \uc788\uc73c\uc2dc\uba74 \uc544\ub798 \uc5f0\ub77d\ucc98\ub85c \uc5f0\ub77d\ud574 \uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4. \ube60\ub978 \uc2dc\uc77c \ub0b4\uc5d0 \ub2f5\ubcc0 \ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4."}),(0,qr.jsxs)(Ky,{children:[(0,qr.jsxs)(Xy,{children:[(0,qr.jsx)(Gy,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",fill:"currentColor"})})}),(0,qr.jsxs)(Qy,{children:[(0,qr.jsx)(qy,{children:"\uc774\uba54\uc77c"}),(0,qr.jsx)(Zy,{children:"contact@mufi.co.kr"}),(0,qr.jsx)(Jy,{children:"\ud22c\uc790 \ubc0f \ud30c\ud2b8\ub108\uc2ed \ubb38\uc758\ub294 \uc774\uba54\uc77c\ub85c \uc5f0\ub77d\ud574 \uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."})]})]}),(0,qr.jsxs)(Xy,{children:[(0,qr.jsx)(Gy,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",fill:"currentColor"})})}),(0,qr.jsxs)(Qy,{children:[(0,qr.jsx)(qy,{children:"\uc804\ud654"}),(0,qr.jsx)(Zy,{children:"02-123-4567"}),(0,qr.jsx)(Jy,{children:"\ud3c9\uc77c \uc624\uc804 9\uc2dc\ubd80\ud130 \uc624\ud6c4 6\uc2dc\uae4c\uc9c0 \ud1b5\ud654 \uac00\ub2a5\ud569\ub2c8\ub2e4."})]})]}),(0,qr.jsxs)(Xy,{children:[(0,qr.jsx)(Gy,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",fill:"currentColor"})})}),(0,qr.jsxs)(Qy,{children:[(0,qr.jsx)(qy,{children:"\uc8fc\uc18c"}),(0,qr.jsx)(Zy,{children:"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uac15\ub0a8\uad6c \ud14c\ud5e4\ub780\ub85c 123, 4\uce35"}),(0,qr.jsx)(Jy,{children:"\ubc29\ubb38 \uc804 \uc0ac\uc804 \uc608\uc57d\uc744 \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4."})]})]})]}),(0,qr.jsxs)(eb,{children:[(0,qr.jsx)(tb,{children:"\uc18c\uc15c \ubbf8\ub514\uc5b4"}),(0,qr.jsxs)(nb,{children:[(0,qr.jsxs)(rb,{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:[(0,qr.jsx)(ib,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H6.5v-7H9v7zM7.7 8.7c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.6 1.4-1.4 1.4zM18 17h-2.5v-4c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v4H10v-7h2.5v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3 1.3 3 3.2V17z",fill:"currentColor"})})}),(0,qr.jsx)(ob,{children:"LinkedIn"})]}),(0,qr.jsxs)(rb,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:[(0,qr.jsx)(ib,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z",fill:"currentColor"})})}),(0,qr.jsx)(ob,{children:"Twitter"})]}),(0,qr.jsxs)(rb,{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:[(0,qr.jsx)(ib,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",fill:"currentColor"})})}),(0,qr.jsx)(ob,{children:"Instagram"})]})]})]}),(0,qr.jsxs)(sb,{children:[(0,qr.jsx)(ab,{children:"\ubb38\uc758\ud558\uae30"}),(0,qr.jsxs)(lb,{children:[(0,qr.jsxs)(cb,{children:[(0,qr.jsx)(ub,{htmlFor:"name",children:"\uc774\ub984"}),(0,qr.jsx)(db,{type:"text",id:"name",placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694"})]}),(0,qr.jsxs)(cb,{children:[(0,qr.jsx)(ub,{htmlFor:"email",children:"\uc774\uba54\uc77c"}),(0,qr.jsx)(db,{type:"email",id:"email",placeholder:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694"})]}),(0,qr.jsxs)(cb,{children:[(0,qr.jsx)(ub,{htmlFor:"subject",children:"\ubb38\uc758 \uc720\ud615"}),(0,qr.jsxs)(hb,{id:"subject",children:[(0,qr.jsx)("option",{value:"",children:"\ubb38\uc758 \uc720\ud615\uc744 \uc120\ud0dd\ud558\uc138\uc694"}),(0,qr.jsx)("option",{value:"investment",children:"\ud22c\uc790 \ubb38\uc758"}),(0,qr.jsx)("option",{value:"partnership",children:"\ud30c\ud2b8\ub108\uc2ed \ubb38\uc758"}),(0,qr.jsx)("option",{value:"business",children:"\uc0ac\uc5c5 \uc81c\uc548"}),(0,qr.jsx)("option",{value:"other",children:"\uae30\ud0c0 \ubb38\uc758"})]})]}),(0,qr.jsxs)(cb,{children:[(0,qr.jsx)(ub,{htmlFor:"message",children:"\uba54\uc2dc\uc9c0"}),(0,qr.jsx)(pb,{id:"message",rows:5,placeholder:"\ubb38\uc758 \ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694"})]}),(0,qr.jsx)(fb,{type:"button",children:"\ubb38\uc758\ud558\uae30"})]})]})]}),Wy=Xr.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`,Yy=Xr.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${Xd};
  opacity: 0.8;
`,Ky=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${oh} {
    grid-template-columns: repeat(3, 1fr);
  }
`,Xy=Xr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: ${Jd};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`,Gy=Xr.div`
  width: 60px;
  height: 60px;
  color: ${Gd};
  margin-bottom: 1rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,Qy=Xr.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,qy=Xr.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${Xd};
`,Zy=Xr.p`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${Gd};
`,Jy=Xr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${Xd};
  opacity: 0.8;
`,eb=Xr.div`
  margin-top: 1rem;
`,tb=Xr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${Xd};
`,nb=Xr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  
  ${oh} {
    justify-content: flex-start;
  }
`,rb=Xr.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`,ib=Xr.div`
  width: 48px;
  height: 48px;
  color: ${Gd};
  margin-bottom: 0.5rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,ob=Xr.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${Xd};
`,sb=Xr.div`
  margin-top: 2rem;
  background: ${Jd};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`,ab=Xr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${Xd};
`,lb=Xr.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,cb=Xr.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,ub=Xr.label`
  font-size: 1rem;
  font-weight: 500;
  color: ${Xd};
`,db=Xr.input`
  padding: 0.75rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${Gd};
    box-shadow: 0 0 0 2px rgba(110, 124, 243, 0.2);
  }
`,hb=Xr.select`
  padding: 0.75rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${Gd};
    box-shadow: 0 0 0 2px rgba(110, 124, 243, 0.2);
  }
`,pb=Xr.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${Gd};
    box-shadow: 0 0 0 2px rgba(110, 124, 243, 0.2);
  }
`,fb=Xr.button`
  padding: 0.75rem 1.5rem;
  background: ${Gd};
  color: ${Jd};
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  
  &:hover {
    background: ${Qd};
    transform: translateY(-2px);
  }
`,mb=()=>(0,qr.jsxs)(gb,{children:[(0,qr.jsxs)(xb,{children:[(0,qr.jsx)(vb,{}),(0,qr.jsxs)(yb,{children:["AI \uc5d0\uc774\uc804\ud2b8 ",(0,qr.jsx)(bb,{children:"\ud65c\uc6a9 \uc0ac\ub840"})]}),(0,qr.jsx)(vb,{})]}),(0,qr.jsx)(wb,{children:(0,qr.jsxs)(jb,{children:["MUFI\uc758 AI \uc5d0\uc774\uc804\ud2b8 \uae30\uc220\uc740 \ud3ec\ud1a0\ubd80\uc2a4 \uc6b4\uc601\uc758 \uc5ec\ub7ec \uce21\uba74\uc744 ",(0,qr.jsx)(bb,{children:"\uc790\ub3d9\ud654\ud558\uace0 \ucd5c\uc801\ud654"}),"\ud558\uc5ec \uc6b4\uc601 \ube44\uc6a9 \uc808\uac10\uacfc \uc0ac\uc6a9\uc790 \uacbd\ud5d8 \ud5a5\uc0c1\uc744 \ub3d9\uc2dc\uc5d0 \uc2e4\ud604\ud588\uc2b5\ub2c8\ub2e4. \uc544\ub798\ub294 \uc2e4\uc81c \uc801\uc6a9 \uc0ac\ub840\uc640 \uadf8 \uacb0\uacfc\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."]})}),(0,qr.jsxs)(Sb,{children:[(0,qr.jsxs)(kb,{href:"#relationship-graph",children:[(0,qr.jsx)(Cb,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7h-4c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9h-4c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z",fill:"currentColor"})})}),"AI \uc5d0\uc774\uc804\ud2b8, \ud3ec\ud1a0\ubd80\uc2a4, \uc18c\uc15c \ud50c\ub7ab\ud3fc \uac04\uc758 \uc5f0\uad00\uc131 \ubcf4\uae30"]}),(0,qr.jsxs)(kb,{href:"#recursive-system",style:{marginLeft:"1rem"},children:[(0,qr.jsx)(Cb,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z",fill:"currentColor"})})}),"\uc790\ub3d9\ud654 \uc2dc\uc2a4\ud15c\uc758 \uc7ac\uadc0\uc801 \uac1c\uc120 \ud504\ub85c\uc138\uc2a4 \uc54c\uc544\ubcf4\uae30"]})]}),(0,qr.jsxs)(Eb,{children:[(0,qr.jsxs)(zb,{children:[(0,qr.jsx)($b,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2 0v8.99h7c-.53-4.12-3.28-7.79-7-8.99zm0 11.01V22c3.72-1.2 6.47-4.87 7-8.99h-7z",fill:"currentColor"})})}),(0,qr.jsx)(Pb,{children:"52%"}),(0,qr.jsx)(Tb,{children:"\uc6b4\uc601 \ube44\uc6a9 \uc808\uac10"})]}),(0,qr.jsxs)(zb,{children:[(0,qr.jsx)($b,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M19.8 10.7L5.2 5.6c-.4-.1-.8.1-.9.5-.1.4.1.8.5.9l14.6 5.1c.4.1.8-.1.9-.5.1-.4-.1-.8-.5-.9zm-1.7 4.9c.4-.1.6-.5.5-.9-.1-.4-.5-.6-.9-.5L4.1 18.3c-.4.1-.6.5-.5.9.1.3.4.5.7.5.1 0 .1 0 .2 0l13.6-4.1z",fill:"currentColor"})})}),(0,qr.jsx)(Pb,{children:"97%"}),(0,qr.jsx)(Tb,{children:"\ud3ec\ud1a0\ubd80\uc2a4 \uac00\ub3d9\ub960"})]}),(0,qr.jsxs)(zb,{children:[(0,qr.jsx)($b,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z",fill:"currentColor"})})}),(0,qr.jsx)(Pb,{children:"4.2\ubd84"}),(0,qr.jsx)(Tb,{children:"\ubb38\uc81c \ub300\uc751 \uc2dc\uac04"})]}),(0,qr.jsxs)(zb,{children:[(0,qr.jsx)($b,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 2h1.5v3l2-3h1.7l-2 3 2 3h-1.7l-2-3v3H12V5zM7 7.25h2.5V6.5H7V5h4v3.75H8.5v.75H11V11H7V7.25zM19 13l-6 6-4-4-4 4v-2.5l4-4 4 4 6-6V13z",fill:"currentColor"})})}),(0,qr.jsx)(Pb,{children:"94%"}),(0,qr.jsx)(Tb,{children:"\uace0\uac1d \ub9cc\uc871\ub3c4"})]})]}),(0,qr.jsxs)(Mb,{children:[(0,qr.jsx)(Ab,{children:"\uae30\uc874 \uc6b4\uc601 \ubc29\uc2dd\uc758 \ubb38\uc81c\uc810"}),(0,qr.jsx)(Rb,{children:"MUFI\uac00 AI \uc5d0\uc774\uc804\ud2b8\ub97c \uac1c\ubc1c\ud558\uae30 \uc804, \ud3ec\ud1a0\ubd80\uc2a4 \ubb3c\ub958/\uc720\ud1b5 \ubc0f \uc6b4\uc601\uc740 \ub2e4\uc74c\uacfc \uac19\uc740 \ubb38\uc81c\uc810\uc744 \uac00\uc9c0\uace0 \uc788\uc5c8\uc2b5\ub2c8\ub2e4:"}),(0,qr.jsxs)(Ib,{children:[(0,qr.jsxs)(Lb,{children:[(0,qr.jsx)(_b,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8 4.42 0 8 3.58 8 8 0 4.42-3.58 8-8 8zm4-9.5h-3v-3c0-.28-.22-.5-.5-.5s-.5.22-.5.5v3h-3c-.28 0-.5.22-.5.5s.22.5.5.5h3v3c0 .28.22.5.5.5s.5-.22.5-.5v-3h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5z",fill:"currentColor"})})}),(0,qr.jsx)(Db,{children:"\ube44\ud6a8\uc728\uc801\uc778 \ubb3c\ub958 \uc2dc\uc2a4\ud15c\uc73c\ub85c \uc778\ud55c \ub192\uc740 \uc6b4\uc1a1 \ube44\uc6a9 (\ud3c9\uade0 \uc6d4 68\ub9cc\uc6d0/\ub300)"})]}),(0,qr.jsxs)(Lb,{children:[(0,qr.jsx)(_b,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8 4.42 0 8 3.58 8 8 0 4.42-3.58 8-8 8zm4-9.5h-3v-3c0-.28-.22-.5-.5-.5s-.5.22-.5.5v3h-3c-.28 0-.5.22-.5.5s.22.5.5.5h3v3c0 .28.22.5.5.5s.5-.22.5-.5v-3h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5z",fill:"currentColor"})})}),(0,qr.jsx)(Db,{children:"\uc5c5\ubb34 \uc2dc\uac04 \ubc30\uc815 \uccb4\uacc4 \ubd80\uc7ac\ub85c \uc778\ud55c \ube44\ud6a8\uc728\uc801 \uc778\ub825 \uc6b4\uc6a9 (\uc5c5\ubb34 \ud6a8\uc728\uc131 54%)"})]}),(0,qr.jsxs)(Lb,{children:[(0,qr.jsx)(_b,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8 4.42 0 8 3.58 8 8 0 4.42-3.58 8-8 8zm4-9.5h-3v-3c0-.28-.22-.5-.5-.5s-.5.22-.5.5v3h-3c-.28 0-.5.22-.5.5s.22.5.5.5h3v3c0 .28.22.5.5.5s.5-.22.5-.5v-3h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5z",fill:"currentColor"})})}),(0,qr.jsx)(Db,{children:"\uc720\ud1b5\ub9dd \ucd5c\uc801\ud654 \ubd80\uc7ac\ub85c \uc778\ud55c \ud3ec\ud1a0\ubd80\uc2a4 \ubc30\uce58 \ube44\ud6a8\uc728\uc131 (\uc124\uce58 \uc801\ud569\uc131 62%)"})]}),(0,qr.jsxs)(Lb,{children:[(0,qr.jsx)(_b,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8 4.42 0 8 3.58 8 8 0 4.42-3.58 8-8 8zm4-9.5h-3v-3c0-.28-.22-.5-.5-.5s-.5.22-.5.5v3h-3c-.28 0-.5.22-.5.5s.22.5.5.5h3v3c0 .28.22.5.5.5s.5-.22.5-.5v-3h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5z",fill:"currentColor"})})}),(0,qr.jsx)(Db,{children:"\ub370\uc774\ud130 \uc218\uc9d1 \ubc0f \ubd84\uc11d \uccb4\uacc4 \ubd80\uc7ac\ub85c \uc778\ud55c \uc6b4\uc601 \ucd5c\uc801\ud654 \uc5b4\ub824\uc6c0"})]})]})]}),(0,qr.jsxs)(Vb,{children:[(0,qr.jsx)(Fb,{children:"MUFI AI \uc5d0\uc774\uc804\ud2b8 \uc194\ub8e8\uc158"}),(0,qr.jsx)(Ob,{children:"MUFI\uc758 AI \uc5d0\uc774\uc804\ud2b8 \uc194\ub8e8\uc158\uc740 \ud3ec\ud1a0\ubd80\uc2a4 \ubb3c\ub958/\uc720\ud1b5 \ucd5c\uc801\ud654\uc640 \uc6b4\uc601 \ud6a8\uc728\uc131\uc744 \uadf9\ub300\ud654\ud558\uae30 \uc704\ud574 \ub2e4\uc74c\uacfc \uac19\uc740 \ud601\uc2e0\uc801\uc778 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4:"}),(0,qr.jsxs)(Bb,{children:[(0,qr.jsxs)(Nb,{children:[(0,qr.jsx)(Ub,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",fill:"currentColor"})})}),(0,qr.jsxs)(Hb,{children:[(0,qr.jsx)("strong",{children:"AI \uae30\ubc18 \ubb3c\ub958 \ucd5c\uc801\ud654 \uc2dc\uc2a4\ud15c:"})," \uc218\uc694 \uc608\uce21\uacfc \uacbd\ub85c \ucd5c\uc801\ud654\ub97c \ud1b5\ud55c \uc6b4\uc1a1 \ube44\uc6a9 62% \uc808\uac10 (\uc6d4 26\ub9cc\uc6d0/\ub300)"]})]}),(0,qr.jsxs)(Nb,{children:[(0,qr.jsx)(Ub,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",fill:"currentColor"})})}),(0,qr.jsxs)(Hb,{children:[(0,qr.jsx)("strong",{children:"\uc9c0\ub2a5\ud615 \uc5c5\ubb34 \uc2dc\uac04 \ubc30\uc815 \uccb4\uacc4:"})," \uc218\uc694 \ud328\ud134 \uae30\ubc18 \ucd5c\uc801 \uc5c5\ubb34 \uc2dc\uac04 \uc790\ub3d9 \ubc30\uc815\uc73c\ub85c \ud6a8\uc728\uc131 93%\ub85c \ud5a5\uc0c1"]})]}),(0,qr.jsxs)(Nb,{children:[(0,qr.jsx)(Ub,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",fill:"currentColor"})})}),(0,qr.jsxs)(Hb,{children:[(0,qr.jsx)("strong",{children:"\uc720\ud1b5\ub9dd \ucd5c\uc801\ud654 \uc5d4\uc9c4:"})," \uc704\uce58 \uae30\ubc18 \ub370\uc774\ud130 \ubd84\uc11d\uc744 \ud1b5\ud55c \ucd5c\uc801 \ud3ec\ud1a0\ubd80\uc2a4 \ubc30\uce58\ub85c \uc124\uce58 \uc801\ud569\uc131 95%\ub85c \ud5a5\uc0c1"]})]}),(0,qr.jsxs)(Nb,{children:[(0,qr.jsx)(Ub,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",fill:"currentColor"})})}),(0,qr.jsxs)(Hb,{children:[(0,qr.jsx)("strong",{children:"\uc790\ub3d9\ud654\ub41c \ub370\uc774\ud130 \uc218\uc9d1 \ud30c\uc774\ud504\ub77c\uc778:"})," \uc2e4\uc2dc\uac04 \uc6b4\uc601 \ub370\uc774\ud130 \ucd95\uc801 \ubc0f \ubd84\uc11d\uc73c\ub85c \uc9c0\uc18d\uc801\uc778 \uc2dc\uc2a4\ud15c \ucd5c\uc801\ud654 \uc2e4\ud604"]})]})]})]}),(0,qr.jsxs)(Wb,{children:[(0,qr.jsxs)(Yb,{children:[(0,qr.jsx)("span",{children:"\uc2e4\uc81c \uc801\uc6a9 \uc0ac\ub840:"})," \uc11c\uc6b8 \uac15\ub0a8 \uce74\ud398 10\uac1c\uc810 AI \uc5d0\uc774\uc804\ud2b8 \ub3c4\uc785"]}),(0,qr.jsxs)(Kb,{children:[(0,qr.jsxs)(Xb,{children:[(0,qr.jsx)(Qb,{children:"Before"}),(0,qr.jsxs)(qb,{children:[(0,qr.jsx)(Zb,{children:"\ubb3c\ub958 \uc6b4\uc1a1 \ube44\uc6a9: \uc6d4 68\ub9cc\uc6d0/\ub300"}),(0,qr.jsx)(Zb,{children:"\uc720\ud1b5\ub9dd \ud6a8\uc728\uc131: 62% (\uc704\uce58 \ucd5c\uc801\ud654)"}),(0,qr.jsx)(Zb,{children:"\uc5c5\ubb34 \uc2dc\uac04 \ud6a8\uc728\uc131: 54%"}),(0,qr.jsx)(Zb,{children:"\ub370\uc774\ud130 \uc218\uc9d1 \ubc94\uc704: \uae30\ubcf8 \ud310\ub9e4 \ub370\uc774\ud130\ub9cc"})]})]}),(0,qr.jsx)(Gb,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",fill:"currentColor"})})}),(0,qr.jsxs)(Xb,{children:[(0,qr.jsx)(Qb,{children:"After (3\uac1c\uc6d4)"}),(0,qr.jsxs)(qb,{children:[(0,qr.jsx)(Zb,{children:"\ubb3c\ub958 \uc6b4\uc1a1 \ube44\uc6a9: \uc6d4 26\ub9cc\uc6d0/\ub300 (\u219362%)"}),(0,qr.jsx)(Zb,{children:"\uc720\ud1b5\ub9dd \ud6a8\uc728\uc131: 95% (\u219133%)"}),(0,qr.jsx)(Zb,{children:"\uc5c5\ubb34 \uc2dc\uac04 \ud6a8\uc728\uc131: 93% (\u219139%)"}),(0,qr.jsx)(Zb,{children:"\ub370\uc774\ud130 \uc218\uc9d1 \ubc94\uc704: 17\uac1c \uc6b4\uc601 \uc9c0\ud45c \uc790\ub3d9 \uc218\uc9d1"})]})]})]}),(0,qr.jsxs)(Jb,{children:[(0,qr.jsx)(ew,{children:"\ud22c\uc790 \uc218\uc775\ub960 (ROI) \ubd84\uc11d"}),(0,qr.jsxs)(tw,{children:[(0,qr.jsxs)(nw,{children:[(0,qr.jsx)(rw,{children:"AI \uc5d0\uc774\uc804\ud2b8 \ub3c4\uc785 \ube44\uc6a9"}),(0,qr.jsx)(iw,{children:"\ub300\ub2f9 480\ub9cc\uc6d0 (\uc77c\ud68c\uc131)"})]}),(0,qr.jsxs)(nw,{children:[(0,qr.jsx)(rw,{children:"\ubb3c\ub958 \ube44\uc6a9 \uc808\uac10\uc561"}),(0,qr.jsx)(iw,{children:"\ub300\ub2f9 42\ub9cc\uc6d0/\uc6d4"})]}),(0,qr.jsxs)(nw,{children:[(0,qr.jsx)(rw,{children:"\uc5c5\ubb34 \ud6a8\uc728\uc131 \ud5a5\uc0c1 \uac00\uce58"}),(0,qr.jsx)(iw,{children:"\ub300\ub2f9 31\ub9cc\uc6d0/\uc6d4"})]}),(0,qr.jsxs)(nw,{children:[(0,qr.jsx)(rw,{children:"\ucd94\uac00 \uc218\uc9d1 \ub370\uc774\ud130 \uac00\uce58"}),(0,qr.jsx)(iw,{children:"\ub300\ub2f9 \uc6d4 38\ub9cc\uc6d0"})]}),(0,qr.jsxs)(nw,{children:[(0,qr.jsx)(rw,{children:"\ud22c\uc790 \ud68c\uc218 \uae30\uac04"}),(0,qr.jsx)(iw,{children:"4.3\uac1c\uc6d4"})]}),(0,qr.jsxs)(nw,{children:[(0,qr.jsx)(rw,{children:"\uc5f0\uac04 \uc21c\uc774\uc775 \uc99d\uac00"}),(0,qr.jsx)(iw,{children:"\ub300\ub2f9 1,332\ub9cc\uc6d0"})]})]})]}),(0,qr.jsxs)(Hw,{children:[(0,qr.jsx)(Ww,{children:"\uc218\uc9d1 \ub370\uc774\ud130\uc758 \ucd94\uac00 \uac00\uce58"}),(0,qr.jsx)(Yw,{children:"AI \uc5d0\uc774\uc804\ud2b8\ub97c \ud1b5\ud574 MUFI\ub294 \ud3ec\ud1a0\ubd80\uc2a4 \uc6b4\uc601\uc758 \ub2e4\uc591\ud55c \uce21\uba74\uc5d0\uc11c \uadc0\uc911\ud55c \ub370\uc774\ud130\ub97c \uc790\ub3d9\uc73c\ub85c \uc218\uc9d1\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc774 \ub370\uc774\ud130\ub294 \uc6b4\uc601 \ucd5c\uc801\ud654\ubfd0\ub9cc \uc544\ub2c8\ub77c \uc0c8\ub85c\uc6b4 \ube44\uc988\ub2c8\uc2a4 \uc778\uc0ac\uc774\ud2b8\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."}),(0,qr.jsxs)(Kw,{children:[(0,qr.jsxs)(Xw,{children:[(0,qr.jsx)(Gw,{children:(0,qr.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,qr.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z",fill:"currentColor"}),(0,qr.jsx)("path",{d:"M7 12h2v5H7v-5zm8-5h2v10h-2V7zm-4 7h2v3h-2v-3zm0-4h2v2h-2v-2z",fill:"currentColor"})]})}),(0,qr.jsx)(Qw,{children:"\uace0\uac1d \ud589\ub3d9 \ud328\ud134"}),(0,qr.jsx)(qw,{children:"\uc77c 15,400\uac1c \ub370\uc774\ud130 \ud3ec\uc778\ud2b8"}),(0,qr.jsx)(Zw,{children:"\uc704\uce58\ubcc4, \uc2dc\uac04\ubcc4 \uc0ac\uc6a9\uc790 \ud65c\ub3d9 \ud328\ud134\uc744 \ubd84\uc11d\ud558\uc5ec \ub9c8\ucf00\ud305 \uc804\ub7b5 \ubc0f \uc81c\ud488 \uac1c\ubc1c\uc5d0 \ud65c\uc6a9"})]}),(0,qr.jsxs)(Xw,{children:[(0,qr.jsx)(Gw,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z",fill:"currentColor"})})}),(0,qr.jsx)(Qw,{children:"\ubb3c\ub958 \ud6a8\uc728\uc131 \uc9c0\ud45c"}),(0,qr.jsx)(qw,{children:"97.3% \uc608\uce21 \uc815\ud655\ub3c4"}),(0,qr.jsx)(Zw,{children:"\ucd5c\uc801 \ubc30\uc1a1 \uacbd\ub85c, \uc218\uc694 \uc608\uce21, \uc7a5\ube44 \ud65c\uc6a9\ub3c4 \ub370\uc774\ud130\ub97c \ud1b5\ud55c \uc9c0\uc18d\uc801 \ubb3c\ub958 \uc2dc\uc2a4\ud15c \uac1c\uc120"})]}),(0,qr.jsxs)(Xw,{children:[(0,qr.jsx)(Gw,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.41-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z",fill:"currentColor"})})}),(0,qr.jsx)(Qw,{children:"\uc6b4\uc601 \ucd5c\uc801\ud654 \uc778\uc0ac\uc774\ud2b8"}),(0,qr.jsx)(qw,{children:"\uc6d4 32\uac1c \uac1c\uc120 \uae30\ud68c \uac10\uc9c0"}),(0,qr.jsx)(Zw,{children:"\uc6b4\uc601 \ud328\ud134 \ubd84\uc11d\uc73c\ub85c \uc778\ub825 \ubc30\uce58, \uc720\uc9c0\ubcf4\uc218, \uc18c\ubaa8\ud488 \uad00\ub9ac \ucd5c\uc801\ud654\ub97c \uc704\ud55c \uc9c0\uc18d\uc801 \uc778\uc0ac\uc774\ud2b8 \uc81c\uacf5"})]})]})]})]}),(0,qr.jsxs)(mw,{id:"recursive-system",children:[(0,qr.jsxs)(gw,{children:[(0,qr.jsx)(xw,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z",fill:"currentColor"})})}),"\uc790\ub3d9\ud654 \uc2dc\uc2a4\ud15c\uc758 ",(0,qr.jsx)(bb,{children:"\uc7ac\uadc0\uc801 \uac1c\uc120"})," \ud504\ub85c\uc138\uc2a4"]}),(0,qr.jsx)(vw,{children:"MUFI\uc758 AI \uc5d0\uc774\uc804\ud2b8\ub294 \ub2e8\uc21c\ud55c \uc790\ub3d9\ud654 \ub3c4\uad6c\ub97c \ub118\uc5b4, \uc2a4\uc2a4\ub85c \ud559\uc2b5\ud558\uace0 \uac1c\uc120\ud558\ub294 \uc7ac\uadc0\uc801 \uc2dc\uc2a4\ud15c\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4. \ucd95\uc801\ub41c \ubb3c\ub958/\uc720\ud1b5 \ub370\uc774\ud130\uc640 \uc6b4\uc601 \ud6a8\uc728\uc131 \uc9c0\ud45c\ub97c \uc9c0\uc18d\uc801\uc73c\ub85c \ubd84\uc11d\ud558\uc5ec AI \ubaa8\ub378\uc744 \uc7ac\ud6c8\ub828\ud568\uc73c\ub85c\uc368 \uc2dc\uac04\uc774 \uc9c0\ub0a0\uc218\ub85d \ub354 \ud6a8\uc728\uc801\uc778 \ubb3c\ub958 \uc2dc\uc2a4\ud15c \ucd5c\uc801\ud654\uc640 \uc5c5\ubb34 \uc2dc\uac04 \ubc30\uc815 \ub2a5\ub825\uc774 \ud5a5\uc0c1\ub429\ub2c8\ub2e4."}),(0,qr.jsxs)(yw,{children:[(0,qr.jsxs)(bw,{children:[(0,qr.jsxs)(ww,{children:[(0,qr.jsx)(jw,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",fill:"currentColor"})})}),(0,qr.jsx)(Sw,{children:"01"}),(0,qr.jsx)(kw,{children:"\ub370\uc774\ud130 \uc218\uc9d1"}),(0,qr.jsx)(Cw,{children:"\ubb3c\ub958 \ube44\uc6a9, \ubc30\uc1a1 \uacbd\ub85c, \uc5c5\ubb34 \uc2dc\uac04 \ud6a8\uc728\uc131, \uc720\ud1b5\ub9dd \ucd5c\uc801\ud654 \uc9c0\ud45c \ub4f1 17\uac1c \ud575\uc2ec \uc6b4\uc601 \ub370\uc774\ud130\ub97c \uc790\ub3d9\uc73c\ub85c \uc218\uc9d1\ud569\ub2c8\ub2e4."})]}),(0,qr.jsx)(Ew,{children:"\u2192"}),(0,qr.jsxs)(ww,{children:[(0,qr.jsx)(jw,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z",fill:"currentColor"})})}),(0,qr.jsx)(Sw,{children:"02"}),(0,qr.jsx)(kw,{children:"\ubd84\uc11d \ubc0f \ud328\ud134 \uac10\uc9c0"}),(0,qr.jsx)(Cw,{children:"AI \uc54c\uace0\ub9ac\uc998\uc774 \ucd95\uc801\ub41c \ub370\uc774\ud130\ub97c \ubd84\uc11d\ud558\uc5ec \ucd5c\uc801\uc758 \uc6b4\uc601 \ud328\ud134\uacfc \uac1c\uc120\uc774 \ud544\uc694\ud55c \ubb38\uc81c\uc810\uc744 \uc790\ub3d9\uc73c\ub85c \uac10\uc9c0\ud569\ub2c8\ub2e4."})]}),(0,qr.jsx)(Ew,{children:"\u2192"}),(0,qr.jsxs)(ww,{children:[(0,qr.jsx)(jw,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M17 12c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5zm-5-3c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-3zm-7 2H3v3h2v-3zm12 0h2v3h-2v-3zM8 5v2h8V5H8zm5 14h-2v2h2v-2zm-4 0H7v2h2v-2zm8 0h-2v2h2v-2z",fill:"currentColor"})})}),(0,qr.jsx)(Sw,{children:"03"}),(0,qr.jsx)(kw,{children:"\ubaa8\ub378 \uc7ac\ud6c8\ub828"}),(0,qr.jsx)(Cw,{children:"\uc0c8\ub85c\uc6b4 \ub370\uc774\ud130\uc640 \ud328\ud134\uc744 \ubc14\ud0d5\uc73c\ub85c AI \ubaa8\ub378\uc744 \uc7ac\ud6c8\ub828\ud558\uc5ec \uc608\uce21 \uc815\ud655\ub3c4\uc640 \ubb38\uc81c \ud574\uacb0 \ub2a5\ub825\uc744 \ud5a5\uc0c1\uc2dc\ud0b5\ub2c8\ub2e4."})]}),(0,qr.jsx)(Ew,{children:"\u2192"}),(0,qr.jsxs)(ww,{children:[(0,qr.jsx)(jw,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z",fill:"currentColor"})})}),(0,qr.jsx)(Sw,{children:"04"}),(0,qr.jsx)(kw,{children:"\uc790\ub3d9 \uc5c5\ub370\uc774\ud2b8"}),(0,qr.jsx)(Cw,{children:"\uac1c\uc120\ub41c AI \ubaa8\ub378\uc744 \ubaa8\ub4e0 \ud3ec\ud1a0\ubd80\uc2a4\uc5d0 \uc790\ub3d9\uc73c\ub85c \ubc30\ud3ec\ud558\uc5ec \uc2dc\uc2a4\ud15c \uc804\uccb4\uc758 \uc131\ub2a5\uc744 \uc9c0\uc18d\uc801\uc73c\ub85c \ud5a5\uc0c1\uc2dc\ud0b5\ub2c8\ub2e4."})]})]}),(0,qr.jsxs)(zw,{children:[(0,qr.jsx)($w,{children:"\uac1c\uc120 \ud6a8\uacfc"}),(0,qr.jsxs)(Pw,{children:[(0,qr.jsxs)(Tw,{children:[(0,qr.jsx)(Mw,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z",fill:"currentColor"})})}),(0,qr.jsx)(Aw,{children:"94%"}),(0,qr.jsx)(Rw,{children:"\ubb3c\ub958 \ube44\uc6a9 \uc608\uce21 \uc815\ud655\ub3c4"}),(0,qr.jsx)(Iw,{children:"\uc218\uc694 \ud328\ud134\uacfc \ucd5c\uc801 \uacbd\ub85c \ubd84\uc11d\uc744 \ud1b5\ud574 \ubb3c\ub958 \ube44\uc6a9 \uc608\uce21 \uc815\ud655\ub3c4\uac00 \ucd08\uae30 67%\uc5d0\uc11c 94%\ub85c \ud5a5\uc0c1\ub418\uc5c8\uc2b5\ub2c8\ub2e4."})]}),(0,qr.jsxs)(Tw,{children:[(0,qr.jsx)(Mw,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z",fill:"currentColor"})})}),(0,qr.jsx)(Aw,{children:"12TB"}),(0,qr.jsx)(Rw,{children:"\uc6d4\uac04 \ucd95\uc801 \ub370\uc774\ud130\ub7c9"}),(0,qr.jsx)(Iw,{children:"\ub2e4\uc591\ud55c \uc6b4\uc601 \uce21\uba74\uc5d0\uc11c \uc218\uc9d1\ub41c \ub370\uc774\ud130\uac00 MUFI\uc758 \uc0c8\ub85c\uc6b4 \ube44\uc988\ub2c8\uc2a4 \uc790\uc0b0\uc73c\ub85c \uac00\uce58\ub97c \ucc3d\ucd9c\ud569\ub2c8\ub2e4."})]}),(0,qr.jsxs)(Tw,{children:[(0,qr.jsx)(Mw,{children:(0,qr.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qr.jsx)("path",{d:"M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z",fill:"currentColor"})})}),(0,qr.jsx)(Aw,{children:"93%"}),(0,qr.jsx)(Rw,{children:"\uc5c5\ubb34 \uc2dc\uac04 \ucd5c\uc801\ud654\uc728"}),(0,qr.jsx)(Iw,{children:"\uc218\uc694 \ud328\ud134\uacfc \uc5c5\ubb34 \ud6a8\uc728\uc131 \ub370\uc774\ud130\ub97c \uae30\ubc18\uc73c\ub85c \ud55c \uc2dc\uac04 \ubc30\uc815 \uccb4\uacc4\uac00 \ucd08\uae30 54%\uc5d0\uc11c 93%\ub85c \uac1c\uc120\ub418\uc5c8\uc2b5\ub2c8\ub2e4."})]})]})]})]}),(0,qr.jsxs)(Lw,{children:[(0,qr.jsx)(_w,{children:"AI \uc790\uc728 \ud559\uc2b5 \uc9c4\ud654 \ub2e8\uacc4"}),(0,qr.jsxs)(Dw,{children:[(0,qr.jsxs)(Vw,{current:!1,children:[(0,qr.jsx)(Fw,{children:"1\ub2e8\uacc4"}),(0,qr.jsx)(Ow,{}),(0,qr.jsx)(Bw,{children:"\ubc18\uc751\ud615 \uc790\ub3d9\ud654"}),(0,qr.jsx)(Nw,{children:"\ubb38\uc81c \ubc1c\uc0dd \uc2dc \uc0ac\uc804 \uc815\uc758\ub41c \ud504\ub85c\ud1a0\ucf5c\uc5d0 \ub530\ub77c \ub300\uc751"})]}),(0,qr.jsxs)(Vw,{current:!0,children:[(0,qr.jsx)(Fw,{children:"2\ub2e8\uacc4"}),(0,qr.jsx)(Ow,{}),(0,qr.jsx)(Bw,{children:"\uc608\uce21\ud615 \uc790\ub3d9\ud654"}),(0,qr.jsx)(Nw,{children:"\ub370\uc774\ud130 \ubd84\uc11d\uc744 \ud1b5\ud574 \ubbf8\ub798 \ubb38\uc81c\ub97c \uc608\uce21\ud558\uace0 \uc120\uc81c\uc801 \ub300\uc751"}),(0,qr.jsx)(Uw,{children:"\ud604\uc7ac \ub2e8\uacc4"})]}),(0,qr.jsxs)(Vw,{current:!1,children:[(0,qr.jsx)(Fw,{children:"3\ub2e8\uacc4"}),(0,qr.jsx)(Ow,{}),(0,qr.jsx)(Bw,{children:"\uc790\uae30 \ucd5c\uc801\ud654"}),(0,qr.jsx)(Nw,{children:"\uc6b4\uc601 \ud658\uacbd\uacfc \uc870\uac74\uc5d0 \ub530\ub77c \uc790\uc728\uc801\uc73c\ub85c \uc2dc\uc2a4\ud15c \ub9e4\uac1c\ubcc0\uc218 \ucd5c\uc801\ud654"})]}),(0,qr.jsxs)(Vw,{current:!1,children:[(0,qr.jsx)(Fw,{children:"4\ub2e8\uacc4"}),(0,qr.jsx)(Ow,{}),(0,qr.jsx)(Bw,{children:"\uc790\uae30 \uc9c4\ud654"}),(0,qr.jsx)(Nw,{children:"\uc0c8\ub85c\uc6b4 \uae30\ub2a5\uacfc \uc54c\uace0\ub9ac\uc998\uc744 \uc2a4\uc2a4\ub85c \uac1c\ubc1c\ud558\uace0 \uc801\uc6a9"})]})]})]})]}),(0,qr.jsxs)(ow,{children:[(0,qr.jsx)(sw,{children:"\ud30c\ud2b8\ub108 \ud53c\ub4dc\ubc31"}),(0,qr.jsxs)(aw,{children:[(0,qr.jsxs)(lw,{children:[(0,qr.jsx)(cw,{children:'"MUFI\uc758 AI \uc5d0\uc774\uc804\ud2b8 \uc194\ub8e8\uc158 \ub3c4\uc785 \ud6c4, \ubb3c\ub958 \ube44\uc6a9\uc774 \ub180\ub78d\uac8c \uac10\uc18c\ud588\uc2b5\ub2c8\ub2e4. \uc774\uc804\uc5d0\ub294 \ud3ec\ud1a0\ubd80\uc2a4 \uc774\ub3d9\uacfc \uc124\uce58\uc5d0 \ub9ce\uc740 \ube44\uc6a9\uc774 \ub4e4\uc5c8\uc9c0\ub9cc, AI\uac00 \ucd5c\uc801\ud654\ub41c \ubc30\uc1a1 \uacbd\ub85c\uc640 \uc77c\uc815\uc744 \uc81c\uc548\ud574 \ube44\uc6a9\uc744 60% \uc774\uc0c1 \uc808\uac10\ud588\uc2b5\ub2c8\ub2e4. \ub610\ud55c \ub0b4\ubd80 \uc5c5\ubb34 \uc2dc\uac04 \ubc30\uc815 \uccb4\uacc4\uac00 \ucd5c\uc801\ud654\ub418\uc5b4 \uc778\ub825 \ud6a8\uc728\uc131\uc774 \ud06c\uac8c \ud5a5\uc0c1\ub418\uc5c8\uc2b5\ub2c8\ub2e4."'}),(0,qr.jsx)(uw,{children:"\uae40\ubbfc\uc9c0 - \uce74\ud398 \ud788\uc5b4\ub85c\uc6b0 \ub300\ud45c"})]}),(0,qr.jsxs)(lw,{children:[(0,qr.jsx)(cw,{children:'"MUFI AI \uc5d0\uc774\uc804\ud2b8\uc758 \uac00\uc7a5 \ud070 \uc7a5\uc810\uc740 \ub2e8\uc21c\ud788 \ube44\uc6a9 \uc808\uac10\ubfd0\ub9cc \uc544\ub2c8\ub77c \uc6b4\uc601 \ub370\uc774\ud130\ub97c \uc9c0\uc18d\uc801\uc73c\ub85c \ucd95\uc801\ud558\uace0 \ubd84\uc11d\ud55c\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc18c\ube44\uc790 \ud2b8\ub80c\ub4dc\ub97c \ud30c\uc545\ud558\uace0 \uc0ac\uc5c5 \ubc29\ud5a5\uc744 \uacb0\uc815\ud558\ub294\ub370 \ud070 \ub3c4\uc6c0\uc774 \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ubb3c\ub958 \uccb4\uacc4\uac00 \ucd5c\uc801\ud654\ub418\uba74\uc11c \uc6b0\ub9ac\ub294 \ud575\uc2ec \ube44\uc988\ub2c8\uc2a4\uc5d0 \ub354 \uc9d1\uc911\ud560 \uc218 \uc788\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."'}),(0,qr.jsx)(uw,{children:"\uc774\uc900\ud638 - \uc2a4\ud14c\uc774 \uce74\ud398 \uc6b4\uc601\uc790"})]})]})]}),(0,qr.jsxs)(dw,{children:[(0,qr.jsx)(hw,{children:"MUFI AI \uc5d0\uc774\uc804\ud2b8\ub85c \ubb3c\ub958 \uc2dc\uc2a4\ud15c\uc744 \ucd5c\uc801\ud654\ud558\uace0 \ub370\uc774\ud130 \uc790\uc0b0\uc744 \uad6c\ucd95\ud558\uc138\uc694"}),(0,qr.jsx)(pw,{children:"AI \uae30\ubc18 \ubb3c\ub958/\uc720\ud1b5 \ucd5c\uc801\ud654, \uc5c5\ubb34 \uc2dc\uac04 \ubc30\uc815 \uccb4\uacc4 \uac1c\uc120, \uadf8\ub9ac\uace0 \uc790\ub3d9\ud654\ub41c \ub370\uc774\ud130 \uc218\uc9d1\uc744 \ud1b5\ud574 \ud3ec\ud1a0\ubd80\uc2a4 \ube44\uc988\ub2c8\uc2a4\uc758 \uc6b4\uc601 \ud6a8\uc728\uc131\uc744 \uadf9\ub300\ud654\ud558\uace0 \uc0c8\ub85c\uc6b4 \ub370\uc774\ud130 \uc790\uc0b0\uc744 \uad6c\ucd95\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),(0,qr.jsx)(fw,{children:"\ubb3c\ub958 \ucd5c\uc801\ud654 \uc194\ub8e8\uc158 \uc0c1\ub2f4 \uc2e0\uccad"})]})]}),gb=Xr.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,xb=Xr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`,vb=Xr.div`
  flex: 1;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
`,yb=Xr.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0 1rem;
  color: ${Xd};
`,bb=Xr.span`
  color: ${Gd};
`,wb=Xr.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
`,jb=Xr.p`
  font-size: 1.25rem;
  line-height: 1.7;
  color: ${Xd};
  opacity: 0.9;
`,Sb=Xr.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`,kb=Xr.a`
  display: flex;
  align-items: center;
  background-color: ${Jd};
  border: 1px solid ${Gd};
  color: ${Gd};
  border-radius: 30px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  
  &:hover {
    background-color: ${Gd};
    color: ${Jd};
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`,Cb=Xr.div`
  width: 24px;
  height: 24px;
  margin-right: 0.75rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,Eb=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${oh} {
    grid-template-columns: repeat(4, 1fr);
  }
`,zb=Xr.div`
  background: ${Jd};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }
`,$b=Xr.div`
  width: 40px;
  height: 40px;
  color: ${Gd};
  margin: 0 auto 1rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,Pb=Xr.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${Gd};
  margin-bottom: 0.5rem;
`,Tb=Xr.div`
  font-size: 1rem;
  font-weight: 500;
  color: ${Xd};
`,Mb=Xr.div`
  background: ${Jd};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
`,Ab=Xr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${Xd};
`,Rb=Xr.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${Xd};
  opacity: 0.9;
  margin-bottom: 1.5rem;
`,Ib=Xr.ul`
  list-style: none;
  padding-left: 0;
`,Lb=Xr.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`,_b=Xr.div`
  width: 24px;
  height: 24px;
  color: ${Gd};
  margin-right: 0.75rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,Db=Xr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${Xd};
  opacity: 0.9;
`,Vb=Xr.div`
  background: ${Jd};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
`,Fb=Xr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${Xd};
`,Ob=Xr.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${Xd};
  opacity: 0.9;
  margin-bottom: 1.5rem;
`,Bb=Xr.ul`
  list-style: none;
  padding-left: 0;
`,Nb=Xr.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`,Ub=Xr.div`
  width: 24px;
  height: 24px;
  color: ${Gd};
  margin-right: 0.75rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,Hb=Xr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${Xd};
  opacity: 0.9;
`,Wb=Xr.div`
  background: ${Jd};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
`,Yb=Xr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${Xd};
`,Kb=Xr.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
  
  ${oh} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,Xb=Xr.div`
  background: ${Jd};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  margin-bottom: 2rem;
  
  ${oh} {
    width: 42%;
    margin-bottom: 0;
  }
`,Gb=Xr.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  
  svg {
    width: 40px;
    height: 40px;
    color: ${Gd};
    transform: rotate(90deg);
    
    ${oh} {
      transform: rotate(0);
    }
  }
  
  ${oh} {
    margin-bottom: 0;
  }
`,Qb=Xr.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: ${Gd};
  color: white;
  border-radius: 20px;
  font-weight: 600;
  margin-bottom: 1rem;
`,qb=Xr.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,Zb=Xr.div`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  color: ${Xd};
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.02);
  
  &:nth-child(even) {
    background-color: rgba(110, 124, 243, 0.05);
  }
`,Jb=Xr.div`
  background: ${Jd};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
`,ew=Xr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${Xd};
`,tw=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  ${oh} {
    grid-template-columns: repeat(2, 1fr);
  }
  
  ${ah} {
    grid-template-columns: repeat(5, 1fr);
  }
`,nw=Xr.div`
  background: ${Jd};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.06);
  }
`,rw=Xr.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${Xd};
  opacity: 0.8;
  margin-bottom: 0.5rem;
  text-align: center;
`,iw=Xr.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${Gd};
  text-align: center;
`,ow=Xr.div`
  background: ${Jd};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
`,sw=Xr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${Xd};
`,aw=Xr.div`
  display: flex;
  gap: 1.5rem;
`,lw=Xr.div`
  background: ${Jd};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }
`,cw=Xr.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${Xd};
  opacity: 0.9;
  margin-bottom: 0.75rem;
`,uw=Xr.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${Xd};
  opacity: 0.9;
`,dw=Xr.div`
  background: ${Jd};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
`,hw=Xr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${Xd};
`,pw=Xr.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${Xd};
  opacity: 0.9;
  margin-bottom: 1.5rem;
`,fw=Xr.button`
  background-color: ${Gd};
  color: ${Jd};
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${Gd};
    opacity: 0.9;
  }
`,mw=Xr.div`
  background: ${Jd};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;
  scroll-margin-top: 80px;
`,gw=Xr.h3`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${Xd};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`,xw=Xr.div`
  width: 48px;
  height: 48px;
  color: ${Gd};
  margin-bottom: 1rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,vw=Xr.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${Xd};
  opacity: 0.9;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
`,yw=Xr.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`,bw=Xr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  
  ${oh} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`,ww=Xr.div`
  background: ${Jd};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`,jw=Xr.div`
  width: 40px;
  height: 40px;
  color: ${Gd};
  margin-bottom: 0.75rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,Sw=Xr.div`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${Gd};
  margin-bottom: 0.5rem;
`,kw=Xr.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${Xd};
`,Cw=Xr.p`
  font-size: 0.938rem;
  line-height: 1.6;
  color: ${Xd};
  opacity: 0.8;
`,Ew=Xr.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${Gd};
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
  
  ${oh} {
    transform: rotate(0);
  }
`,zw=Xr.div`
  margin-top: 1rem;
`,$w=Xr.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${Xd};
  text-align: center;
`,Pw=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${oh} {
    grid-template-columns: repeat(3, 1fr);
  }
`,Tw=Xr.div`
  background: ${Jd};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`,Mw=Xr.div`
  width: 40px;
  height: 40px;
  color: ${Gd};
  margin-bottom: 0.75rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,Aw=Xr.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${Gd};
  margin-bottom: 0.5rem;
`,Rw=Xr.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${Xd};
  margin-bottom: 1rem;
`,Iw=Xr.p`
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${Xd};
  opacity: 0.8;
`,Lw=Xr.div`
  margin-top: 3rem;
`,_w=Xr.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: ${Xd};
  text-align: center;
`,Dw=Xr.div`
  display: flex;
  flex-direction: column;
  
  ${oh} {
    flex-direction: row;
    justify-content: space-between;
  }
`,Vw=Xr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 1rem;
  flex: 1;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  ${e=>e.current&&"\n    background-color: rgba(110, 124, 243, 0.08);\n    border: 1px solid rgba(110, 124, 243, 0.2);\n  "}
  
  &:not(:last-child) {
    margin-bottom: 1.5rem;
    
    ${oh} {
      margin-bottom: 0;
      margin-right: 1rem;
    }
  }
`,Fw=Xr.div`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${Gd};
  margin-bottom: 0.5rem;
`,Ow=Xr.div`
  width: 40px;
  height: 4px;
  background-color: ${Gd};
  margin-bottom: 1rem;
  border-radius: 2px;
`,Bw=Xr.h5`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${Xd};
  text-align: center;
`,Nw=Xr.p`
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${Xd};
  opacity: 0.8;
`,Uw=Xr.div`
  margin-top: 1rem;
  padding: 0.25rem 0.75rem;
  background-color: ${Gd};
  color: white;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
`,Hw=Xr.div`
  margin-top: 3rem;
`,Ww=Xr.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${Xd};
  text-align: center;
`,Yw=Xr.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${Xd};
  opacity: 0.9;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
`,Kw=Xr.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  ${oh} {
    grid-template-columns: repeat(3, 1fr);
  }
`,Xw=Xr.div`
  background: ${Jd};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
    border-color: rgba(110, 124, 243, 0.2);
  }
`,Gw=Xr.div`
  width: 40px;
  height: 40px;
  color: ${Gd};
  margin-bottom: 0.75rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,Qw=Xr.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${Xd};
  margin-bottom: 1rem;
`,qw=Xr.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${Gd};
  margin-bottom: 0.5rem;
`,Zw=Xr.p`
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${Xd};
  opacity: 0.8;
`,Jw=()=>(0,qr.jsx)(Of,{children:(0,qr.jsxs)(Bf,{children:[(0,qr.jsxs)(Nf,{children:[(0,qr.jsx)(Uf,{children:"MUFI \uc0ac\uc5c5 IR"}),(0,qr.jsx)(Hf,{children:"\ud22c\uc790\uc790 \ubc0f \ud30c\ud2b8\ub108\ub97c \uc704\ud55c \uc815\ubcf4"})]}),(0,qr.jsx)(Wf,{children:(0,qr.jsx)(Yf,{})}),(0,qr.jsx)(Wf,{children:(0,qr.jsx)(Am,{})}),(0,qr.jsx)(Wf,{children:(0,qr.jsx)(jm,{})}),(0,qr.jsx)(Wf,{children:(0,qr.jsx)(qg,{})}),(0,qr.jsx)(Wf,{children:(0,qr.jsx)(mb,{})}),(0,qr.jsx)(Wf,{children:(0,qr.jsx)(pm,{})}),(0,qr.jsx)(Wf,{children:(0,qr.jsx)(Wx,{})}),(0,qr.jsx)(Wf,{children:(0,qr.jsx)(gv,{})}),(0,qr.jsx)(Wf,{children:(0,qr.jsx)(dy,{})}),(0,qr.jsx)(Wf,{children:(0,qr.jsx)(Fv,{})}),(0,qr.jsx)(Wf,{children:(0,qr.jsx)(Hy,{})})]})}),ej=(function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=Wr.apply(void 0,st([t],n,!1)),o="sc-global-".concat(Tn(JSON.stringify(i))),s=new Gr(i,o),a=function(t){var n=Pr(),r=e.useContext(Or),i=e.useRef(n.styleSheet.allocateGSInstance(o)).current;return n.styleSheet.server&&l(i,t,n.styleSheet,r,n.stylis),e.useLayoutEffect((function(){if(!n.styleSheet.server)return l(i,t,n.styleSheet,r,n.stylis),function(){return s.removeStyles(i,n.styleSheet)}}),[i,t,n.styleSheet,r,n.stylis]),null};function l(e,t,n,r,i){if(s.isStatic)s.renderStyles(e,gn,n,i);else{var o=ot(ot({},t),{theme:yn(t,r,a.defaultProps)});s.renderStyles(e,o,n,i)}}return e.memo(a)})`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: ${Jd};
    color: ${Xd};
    line-height: 1.5;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }
`;const tj=function(){return(0,qr.jsxs)(Ge,{children:[(0,qr.jsx)(ej,{}),(0,qr.jsx)(Rh,{}),(0,qr.jsxs)(me,{children:[(0,qr.jsx)(pe,{path:"/ir",element:(0,qr.jsx)(Jw,{})}),(0,qr.jsx)(pe,{path:"/",element:(0,qr.jsxs)("main",{children:[(0,qr.jsx)(mh,{}),(0,qr.jsx)(Fh,{}),(0,qr.jsx)(Kp,{}),(0,qr.jsx)(pf,{}),(0,qr.jsx)(kf,{})]})})]})]})},nj=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:r,getFCP:i,getLCP:o,getTTFB:s}=t;n(e),r(e),i(e),o(e),s(e)}))};t.createRoot(document.getElementById("root")).render((0,qr.jsx)(e.StrictMode,{children:(0,qr.jsx)(tj,{})})),nj()})()})();
//# sourceMappingURL=main.dc7bece3.js.map