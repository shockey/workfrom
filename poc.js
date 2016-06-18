require('babel-core/register');

var Workfrom = require('./lib');

var wf = Workfrom({
  appid: 'abcdef1234567890'
});

wf.places.search({name: 'Starbucks', limit: 50, page: 1}).then(results => { console.log(results) });
