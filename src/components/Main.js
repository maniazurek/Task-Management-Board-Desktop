import React, { useState } from "react";

import addImage from "../assets/add.png";
import DoneSection from "./DoneSection";
import InProgressSection from "./InProgressSection";
import ToDoSection from "./ToDoSection";

const Main = () => {
  
  return (
    <div className="main-content">
      <ToDoSection />
      <InProgressSection />
      <DoneSection />
      <button className="main-content__add-task">
        <img className="main-content__add-icon" src={addImage} />
      </button>
    </div>
  );
};

export default Main;
