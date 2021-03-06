import express from 'express';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import connection from './mysql';

const app = express();
const port = 3000;
const devPort = 3001;

if(process.env.NODE_ENV == 'development') {
  console.log('Server is running on development mode');
  
  const config = require('../webpack.dev.config');
  let compiler = webpack(config);
  let devServer = new WebpackDevServer(compiler, config.devServer);
  
  devServer.listen(devPort, () => {
    console.log('webpack-dev-server is listening on port', devPort);
  });
}

connection.connect();
app.use('/', express.static(__dirname + '/../public'));

import units from './route/units'
app.use('/units', units);

const server = app.listen(port, () => {
  console.log('Express listening on port', port);
})