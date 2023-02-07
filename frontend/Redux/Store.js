import {configureStore , combineReducer, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import cartItems  from './Reducers/cartItem';

const reducers = combineReducer({
    cartItems: cartItems
})

const store = configureStore (
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))

)
export default store;