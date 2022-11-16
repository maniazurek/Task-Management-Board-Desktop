import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import uniqid from "uniqid";

const FormTask = ({ handleFormSubmit, CancelAddTaskOpen }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState();
  const [assignee, setAssignee] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [tags, setTags] = useState([]);
  const [columns, setColumns] = useState("");
  const [comments, setComments] = useState([]);
  const [singleComment, setSingleComment] = useState("");

  const onFormSubmit = (event) => {
    handleFormSubmit(
      event,
      title,
      date,
      assignee,
      description,
      link,
      tags,
      columns,
      comments
    );
    setTitle("");
    setDate();
    setAssignee("");
    setDescription("");
    setLink("");
    setTags([]);
    setColumns("");
    setComments("");
  };

  const addComment = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setComments([...comments, singleComment]);
      setSingleComment("");
    }
  };

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
                selected={date}
                onChange={(newDate) => setDate(newDate)}
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
              value={columns}
              onChange={(event) => setColumns(event.target.value)}
              className="new-task__select-column"
            >
              <option hidden>To do</option>
              <option hidden>In progress</option>
              <option hidden>Done</option>
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
            value={singleComment}
            onKeyPress={addComment}
            onChange={(event) => setSingleComment(event.target.value)}
            className="new-task__input-comment"
          />
          <div className="new-task__comments">
          <ul className="new-task__list">
            {comments.map((newComment) => {
              return <li className="new-task__list-element" key={uniqid}>{newComment}</li>;
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
