require('babel-core/register');

var Workfrom = require('./lib');

var wf = Workfrom({
  appid: 'abcdef1234567890'
});

wf.places.near({ lat: '37.783575', long: '-122.409048', radius: 2 }).then(results => { console.log(results) });
