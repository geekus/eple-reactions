const express = require('express');
const horizon = require('@horizon/server');
const path = require('path');

const app = express();

app.use('/horizon', express.static(path.join(__dirname, 'node_modules/@horizon/client/dist')));
app.use('/client.js', express.static(path.join(__dirname, 'client.js')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const server = app.listen(8080, function () {
  console.log('Server listening on port 8080.');
});

const options = {
  rdb_host: 'rethinkdb',
  rdb_port: 28015,
  auto_create_collection: true,
  auto_create_index: true,
  project_name: 'eple',
  permissions: false,
  auth: {
    allow_anonymous: true,
    allow_unauthenticated: true,
    token_secret: 'not_very_secret'
  }
};

horizon(server, options);
