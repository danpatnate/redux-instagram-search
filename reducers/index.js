import { combineReducers } from 'redux';
import { tags, self } from './tags';

const app = combineReducers({
  tags,
  self,
});

export default app;
