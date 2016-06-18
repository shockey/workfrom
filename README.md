# workfrom [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> [Workfrom.co](https://workfrom.co/) API client for Node.js


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

### Places

#### get

> Get information on a specific place

```js
wf.places.get({ id: 9075 }).then(place => { /* do stuff */ });

wf.places.get({ slug: 'venice-grind' }).then(place => { /* do stuff */ });
```

Parameter | Type | Required? | Notes
--- | --- | --- | ------
`id` | _Integer_ or _String_ | yes* | mutually exclusive with `slug`
`slug` | _String_            | yes* | mutually exclusive with `id`


#### search

> Search for places by name

```js
wf.places.search({ name: 'Starbucks', limit: 10, page: 2 }).then(results => { /* do stuff */ });
```

Parameter | Type | Required? | Notes
--- | --- | --- | ------
`name`  | _String_  | yes |
`limit` | _Integer_ | no  | defaults to `20`
`page`  | _Integer_ | no  | defaults to `1`


## Contributing

Pull requests are welcome, provided that documentation and tests are updated to match any changes made.

[npm-image]: https://badge.fury.io/js/workfrom.svg
[npm-url]: https://npmjs.org/package/workfrom
[travis-image]: https://travis-ci.org/kyleshockey/workfrom.svg?branch=master
[travis-url]: https://travis-ci.org/kyleshockey/workfrom
[daviddm-image]: https://david-dm.org/kyleshockey/workfrom.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/kyleshockey/workfrom
