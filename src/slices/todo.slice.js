import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo : [] 
}

const todoSlice = createSlice({
    name : "todo" , 
    initialState, 
    reducers:  {
        addTodo : (state ,action) => { 
            let todoText = action.payload.todoText
            state.push({id: state.todo.length +1 , todoData : todoText ,finished: false} ) 

        }, 
        editTodo : (state ,action ) =>  {
            let todoText = action.payload.todoText 
            let todo  = action.payload.todo
            state.todo=  state.todo.map(t => {
                if(t.id == todo.id) {
                    todo.todoData = todoText
                }
                return t ; 
            })
        }, 
        todoFinished : (state ,action ) => { 
            let  isFinished =  action.payload.onFinished 
            const todo = action.payload.todo 
            state.todo  =state.todo.map(t => {
                if(t.id == todo.id) {
                    todo.finished = isFinished 
                }
                return t 
            })
        }, 
        deleteTodo : (state , action ) => { 
            let todo = action.payload.todo 
            state.todo = state.todo.filter(t => t.id != todo.id) 
        }
    }
})

export const { addTodo , deleteTodo , editTodo ,todoFinished  } =  todoSlice.actions
export default todoSlice.reducer