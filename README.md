<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# codePointAt

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Return a Unicode [code point][code-point] from a string at a specified position.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/string-code-point-at
```

</section>

<section class="usage">

## Usage

```javascript
var codePointAt = require( '@stdlib/string-code-point-at' );
```

#### codePointAt( string, position\[, backward] )

Returns a Unicode [code point][code-point] from a string at a specified position.

```javascript
var out = codePointAt( 'last man standing', 4 );
// returns 32
```

The function supports providing a `boolean` argument for performing backward iteration for low surrogates.

```javascript
var out = codePointAt( '🌷', 1, true );
// returns 127799
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

This function differs from [`String.prototype.codePointAt`][mdn-string-codepointat] in the following ways:

-   The function supports providing a `boolean` argument for performing backward iteration for low surrogates. [`String.prototype.codePointAt`][mdn-string-codepointat] simply returns the low surrogate value if no [UTF-16][utf-16] surrogate pair begins at the specified position. If invoked with `backward` set to `true`, this function will return the code point after aggregating with the preceding high surrogate, if the specified position does not mark the start of a surrogate pair.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var codePointAt = require( '@stdlib/string-code-point-at' );

console.log( codePointAt( 'last man standing', 4 ) );
// => 32

console.log( codePointAt( 'presidential election', 8, true ) );
// => 116

console.log( codePointAt( 'अनुच्छेद', 2 ) );
// => 2369

console.log( codePointAt( '🌷', 1, true ) );
// => 127799
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/string-code-point-at
```

</section>

<section class="usage">

### Usage

```text
Usage: code-point-at [options] [<string>] --pos=<index>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
  -b,    --backward            Backward iteration for low surrogates.
         --pos index           Position in string.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ code-point-at --pos=2 अनुच्छेद
2369
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'अनुच्छेद' | code-point-at --pos=2
2369
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-code-point-at.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-code-point-at

[test-image]: https://github.com/stdlib-js/string-code-point-at/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/string-code-point-at/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-code-point-at/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-code-point-at?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-code-point-at
[dependencies-url]: https://david-dm.org/stdlib-js/string-code-point-at/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-code-point-at/main/LICENSE

[code-point]: https://en.wikipedia.org/wiki/Code_point

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-string-codepointat]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

[utf-16]: https://en.wikipedia.org/wiki/UTF-16

</section>

<!-- /.links -->
