import ToDo from "./ToDo";
import { useState } from "react";

const ListToDos = ({ toDoList, removetodo, editToDo, saveChanges }) => {
  const [edit, setEdit] = useState(false);
  const [myToDo, setMyToDo] = useState("");

  return (
    <div>
      {toDoList.map((toDo) => {
        return (
          <div key={toDo} className="">
            {edit ? (
              <div>
                <input
                  type="text"
                  value={toDo}
                  onChange={() => setMyToDo(toDo)}
                />
              </div>
            ) : (
              <div className="py-1">
                <ToDo
                  toDo={toDo}
                  saveChanges={saveChanges}
                  removetodo={removetodo}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ListToDos;
