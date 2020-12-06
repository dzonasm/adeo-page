import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from '../root-reducer/root-reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../root-saga/root-saga'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createBrowserHistory()



const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}


export const store = createStore(
    createRootReducer(history),
    composeWithDevTools(
        applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)
