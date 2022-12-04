import React from "react";
import uniqid from "uniqid";
import { compareAsc, format } from "date-fns";

const SingleColumn = ({ column, onColumnSelect }) => {
  return (
    <article
      className="simple-task__container simple-task__container__reusable"
      onClick={() => onColumnSelect(column)}
    >
      <div className="simple-task__info_name-date">
        <h2 className="simple-task__title">{column.name}</h2>
        <p className="simple-task__info_date simple-task__info_date_reusable">
          Created {format(new Date(column.createdAt), "do MMM")}
        </p>
      </div>
    </article>
  );
};

export default SingleColumn;
