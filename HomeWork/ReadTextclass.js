
var fs1=require('fs');
var ManchesterUnited=fs1.readFileSync('ManchesterUnited.txt','utf8');

var fs2=require('fs');
var Liverpool=fs2.readFileSync('Liverpool.txt','utf8');

var fs3=require('fs');
var Chelsea=fs3.readFileSync('Chelsea.txt','utf8');

exports.M=ManchesterUnited;
exports.L=Liverpool;
exports.C=Chelsea;

