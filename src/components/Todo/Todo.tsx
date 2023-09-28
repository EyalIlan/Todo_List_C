import React, { useState } from "react";
import "./Todo.css";

interface Props {
  todo: string;
  Id: number;
  RemoveTodo:Function
}

const Todo: React.FC<Props> = ({ todo, Id,RemoveTodo }) => {
  
  // STATE
  const [compelete, SetComplete] = useState(false);
  const [editMode, SetEditMode] = useState(false);
  const [editTodo, SetEditTodo] = useState("");

  //FUNCTIONS
  const RemoveTodoHandler = () =>{
    RemoveTodo(Id)
  }

  let TodoScreen;

  if (editMode) {
    TodoScreen = (
      <div className="Todo">
        <input
          type="text"
          onClick={() => {
            SetComplete(!compelete);
          }}
          onChange={(e) => {
            SetEditTodo(e.target.value);
          }}
        />
        <div>
          <button className="btn">Save</button>
          <button className="btn">Cancel</button>
        </div>
      </div>
    );
  } else {
    TodoScreen = (
      <div className="Todo">
        <input
          type="checkbox"
          onClick={() => {
            SetComplete(!compelete);
          }}
        />
        {compelete ? (
          <del>
            <p>{todo}</p>
          </del>
        ) : (
          <p>{todo}</p>
        )}
        <div>
          <button className="btn">Edit</button>
          <button className="btn" onClick={RemoveTodoHandler}>Delete</button>
        </div> 
      </div>
    );
  }

  return <>{TodoScreen}</>;
};

export default Todo;
