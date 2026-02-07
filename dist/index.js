"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=s(function(w,a){
var o=require('@stdlib/assert-is-boolean/dist').isPrimitive,g=require('@stdlib/assert-is-string/dist').isPrimitive,m=require('@stdlib/assert-is-integer/dist').isPrimitive,i=require('@stdlib/error-tools-fmtprodmsg/dist'),l=require('@stdlib/string-base-code-point-at/dist');function v(r,e,n){var t;if(!g(r))throw new TypeError(i('1OZ3F',r));if(!m(e))throw new TypeError(i('1OZ7f',e));if(e<0&&(e+=r.length),e<0||e>=r.length)throw new RangeError(i('1OZE4',e));if(arguments.length>2){if(!o(n))throw new TypeError(i('1OZAL',n));t=n}else t=!1;return l(r,e,t)}a.exports=v
});var f=u();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
