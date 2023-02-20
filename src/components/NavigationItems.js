import React from "react";
import { NavLink } from "react-router-dom";

const NavigationItems = ({
  tasksListLenght,
  usersListLenght,
  columnsListLenght,
  tagsListLenght,
}) => {
  return (
    <>
      <NavLink to="/">
        <div className="side-nav__list-element">
          <div className="side-nav__source" href="#">
            <div className="side-nav__element">
              <div className="side-nav__source-img side-nav__source-tasks"></div>
              <p className="side-nav__source-desc">Tasks</p>
            </div>
            <div className="side-nav__length">{tasksListLenght}</div>
          </div>
        </div>
      </NavLink>
      <NavLink to="/users">
        <div className="side-nav__list-element">
          <div className="side-nav__source" href="#">
            <div className="side-nav__element">
              <div className="side-nav__source-img side-nav__source-users"></div>
              <p className="side-nav__source-desc">Users</p>
            </div>
            <div className="side-nav__length">{usersListLenght}</div>
          </div>
        </div>
      </NavLink>
      <NavLink to="/columns">
        <div className="side-nav__list-element">
          <div className="side-nav__source" href="#">
            <div className="side-nav__element">
              <div className="side-nav__source-img side-nav__source-columns"></div>
              <p className="side-nav__source-desc">Columns</p>
            </div>
            <div className="side-nav__length">{columnsListLenght}</div>
          </div>
        </div>
      </NavLink>
      <NavLink to="/tags">
        <div className="side-nav__list-element">
          <div className="side-nav__source" href="#">
            <div className="side-nav__element">
              <div className="side-nav__source-img side-nav__source-tags"></div>
              <p className="side-nav__source-desc">Tags</p>
            </div>
            <div className="side-nav__length">{tagsListLenght}</div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default NavigationItems;
