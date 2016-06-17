require('babel-core/register');

var Workfrom = require('./lib');

var wf = Workfrom({
  appid: 'abcdef1234567890'
});

wf.places.search({query: 'cafe', limit: 1, page: 2}).then(results => { console.log(results) });
