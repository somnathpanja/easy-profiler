(function () {
  'use strict';

  if (global.EP) {
    return;
  } else {
    global.EP = {_d: {}, _history: [], keys: {}, isEnabled: true};
    EP.keys.add = function (keys) {
      for (var k in keys) {
        EP.keys[k] = keys[k];
      }
    }
  }
})();
