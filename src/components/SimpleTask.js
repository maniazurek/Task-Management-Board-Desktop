import React from "react";
import uniqid from "uniqid";
import Moment from 'moment';

import dotImage from "../assets/dot.png";
import linkImage from "../assets/link.png";
import commentsImage from "../assets/comments.png"

const SimpleTask = ({
  title,
  date,
  assignee,
  description,
  link,
  tags,
  comments,
}) => {
  const formatDate = Moment().format("Do MMM");

  return (
    <article className="simple-task__container" key={uniqid()}>
      <h2 className="simple-task__title">{title}</h2>
      <span className="simple-task__date-assignee">
        <p className="simple-task__date">{formatDate}</p>
        <img className="simple-task__dot-img" src={dotImage} />
        <span className="simple-task__assignee-details">
          <p className="simple-task__assignee-to">Assigned to</p>
          <p className="simple-task__assignee-who">{assignee}</p>
        </span>
      </span>
      <p className="simple-task__description">{description}</p>
      <span className="simple-task__link-details">
        <img className="simple-task__link-img" src={linkImage} />
        <p className="simple-task__link-desc">{link}</p>
      </span>
      <ul className="simple-task__tags-list">
        {tags.map((tag) => {
          return (
            <li className="simple-task__tags-element" key={uniqid()}>
              {tag}
            </li>
          );
        })}
      </ul>
      <span className="simple-task__comments-details">
        <img className="simple-task__comments-img" src={commentsImage}/>
        <p className="simple-task__comments-desc">{comments}</p>
      </span>
    </article>
  );
};

export default SimpleTask;
