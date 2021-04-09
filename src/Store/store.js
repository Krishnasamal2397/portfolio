import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./combineReducer";
import watchersrootSaga from "./saga";

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  // compose(applyMiddleware(sagaMiddleware))
  composeEnhancers(applyMiddleware(sagaMiddleware))
  // window.__REDUX_DEVTOOLS_EXTENSION__ ?
  // compose(
  //     applyMiddleware(sagaMiddleware),
  //     window.__REDUX_DEVTOOLS_EXTENSION__(),
  // ) : applyMiddleware(sagaMiddleware),
);

// const store = createStore(
//   rootReducer, applyMiddleware(sagaMiddleware)
// );
sagaMiddleware.run(watchersrootSaga);

export default store;
// import { applyMiddleware, createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';

// import reducers  from '../reducers';
// import watchersSaga from '../sagas/watchersSaga';

// export default function getStore() {
// const sagaMiddleware = createSagaMiddleware();

//     const store = createStore(
//       reducers, applyMiddleware(sagaMiddleware)
//     );

//     sagaMiddleware.run(watchersSaga);

//     return store;
//   }  
// export const store = () => {
//   let store =
//       createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), reduxDevTools))
//   sagaMiddleware.run(rootSaga);
//   return store;
// };
// export default store;