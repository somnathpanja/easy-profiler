require('./../index');
var fs = require('fs');
// Keep all the keys at one place, plan what are the functions you are going to profile
SP.keys.add({
  READ_FROM_HOST_FILE: "Read from host file",
  JUST_FOR_LOOP_1: "Just a forloop for testing 1",
  JUST_FOR_LOOP_2: "Just a forloop for testing 2"
});

// SAVE_IN_ORACLE_DB job starts here logically right?
SP.begin(SP.keys.READ_FROM_HOST_FILE);
fs.readFile('/etc/hosts', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  console.log(data);

  // SAVE_IN_ORACLE_DB job ends here
  SP.end(SP.keys.READ_FROM_HOST_FILE);


  SP.begin(SP.keys.JUST_FOR_LOOP_1);
  for (var i = 0; i < 1000000; i++) {
    var j = 0 + 9; // Just time pass
  }
  SP.end(SP.keys.JUST_FOR_LOOP_1);

  SP.begin(SP.keys.JUST_FOR_LOOP_2);
  for (var i = 0; i < 1000000; i++) {
    var j = 0 + 9; // Just time pass
  }
  SP.end(SP.keys.JUST_FOR_LOOP_2);

  // Yes final report is here
  SP.report(true);
});