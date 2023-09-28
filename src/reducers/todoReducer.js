function todoReducers ( state =[] , action )  {
    if(action.type =="add_todo" ) {
        // Like we will get the arguments of the particular function in the action.payload 
        let todoText = action.payload.todoText; 
        return [...state,  {todoData  :todoText , finished : false, id : state.length  + 1}]
    }
    else if (action.type=="edit_todo"){
        let todo = action.payload.todo 
        let todoText = action.payload.todoText 
        const updatedList = state.map ((t) => { 
            if(t.id === todo.id) {
                todo.todoData =todoText
            }
            return t ; 

        })
        return updatedList
    } 
    else if (action.type=="delete_todo") {
        const todo = action.payload.todo 
        const updatedList = state.filter((e) => e.id != todo.id)
        return updatedList
    } else if (action.type == "on_finished") { 
        let  isFinished =  action.payload.onFinished 
        const todo = action.payload.todo 
        const updatedList =state.map(t => {
            if(t.id == todo.id) {
                todo.finished = isFinished 
            }
            return t 

        })
        return updatedList
    }
    else { 
        return state
    }

}
export default todoReducers