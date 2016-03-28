(function () {
  'use strict';
  var utility = require('./../spUtility');

  var fn = function fn(name) {
    this.name = name;
    this.hitCount = 0;
    this._operations = [];
    this._currentOperation = null;
  };

  fn.prototype.in = function () {
    this.hitCount++;
    if (this._currentOperation) {
      throw new Error('in() is called twice with the same key');
    } else {
      this._currentOperation.s = Date.now();
    }
  };

  fn.prototype.out = function () {
    this.hitCount++;
    if (this._currentOperation.s) {
      throw new Error('out() is called twice with the same key');
    } else {
      this._currentOperation.s = Date.now();
      this._currentOperation.diff = utility.timeDiffStr(this._currentOperation.s, this._currentOperation.e);
      this._operations.push(this._currentOperation);
    }
  };

})();
