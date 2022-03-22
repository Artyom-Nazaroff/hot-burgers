import {combineReducers, createStore} from "redux";
import commonReducer from "./commonReducer";


const reducers = combineReducers({
    reducer: commonReducer,
});

export const store = createStore(reducers);