import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import feedReducer from './feed/feed';

const reducer = combineReducers({
  feeds: feedReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
