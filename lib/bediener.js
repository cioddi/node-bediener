#!/usr/bin/env node

/*
 * bediener
 * https://github.com/cioddi/node-bediener
 *
 * Copyright (c) 2013 Max Tobias Weber
 * Licensed under the MIT license.
 */

var exec = require('child_process').exec;
var connect = require('connect');
var serveStatic = require('serve-static');
var serveIndex = require('serve-index');
var args = require('cliargs');
var cors = require('cors');

var argsObj = args.parse();

if(typeof argsObj.p !== 'undefined'){
  var port = parseInt(argsObj.p,10);
}else{
  var port = 9999;
}


exec('pwd', function(err, stdout) {
  var cwd = stdout;
  cwd = cwd.replace('\n','');

  var app = connect();

  app.use(cors());
  app.use(serveStatic(cwd));
  app.use(serveIndex(cwd, {'icons': true}))
  app.listen(port);
	
  console.log('Static server started on http://localhost:' + port + ' \nserving: ' + cwd);
});
