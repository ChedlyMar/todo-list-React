import ToDo from "./ToDo";
import { useSelector } from "react-redux";

const ListToDos = () => {
  const toDoList = useSelector((state) => state.tasks);

  return (
    <div>
      <h2 className="mt-6 mb-4 text-center text-3xl font-extrabold text-gray-900">
        To Do List
      </h2>
      {toDoList.map((toDo) => {
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
