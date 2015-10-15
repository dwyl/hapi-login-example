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

test(file+"/login without password", function(t) {
  var options = {
    method: "POST",
    url: "/login",
    payload : { email: test_email }
  };

  server.inject(options, function(response) {
    // console.log(response)
    t.equal(response.statusCode, 400, "Password is required!");
    server.stop(function(){ t.end() });
  });
});

test(file+"/login without email", function(t) {
  var options = {
    method: "POST",
    url: "/login",
    payload : { password: 'Jimmy' }
  };

  server.inject(options, function(response) {
    // console.log(response)
    t.equal(response.statusCode, 400, "Email is required!");
    server.stop(function(){ t.end() });
  });
});

test(file+"/login With Valid Data (Success Test)", function(t) {
  var options = {
    method: "POST",
    url: "/login",
    payload : { email: test_email, password: 'supersecret' }
  };

  server.inject(options, function(response) {
    // console.log(response)
    t.equal(response.statusCode, 200, "Great Success!");
    server.stop(function(){ t.end() });
  });
});
