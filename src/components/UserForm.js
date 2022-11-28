import React, { useState } from "react";
import DatePicker from "react-datepicker";
import uniqid from "uniqid";

import "react-datepicker/dist/react-datepicker.css";
import TagInput from "./TagInput";

const UserForm = ({
  handleFormSubmit,
  CancelAddUserOpen,
  mode,
  userToEdit,
  usersList,
}) => {
  const [name, setName] = useState(mode === "add" ? "" : userToEdit.name);
  const [description, setDescription] = useState(
    mode === "add" ? "" : userToEdit.description
  );
  const [imageURL, setImageURL] = useState(
    mode === "add" ? "" : userToEdit.imageURL
  );

  const onFormSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(name, description, imageURL);
  };

  return (
    <div className="add-task_overlay">
      <form onSubmit={onFormSubmit} className="new-task__container-add ">
        <div className="new-task__container">
          <div>
            <span className="new-task__element-title">
              <label
                className="new-task__label-title"
                htmlFor="new-task__input-title"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Type name"
                className="new-task__input-title"
                value={name}
                onChange={(event) => setName(event.target.value)}
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
                Image URL
              </label>
              <input
                type="text"
                placeholder="Type image adress"
                className="new-task__input-link"
                value={imageURL}
                onChange={(event) => setImageURL(event.target.value)}
              />
            </span>
          </div>
          <div className="new-task__container-user">
            <h3 className="new-task__user">Preview</h3>
            <div
              className="new-user-img"
              style={{ backgroundImage: `url(${imageURL})` }}
            ></div>
          </div>
        </div>
        <button
          onClick={CancelAddUserOpen}
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

export default UserForm;
