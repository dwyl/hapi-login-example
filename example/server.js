var Hapi   = require('hapi'); https://github.com/nelsonic/learn-hapi
var Vision = require('vision');
var server = new Hapi.Server(); // { debug: {"request": ["error", "uncaught"]} })
var assert = require('assert');

var custom_fields  = require('./model');      // fields required to register
var custom_handler = require('./controller'); // handler for registration
var opts = {
  fields: custom_fields,
  handler: custom_handler,
  fail_action_handler: custom_handler
};

server.connection({ port: process.env.PORT });
server.register([Vision,
  { register: require('hapi-register'), options:opts }], function (err) {
  assert(!err, 'Failed to load plugin: ', err); // FATAL ERROR!
  server.views({
      engines: { html: require('handlebars') },
      path: __dirname +'/'
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: custom_handler // display registration form
  });
});

server.start(function() {
  console.log('Visit: http://127.0.0.1:'+server.info.port);
});

module.exports = server;
