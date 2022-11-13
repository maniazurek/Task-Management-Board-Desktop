import React, { useState } from "react";

import addImage from "../assets/add.png";

const Main = () => {
  return (
    <div className="main-content">
      <section className="main-content__section">
        <h2 className="main-content__section-title">To do</h2>
      </section>
      <section className="main-content__section">
        <h2 className="main-content__section-title">In progress</h2>
      </section>
      <section className="main-content__section">
        <h2 className="main-content__section-title">Done</h2>
      </section>
      <button type="submit" className="main-content__add-task">
        <img className="main-content__add-icon" src={addImage} />
      </button>
    </div>
  );
};

export default Main;
