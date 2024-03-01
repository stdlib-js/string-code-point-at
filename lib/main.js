/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var isInteger = require( '@stdlib/assert-is-integer' ).isPrimitive;
var format = require( '@stdlib/error-tools-fmtprodmsg' );
var base = require( '@stdlib/string-base-code-point-at' );


// MAIN //

/**
* Returns a Unicode code point from a string at a specified position.
*
* @param {string} str - input string
* @param {integer} idx - position
* @param {boolean} [backward=false] - backward iteration for low surrogates
* @throws {TypeError} first argument must be a string
* @throws {TypeError} second argument must be an integer
* @throws {TypeError} third argument must be a boolean
* @throws {RangeError} position must be a valid index in string
* @returns {NonNegativeInteger} code point
*
* @example
* var out = codePointAt( 'last man standing', 4 );
* // returns 32
*
* @example
* var out = codePointAt( 'presidential election', 8, true );
* // returns 116
*
* @example
* var out = codePointAt( 'अनुच्छेद', 2 );
* // returns 2369
*
* @example
* var out = codePointAt( '🌷', 1, true );
* // returns 127799
*/
function codePointAt( str, idx, backward ) {
	var FLG;

	if ( !isString( str ) ) {
		throw new TypeError( format( '1OZ3F', str ) );
	}
	if ( !isInteger( idx ) ) {
		throw new TypeError( format( '1OZ7f', idx ) );
	}
	if ( idx < 0 ) {
		idx += str.length;
	}
	if ( idx < 0 || idx >= str.length ) {
		throw new RangeError( format( '1OZE4', idx ) );
	}
	if ( arguments.length > 2 ) {
		if ( !isBoolean( backward ) ) {
			throw new TypeError( format( '1OZAL', backward ) );
		}
		FLG = backward;
	} else {
		FLG = false;
	}
	return base( str, idx, FLG );
}


// EXPORTS //

module.exports = codePointAt;
