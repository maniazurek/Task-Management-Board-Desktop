import React from "react";

import SimpleTask from "./SimpleTask";

const ToDoSection = ({ tasksList, columnName, onTaskSelect }) => {
  return (
    <>
      <section className="main-content__section">
        <h2 className="main-content__section-title">{columnName}</h2>
        {tasksList.map((task) => {
          return (
            <SimpleTask
              key={task.id}
              task={task}
              onTaskSelect={onTaskSelect}
            />
          );
        })}
      </section>
    </>
  );
};

export default ToDoSection;
