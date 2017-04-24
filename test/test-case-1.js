require('./../index');

var loop1 = EP.begin('HI');
for (var i = 0; i < 1000; i++) {
  var j = 0 + 9;
}
loop1.end();

var loop2 = EP.begin('HI');
for (var i = 0; i < 100000; i++) {
  var j = 0 + 9;
}
loop2.end();

var loop3 = EP.begin('HI');
for (var i = 0; i < 100000; i++) {
  var j = 0 + 9;
}
loop3.end();
EP.report(true);