(function () {
  'use strict';

  if (GLOBAL.SF) {
    return;
  } else {
    GLOBAL.SF = {_d: {}, _history: [], keys: {}};
    SF.keys.add = function (keys) {
      for(var k in keys){
        SF.keys[k] = keys[k];
      }
    }
  }
})();