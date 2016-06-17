# workfrom [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> [Workfrom.co](https://workfrom.co/) API client for Node.js


## Installation

```sh
$ npm i --save workfrom
```

## Documentation

#### Create a client instance

```js
import Workfrom from 'workfrom'; // or: var Workfrom = require('workfrom')

let wf = Workfrom({
  id: 'abcdef1234567890' // replace with your Workfrom appid
});
```

### Places

#### get

You can get by id, or by slug:

```js
wf.places.get({ id: 16 }).then(place => { /* do stuff */ });

wf.places.get({ slug: 'venice-grind' }).then(place => { /* do stuff */ });
```

Parameters:
- `id`: _String || Integer_. Required, but mutually exclusive with `slug`.
- `slug`: _String_. Required, but mutually exclusive with `id`.

#### search

You can search by name:

```js
wf.places.search({ query: 'cafe', limit: 10 }).then(results => { /* do stuff */ });
```

Parameters:
- `query`: _String_. Required.
- `limit`: _Integer_. Optional, defaults to `20`.





[npm-image]: https://badge.fury.io/js/workfrom.svg
[npm-url]: https://npmjs.org/package/workfrom
[travis-image]: https://travis-ci.org/kyleshockey/workfrom.svg?branch=master
[travis-url]: https://travis-ci.org/kyleshockey/workfrom
[daviddm-image]: https://david-dm.org/kyleshockey/workfrom.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/kyleshockey/workfrom
