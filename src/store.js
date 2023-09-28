import {createStore ,combineReducers} from "redux"

// reducers import 
import todoReducers from "./reducers/todoReducer"

const reducers = combineReducers ({todo : todoReducers}) 
const store =createStore(reducers) 


export default store 