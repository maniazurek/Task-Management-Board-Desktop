import React from "react";

const Navigation = ({ isMobileNavOpen, closeMobileNav }) => {
  return (
    <>
      <nav
        className="side-nav"
        style={{ left: isMobileNavOpen ? "0" : "-65%" }}
      >
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
      <div onClick={closeMobileNav} className={`"navigation-overlay" ${!isMobileNavOpen && "navigation-overlay_closed"}`}></div>
    </>
  );
};

export default Navigation;
