
import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {getProductsReducer,getDetailsReducer} from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer';

const middleware=[thunk];

const reducer = combineReducers({
    // Add reducers here
    getProducts:getProductsReducer,
    getProductDetails:getDetailsReducer,
    cart:cartReducer,
});


const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)));

export default store;
