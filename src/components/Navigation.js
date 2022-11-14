import React, { useState } from "react";

import tasksImage from "../assets/tasks.png";
import usersImage from "../assets/users.png";
import columnsImage from "../assets/columns.png";
import tagsImage from "../assets/tags.png";

const Navigation = () => {
  return (
        <div className="side-nav side-nav__hidden">
        <ul className="side-nav__list">
          <li className="side-nav__list-element">
            <a className="side-nav__source" href="#">
              <img className="side-nav__source-img" src={tasksImage}/>
              <p className="side-nav__source-desc">Tasks</p>
            </a>
            <button className="side-nav__list-count">8</button>
          </li>
          <li className="side-nav__list-element">
            <a className="side-nav__source" href="#">
              <img className="side-nav__source-img" src={usersImage} />
              <p className="side-nav__source-desc">Users</p>
            </a>
            <button className="side-nav__list-count">3</button>
          </li>
          <li className="side-nav__list-element">
            <a className="side-nav__source" href="#">
              <img className="side-nav__source-img" src={columnsImage}/>
              <p className="side-nav__source-desc">Columns</p>
            </a>
            <button className="side-nav__list-count">3</button>
          </li>
          <li className="side-nav__list-element">
            <a className="side-nav__source" href="#">
              <img className="side-nav__source-img" src={tagsImage}/>
              <p className="side-nav__source-desc">Tags</p>
            </a>
            <button className="side-nav__list-count">2</button>
          </li>
        </ul>
      </div>
  );
};

export default Navigation;
