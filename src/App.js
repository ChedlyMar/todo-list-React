import "./App.css";
import ListToDo from "./components/ListToDos";
import { useState } from "react";

function App() {
  const [toDoList, setTodoList] = useState([]);
  const [newToDo, setNewToDo] = useState("");

  const addToDo = (e) => {
    e.preventDefault();
    setTodoList([newToDo, ...toDoList]);
    setNewToDo("");
    console.log(toDoList);
  };

  const removetodo = (itemToRemove) => {
    setTodoList(toDoList.filter((item) => item !== itemToRemove));
  };

  const saveChanges = (toDo, newTodo) => {
    let index = toDoList.indexOf(toDo);
    const newTodos = [...toDoList];
    newTodos.splice(index, 1, newTodo);
    setTodoList(newTodos);
  };

  return (
    <div className="App text-red-600 mt-16  ">
      <div>
        <h2 className="mt-6 mb-4 text-center text-3xl font-extrabold text-gray-900">
          Add Task
        </h2>
        <input
          className="appearance-none rounded-none relative block w-1/3 m-auto px-3 py-2 mb-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          type="text"
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
        ></input>
        <button
          className="group relative flex justify-center m-auto w-1/3 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={addToDo}
        >
          Add ToDo
        </button>
        <h2 className="mt-6 mb-4 text-center text-3xl font-extrabold text-gray-900">
          To Do List
        </h2>
        <div className="">
          <ListToDo
            toDoList={toDoList}
            removetodo={removetodo}
            saveChanges={saveChanges}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
