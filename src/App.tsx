import React,{useState} from "react";
import "./App.css";
import AddTodo from "./components/addTodo/addTodo";
import {TodoIF} from './utils/interface'
import Todo from "./components/Todo/Todo";
function App() {

  // STATE
  const [TodoList,SetTodoList] = useState<TodoIF []>([])
  const [Id,SetId] = useState(0)

  // FUNCTIONS
  const AddTodoHandeler = (todo:string) =>{
    let todos = [...TodoList]
    todos.push({Id,complete:false,todo})
    SetTodoList(todos)
    SetId(Id + 1)
  }

  const RemoveTodoHandler = (Id:number) =>{
    let todos = [...TodoList]
    todos = todos.filter(p =>{
      return p.Id !==Id
    })
    SetTodoList(todos)
  }

  const EditTodoHandler = (Id:number,todo:string) =>{
    
    let todos = [...TodoList]
    todos = todos.map( p =>{
       if(p.Id === Id){
        p.todo = todo
       }
       return p
    })
    SetTodoList(todos)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List</h1>
        <hr />
        <AddTodo AddTodo = {AddTodoHandeler}></AddTodo>
        {TodoList.map(p =>{
          return <Todo todo={p.todo} Id={p.Id} RemoveTodo = {RemoveTodoHandler} EditTodo = {EditTodoHandler}></Todo>
        })}
      </div>
    </div>
  );
}

export default App;
