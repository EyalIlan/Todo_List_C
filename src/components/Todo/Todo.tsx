import React from 'react'

interface Props {

}

const Todo:React.FC<Props> = () => {
  return (
    <div className='Todo'>
        <input type="checkbox" />
        <p>hello</p>
        <button>Edit</button>
        <button>Delete</button>
    </div>
  )
}

export default Todo