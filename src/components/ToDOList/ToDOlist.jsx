
// import { deleteTodo, editTodo, todofinished } from "../../actions/todo.action"
import Todo from "../TOdo/Todo"
import {  useSelector } from "react-redux"
function ToDoList ({  deleteTodo , editTodo , todofinished} ) {
    const list = useSelector((state) => state.todo ) 
    function onFinished (isFinished ,todo) {
        todofinished({todo , isFinished})
    }
    function onDelete (todo) { 
        deleteTodo({todo})

    }
    function onEdit(todo ,todoText) {
        editTodo({todo ,todoText}) 
    }
    console.log(list.todoList)
 
    return (
        <div>
            {
                list.todoList.length >0 && 
                 list.todoList.map(todo => <Todo
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