import React from "react";
import { createContext } from "react";
import { useState,useReducer} from "react";
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  DeleteItem: () => {},
});
const TodoItemsReducer = (CurrTodoItems, action) => {
  let newTodoItems = CurrTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...CurrTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = CurrTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};
 const TodoItemContextProvider = ({children}) => {
  const [showItemMessage, setShowItemMessage] = useState(false);
  {showItemMessage && (
    <p className={styles.message}>Please add new item first.</p>
  )}
  const [todoItems, dispatchTodoItem] = useReducer(TodoItemsReducer, []);
  const addNewItem = (itemName, itemDueDate) => {
    if (!itemName) {
      // If itemName is empty, show the add item message
      setShowItemMessage(true);
      // Hide the message after 3 seconds (adjust as needed)
      setTimeout(() => setShowItemMessage(false), 2000);
      return;
    }

    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItem(newItemAction);
  };

  const DeleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItem(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        DeleteItem: DeleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemContextProvider;