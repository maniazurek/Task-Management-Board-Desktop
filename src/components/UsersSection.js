import React from "react";

import SingleUser from "./SingleUser";

const UsersSection = ({ usersList, columnName, onUserSelect }) => {
  return (
    <>
      <section className="main-content__section">
        <h2 className="main-content__section-title">{columnName}</h2>
        {usersList.map((user) => {
          return (
            <SingleUser
              key={user._id}
              user={user}
              onUserSelect={onUserSelect}
            />
          );
        })}
      </section>
    </>
  );
};

export default UsersSection;