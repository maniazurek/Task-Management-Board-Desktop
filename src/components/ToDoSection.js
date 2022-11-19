import React from "react";
import uniqid from "uniqid";

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
              // title={task.title}
              // description={task.description}
              // link={task.link}
              // tags={task.tags}
              // date={task.date}
              // assignee={task.assignee}
              // columns={task.columns}
              // comments={task.comments}
              onTaskSelect={onTaskSelect}
            />
          );
        })}
      </section>
    </>
  );
};

export default ToDoSection;
