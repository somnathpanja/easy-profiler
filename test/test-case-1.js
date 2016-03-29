require('./../index');

SF.begin('HI');
for(var i =0 ;i<1000;i++){
  var j= 0+9;
}
SF.end('HI');

SF.begin('HI');
for(var i =0 ;i<100000;i++){
  var j= 0+9;
}
SF.end('HI');

SF.begin('HI');
for(var i =0 ;i<100000;i++){
  var j= 0+9;
}
SF.end('HI',true);
SF.report(true);