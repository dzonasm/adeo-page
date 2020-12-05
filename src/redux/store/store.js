import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../root-reducer/root-reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../root-saga/root-saga'
import logger from 'redux-logger'



const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}


export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)
