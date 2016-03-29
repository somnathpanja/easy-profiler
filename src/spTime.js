(function () {
  'use strict';
  require('./spBase');
  var FN = require('./model/function');
  SP.consolidatedReport = true;

  SP.begin = function (jobName) {
    var fn = SP._d[jobName] ? SP._d[jobName] : new FN(jobName);
    SP._d[jobName] = fn;
    fn.in();
  };

  SP.end = function (jobName, printInConsole) {
    var fn = SP._d[jobName];
    if (!fn) throw new Error(jobName + ' is not started. Make sure begin is called before end');
    fn.out();
    var info = fn.info();
    SP._history.push(info);

    if (printInConsole) {
      console.log(JSON.stringify(info));
    }

    return info;
  };

  SP.report = function (printInConsole) {
    var history = SP._history;
    if (printInConsole) {
      console.log("\n******************** Profiling Summery ********************");
      history.forEach(function (item, index) {
        console.log(index + '> ' + JSON.stringify(item));
      });
      console.log("***********************************************************\n");
    }

    SP._history = [];
    return history;
  };

})();