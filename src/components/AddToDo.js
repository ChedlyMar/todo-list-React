import { useState } from "react";

// REDUX
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { actionCreator } from "../state/index";

const AddToDo = () => {
  const [newTodo, setNewTodo] = useState("");

  // REDUXS
  const dispatch = useDispatch();
  const { addTask } = bindActionCreators(actionCreator, dispatch);

  return (
    <div>
      <h2 className="mt-6 mb-4 text-center text-3xl font-extrabold text-gray-900">
        Add Task
      </h2>
      <input
        className="appearance-none rounded-none relative block w-1/3 m-auto px-3 py-2 mb-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      ></input>
      <button
        className="group relative flex justify-center m-auto w-1/3 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => addTask(newTodo)}
      >
        Add ToDo
      </button>
    </div>
  );
};

export default AddToDo;
