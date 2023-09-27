import React,{useState} from 'react'
import './addTodo.css'

interface Props  {
    AddTodo:Function
}

const AddTodo:React.FC<Props> = ({AddTodo}) => {
    
    const [todo,SetTodo] = useState('')
    
    const AddTodoHandler = () =>{
        AddTodo(todo)
        SetTodo('')
    }


    return (
    <div className='addTodo'>
        <input type="text" onChange={(e)=>{SetTodo(e.target.value)}}/>
        <button onClick={AddTodoHandler}>Add</button>
    </div>
  )
}

export default AddTodo