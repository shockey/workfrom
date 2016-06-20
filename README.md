# workfrom.js [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> [Workfrom.co](https://workfrom.co/) API client for Node.js

`workfrom.js` is a high-level library for interacting with the Workfrom API.

Works on all major Node versions- we test `0.10`, `0.12`, `4.0`, `5.0`, and `6.0`.

## Getting started

> Install via npm

```sh
$ npm i --save workfrom
```

> Create a client instance

```js
import Workfrom from 'workfrom'; // or: var Workfrom = require('workfrom')

let wf = Workfrom({
  id: 'abcdef1234567890' // replace with your Workfrom appid
});
```


## Documentation

Methods are namespaced under endpoints, which logically separate things you can interact with.

Generally, the interface is laid out as `[endpoint].[method]`.

#### places.get

> Get information on a specific place

```js
wf.places.get({ id: 9075 })
  .then(place => { /* do stuff */ });

wf.places.get({ slug: 'venice-grind' })
  .then(place => { /* do stuff */ });
```

Parameter | Type | Required? | Notes
--- | --- | --- | ------
`id` | _Integer_ or _String_ | yes* | mutually exclusive with `slug`
`slug` | _String_            | yes* | mutually exclusive with `id`

#### places.search

> Search for places by name

```js
wf.places.search({ name: 'Starbucks', limit: 10, page: 2 })
  .then(results => { /* do stuff */ });
```

Parameter | Type | Required? | Notes
--- | --- | --- | ------
`name`  | _String_  | yes |
`limit` | _Integer_ | no  | defaults to `20`
`page`  | _Integer_ | no  | defaults to `1`

#### places.near

> Search for places near a location

```js
wf.places.near({ postalCode: 94104, limit: 10, page: 1 })
  .then(results => { /* do stuff */ });

wf.places.near({ lat: '37.783575', long: '-122.409048', radius: 2 })
  .then(results => { /* do stuff */ });
```

Parameter | Type | Required? | Notes
--- | --- | --- | ------
`lat`           | _String_              | yes*  | required if `postalCode` is omitted
`long`          | _String_              | yes*  | required if `postalCode` is omitted
`postalCode`    | _Integer_ or _String_ | yes*  | required if `lat` & `long` are omitted
`radius`        | _Integer_              | no    | in miles, defaults to `5`; not allowed alongside `postalCode`
`limit`         | _Integer_             | no    | defaults to `20`; not allowed alongside `lat`/`long`
`page`          | _Integer_             | no    | defaults to `1`; not allowed alongside `lat`/`long`


## Contributing

Pull requests are welcome, provided that documentation and tests are updated to match any changes made.

[npm-image]: https://badge.fury.io/js/workfrom.svg
[npm-url]: https://npmjs.org/package/workfrom
[travis-image]: https://travis-ci.org/kyleshockey/workfrom.svg?branch=master
[travis-url]: https://travis-ci.org/kyleshockey/workfrom
[daviddm-image]: https://david-dm.org/kyleshockey/workfrom.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/kyleshockey/workfrom
 
