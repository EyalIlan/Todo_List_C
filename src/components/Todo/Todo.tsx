import React, { useState } from "react";
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
      <div className="Todo">
        <input
          type="text"
          onChange={(e) => {
            SetEditTodo(e.target.value);
          }}
        />
        <div>
          <button className="btn" onClick={EditTodoHandler}>Save</button>
          <button className="btn" onClick={CancelEditMode}>Cancel</button>
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
          <button
            className="btn"
            onClick={() => {
              SetEditMode(true);
            }}
          >
            Edit
          </button>
          <button className="btn" onClick={RemoveTodoHandler}>
            Delete
          </button>
        </div>
      </div>
    );
  }

  return <>{TodoScreen}</>;
};

export default Todo;
