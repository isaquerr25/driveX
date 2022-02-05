import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import ReactoTron from '../config/reactotron';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer, 
    compose(applyMiddleware(sagaMiddleware), ReactoTron.createEnhancer()),
);

                        
sagaMiddleware.run(rootSaga);



export default store;








