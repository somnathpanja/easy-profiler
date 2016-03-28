(function () {
  'use strict';
  require('./spBase');
  var FN = require('./model/function');

  PROFILLER.begin = function (jobName) {
    var fn = PROFILLER._d[jobName] ? PROFILLER._d[jobName] : new FN(jobName);
    PROFILLER._d[jobName] = fn;
    fn.in();
  };

  PROFILLER.end = function (jobName, printInConsole) {
    var fn = PROFILLER._d[jobName];
    if (!fn) throw new Error(jobName + ' is not started. Make sure begin is called before end');
    fn.out();
    var info = fn.info();
    PROFILLER._history.push(info);

    if(printInConsole){
      console.log(JSON.stringify(info));
    }

    return info;
  };

  PROFILLER.report = function (printInConsole) {
    var history = PROFILLER._history;
    if (printInConsole) {
      console.log("\n******************** Profiling Summery ********************");
      history.forEach(function(item, index){
        console.log(index + '> ' + JSON.stringify(item));
      });
      console.log("***********************************************************\n");
    }

    PROFILLER._history = [];
    return history;
  };

})();