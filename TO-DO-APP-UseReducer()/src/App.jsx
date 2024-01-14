import React, { useReducer, useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import Welcome_message from "./components/Welcome_message";
import styles from "./components/Welcome_message.module.css";
import "./App.css";
import TodoItemContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
 
        <Welcome_message />
        <TodoItems></TodoItems>
      </center>
    </TodoItemContextProvider>
  );
}

export default App;
