require('./../index');

SP.begin('HI');
for(var i =0 ;i<1000;i++){
  var j= 0+9;
}
SP.end('HI');

SP.begin('HI');
for(var i =0 ;i<100000;i++){
  var j= 0+9;
}
SP.end('HI');

SP.begin('HI');
for(var i =0 ;i<100000;i++){
  var j= 0+9;
}
SP.end('HI',true);
SP.report(true);