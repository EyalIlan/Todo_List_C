import React,{useState} from "react";
import "./Todo.css";

interface Props {
  todo: string;
  Id: number;
}

const Todo: React.FC<Props> = ({ todo, Id }) => {
  
  const [compelete,SetComplete] = useState(false)
  const [editMode,SetEditMode] = useState(false)

  let TodoScreen;
  



  return (
    <div className="Todo">
      <input type="checkbox" onClick={() => {SetComplete(!compelete)}} />
      { compelete? <del><p>{todo}</p></del>:<p>{todo}</p>}
      <div>
        <button className="btn">Edit</button>
        <button className="btn">Delete</button>
      </div>
    </div>
  );
};

export default Todo;
