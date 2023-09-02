
import {  useState } from "react"
import AddToDo from "./components/AddTodo/AddToDo"
import ToDoList from "./components/ToDOList/ToDOlist"
import todoContext from "./context/todoContext"

function App() {
  const [list ,setList] = useState( [
    {id: 1, todoData : "TODO 1" , finished :false},
    {id: 2, todoData : "TODO 2", finished :false},
    {id: 3, todoData : "TODO 3", finished :true}
  ] )

  return (
    <todoContext.Provider  value={{list , setList}}  >  
        <AddToDo  updateList={(todo)=> setList(
            [...list,  {todoData  :todo , finished : false, id : list.length  + 1}]
          )} />
        <ToDoList />
    </todoContext.Provider> 
  )
}

export default App
