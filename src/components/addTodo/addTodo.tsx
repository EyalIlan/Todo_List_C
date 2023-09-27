import React from 'react'
import './addTodo.css'

interface Props  {

}

const addTodo:React.FC<Props> = () => {
  return (
    <div className='addTodo'>
        <input type="text" />d
        <button>Add</button>
    </div>
  )
}

export default addTodo