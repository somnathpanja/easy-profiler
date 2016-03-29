require('./../index');
var fs = require('fs');
// Keep all the keys at one place, plan what are the functions you are going to profile
SF.keys.add({
  READ_FROM_HOST_FILE: "Read from host file",
  JUST_FOR_LOOP_1: "Just a forloop for testing 1",
  JUST_FOR_LOOP_2: "Just a forloop for testing 2"
});

// SAVE_IN_ORACLE_DB job starts here logically right?
SF.begin(SF.keys.READ_FROM_HOST_FILE);
fs.readFile('/etc/hosts', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  console.log(data);

  // SAVE_IN_ORACLE_DB job ends here
  SF.end(SF.keys.READ_FROM_HOST_FILE);


  SF.begin(SF.keys.JUST_FOR_LOOP_1);
  for (var i = 0; i < 1000000; i++) {
    var j = 0 + 9; // Just time pass
  }
  SF.end(SF.keys.JUST_FOR_LOOP_1);

  SF.begin(SF.keys.JUST_FOR_LOOP_2);
  for (var i = 0; i < 1000000; i++) {
    var j = 0 + 9; // Just time pass
  }
  SF.end(SF.keys.JUST_FOR_LOOP_2);

  // Yes final report is here
  SF.report(true);
});