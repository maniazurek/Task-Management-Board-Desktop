import React, { useEffect, useState } from "react";

import useFetch from "../hooks/useFetch";
import Main from "../components/Main";
import FormTask from "../components/FormTask";

const TasksPage = ({ handleIsMobileNavOpen }) => {
  const [tasksList, setTasksList] = useState([]);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [mode, setMode] = useState("add");
  const [selectedTask, setSelectedTask] = useState(null);

  const URL = "https://todo-api-mwy8.onrender.com";

  const [userList, setUserList] = useState([]);
  const [columnList, setColumnList] = useState([]);

  // const [tagsList] = useFetch(`${URL}/tags`)

  useEffect(() => {
    fetch(`${URL}/tasks`)
      .then((res) => res.json())
      .then((data) => setTasksList(data.records));
  }, []);

  useEffect(() => {
    fetch(`${URL}/users`)
      .then((res) => res.json())
      .then((data) => setUserList(data.records));
  }, []);

  useEffect(() => {
    fetch(`${URL}/columns`)
      .then((res) => res.json())
      .then((data) => setColumnList(data.records));
  }, []);

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
    console.log(
      title,
      dueDate,
      assignee,
      description,
      link,
      tags,
      column,
      comments
    );

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

    // const newTask = {
    //   id,
    //   title,
    //   dueDate,
    //   assignee,
    //   description,
    //   link,
    //   tags,
    //   column,
    //   comments,
    // };
    // setTasksList([...tasksList, newTask]);
    // handleCancelAddTaskOpen();
  };

  const handleTaskSelect = (clickedTask) => {
    setMode("edit");
    setSelectedTask(clickedTask);
    setIsAddTaskOpen(true);
  };

  const handleTaskEdit = (
    event,
    id,
    title,
    dueDate,
    assignee,
    description,
    link,
    tags,
    column,
    comments
  ) => {
    event.preventDefault();
    const editedTask = {
      id,
      title,
      dueDate,
      assignee,
      description,
      link,
      tags,
      column,
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
          userList={userList}
          columnList={columnList}
          // tagsList={tagsList}
        />
      )}
    </>
  );
};

export default TasksPage;
