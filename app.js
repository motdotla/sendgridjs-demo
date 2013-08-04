// Setup Hapi Server
var Hapi        = require('hapi');
var port        = parseInt(process.env.PORT) || 3000;
server          = new Hapi.Server(+port, '0.0.0.0', { cors: true });

// Build Route
var email = {
  handler: function (request) {
    var payload   = request.payload;

    console.log("Email route had payload: " + payload);

    request.reply({ success: true });
  }
};

// Add Route
server.addRoute({
  method  : 'POST',
  path    : '/email',
  config  : email
});

// Run Server
server.start(function() {
  console.log('Server started at: ' + server.info.uri);
});
