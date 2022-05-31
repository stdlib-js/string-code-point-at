// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var s=e.isPrimitive,n=i.isPrimitive,o=r.isPrimitive,d=t;var a=function(e,i,r){var t,a,m,h;if(!n(e))throw new TypeError(d("0h83N",e));if(!o(i))throw new TypeError(d("invalid argument. Must provide a valid position (i.e., a nonnegative integer). Value: `%s`.",i));if(i>=e.length)throw new RangeError(d("invalid argument. Must provide a valid position (i.e., within string bounds). Value: `%u`.",i));if(arguments.length>2){if(!s(r))throw new TypeError(d("0h8B3",r));a=r}else a=!1;return(t=e.charCodeAt(i))>=55296&&t<=56319&&i<e.length-1?(h=t,56320<=(m=e.charCodeAt(i+1))&&m<=57343?1024*(h-55296)+(m-56320)+65536:h):a&&t>=56320&&t<=57343&&i>=1?(m=t,55296<=(h=e.charCodeAt(i-1))&&h<=56319?1024*(h-55296)+(m-56320)+65536:m):t};export{a as default};
//# sourceMappingURL=index.mjs.map
