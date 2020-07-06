import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import * as home from './home/actions';

import homeReducer from './home/reducer';

export const actions = {
    home,
};

const rootReducer = combineReducers({
    home: homeReducer,
});


const middleware = [thunk];

export const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

