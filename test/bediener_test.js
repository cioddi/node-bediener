'use strict';

var exec = require('child_process').exec;
var spawn = require('child_process').spawn;


// console.log(bediener);

exports['bediener'] = {
  setUp: function(done) {

    done();
  },
  'no args': function(test) {
    test.expect(1);
      exec('curl http://localhost:6000/test/testtext.txt',function(err,stdout,stderr){
        console.log(stderr);
        console.log(err);
        console.log(stdout);
        test.equal(stdout, 'text123', 'should be "text123".');
        // bediener.close();
        test.done();
      });
  },
};