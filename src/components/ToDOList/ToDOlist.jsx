import { useContext } from "react"
import Todo from "../TOdo/Todo"
import todoContext from "../../context/todoContext"
function ToDoList (  ) {
    const {  list, setList } = useContext(todoContext)
    return (
        <div>
            {
                list.length !==0
                && list.map(todo => <Todo
                                    id={todo.id} 
                                    key={todo.id}
                                    isFinished={todo.finished}
                                    todoData={todo.todoData}
                                    changeFinished = {(isFinished ) => {
                                        const updatedList =list.map(t => {
                                            if(t.id == todo.id) {
                                                todo.finished = isFinished 
                                            }
                                            return t 

                                        })
                                        setList(updatedList)
                                    }
                                    }
                                    onDelete = { () => {
                                        const updatedList = list.filter((e) => e.id != todo.id)
                                        setList(updatedList)
                                    }
                                    }
                                    onEdit = {
                                        (todoText) => { 
                                            const updatedList = list.map ((t) => { 
                                                    if(t.id === todo.id) {
                                                        todo.todoData =todoText
                                                    }
                                                    return t ; 

                                            })
                                            setList(updatedList)
                                        }
                                    }
                                    /> )  
            }
        </div>
    )


}   

export default ToDoList