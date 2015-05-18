var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var chaiAsPromised = require("chai-as-promised");
var expect = chai.expect;
chai.use(sinonChai);
chai.use(chaiAsPromised);
var Firebase = require('firebase');

describe('e2e tests::', function () {
  this.timeout(10000);
  var ref;
  before(function () {
    ref = new Firebase('https://castle-travis.firebaseio.com/');
  });
  after(function () {
    // ref.off();
    // Firebase.goOffline();
  });
  it('should respect logic', function () {
    expect(true).to.be.true;
    expect(true).not.to.be.false;
  });
  //TODO: add e2e tests here
});
