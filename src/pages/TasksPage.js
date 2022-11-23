import React, { useState } from "react";

import Main from "../components/Main";
import FormTask from "../components/FormTask";

const TasksPage = ({ handleIsMobileNavOpen }) => {
  const [tasksList, setTasksList] = useState([]);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [mode, setMode] = useState("add");
  const [selectedTask, setSelectedTask] = useState(null);

  const handleCancelAddTaskOpen = () => {
    setIsAddTaskOpen(false);
  };

  const handleTaskAdd = () => {
    setMode("add");
    setSelectedTask(null);
    setIsAddTaskOpen(true);
  };

  const handleFormAdd = (
    event,
    id,
    title,
    date,
    assignee,
    description,
    link,
    tags,
    columns,
    comments
  ) => {
    const newTask = {
      id,
      title,
      date,
      assignee,
      description,
      link,
      tags,
      columns,
      comments,
    };
    setTasksList([...tasksList, newTask]);
    handleCancelAddTaskOpen();
  };

  const handleTaskSelect = (clickedTask) => {
    setMode("edit");
    setSelectedTask(clickedTask);
    setIsAddTaskOpen(true);
  };

  console.log(mode, selectedTask, isAddTaskOpen);

  const handleTaskEdit = (
    event,
    id,
    title,
    date,
    assignee,
    description,
    link,
    tags,
    columns,
    comments
  ) => {
    event.preventDefault();
    const editedTask = {
      id,
      title,
      date,
      assignee,
      description,
      link,
      tags,
      columns,
      comments,
    };
    const editedTaskList = tasksList.map((taskPost) => {
      if (taskPost.id === editedTask.id) {
        return editedTask;
      } else {
        return taskPost;
      }
    });
    setTasksList(editedTaskList);
    handleCancelAddTaskOpen();
  };

  return (
    <>
      <Main
        addTaskOpen={handleTaskAdd}
        openMobileNav={handleIsMobileNavOpen}
        tasksList={tasksList}
        onTaskSelect={handleTaskSelect}
      />
      {isAddTaskOpen && (
        <FormTask
          mode={mode}
          handleFormSubmit={mode === "add" ? handleFormAdd : handleTaskEdit}
          CancelAddTaskOpen={handleCancelAddTaskOpen}
          taskToEdit={selectedTask}
        />
      )}
    </>
  );
};

export default TasksPage;
