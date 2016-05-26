(function () {
  'use strict';
  require('./spBase');
  var List = require('jscollection').List;
  var FN = require('./model/function');
  EP.consolidatedReport = true;

  EP.begin = function (jobName) {
    var fn = EP._d[jobName] ? EP._d[jobName] : new FN(jobName);
    EP._d[jobName] = fn;
    fn.in();
  };

  EP.end = function (jobName, printInConsole) {
    var fn = EP._d[jobName];
    if (!fn) throw new Error(jobName + ' is not started. Make sure begin is called before end');
    fn.out();
    var info = fn.info();

    if(EP.consolidatedReport)
      EP._history.push(info);

    if (printInConsole) {
      console.log(JSON.stringify(info));
    }

    return info;
  };

  EP.report = function (printInConsole) {
    var history = EP._history;
    if (printInConsole) {
      console.log("┌───────────────────╮");
      console.log("│ Profiling Summery │");
      List.toList(history).printInConsoleAsTable();
    }

    EP._history = [];
    return history;
  };

})();