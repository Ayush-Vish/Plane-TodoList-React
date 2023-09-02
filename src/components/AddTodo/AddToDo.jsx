import { useState } from "react"

function AddToDo ({updateList }) {

    const [inputText, setInputText] =useState("")
    return (
        <div>
            <input type="text"
            value={inputText}
             placeholder="Add your TODO"
            onChange={(e)=> setInputText(e.target.value)}
             />
            <button onClick={()=> { 
                updateList(inputText)
                setInputText("      ") 
                }}  > ADD </button>
        </div>
    )
}

export default AddToDo