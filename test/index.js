var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var Workfrom = require('../lib');
var _ = require('lodash');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Workfrom constructor', function () {
  it('should return a constructor function', function () {
    expect(Workfrom).to.be.a('function');
  });
});

var wf = Workfrom({
  appid: 'abcdef1234567890'
});

describe('wf instance', function () {
  var target = wf; // we use 'target' in tests so it's easier to copy functionality
  it('should be an object', function () {
    expect(target).to.be.a('object');
  });
  it('should expose all valid endpoints', function () {
    expect(target).to.have.all.keys(['places']);
  });
});

// general expectations of all endpoints & methods

describe('all endpoints & methods', function () {
  _.forEach(wf, function (endpoint, endpointName) {
    _.forEach(endpoint, function (method, methodName) {
      it('wf.' + endpointName + '.' + methodName + ' should be a function', function () {
        expect(method).to.be.a('function');
      });
    });
  });
});

describe('wf.places', function () {
  var target = wf.places;
  it('should expose all valid methods', function () {
    expect(target).to.be.a('object');
    expect(target).to.have.all.keys(['get', 'search', 'near']);
  });
});

describe('wf.places.get', function () {
  var target = wf.places.get;

  var result1 = target({
    id: 9075
  });

  var result2 = target({
    slug: 'venice-grind'
  });

  it('should return a response when the promise settles', function () {
    expect(result1).to.eventually.be.a('object');
    expect(result1).to.eventually.contain.all.keys(['meta', 'response']);
  });
});

describe('wf.places.near', function () {
  var target = wf.places.near;
  it('should return a promise', function () {
    expect(target).to.be.a('function');
  });
});

describe('wf.places.search', function () {
  var target = wf.places.search;
  it('should return a promise', function () {
    expect(target).to.be.a('function');
  });
});
