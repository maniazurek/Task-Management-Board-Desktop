import React, { useEffect, useState } from "react";

import useFetch from "../hooks/useFetch";
import Main from "../components/Main";
import FormTask from "../components/FormTask";

const TasksPage = () => {
  const [tasksList, setTasksList] = useState([]);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [mode, setMode] = useState("add");
  const [selectedTask, setSelectedTask] = useState(null);

  const URL = "https://to-do-api.fly.dev";

  const [tasksData, tasksError, tasksLoading] = useFetch(`${URL}/tasks`);
  const [usersData, usersError, usersLoading] = useFetch(`${URL}/users`);
  const [columnsData, columnsError, columnsLoading] = useFetch(
    `${URL}/columns`
  );
  const [tagsData, tagsError, tagsLoading] = useFetch(`${URL}/tags`);

  useEffect(() => {
    if (tasksData.records) {
      setTasksList(tasksData.records);
    }
  }, [tasksData]);

  const handleCancelAddTaskOpen = () => {
    setIsAddTaskOpen(false);
  };

  const handleTaskAdd = () => {
    setMode("add");
    setSelectedTask(null);
    setIsAddTaskOpen(true);
  };

  const handleFormAdd = (
    title,
    dueDate,
    assignee,
    description,
    link,
    tags,
    column,
    comments
  ) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        dueDate,
        assignee,
        description,
        link,
        tags,
        column,
        comments,
      }),
    };
    fetch(`${URL}/tasks`, options)
      .then((res) => res.json())
      .then((data) => setTasksList([...tasksList, data.records]));
    handleCancelAddTaskOpen();
  };

  const handleTaskSelect = (clickedTask) => {
    setMode("edit");
    setSelectedTask(clickedTask);
    setIsAddTaskOpen(true);
  };

  const handleTaskEdit = (
    title,
    dueDate,
    assignee,
    description,
    link,
    tags,
    column,
    comments
  ) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        dueDate,
        assignee,
        description,
        link,
        tags,
        column,
        comments,
      }),
    };
    fetch(`${URL}/tasks/${selectedTask._id}`, options)
      .then((res) => res.json())
      .then((data) => {
        const editedTaskList = tasksList.map((taskPost) => {
          if (taskPost._id === data.records._id) {
            return data.records;
          } else {
            return taskPost;
          }
        });
        setTasksList(editedTaskList);
        handleCancelAddTaskOpen();
      });
  };
  return (
    <>
      <Main
        addTaskOpen={handleTaskAdd}
        tasksList={tasksList}
        onTaskSelect={handleTaskSelect}
      />
      {isAddTaskOpen && (
        <FormTask
          mode={mode}
          handleFormSubmit={mode === "add" ? handleFormAdd : handleTaskEdit}
          CancelAddTaskOpen={handleCancelAddTaskOpen}
          taskToEdit={selectedTask}
          userList={usersData.records}
          columnList={columnsData.records}
          tagsList={tagsData.records}
        />
      )}
    </>
  );
};

export default TasksPage;
