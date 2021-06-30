import ToDo from "./ToDo";
import { useContext, useState } from "react";
import { TodoListContext } from "../context/ToDoList.context";

const ListToDos = () => {
  const [toDoList, setTodoList] = useContext(TodoListContext);
  return (
    <div>
      <h2 className="mt-6 mb-4 text-center text-3xl font-extrabold text-gray-900">
        To Do List
      </h2>
      {toDoList.map((toDo) => {
        return (
          <div key={toDo} className="">
            <div className="py-1">
              <ToDo toDo={toDo} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListToDos;
