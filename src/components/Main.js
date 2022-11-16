import React, { useState } from "react";

import addImage from "../assets/add.png";
import ToDoSection from "./ToDoSection";

const Main = ({addTaskOpen, openMobileNav, tasksList}) => {
  
  return (
    <div className="main-content">
      <div onClick={openMobileNav} className="hamburger-open"></div>
      <ToDoSection columnName="to do" tasksList={tasksList}/>
      <ToDoSection columnName="in progress" tasksList={tasksList}/>
      <ToDoSection columnName="done" tasksList={tasksList}/>
      <button onClick={addTaskOpen} className="main-content__add-task">
        <img className="main-content__add-icon" src={addImage} />
      </button>
    </div>
  );
};

export default Main;
