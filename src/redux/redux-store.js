import {applyMiddleware, combineReducers, createStore} from "redux";

import thunkMiddleware from "redux-thunk";
import productsReducer from "./products-reducer";
let reducers = combineReducers({
    productsPage: productsReducer,

});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;



export default store;