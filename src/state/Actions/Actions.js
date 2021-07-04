export const addTask = (newTask) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_TASK",
      payload: newTask,
    });
  };
};

export const deleteTask = (task) => {
  return (dispatch) => {
    dispatch({
      type: "DELETE_TASK",
      payload: task,
    });
  };
};

export const editTask = (task, taskDescription, done) => {
  return (dispatch) => {
    dispatch({
      type: "EDIT_TASK",
      payload: { task, taskDescription, done },
    });
  };
};
