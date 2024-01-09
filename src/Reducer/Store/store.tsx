import {applyMiddleware, combineReducers, createStore, legacy_createStore} from 'redux'
import {counterReducer} from "../CounterReducer";
import {customerReducer} from "../CustomerReducer";
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({
    count: counterReducer,
    customer: customerReducer,
})
export const store = legacy_createStore(rootReducer)
// export const store = createStore(rootReducer, applyMiddleware(thunk));
// export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store