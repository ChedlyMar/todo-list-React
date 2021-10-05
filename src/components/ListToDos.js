import ToDo from "./ToDo";
import { useState } from "react";
import { useSelector } from "react-redux";

const ListToDos = () => {
  const toDoList = useSelector((state) => state.tasks);
  const [filtredList, setFiltredList] = useState(toDoList);

  return (
    <div>
      <div>
        <button className="" onClick={() => setFiltredList(toDoList)}>
          All
        </button>
        <button
          onClick={() =>
            setFiltredList(toDoList.filter((todo) => todo.isDone === true))
          }
        >
          Done
        </button>
        <button
          onClick={() =>
            setFiltredList(toDoList.filter((todo) => todo.isDone === false))
          }
        >
          Not Done
        </button>
      </div>
      <h2 className="mt-6 mb-4 text-center text-3xl font-extrabold text-gray-900">
        To Do List
      </h2>
      {filtredList.map((toDo) => {
        return (
          <div key={toDo.id} className="">
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
