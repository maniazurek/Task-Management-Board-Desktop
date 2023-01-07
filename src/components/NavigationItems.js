import React from "react";
import { NavLink } from "react-router-dom";

const NavigationItems = () => {
  return (
    <>
      <NavLink to="/">
        <div className="side-nav__list-element">
          <div className="side-nav__source" href="#">
            <div className="side-nav__source-img side-nav__source-tasks"></div>
            <p className="side-nav__source-desc">Tasks</p>
          </div>
        </div>
      </NavLink>
      <NavLink to="/users">
        <div className="side-nav__list-element">
          <div className="side-nav__source" href="#">
            <div className="side-nav__source-img side-nav__source-users"></div>
            <p className="side-nav__source-desc">Users</p>
          </div>
        </div>
      </NavLink>
      <NavLink to="/columns">
        <div className="side-nav__list-element">
          <div className="side-nav__source" href="#">
            <div className="side-nav__source-img side-nav__source-columns"></div>
            <p className="side-nav__source-desc">Columns</p>
          </div>
        </div>
      </NavLink>
      <NavLink to="/tags">
        <div className="side-nav__list-element">
          <div className="side-nav__source" href="#">
            <div className="side-nav__source-img side-nav__source-tags"></div>
            <p className="side-nav__source-desc">Tags</p>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default NavigationItems;
