import React, { useState } from "react";

import Main from "./components/Main";
import Navigation from "./components/Navigation";
import FormTask from "./components/FormTask";

const App = () => {
  const [tasksList, setTasksList] = useState([]);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleAddTaskOpen = () => {
    setIsAddTaskOpen(true);
  };

  const handleCancelAddTaskOpen = () => {
    setIsAddTaskOpen(false);
  };

  const handleIsMobileNavOpen = () => {
    setIsMobileNavOpen(true);
  };

  const handleIsMobileNavClose = () => {
    setIsMobileNavOpen(false);
  };

  const handleFormSubmit = (
    event,
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
    const newTask = {
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

  return (
    <>
      <div className="header">
        <Navigation isMobileNavOpen={isMobileNavOpen} closeMobileNav={handleIsMobileNavClose} />
        {isAddTaskOpen && (
          <FormTask
            handleFormSubmit={handleFormSubmit}
            CancelAddTaskOpen={handleCancelAddTaskOpen}
          />
        )}
        <Main
          addTaskOpen={handleAddTaskOpen}
          openMobileNav={handleIsMobileNavOpen}
          tasksList={tasksList}
        />
      </div>
    </>
  );
};

export default App;
