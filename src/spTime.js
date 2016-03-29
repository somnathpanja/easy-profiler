(function () {
  'use strict';
  require('./spBase');
  var FN = require('./model/function');
  SF.consolidatedReport = true;

  SF.begin = function (jobName) {
    var fn = SF._d[jobName] ? SF._d[jobName] : new FN(jobName);
    SF._d[jobName] = fn;
    fn.in();
  };

  SF.end = function (jobName, printInConsole) {
    var fn = SF._d[jobName];
    if (!fn) throw new Error(jobName + ' is not started. Make sure begin is called before end');
    fn.out();
    var info = fn.info();
    SF._history.push(info);

    if (printInConsole) {
      console.log(JSON.stringify(info));
    }

    return info;
  };

  SF.report = function (printInConsole) {
    var history = SF._history;
    if (printInConsole) {
      console.log("\n******************** Profiling Summery ********************");
      history.forEach(function (item, index) {
        console.log(index + '> ' + JSON.stringify(item));
      });
      console.log("***********************************************************\n");
    }

    SF._history = [];
    return history;
  };

})();