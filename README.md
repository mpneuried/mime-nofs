mime-nofs
===========

[![Build Status](https://secure.travis-ci.org/mpneuried/mime-nofs.png?branch=master)](http://travis-ci.org/mpneuried/mime-nofs)
[![Build Status](https://david-dm.org/mpneuried/mime-nofs.png)](https://david-dm.org/mpneuried/mime-nofs)
[![NPM version](https://badge.fury.io/js/mime-nofs.png)](http://badge.fury.io/js/mime-nofs)

This is a fork of **[node-mime](https://github.com/broofa/node-mime)** from **[Robert Kieffer (broofa)](https://github.com/broofa)**.
I removed the file-system dependency to be able to use it within the browser and other systems.
And a added a prioritization of non `???/x-???` mime types.

[![NPM](https://nodei.co/npm/mime-nofs.png?downloads=true&stars=true)](https://nodei.co/npm/mime-nofs/)

---

Comprehensive MIME type mapping API based on mime-db module.

## Install

Install with [npm](http://github.com/isaacs/npm):

    npm install mime

## Contributing / Testing

    npm run test

## Command Line

    mime [path_string]

E.g.

    > mime scripts/jquery.js
    application/javascript

## API - Queries

### mime.lookup(path)
Get the mime type associated with a file, if no mime type is found `application/octet-stream` is returned. Performs a case-insensitive lookup using the extension in `path` (the substring after the last '/' or '.').  E.g.

```js
var mime = require('mime');

mime.lookup('/path/to/file.txt');         // => 'text/plain'
mime.lookup('file.txt');                  // => 'text/plain'
mime.lookup('.TXT');                      // => 'text/plain'
mime.lookup('htm');                       // => 'text/html'
```

### mime.default_type
Sets the mime type returned when `mime.lookup` fails to find the extension searched for. (Default is `application/octet-stream`.)

### mime.extension(type)
Get the default extension for `type`

```js
mime.extension('text/html');                 // => 'html'
mime.extension('application/octet-stream');  // => 'bin'
```

### mime.charsets.lookup()

Map mime-type to charset

```js
mime.charsets.lookup('text/plain');        // => 'UTF-8'
```

(The logic for charset lookups is pretty rudimentary.  Feel free to suggest improvements.)

## API - Defining Custom Types

Custom type mappings can be added on a per-project basis via the following APIs.

### mime.define()

Add custom mime/extension mappings

```js
mime.define({
    'text/x-some-format': ['x-sf', 'x-sft', 'x-sfml'],
    'application/x-my-type': ['x-mt', 'x-mtt'],
    // etc ...
});

mime.lookup('x-sft');                 // => 'text/x-some-format'
```

The first entry in the extensions array is returned by `mime.extension()`. E.g.

```js
mime.extension('text/x-some-format'); // => 'x-sf'
```

## Release History
|Version|Date|Description|
|:--:|:--:|:--|
|2.0.0|2015-11-06|initial fork from (node-mime 1.3.4)[https://github.com/broofa/node-mime/releases/tag/v1.3.4]; Changed build to js file; Removed `load` method; Added  prioritization of non `???/x-???` mime types;|

[![NPM](https://nodei.co/npm-dl/mime-nofs.png?months=6)](https://nodei.co/npm/mime-nofs/)


## Other projects

|Name|Description|
|:--|:--|
|[**aws-s3-form**](https://github.com/mpneuried/aws-s3-form)|Generate a signed and ready to use formdata to put files to s3 directly from the browser. Signing is done by using AWS Signature Version 4|
|[**node-cache**](https://github.com/tcs-de/nodecache)|Simple and fast NodeJS internal caching. Node internal in memory cache like memcached.|
|[**domel**](https://github.com/mpneuried/domel)|A simple dom helper if you want to get rid of jQuery|
|[**backlunr**](https://github.com/mpneuried/backlunr)|A solution to bring Backbone Collections together with the browser fulltext search engine Lunr.js|
|[**obj-schema**](https://github.com/mpneuried/obj-schema)|Simple module to validate an object by a predefined schema|
|[**rsmq**](https://github.com/smrchy/rsmq)|A really simple message queue based on Redis|
|[**rsmq-cli**](https://github.com/mpneuried/rsmq-cli)|a terminal client for rsmq|
|[**rest-rsmq**](https://github.com/smrchy/rest-rsmq)|REST interface for.|
|[**redis-notifications**](https://github.com/mpneuried/redis-notifications)|A redis based notification engine. It implements the rsmq-worker to safely create notifications and recurring reports.|
|[**redis-sessions**](https://github.com/smrchy/redis-sessions)|An advanced session store for NodeJS and Redis|
|[**connect-redis-sessions**](https://github.com/mpneuried/connect-redis-sessions)|A connect or express middleware to simply use the [redis sessions](https://github.com/smrchy/redis-sessions). With [redis sessions](https://github.com/smrchy/redis-sessions) you can handle multiple sessions per user_id.|
|[**systemhealth**](https://github.com/mpneuried/systemhealth)|Node module to run simple custom checks for your machine or it's connections. It will use [redis-heartbeat](https://github.com/mpneuried/redis-heartbeat) to send the current state to redis.|
|[**task-queue-worker**](https://github.com/smrchy/task-queue-worker)|A powerful tool for background processing of tasks that are run by making standard http requests.|
|[**soyer**](https://github.com/mpneuried/soyer)|Soyer is small lib for serverside use of Google Closure Templates with node.js.|
|[**grunt-soy-compile**](https://github.com/mpneuried/grunt-soy-compile)|Compile Goggle Closure Templates ( SOY ) templates inclding the handling of XLIFF language files.|


## The MIT License (MIT)

Copyright © 2015 M. Peter

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
