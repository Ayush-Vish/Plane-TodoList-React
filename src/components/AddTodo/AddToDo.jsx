import {  useState } from "react"


function AddToDo ({addTodo}) {

    const [inputText, setInputText] =useState("")
    return (
        <div>
            <input type="text"
            value={inputText}
             placeholder="Add your task here"
            onChange={(e)=> setInputText(e.target.value)}
             />
            <button onClick={()=> { 
                addTodo(inputText)
                setInputText("") 
                }}  > ADD </button>
        </div>
    )
}

export default AddToDo