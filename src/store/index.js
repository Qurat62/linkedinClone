import {createStore,applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";
const store=createStore
(
    rootReducer,
    // initialState,
    applyMiddleware(thunkMiddleware)
     // (applyMiddleware(...middleware))
    );
export default store;