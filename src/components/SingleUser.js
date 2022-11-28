import React from "react";
import uniqid from "uniqid";
import { compareAsc, format } from "date-fns";

const SingleUser = ({ user, onUserSelect }) => {
  return (
    <article
      className="simple-task__container"
      onClick={() => onUserSelect(user)}
    >
      <div className="simple-task__container-info">
        <div className="simple-task__info_name-date">
          <h2 className="simple-task__title">{user.name}</h2>
          <p className="simple-task__info_date">Created {format(new Date(user.createdAt), "do MMM")}</p>
        </div>
        <div className="simple-task__info-img" style={{ backgroundImage: `url(${user.imageURL})`}}></div>
      </div>
      <p className="simple-task__description">{user.description}</p>
    </article>
  );
};

export default SingleUser;
