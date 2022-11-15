import React, { useState } from "react";

import addImage from "../assets/add.png";
import DoneSection from "./DoneSection";
import InProgressSection from "./InProgressSection";
import ToDoSection from "./ToDoSection";

const Main = ({addTaskOpen, openMobileNav}) => {
  
  return (
    <div className="main-content">
      <div onClick={openMobileNav} className="hamburger-open"></div>
      <ToDoSection />
      <InProgressSection />
      <DoneSection />
      <button onClick={addTaskOpen} className="main-content__add-task">
        <img className="main-content__add-icon" src={addImage} />
      </button>
    </div>
  );
};

export default Main;
