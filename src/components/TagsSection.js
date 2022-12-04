import React from "react";

import SingleTag from "../components/SingleTag";

const TagsSection = ({ tagsList, columnName, onTagSelect }) => {
  return (
    <>
      <section className="main-content__section main-content__section__reusable">
        <h2 className="main-content__section-title">{columnName}</h2>
        <div className="main-content__section-elements">
          {tagsList.map((tag) => {
            return (
              <SingleTag key={tag._id} tag={tag} onTagSelect={onTagSelect} />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default TagsSection;
