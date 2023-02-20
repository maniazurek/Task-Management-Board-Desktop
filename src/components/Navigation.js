import React from "react";
import NavigationItems from "./NavigationItems";

const Navigation = ({ tasksList, usersList, columnsList, tagsList }) => {
  return (
    <>
      <nav className="side-nav">
        <NavigationItems
          tasksList={tasksList}
          usersList={usersList}
          columnsList={columnsList}
          tagsList={tagsList}
        />
      </nav>
      <div className="navigation-overlay_closed"></div>
    </>
  );
};

export default Navigation;
