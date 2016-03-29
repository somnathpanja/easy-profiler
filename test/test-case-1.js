require('./../index');

EP.begin('HI');
for(var i =0 ;i<1000;i++){
  var j= 0+9;
}
EP.end('HI');

EP.begin('HI');
for(var i =0 ;i<100000;i++){
  var j= 0+9;
}
EP.end('HI');

EP.begin('HI');
for(var i =0 ;i<100000;i++){
  var j= 0+9;
}
EP.end('HI',true);
EP.report(true);