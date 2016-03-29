(function () {
  'use strict';

  if (GLOBAL.EP) {
    return;
  } else {
    GLOBAL.EP = {_d: {}, _history: [], keys: {}};
    EP.keys.add = function (keys) {
      for(var k in keys){
        EP.keys[k] = keys[k];
      }
    }
  }
})();