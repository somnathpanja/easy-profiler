(function () {
  'use strict';

  if (GLOBAL.SP) {
    return;
  } else {
    GLOBAL.SP = {_d: {}, _history: [], keys: {}};
    SP.keys.add = function (keys) {
      for(var k in keys){
        SP.keys[k] = keys[k];
      }
    }
  }
})();