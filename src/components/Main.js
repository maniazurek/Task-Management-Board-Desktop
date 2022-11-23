import React from "react";

import addImage from "../assets/add.png";
import ToDoSection from "./ToDoSection";

const Main = ({ addTaskOpen, openMobileNav, tasksList, onTaskSelect }) => {
  return (
    <div className="main-content">
      <button onClick={openMobileNav} className="hamburger-open"></button>
      <ToDoSection
        columnName="to do"
        tasksList={tasksList.filter((task) => task.column === "to do")}
        onTaskSelect={onTaskSelect}
      />
      <ToDoSection
        columnName="in progress"
        tasksList={tasksList.filter((task) => task.column === "in progress")}
        onTaskSelect={onTaskSelect}
      />
      <ToDoSection
        columnName="done"
        tasksList={tasksList.filter((task) => task.column === "done")}
        onTaskSelect={onTaskSelect}
      />
      <button onClick={addTaskOpen} className="main-content__add-task">
        <img className="main-content__add-icon" src={addImage} />
      </button>
    </div>
  );
};

export default Main;
