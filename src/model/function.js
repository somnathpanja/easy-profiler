(function () {
  'use strict';
  var utility = require('./../spUtility');

  var fn = function fn(name) {
    this.name = name;
    this.hitCount = 0;
    this.operation = null;
  };

  fn.prototype.info = function () {
    var opr = this.operation;
    if(opr) {
      return {name: this.name, hitCount: this.hitCount, duration: opr.diff, start: opr.s, end: opr.e};
    }
  };

  fn.prototype.in = function () {
    this.hitCount++;
    if (this.operation && this.operation.e) {
      throw new Error('in() is called twice with the same key');
    } else {
      this.operation = {s: Date.now()};
    }
  };

  fn.prototype.out = function () {
    if(!this.operation) return;

    if (!this.operation.s) {
      throw new Error('out() is called twice with the same key');
    } else {
      this.operation.e = Date.now();
      this.operation.diff = utility.timeDiffStr(this.operation.s, this.operation.e);
    }
  };

  module.exports = fn;

})();
