#! /usr/bin/env node 

var fs = require('fs');
var babel = require('babel-core');
var helloscript = require('./helloscript');

console.log(helloscript);

var fileName = process.argv[2];

fs.readFile(fileName, function(err, data) {
  if(err) throw err;

  var src = data.toString();
  var out = babel.transform(src, {
    plugins: [helloscript]
  });

  console.log(out.code);
});