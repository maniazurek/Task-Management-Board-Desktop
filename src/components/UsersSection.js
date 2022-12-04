import React from "react";

import SingleUser from "./SingleUser";

const UsersSection = ({ usersList, columnName, onUserSelect }) => {
  return (
    <>
      <section className="main-content__section main-content__section__reusable">
        <h2 className="main-content__section-title">{columnName}</h2>
        <div className="main-content__section-elements">
          {usersList.map((user) => {
            return (
              <SingleUser
                key={user._id}
                user={user}
                onUserSelect={onUserSelect}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default UsersSection;
