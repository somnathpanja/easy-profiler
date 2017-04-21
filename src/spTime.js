(function () {
  'use strict';
  require('./spBase');
  var List = require('jscollection').List;
  var FN = require('./model/function');
  EP.consolidatedReport = true;

  EP.begin = function (jobName) {
    if (!this.isEnabled) return;
    var fn = EP._d[jobName] ? EP._d[jobName] : new FN(jobName);
    EP._d[jobName] = fn;
    fn.in();
  };

  EP.end = function (jobName, printInConsole) {
    if (!this.isEnabled) return;
    var fn = EP._d[jobName];
    if (!fn) throw new Error(jobName + ' is not started. Make sure begin is called before end');
    fn.out();
    var info = fn.info();

    if (info && EP.consolidatedReport)
      EP._history.push(info);

    if (info && printInConsole) {
      console.log(JSON.stringify(info));
    }

    return info;
  };

  EP.report = function (printInConsole) {
    if (!this.isEnabled) return;
    var history = EP._history;

    if (printInConsole) {
      if (history.length === 0) {
        console.log('Profiling report is not available yet!');
        return history;
      } else {
        console.log("┌───────────────────╮");
        console.log("│ Profiling Summary │");
        List.toList(history).printInConsoleAsTable();
      }
    }

    EP._history = [];
    return history;
  };

})();
