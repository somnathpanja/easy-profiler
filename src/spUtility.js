(function () {
  'use strict';
  var spUtility = {};

  spUtility.timeDiffStr = function (start, end) {
    var tsDifInMs = (start - end);
    var str = '';
    if (tsDifInMs > 1000) {
      var tsDifInSec = tsDifInMs / 1000;
      if (tsDifInSec > 60) {
        var tsDifInMinute = tsDifInSec / 60;
        if (tsDifInMinute > 60) {
          var tsDifInHour = tsDifInMinute / 60;
          if (tsDifInHour > 60) {
            str = tsDifInHour + 'hours';
          } else {
            str = tsDifInHour + 'minutes';
          }
        } else {
          str = tsDifInMinute + 'minutes';
        }
      } else {
        str = tsDifInSec + 'sec';
      }
    } else {
      str = tsDifInMs + 'ms';
    }

    return str;
  };

  module.exports = spUtility;

})();

