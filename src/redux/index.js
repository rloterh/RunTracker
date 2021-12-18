import { combineReducers } from 'redux';
import userReducer from './user/user';
import sprintReducer from './sprint/sprint';
import singleSprintReducer from './singleSprint/singleSprint';

const reducers = combineReducers({
  sprint: sprintReducer,
  user: userReducer,
  singleSprint: singleSprintReducer,
});

export default reducers;
