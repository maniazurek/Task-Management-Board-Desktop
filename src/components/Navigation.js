import React, { useState } from "react";

import tasksImage from "../assets/tasks.svg";
import tasksImageHover from "../assets/tasks-hover.svg";
import usersImage from "../assets/users.svg";
import usersImageHover from "../assets/users-hover.svg";
import columnsImage from "../assets/columns.svg";
import columnsImageHover from "../assets/columns-hover.svg";
import tagsImage from "../assets/tags.svg";
import tagsImageHover from "../assets/tags-hover.svg";

const Navigation = () => {
  return (
        <>
        <nav className="side-nav side-nav__hidden">
        <ul className="side-nav__list">
          <li className="side-nav__list-element">
            <a className="side-nav__source" href="#">
              <div className="side-nav__source-img side-nav__source-tasks"></div>
              <p className="side-nav__source-desc">Tasks</p>
            </a>
            <button className="side-nav__list-count">8</button>
          </li>
          <li className="side-nav__list-element">
            <a className="side-nav__source" href="#">
            <div className="side-nav__source-img side-nav__source-users"></div>
              <p className="side-nav__source-desc">Users</p>
            </a>
            <button className="side-nav__list-count">3</button>
          </li>
          <li className="side-nav__list-element">
            <a className="side-nav__source" href="#">
            <div className="side-nav__source-img side-nav__source-columns"></div>
              <p className="side-nav__source-desc">Columns</p>
            </a>
            <button className="side-nav__list-count">3</button>
          </li>
          <li className="side-nav__list-element">
            <a className="side-nav__source" href="#">
            <div className="side-nav__source-img side-nav__source-tags"></div>
              <p className="side-nav__source-desc">Tags</p>
            </a>
            <button className="side-nav__list-count">2</button>
          </li>
        </ul>
      </nav>
      <div className="navigation-overlay"></div>
      </>
      
  );
};

export default Navigation;
