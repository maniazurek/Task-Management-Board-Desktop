import React from "react";
import uniqid from "uniqid";
import { compareAsc, format } from "date-fns";

import dotImage from "../assets/dot.png";
import linkImage from "../assets/link.png";
import commentsImage from "../assets/comments.png";

const SimpleTask = ({ task, onTaskSelect }) => {
  return (
    <article
      className="simple-task__container"
      onClick={() => onTaskSelect(task)}
    >
      <h2 className="simple-task__title">{task.title}</h2>
      <span className="simple-task__date-assignee">
        <p className="simple-task__date">
          {format(new Date(task.dueDate), "do MMM")}
        </p>
        <img className="simple-task__dot-img" src={dotImage} />
        <span className="simple-task__assignee-details">
          <p className="simple-task__assignee-to">Assigned to</p>
          {task.assignee.name.length < 16 ? (
            <p className="simple-task__assignee-who">{task.assignee.name}</p>
          ) : (
            <p className="simple-task__assignee-who">
              {task.assignee.name.substring(15, 0) + "..."}
            </p>
          )}
        </span>
      </span>
      <p className="simple-task__description">{task.description}</p>
      <span className="simple-task__link-details">
        <img className="simple-task__link-img" src={linkImage} />
        {task.link.length < 13 ? (
          <p className="simple-task__link-desc">{task.link}</p>
        ) : (
          <p className="simple-task__link-desc">
            {task.link.substring(0, 13) + "..."}
          </p>
        )}
      </span>
      <ul className="simple-task__tags-list">
        {task.tags.map((tag) => {
          return (
            <li className="simple-task__tags-element" key={tag._id}>
              {tag.name}
            </li>
          );
        })}
      </ul>
      <span className="simple-task__comments-details">
        <img className="simple-task__comments-img" src={commentsImage} />
        <p className="simple-task__comments-desc">{task.comments.length}</p>
      </span>
    </article>
  );
};

export default SimpleTask;
