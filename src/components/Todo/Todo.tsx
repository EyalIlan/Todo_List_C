import React, { useState,useEffect } from "react";
import "./Todo.css";

interface Props {
  todo: string;
  Id: number;
  RemoveTodo: Function;
  EditTodo:Function
}

const Todo: React.FC<Props> = ({ todo, Id, RemoveTodo,EditTodo }) => {
  // STATE
  const [compelete, SetComplete] = useState(false);
  const [editMode, SetEditMode] = useState(false);
  const [editTodo, SetEditTodo] = useState("");
  const [BG,SetBG] = useState(0)

  //EFFECT
  useEffect(() =>{
    SetBG (Math.floor(Math.random()*3) + 1)
  },[])

  //FUNCTIONS
  const RemoveTodoHandler = () => {
    RemoveTodo(Id);
  };

  const CancelEditMode = () => {
    SetEditMode(false);
    SetEditTodo("");
  };

  const EditTodoHandler = () =>{
    EditTodo(Id,editTodo)
    SetEditMode(false)
    SetEditTodo('')
  }


  let TodoScreen;

  if (editMode) {
    TodoScreen = (
      <div className={`Todo BG-blue${BG}`}>
        <input
          type="text"
          onChange={(e) => {
            SetEditTodo(e.target.value);
          }}
        />
        <div>
          <button className="btn" onClick={EditTodoHandler}><i className="fa-solid fa-floppy-disk"></i></button>
          <button className="btn" onClick={CancelEditMode}><i className="fa-solid fa-xmark"></i></button>
        </div>
      </div>
    );
  } else {
    TodoScreen = (
      <div className={`Todo BG-blue${BG}`}>
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
          <button className="btn" onClick={() => {SetEditMode(true);}}> <i className="fa-solid fa-pen-to-square"></i></button>
          <button className="btn" onClick={RemoveTodoHandler}> <i className="fa-solid fa-trash"></i></button>
        </div>
      </div>
    );
  }

  return <>{TodoScreen}</>;
};

export default Todo;
