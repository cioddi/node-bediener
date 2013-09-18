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
var args = require('cliargs');
var http = require('http');

var argsObj = args.parse();

if(typeof argsObj.p !== 'undefined')var port = parseInt(argsObj.p,10);
else var port = 9999;


exec('pwd', function(err, stdout, stderr) {
  var cwd = stdout;
  cwd = cwd.replace('\n','');

	connect(
		connect.favicon()
	  , connect.logger()
	  , connect.directory( cwd )
	  , connect.static( cwd )
	).listen(port);

	console.log('Static server started on http://localhost:' + port + ' \nserving: ' + cwd);
});