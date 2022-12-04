import React from "react";

import addImage from "../assets/add.png";
import TagsSection from "../components/TagsSection";

const TagsMain = ({ addTagOpen, openMobileNav, tagsList, onTagSelect }) => {
  return (
    <div className="main-content__reusable">
      <button onClick={openMobileNav} className="hamburger-open"></button>
      <TagsSection
        columnName="tags"
        tagsList={tagsList}
        onTagSelect={onTagSelect}
      />
      <button onClick={addTagOpen} className="main-content__add-task">
        <img className="main-content__add-icon" src={addImage} />
      </button>
    </div>
  );
};

export default TagsMain;
