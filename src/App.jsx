
import {  useReducer, useState } from "react"
import AddToDo from "./components/AddTodo/AddToDo"
import ToDoList from "./components/ToDOList/ToDOlist"
import todoContext from "./context/todoContext"
import todoReducers from "./reducers/todoReducer"
import TodoDispatchContext from "./context/TodoDispatchContext"
function App() {
  // const [list ,setList] = useState( [
  //   {id: 1, todoData : "TODO 1" , finished :false},
  //   {id: 2, todoData : "TODO 2", finished :false},
  //   {id: 3, todoData : "TODO 3", finished :true}
  // ])
  
  // Using reducers 
  // Gives the state and a dispatch method 
  // and takes reducer file name  and initail object
   
  const [list , dispatch ] = useReducer(todoReducers , [])


  return (
    <todoContext.Provider  value={{list }}  >  
      <TodoDispatchContext.Provider value={{dispatch}}  >
        <AddToDo />
        <ToDoList />
      </TodoDispatchContext.Provider>
    </todoContext.Provider> 
  )
}

export default App
