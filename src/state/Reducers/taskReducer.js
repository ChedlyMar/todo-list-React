const addTask = (toDoList, taskDescription) => {
  return {
    id: toDoList.length ? toDoList[toDoList.length - 1].id + 1 : 1,
    description: taskDescription,
    isDone: false,
  };
};

const editTask = (toDoList, { task, taskDescription, done }) => {
  let index = toDoList.indexOf(task);
  const newTodos = [...toDoList];
  const newTask = {
    id: task.id,
    description: taskDescription,
    isDone: done,
  };
  newTodos.splice(index, 1, newTask);
  return newTodos;
};

//function return state

const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, addTask(state, action.payload)];
    case "DELETE_TASK":
      return state.filter((task) => task.id != action.payload);
    case "EDIT_TASK":
      return editTask(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
