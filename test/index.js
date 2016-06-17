var expect = require('chai').expect;
var Workfrom = require('../lib');

describe('Workfrom constructor', function () {
  it('should return a constructor function', function () {
    expect(Workfrom).to.be.a('function');
  });
});

var wf = Workfrom({
  appid: 'abcdef1234567890'
});

console.log(wf);

describe('wf instance', function () {
  it('should be an object', function () {
    expect(wf).to.be.a('object');
  });
  it('should expose all valid endpoints', function () {
    expect(wf).to.have.all.keys(['places']);
  });
});

describe('wf.places', function () {
  it('should expose all valid methods', function () {
    expect(wf.places).to.be.a('object');
    expect(wf.places).to.have.only.keys(['get', 'search', 'nearCoordinates', 'nearPostalCode']);
  });
});
