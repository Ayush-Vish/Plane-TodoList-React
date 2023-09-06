import { useContext } from "react"
import Todo from "../TOdo/Todo"
import todoContext from "../../context/todoContext"
import TodoDispatchContext from "../../context/TodoDispatchContext"
function ToDoList (  ) {
    const {  list } = useContext(todoContext)
    const {dispatch } = useContext(TodoDispatchContext)
    function onFinished (isFinished ,todo) {
        dispatch({type : "on_finished" ,payload : {isFinished : isFinished, todo }})
    }
    function onDelete (todo) { 
        dispatch({type : "delete_todo" ,payload : {todo}})

    }
    function onEdit(todo ,todoText) {
        dispatch({type : "edit_todo" ,payload : {todo , todoText}})
    }
    return (
        <div>
            {
                list.length !==0
                && list.map(todo => <Todo
                                    id={todo.id} 
                                    key={todo.id}
                                    isFinished={todo.finished}
                                    todoData={todo.todoData}
                                    changeFinished = { (isFinished) => onFinished(isFinished , todo)}
                                    onDelete = { () => onDelete(todo)}
                                    onEdit = {(todoText) => onEdit(todo, todoText)}
                                    /> )  
            }
        </div>
    )


}   

export default ToDoList