import React from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go tO college",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this veideo",
      dueDate: "5/10/2023",
    },
    {
      name: "Like this veideo",
      dueDate: "5/10/2023",
    },
   
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
