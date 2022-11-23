import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import TasksPage from "./pages/TasksPage";

const App = () => {
  // const [tasksList, setTasksList] = useState([]);
  // const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  // const [mode, setMode] = useState("add");
  // const [selectedTask, setSelectedTask] = useState(null);

  // const handleAddTaskOpen = () => {
  //   setIsAddTaskOpen(true);
  // };

  // const handleCancelAddTaskOpen = () => {
  //   setIsAddTaskOpen(false);
  // };

  const handleIsMobileNavOpen = () => {
    setIsMobileNavOpen(true);
  };

  const handleMobileNavClose = () => {
    setIsMobileNavOpen(false);
  };

  // const handleTaskAdd = () => {
  //   setMode("add");
  //   setSelectedTask(null);
  //   setIsAddTaskOpen(true);
  // };

  // const handleFormAdd = (
  //   event,
  //   id,
  //   title,
  //   date,
  //   assignee,
  //   description,
  //   link,
  //   tags,
  //   columns,
  //   comments
  // ) => {
  //   const newTask = {
  //     id,
  //     title,
  //     date,
  //     assignee,
  //     description,
  //     link,
  //     tags,
  //     columns,
  //     comments,
  //   };
  //   setTasksList([...tasksList, newTask]);
  //   handleCancelAddTaskOpen();
  // };

  // const handleTaskSelect = (clickedTask) => {
  //   setMode("edit");
  //   setSelectedTask(clickedTask);
  //   setIsAddTaskOpen(true);
  // };

  // console.log(mode, selectedTask, isAddTaskOpen);

  // const handleTaskEdit = (
  //   event,
  //   id,
  //   title,
  //   date,
  //   assignee,
  //   description,
  //   link,
  //   tags,
  //   columns,
  //   comments
  // ) => {
  //   event.preventDefault();
  //   const editedTask = {
  //     id,
  //     title,
  //     date,
  //     assignee,
  //     description,
  //     link,
  //     tags,
  //     columns,
  //     comments,
  //   };
  //   const editedTaskList = tasksList.map((taskPost) => {
  //     if (taskPost.id === editedTask.id) {
  //       return editedTask;
  //     } else {
  //       return taskPost;
  //     }
  //   });
  //   setTasksList(editedTaskList);
  //   handleCancelAddTaskOpen();
  // };

  return (
    <BrowserRouter>
      <Navigation
        isMobileNavOpen={isMobileNavOpen}
        handleMobileNavClose={handleMobileNavClose}
      />
      <Routes>
        <Route
          path="/"
          element={<TasksPage openMobileNav={handleIsMobileNavOpen} />}
        />
      </Routes>
      {/* {isAddTaskOpen && (
        <FormTask
          mode={mode}
          handleFormSubmit={mode === "add" ? handleFormAdd : handleTaskEdit}
          CancelAddTaskOpen={handleCancelAddTaskOpen}
          taskToEdit={selectedTask}
        />
      )}
      <Main
        addTaskOpen={handleTaskAdd}
        openMobileNav={handleIsMobileNavOpen}
        tasksList={tasksList}
        onTaskSelect={handleTaskSelect}
      /> */}
    </BrowserRouter>
  );
};

export default App;
