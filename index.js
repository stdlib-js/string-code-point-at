// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,c=r.__lookupSetter__,l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,l){var a,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(u.call(t,e)||c.call(t,e)?(a=t.__proto__,t.__proto__=r,delete t[e],t[e]=l.value,t.__proto__=a):t[e]=l.value),p="get"in l,y="set"in l,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,l.get),y&&i&&i.call(t,e,l.set),t};function a(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"boolean"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"",_=y()?function(t){var e,r,n,o,i;if(null==t)return b.call(t);r=t[d],i=d,e=null!=(o=t)&&s.call(o,i);try{t[d]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[d]=r:delete t[d],n}:function(t){return b.call(t)},g=Boolean.prototype.toString,v=y();function h(t){return"object"==typeof t&&(t instanceof Boolean||(v?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===_(t)))}function m(t){return f(t)||h(t)}function j(t){return"string"==typeof t}a(m,"isPrimitive",f),a(m,"isObject",h);var O=String.prototype.valueOf,w=y();function S(t){return"object"==typeof t&&(t instanceof String||(w?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object String]"===_(t)))}function T(t){return j(t)||S(t)}function E(t){return"number"==typeof t}a(T,"isPrimitive",j),a(T,"isObject",S);var P=Number,I=P.prototype.toString,A=y();function N(t){return"object"==typeof t&&(t instanceof P||(A?function(t){try{return I.call(t),!0}catch(t){return!1}}(t):"[object Number]"===_(t)))}function C(t){return E(t)||N(t)}a(C,"isPrimitive",E),a(C,"isObject",N);var x=Number.POSITIVE_INFINITY,F=P.NEGATIVE_INFINITY,V=Math.floor;function Z(t){return t<x&&t>F&&V(e=t)===e;var e}function B(t){return E(t)&&Z(t)}function G(t){return N(t)&&Z(t.valueOf())}function M(t){return B(t)||G(t)}function k(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}a(M,"isPrimitive",B),a(M,"isObject",G);var L=55296,R=56320;function Y(t,e,r){var n,o,i;return e<0&&(e+=t.length),(n=t.charCodeAt(e))>=L&&n<=56319&&e<t.length-1?(i=n,o=t.charCodeAt(e+1),R<=o&&o<=57343?1024*(i-L)+(o-R)+65536:i):r&&n>=R&&n<=57343&&e>=1?(i=t.charCodeAt(e-1),o=n,L<=i&&i<=56319?1024*(i-L)+(o-R)+65536:o):n}return function(t,e,r){var n;if(!j(t))throw new TypeError(k("1OZ3F,Ex",t));if(!B(e))throw new TypeError(k("1OZ7f,LW",e));if(e<0&&(e+=t.length),e<0||e>=t.length)throw new RangeError(k("1OZM8",e));if(arguments.length>2){if(!f(r))throw new TypeError(k("1OZAL,M9",r));n=r}else n=!1;return Y(t,e,n)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).codePointAt=e();
//# sourceMappingURL=index.js.map
