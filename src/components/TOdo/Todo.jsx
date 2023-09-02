import { useState } from "react"

function Todo({todoData, isFinished , id , changeFinished , onDelete   ,onEdit }) { 
    const [finished,  setFinished] =useState(isFinished)
    const [isEditting , setIsEditting ] = useState(false ) 
    const [editText  ,setEditText] = useState("")

    return (
        <div>
            <input type="checkbox" 
            checked={finished}
            onChange={e => {
                setFinished(e.target.checked)
                changeFinished(e.target.checked)
            }}
            name="" id="" />
             {(isEditting)  ? <input type="text" onChange={e => setEditText(e.target.value)} ></ input> : todoData}  
            <button onClick={()=> {
                setIsEditting(!isEditting) 
                onEdit(editText)
            }} >{(!isEditting )  ? "Edit"  :"Save"}</button>
            <button onClick={onDelete}  >Delete</button>
        </div>
    )
}
export default Todo