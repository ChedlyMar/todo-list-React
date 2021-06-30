import react, { createContext, useState } from "react";

export const TodoListContext = createContext();

export const TodoListProvider = (props) => {
  const [toDoList, setTodoList] = useState(["chedly", "ala"]);
  return (
    <TodoListContext.Provider value={[toDoList, setTodoList]}>
      {props.children}
    </TodoListContext.Provider>
  );
};