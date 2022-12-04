import React from "react";

import SingleColumn from "../components/SingleColumn";

const ColumnsSection = ({ columnsList, columnName, onColumnSelect }) => {
  return (
    <>
      <section className="main-content__section main-content__section__reusable">
        <h2 className="main-content__section-title">{columnName}</h2>
        <div className="main-content__section-elements">
          {columnsList.map((column) => {
            return (
              <SingleColumn
                key={column._id}
                column={column}
                onColumnSelect={onColumnSelect}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ColumnsSection;
