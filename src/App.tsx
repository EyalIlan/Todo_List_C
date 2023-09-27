import React from "react";
import "./App.css";
import AddTodo from "./components/addTodo/addTodo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Todo List</h1>
        <hr />
        <AddTodo></AddTodo>
      </div>
    </div>
  );
}

export default App;
