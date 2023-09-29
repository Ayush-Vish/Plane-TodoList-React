import {createStore ,combineReducers} from "redux"

// reducers import 
import todoReducers from "./reducers/todoReducer"

const reducers = combineReducers ({todo : todoReducers}) 

// We are doing this without redux toolkit  
// const store =createStore(reducers) 


// for redux toolkit  the way of making  store is 
import todoReducer from "./slices/todo.slice.js"
import { configureStore } from "@reduxjs/toolkit"

// in case of redux toolkit we have to configure the store
const store = configureStore({ 
    reducer : {
        todo : todoReducer 

    }
    , 
    devTools:  process.env.NODE_ENV !== "production" 
    
})



export default store 