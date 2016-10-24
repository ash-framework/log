<!-- TITLE/ -->

<h1>@ash-framework/log</h1>

<!-- /TITLE -->


<!-- BADGES/ -->

<span class="badge-badge"><a href="https://mediasuite.co.nz" title="The Media Suite"><img src="https://mediasuite.co.nz/ms-badge.png" alt="The Media Suite" /></a></span>
<br class="badge-separator" />
<span class="badge-badge"><a href="https://nodei.co/npm/@ash-framework/log"><img src="https://nodei.co/npm/@ash-framework/log.png?downloads=true&stars=true" /></a></span>
<br class="badge-separator" />
<span class="badge-travisci"><a href="http://travis-ci.org/ash-framework/log" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/ash-framework/log/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/@ash-framework/log" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@ash-framework/log.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/@ash-framework/log" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/@ash-framework/log.svg" alt="NPM downloads" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/ash-framework/log" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/ash-framework/log.svg" alt="Dependency Status" /></a></span>
<span class="badge-daviddmdev"><a href="https://david-dm.org/ash-framework/log#info=devDependencies" title="View the status of this project's development dependencies on DavidDM"><img src="https://img.shields.io/david/dev/ash-framework/log.svg" alt="Dev Dependency Status" /></a></span>

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Logger for ash framework

<!-- /DESCRIPTION -->


<!-- INSTALL/ -->

<h2>Install</h2>

<a href="https://npmjs.com" title="npm is a package manager for javascript"><h3>NPM</h3></a><ul>
<li>Install: <code>npm install --save @ash-framework/log</code></li>
<li>Module: <code>require('@ash-framework/log')</code></li></ul>

<!-- /INSTALL -->


## Usage

Very light class based wrapper for (currently) the [pino](https://www.npmjs.com/package/pino) logger.

```js
const logger = new Log()

logger.fatal(message)
logger.error(message)
logger.warn(message)
logger.info(message)
logger.debug(message)
logger.trace(message)
```

Notes:
- When in production, only `error` and `fatal` messages will be logged.
- When in development messages from `info` up to `fatal` will be logged.
- When the evenironment variable `DEBUG` is set (to anything), all messages will be logged.

<!-- HISTORY/ -->

<h2>History</h2>

<a href="https://github.com/ash-framework/log/releases">Discover the release history by heading on over to the releases page.</a>

<!-- /HISTORY -->


<!-- BACKERS/ -->

<h2>Backers</h2>

<h3>Maintainers</h3>

These amazing people are maintaining this project:

<ul><li>Richard Walker digitalsadhu@gmail.com</li></ul>

<h3>Sponsors</h3>

These amazing people have contributed finances to this project:

<ul><li><a href="http://mediasuite.co.nz">The Media Suite</a></li></ul>

Become a sponsor!



<h3>Contributors</h3>

These amazing people have contributed code to this project:

<ul><li><a href="http://lovebeer.nz/">Richard Walker</a> — <a href="https://github.com/ash-framework/log/commits?author=digitalsadhu" title="View the GitHub contributions of Richard Walker on repository ash-framework/log">view contributions</a></li></ul>



<!-- /BACKERS -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; <a href="http://lovebeer.nz/">Richard Walker</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
