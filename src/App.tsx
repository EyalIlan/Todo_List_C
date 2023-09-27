import React,{useState} from "react";
import "./App.css";
import AddTodo from "./components/addTodo/addTodo";
import {TodoIF} from './utils/interface'
import Todo from "./components/Todo/Todo";
function App() {

  const [TodoList,SetTodoList] = useState<TodoIF []>([])
  const [Id,SetId] = useState(0)

  const AddTodoHandeler = (todo:string) =>{

    let todos = [...TodoList]
    todos.push({Id,complete:false,todo})
    SetTodoList(todos)
    SetId(Id + 1)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List</h1>
        {/* <hr /> */}
        <AddTodo AddTodo = {AddTodoHandeler}></AddTodo>
        {TodoList.map(p =>{
          return <Todo todo={p.todo} Id={p.Id}></Todo>
        })}
      </div>
    </div>
  );
}

export default App;
