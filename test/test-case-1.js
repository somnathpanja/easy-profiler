require('./../index');

PROFILLER.begin('HI');
for(var i =0 ;i<1000;i++){
  var j= 0+9;
}
PROFILLER.end('HI');

PROFILLER.begin('HI');
for(var i =0 ;i<1000;i++){
  var j= 0+9;
}
PROFILLER.end('HI');

PROFILLER.begin('HI');
for(var i =0 ;i<1000;i++){
  var j= 0+9;
}
PROFILLER.end('HI');
PROFILLER.report(true);