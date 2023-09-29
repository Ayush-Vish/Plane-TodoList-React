import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList : [] 
}

const todoSlice = createSlice({
    name : "todo" , 
    initialState, 
    reducers:  {
        addTodo : (state ,action) => { 
            let todoText = action.payload.todoText
            state.todoList.push({id: state.todoList.length +1 , todoData : todoText ,finished: false} ) 

        }, 
        editTodo : (state ,action ) =>  {
            let todoText = action.payload.todoText 
            let todo  = action.payload.todo
            state.todoList=  state.todoList.map(t => {
                if(t.id == todo.id) {
                    t.todoData = todoText
                }
                return t ; 
            })
        }, 
        todoFinished : (state ,action ) => { 
            let  isFinished =  action.payload.onFinished 
            const todo = action.payload.todo 
            state.todoList  =state.todoList.map(t => {
                if(t.id == todo.id) {
                    t.finished = isFinished 
                }
                return t 
            })
        }, 
        deleteTodo : (state , action ) => { 
            let todo = action.payload.todo 
            state.todoList = state.todoList.filter(t => t.id != todo.id) 
        }
    }
})

export const { addTodo , deleteTodo , editTodo ,todoFinished  } =  todoSlice.actions
export default todoSlice.reducer