require('babel-core/register');

var Workfrom = require('./lib');

var wf = Workfrom({
  appid: 'abcdef1234567890'
});

wf.places.get({slug: 'venice-grind'}).then(res => console.log(res));
