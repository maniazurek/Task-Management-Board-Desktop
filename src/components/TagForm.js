import React, { useState } from "react";
import { TwitterPicker } from "react-color";

import "react-datepicker/dist/react-datepicker.css";

const TagForm = ({ handleFormSubmit, CancelAddTagOpen, mode, tagToEdit }) => {
  const [name, setName] = useState(mode === "add" ? "" : tagToEdit.name);
  const [color, setColor] = useState(mode === "add" ? "" : tagToEdit.color);
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

  const onFormSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(name, color);
  };

  const onColorPickerOpen = () => {
    setIsColorPickerOpen(true);
  };

  const onColorPickerClose = () => {
    setIsColorPickerOpen(false);
  };

  const handleChangeColor = (color) => {
    setColor(color.hex);
  };

  return (
    <div className="add-task_overlay">
      <form
        onSubmit={onFormSubmit}
        // onClick={onColorPickerClose}
        className="new-task__container-add "
      >
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
              onClick={onColorPickerOpen}
              className="new-user-img"
              style={{ backgroundColor: color, cursor: "pointer"}}
            ></div>
            {isColorPickerOpen && (
              <TwitterPicker onChange={handleChangeColor} />
            )}
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
