import React from "react";
import NavigationItems from "./NavigationItems";

const Navigation = ({ tasksListLenght, usersListLenght, columnsListLenght, tagsListLenght }) => {
  return (
    <>
      <nav className="side-nav">
        <NavigationItems
          tasksListLenght={tasksListLenght}
          usersListLenght={usersListLenght}
          columnsListLenght={columnsListLenght}
          tagsListLenght={tagsListLenght}
        />
      </nav>
      <div className="navigation-overlay_closed"></div>
    </>
  );
};

export default Navigation;
