import React from "react";

import addImage from "../assets/add.png";
import UsersSection from "./UsersSection";

const UsersMain = ({ addUserOpen, openMobileNav, usersList, onUserSelect }) => {
  return (
    <div className="main-content">
      <button onClick={openMobileNav} className="hamburger-open"></button>
      <UsersSection
        columnName="users"
        usersList={usersList}
        onUserSelect={onUserSelect}
      />
      <button onClick={addUserOpen} className="main-content__add-task">
        <img className="main-content__add-icon" src={addImage} />
      </button>
    </div>
  );
};

export default UsersMain;