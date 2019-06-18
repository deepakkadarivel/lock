import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import rootReducer from '../reducers';

const middleware = applyMiddleware(thunk);

// todo: uncomment to enable redux tools

/** const reduxDevTools =
    eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
 */

const store = createStore(rootReducer, compose(middleware));
export default store;
