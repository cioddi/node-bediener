'use strict';

var exec = require('child_process').exec;
var spawn = require('child_process').spawn;
var bediener = spawn('./lib/bediener.js');

// console.log(bediener);

exports['bediener'] = {
  setUp: function(done) {
    bediener.stdout.on('data', function (data) {
      // console.log(data);
      done();
    });
  },
  'no args': function(test) {
    test.expect(1);
    setTimeout(function(){
      exec('curl http://localhost:9999/test/testtext.txt',function(err,stdout,stderr){

        test.equal(stdout, 'text123', 'should be "text123".');
        // bediener.close();
        test.done();
      });
    },5000);
  },
};