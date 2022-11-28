import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

const TagForm = ({ handleFormSubmit, CancelAddTagOpen, mode, tagToEdit }) => {
  const [name, setName] = useState(mode === "add" ? "" : tagToEdit.name);
  const [color, setColor] = useState(mode === "add" ? "" : tagToEdit.color);

  const onFormSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(name, color);
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
                Tag
              </label>
              <input
                type="text"
                placeholder="Type tag"
                className="new-task__input-title"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </span>
          </div>
          <div className="new-task__container-user">
            <h3 className="new-task__user">Color</h3>
            <div
              className="new-user-img"
              style={{ backgroundColor: color }}
            ></div>
          </div>
        </div>
        <button
          onClick={CancelAddTagOpen}
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

export default TagForm;
