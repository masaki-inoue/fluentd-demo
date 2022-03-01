const express = require('express');
const FluentClient = require('@fluent-org/logger').FluentClient;
const app = express();

// The 2nd argument can be omitted. Here is a default value for options.
const logger = new FluentClient('fluentd.test', {
  socket: {
    host: process.env.FLUENTD_HOST || 'localhost',
    port: 24224,
    timeout: 3000, // 3 seconds
  }
});

let n = 0;
app.get('/', function(request, response) {
  n += 1;
  const cnt = n;

  setTimeout(() => {
    logger.emit('follow', {from: 'userA', to: 'userB', cnt: cnt});
    response.send('Hello World!');
  }, Math.ceil(Math.random() * 500));
});
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

