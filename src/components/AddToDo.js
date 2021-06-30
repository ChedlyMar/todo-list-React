import { useState } from "react";

const AddToDo = (props) => {
  const [newTodo, setnewTodo] = useState("");
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setnewTodo(e.target.value)}
      ></input>
      <button onClick={() => props.addToDo(newTodo)}>Add ToDo</button>
    </div>
  );
};

export default AddToDo;
