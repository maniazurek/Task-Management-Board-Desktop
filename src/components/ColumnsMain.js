import React from "react";

import addImage from "../assets/add.png";
import ColumnsSection from "../components/ColumnsSections"

const ColumnsMain = ({ addColumnOpen, openMobileNav, columnsList, onColumnSelect }) => {
  return (
    <div className="main-content__reusable">
      <button onClick={openMobileNav} className="hamburger-open"></button>
      <ColumnsSection
        columnName="columns"
        columnsList={columnsList}
        onColumnSelect={onColumnSelect}
      />
      <button onClick={addColumnOpen} className="main-content__add-task">
        <img className="main-content__add-icon" src={addImage} />
      </button>
    </div>
  );
};

export default ColumnsMain;