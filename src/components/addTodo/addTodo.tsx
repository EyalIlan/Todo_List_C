import React,{useState} from 'react'
import './addTodo.css'

interface Props  {
    AddTodo:Function
}

const AddTodo:React.FC<Props> = ({AddTodo}) => {
    
    const [todo,SetTodo] = useState('')
    
    const AddTodoHandler = () =>{

        if(todo.length < 40){
            AddTodo(todo)
            SetTodo('')
        }

    }


    return (
    <div className='addTodo'>
        <input type="text" onChange={(e)=>{SetTodo(e.target.value)}}/>
        <button onClick={AddTodoHandler}>Add</button>
    </div>
  )
}

export default AddTodo