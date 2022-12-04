import React from "react";
import { compareAsc, format } from "date-fns";

const SingleTag = ({ tag, onTagSelect }) => {
  return (
    <article
      className="simple-task__container simple-task__container__reusable"
      onClick={() => onTagSelect(tag)}
    >
      <div className="simple-task__container-info">
        <div className="simple-task__info_name-date">
          <h2 className="simple-task__title">{tag.name}</h2>
          <p className="simple-task__info_date simple-task__info_date_reusable">Created {format(new Date(tag.createdAt), "do MMM")}</p>
        </div>
        <div className="simple-task__info-img" style={{ backgroundColor: tag.color }}></div>
      </div>
    </article>
  );
};

export default SingleTag;
