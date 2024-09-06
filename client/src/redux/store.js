import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { getProductsReducer, getDetailsReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // Add reducers you want to persist here
};

const rootReducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getDetailsReducer,
    cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export { persistor };
export default store; // Export store as default
