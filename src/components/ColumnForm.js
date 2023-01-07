import React, { useState } from "react";
import DatePicker from "react-datepicker";
import uniqid from "uniqid";

import "react-datepicker/dist/react-datepicker.css";

const ColumnForm = ({
  handleFormSubmit,
  CancelAddColumnOpen,
  mode,
  columnToEdit,
}) => {
  const [name, setName] = useState(mode === "add" ? "" : columnToEdit.name);

  const onFormSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(name);
  };

  return (
    <div className="add-task_overlay">
      <form onSubmit={onFormSubmit} className="new-task__container-add ">
        <span className="new-task__element-title">
          <label
            className="new-task__label-title"
            htmlFor="new-task__input-title"
          >
            Column
          </label>
          <input
            type="text"
            placeholder="Type column"
            className="new-task__input-title"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </span>
        <button
          onClick={CancelAddColumnOpen}
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

export default ColumnForm;
