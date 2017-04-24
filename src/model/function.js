(function () {
  'use strict';
  var utility = require('./../spUtility');
  var List = require('jscollection').List;

  var fn = function fn(name) {
    this.name = name;
    this.hitCount = 0;
    this.callStack = {};
    this.timeDiffs = new List();
  };

  /* Is this function will be called multiple times in the call stack */
  fn.prototype.isMultiCall = function (){
    return this.hitCount;
  };

  fn.prototype.info = function () {
    if (this.hitCount > 1) {
      return {
        name: this.name,
        hitCount: this.hitCount,
        'duration(avg)': utility.timeDiffStr(this.timeDiffs.avg().toFixed(10)),
        start: 'na',
        end: 'na'
      };
    } else {
      var opr = this.callStack[Object.keys(this.callStack)[0]];
      return {
        name: this.name,
        hitCount: this.hitCount,
        'duration(avg)': utility.timeDiffStr(opr.diff.toFixed(10)),
        start: opr.s,
        end: opr.e
      };
    }
  };

  fn.prototype.in = function () {
    this.hitCount++;
    var closeToken = Date.now() + Math.random() * Math.random();
    this.callStack[closeToken] = {s: Date.now()};
    return closeToken;
  };

  fn.prototype.out = function (closeToken) {
    if (!closeToken) {
      console.log('WARNING: out was called without close token');
      return;
    }

    var operation = this.callStack[closeToken];

    if (!operation) {
      console.log('WARNING: Invalid close token');
      return;
    }

    operation.e = Date.now();
    operation.diff = operation.e - operation.s;
    this.timeDiffs.add(operation.diff);
  };

  module.exports = fn;
})();
