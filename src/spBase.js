(function () {
  'use strict';

  if (global.EP) {
    return;
  } else {
    global.EP = {_jobsByName: {}, _jobTokens: {}, keys: {}, isEnabled: true};
    EP.keys.add = function (keys) {
      for (var k in keys) {
        EP.keys[k] = keys[k];
      }
    }
  }
})();
