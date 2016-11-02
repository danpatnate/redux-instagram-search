import webpack from 'webpack';
import url from 'url';
import webDevMiddleware from 'webpack-dev-middleware';
import webHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import _ from 'lodash';
import cookieParser from 'cookie-parser';
import config from './webpack.config';
import featureConfig from './config/default.json';
import apiRoutes from './routes/api';

const app = express();
const port = 3001;
const compiler = webpack(config);

app.use(webDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webHotMiddleware(compiler));
app.use(cookieParser());

app.use('/static', express.static('static'));

app.use('/coverage', express.static(`${__dirname}/coverage/lcov-report`));

app.get('/coverage/index.html', (req, res) =>
  res.sendFile(`${__dirname}/coverage/lcov-report/index.html`)
);

// API calls
app.use('/api', apiRoutes);

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(port, err => {
  if (err) {
    console.error(err);
  } else {
    console.info('Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});
