(function () {
  'use strict';

  if (GLOBAL.PROFILLER){
    return;
  } else {
    GLOBAL.PROFILLER = {_d: {}};
  }

  PROFILLER.startJob = function (jobName) {
    GLOBAL.PROFILLER._d[jobName] = {s: Date.now(), e: null};
  };

  PROFILLER.stopJob = function (jobName) {
    var profile = GLOBAL.PROFILLER._d[jobName];
    if(!profile) return;
    profile.e = Date.now();
    delete GLOBAL.PROFILLER._d[jobName];
    var profileStr = GLOBAL.PROFILLER.getTimeDiff(jobName, profile);
    console.log(profileStr);
    return profileStr;
  };

  PROFILLER.getTimeDiff = function (jobName, profile) {
    //var tsDifInMs = (profile.e - profile.s);
    //var tsDifInSec = tsDifInMs / 1000;
    //var tsDifInMinute = tsDifInSec / 60;
    //var tsDifInHour = tsDifInMinute / 60;
    //var time = tsDifInMs + ' ms |' + tsDifInSec + ' sec |' + tsDifInMinute + ' min | ' + tsDifInHour + ' hr';
    //return '> #' + jobName + '# - Execution Time duration is ' + time;

    var tsDifInMs = (profile.e - profile.s);
    var tsDifInSec = tsDifInMs / 1000;
    var time =  tsDifInSec + ' sec';
    return '> #' + jobName + '# - Execution Time duration is ' + time;
  }

})();

PROFILLER.startJob('x');
PROFILLER.stopJob('x');