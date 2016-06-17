import {expect} from 'chai';
import Workfrom from '../lib';

describe('Workfrom constructor', function () {
  it('should return a constructor function', function () {
    expect(Workfrom).to.be.a('function');
  });
});

let wf = Workfrom({
  id: 'abcdef1234567890'
});

describe('Workfrom instance', function () {
  it('should be an object', function () {
    expect(client).to.be.a('object');
  });
});
