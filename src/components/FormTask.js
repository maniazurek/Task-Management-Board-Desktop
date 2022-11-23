import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import DatePicker from "react-datepicker";
import uniqid from "uniqid";

import "react-datepicker/dist/react-datepicker.css";

const FormTask = ({
  handleFormSubmit,
  CancelAddTaskOpen,
  mode,
  taskToEdit,
}) => {
  const [title, setTitle] = useState(mode === "add" ? "" : taskToEdit.title);
  const [dueDate, setDueDate] = useState(mode === "add" ? "" : taskToEdit.dueDate);
  const [assignee, setAssignee] = useState(
    mode === "add" ? "" : taskToEdit.assignee
  );
  const [description, setDescription] = useState(
    mode === "add" ? "" : taskToEdit.description
  );
  const [link, setLink] = useState(mode === "add" ? "" : taskToEdit.link);
  const [tags, setTags] = useState(mode === "add" ? [] : taskToEdit.tags);
  const [column, setColumn] = useState(
    mode === "add" ? "to do" : taskToEdit.column
  );
  const [comments, setComments] = useState(
    mode === "add" ? [] : taskToEdit.comments
  );
  const [newComment, setNewComment] = useState("");

  const onFormSubmit = (event) => {
    const id = mode === "add" ? uniqid() : taskToEdit._id;
    handleFormSubmit(
      event,
      id,
      title,
      dueDate,
      assignee,
      description,
      link,
      tags,
      column,
      comments
    );
    setTitle("");
    setDueDate();
    setAssignee("");
    setDescription("");
    setLink("");
    setTags([]);
    setColumn("");
    setComments([]);
  };

  const addComment = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  console.log(comments);

  return (
    <div className="add-task_overlay">
      <form onSubmit={onFormSubmit} className="new-task__container-add ">
        <span className="new-task__element-title">
          <label
            className="new-task__label-title"
            htmlFor="new-task__input-title"
          >
            Title
          </label>
          <input
            type="text"
            placeholder="Type title"
            className="new-task__input-title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </span>
        <span className="new-task__element-description">
          <label
            className="new-task__label-description"
            htmlFor="new-task__input-description"
          >
            Description
          </label>
          <input
            type="text"
            placeholder="Type description"
            className="new-task__input-description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </span>
        <span className="new-task__element-link">
          <label
            className="new-task__label-link"
            htmlFor="new-task__input-link"
          >
            Link
          </label>
          <input
            type="text"
            placeholder="Type link"
            className="new-task__input-link"
            value={link}
            onChange={(event) => setLink(event.target.value)}
          />
        </span>
        <span className="new-task__element-tags">
          <p className="new-task__label-tags">Tags</p>
          <TagsInput value={tags} onChange={(newTag) => setTags(newTag)} />
        </span>
        <span className="new-task__container-choose">
          <span className="new-task__date-assigne">
            <span className="new-task__element-date">
              <p className="new-task__label-date">Due date</p>
              <DatePicker
                selected={dueDate}
                onChange={(date) => setDueDate(date)}
              />
            </span>
            <span className="new-task__element-assignee">
              <p className="new-task__label-assignee">Assigned to</p>
              <select
                value={assignee}
                onChange={(event) => setAssignee(event.target.value)}
                className="new-task__select-assignee"
              >
                <option value="" disabled hidden>
                  Choose
                </option>
                <option value="Marianna Żurek">Marianna Żurek</option>
                <option value="Marta Rosa">Marta Rosa</option>
                <option value="Maksymilian Olszewski">
                  Maksymilian Olszewski
                </option>
              </select>
            </span>
          </span>
          <span className="new-task__element-column">
            <p className="new-task__label-column">Column</p>
            <select
              value={column}
              onChange={(event) => setColumn(event.target.value)}
              name="column"
              id="column"
              className={mode === "add" ? "new-task__select-column" : "new-task__select-column__select-hidden"}
            >
              <option value="to do" hidden={mode === "add" ? true : false}>To do</option>
              <option value="in progress" hidden={mode === "add" ? true : false}>In progress</option>
              <option value="done" hidden={mode === "add" ? true : false}>Done</option>
            </select>
          </span>
        </span>

        <span className="new-task__element-comment">
          <div
            className="new-task__label-comment"
            htmlFor="new-task__input-comment"
          >
            Comments
          </div>
          <input
            type="text"
            placeholder="Add comment..."
            onKeyPress={addComment}
            value={newComment}
            onChange={(comments) => setNewComment(comments.target.value)}
            className="new-task__input-comment"
          />
          <div className="new-task__comments">
            <ul className="new-task__list">
              {comments.map((newComment) => {
                return (
                  <li className="new-task__list-element" key={uniqid()}>
                    {newComment}
                  </li>
                );
              })}
            </ul>
          </div>
        </span>
        <button
          onClick={CancelAddTaskOpen}
          className="new-task__button-cancel"
          type="button"
        >
          Cancel
        </button>
        <button className="new-task__button-save" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default FormTask;
