import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(
 thunkMiddleware
));

const delayedActionCreator = (timeout) => (dispatch) => {
 setTimeout(() => dispatch({
  type: 'DELAYED_ACTION'
 }), timeout);
};

store.dispatch(delayedActionCreator(3000));

export default store;