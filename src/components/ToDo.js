import { useState } from "react";
import { XIcon } from "@heroicons/react/solid";

// REDUX
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../state/index";

const ToDo = ({ toDo }) => {
  const [edit, setEdit] = useState(false);
  const [myToDo, setMyToDo] = useState(toDo.description);
  const [done, setDone] = useState(toDo.isDone);

  // REDUX
  const dispatch = useDispatch();
  const { deleteTask, editTask } = bindActionCreators(actionCreator, dispatch);

  return (
    <div>
      {edit ? (
        <div className="bg-indigo-600 w-1/3 m-auto">
          <div className="max-w-1/3 mx-auto py-2 px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap">
              <input
                className="appearance-none rounded-none relative block w-1/2  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                type="text"
                id={myToDo}
                value={myToDo}
                onChange={(e) => setMyToDo(e.target.value)}
              />
              <div className="flex">
                <button
                  className="flex  justify-center mx-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                  onClick={() => {
                    editTask(toDo, myToDo, done);
                    setEdit(!edit);
                  }}
                >
                  Save
                </button>
                <button
                  className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 text-white font-medium focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                  onClick={() => {
                    setEdit(!edit);
                    setMyToDo(toDo);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-indigo-600 w-1/3 m-auto">
          <div className="max-w-1/3 mx-auto py-2 px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  id={toDo.id}
                  onChange={(e) => editTask(toDo, myToDo, e.target.checked)}
                />
                <label
                  className="ml-3 font-medium text-white truncate"
                  htmlFor={toDo.id}
                >
                  {toDo.description}
                </label>
              </div>
              <div className="flex ">
                <button
                  className="flex mx-2 justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                  onClick={() => setEdit(!edit)}
                >
                  Edit
                </button>
                <button
                  className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                  onClick={() => {
                    deleteTask(toDo.id);
                  }}
                >
                  <span className="sr-only">Dismiss</span>
                  <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToDo;
