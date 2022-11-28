import React from "react";
import uniqid from "uniqid";
import { compareAsc, format } from "date-fns";

const SingleUser = ({ user, onUserSelect }) => {
  return (
    <article
      className="simple-task__container"
      onClick={() => onUserSelect(user)}
    >
      <h2 className="simple-task__title">{user.name}</h2>
      <p className="simple-task__description">{user.description}</p>
    </article>
  );
};

export default SingleUser;
