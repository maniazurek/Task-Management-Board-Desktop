import React from "react";

import SingleColumn from "../components/SingleColumn"

const ColumnsSection = ({ columnsList, columnName, onColumnSelect }) => {
  return (
    <>
      <section className="main-content__section">
        <h2 className="main-content__section-title">{columnName}</h2>
        {columnsList.map((column) => {
          return (
            <SingleColumn
              key={column._id}
              column={column}
              onColumnSelect={onColumnSelect}
            />
          );
        })}
      </section>
    </>
  );
};

export default ColumnsSection;