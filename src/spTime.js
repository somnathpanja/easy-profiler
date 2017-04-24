(function () {
  'use strict';
  require('./spBase');
  var List = require('jscollection').List;
  var FN = require('./model/function');

  EP.begin = function (jobName) {
    if (!this.isEnabled) return;
    var fn = EP._jobsByName[jobName] ? EP._jobsByName[jobName] : new FN(jobName);
    EP._jobsByName[jobName] = fn;
    var token = fn.in();
    EP._jobTokens[token] = fn;
    return {
      token: token,
      end: function (printInConsole) {
        EP.end(token, printInConsole);
      }
    };
  };

  EP.end = function (token, printInConsole) {
    if (!this.isEnabled) return;
    var fn = EP._jobTokens[token];
    if (!fn) throw new Error(token + ' is invalid. Make sure that begin is called before end');
    fn.out(token);
    var info = fn.info();

    if (info && printInConsole) {
      console.log(JSON.stringify(info));
    }

    return info;
  };

  EP.report = function (printInConsole) {
    if (!this.isEnabled) return;
    var history = new List();

    if (printInConsole) {
      if (Object.keys(EP._jobsByName).length === 0) {
        console.log('Profiling report is not available yet!');
        return history;
      } else {
        console.log("┌───────────────────╮");
        console.log("│ Profiling Summary │");

        for (var jobName in EP._jobsByName) {
          if (EP._jobsByName.hasOwnProperty(jobName)) {
            history.add(EP._jobsByName[jobName].info());
          }
        }

        history.printInConsoleAsTable();
      }
    }

    EP._history = [];
    return history;
  };

})();
