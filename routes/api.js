import express from 'express';
import config from 'config';
import axios from 'axios';
import _ from 'lodash';

const router = express.Router();
const reactStarter = config.get('react-starter');
const API_PATH = `${config.feature.oAuth}`;

axios.defaults.baseURL = reactStarter;

router.all('*', (req, res, next) => {

  if (!req.query) return res.location(API_PATH);

  return next();
});

export default router;
