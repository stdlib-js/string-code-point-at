// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,c=r.__lookupSetter__,l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,l){var a,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(u.call(t,e)||c.call(t,e)?(a=t.__proto__,t.__proto__=r,delete t[e],t[e]=l.value,t.__proto__=a):t[e]=l.value),p="get"in l,y="set"in l,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,l.get),y&&i&&i.call(t,e,l.set),t};function a(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"boolean"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"",g=y()?function(t){var e,r,n,o,i;if(null==t)return b.call(t);r=t[d],i=d,e=null!=(o=t)&&s.call(o,i);try{t[d]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[d]=r:delete t[d],n}:function(t){return b.call(t)},h=Boolean.prototype.toString,v=y();function m(t){return"object"==typeof t&&(t instanceof Boolean||(v?function(t){try{return h.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function _(t){return f(t)||m(t)}function j(t){return"string"==typeof t}a(_,"isPrimitive",f),a(_,"isObject",m);var w=String.prototype.valueOf,S=y();function O(t){return"object"==typeof t&&(t instanceof String||(S?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object String]"===g(t)))}function T(t){return j(t)||O(t)}function P(t){return"number"==typeof t}a(T,"isPrimitive",j),a(T,"isObject",O);var E=Number,I=E.prototype.toString,N=y();function A(t){return"object"==typeof t&&(t instanceof E||(N?function(t){try{return I.call(t),!0}catch(t){return!1}}(t):"[object Number]"===g(t)))}function C(t){return P(t)||A(t)}a(C,"isPrimitive",P),a(C,"isObject",A);var V=Number.POSITIVE_INFINITY,x=E.NEGATIVE_INFINITY,B=Math.floor;function F(t){return t<V&&t>x&&B(e=t)===e;var e}function G(t){return P(t)&&F(t)}function R(t){return A(t)&&F(t.valueOf())}function k(t){return G(t)||R(t)}function Y(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}a(k,"isPrimitive",G),a(k,"isObject",R);var M=55296,U=56320;function q(t,e,r){var n,o,i;return e<0&&(e+=t.length),(n=t.charCodeAt(e))>=M&&n<=56319&&e<t.length-1?(i=n,o=t.charCodeAt(e+1),U<=o&&o<=57343?1024*(i-M)+(o-U)+65536:i):r&&n>=U&&n<=57343&&e>=1?(i=t.charCodeAt(e-1),o=n,M<=i&&i<=56319?1024*(i-M)+(o-U)+65536:o):n}return function(t,e,r){var n;if(!j(t))throw new TypeError(Y("0h83R",t));if(!G(e))throw new TypeError(Y("0h87x",e));if(e<0&&(e+=t.length),e<0||e>=t.length)throw new RangeError(Y("invalid argument. Second argument must be a valid position (i.e., be within string bounds). Value: `%d`.",e));if(arguments.length>2){if(!f(r))throw new TypeError(Y("0h8B3",r));n=r}else n=!1;return q(t,e,n)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).codePointAt=e();
//# sourceMappingURL=browser.js.map
