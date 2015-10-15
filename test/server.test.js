var test   = require('tape');
// we display the file (name) in each test name
var dir   = __dirname.split('/')[__dirname.split('/').length-1];
var file  = dir + __filename.replace(__dirname, '') + ' -> ';

/************************ LOAD HAPI SERVER ***************************/
var server = require("../example/server.js");

/************************* TESTS ***************************/
test(file + "GET / Warm Up the Engine", function(t) {
  var options = {
    method: "GET",
    url: "/"
  };
  server.inject(options, function(response) {
    t.equal(response.statusCode, 200, "Server is working.");

    t.end();
  });
});

var test_email = 'dwyl.test+register@gmail.com'

test(file+"/register Without Name", function(t) {
  var options = {
    method: "POST",
    url: "/register",
    payload : { email: test_email }
  };

  server.inject(options, function(response) {
    // console.log(response)
    t.equal(response.statusCode, 400, "Name is required!");
    server.stop(function(){ t.end() });
  });
});

test(file+"/register Without Email", function(t) {
  var options = {
    method: "POST",
    url: "/register",
    payload : { name: 'Jimmy' }
  };

  server.inject(options, function(response) {
    // console.log(response)
    t.equal(response.statusCode, 400, "Email is required!");
    server.stop(function(){ t.end() });
  });
});

test(file+"/register With Valid Data (Success Test)", function(t) {
  var options = {
    method: "POST",
    url: "/register",
    payload : { name: 'Jimmy', email: test_email }
  };

  server.inject(options, function(response) {
    // console.log(response)
    t.equal(response.statusCode, 200, "Great Success!");
    server.stop(function(){ t.end() });
  });
});
