(function () {
  'use strict';
  var spUtility = {};

  spUtility.timeDiffStrSE = function (start, end) {
    var tsDifInMs = (end - start);
    return spUtility.timeDiffStr(tsDifInMs);
  };

  spUtility.timeDiffStr = function (tsDifInMs) {
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

  /**
   * @description change display format of a date
   * @param date {Date} Date object reference
   * @param fstr {String} Format string. See the example
   * @param utc {Boolean} Whether it in UTC or not
   * @example customDateFormat (new Date (), "%Y-%m-%d %H:%M:%S", true);
   * @returns {String}
   */
  spUtility.dateFormat = function (date, fstr, utc) {
    utc = utc ? 'getUTC' : 'get';
    return fstr.replace(/%[YmdHMS]/g, function (m) {
      switch (m) {
        case '%Y':
          return date[utc + 'FullYear'](); // no leading zeros required
        case '%m':
          m = 1 + date[utc + 'Month']();
          break;
        case '%d':
          m = date[utc + 'Date']();
          break;
        case '%H':
          m = date[utc + 'Hours']();
          break;
        case '%M':
          m = date[utc + 'Minutes']();
          break;
        case '%S':
          m = date[utc + 'Seconds']();
          break;
        case '%ms':
          m = date[utc + 'MilliSeconds']();
          break;
        default:
          return m.slice(1); // unknown code, remove %
      }
      // add leading zero if required
      return ('0' + m).slice(-2);
    });
  }
  module.exports = spUtility;

})();

