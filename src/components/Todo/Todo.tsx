import React from "react";
import "./Todo.css";

interface Props {
  todo: string;
  Id: number;
}

const Todo: React.FC<Props> = ({ todo, Id }) => {
  return (
    <div className="Todo">
      <input type="checkbox" />
      <p>{todo}</p>
      <div>
        <button className="btn">Edit</button>
        <button className="btn">Delete</button>
      </div>
    </div>
  );
};

export default Todo;
