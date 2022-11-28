import React from "react";

import SingleTag from "../components/SingleTag";

const TagsSection = ({ tagsList, columnName, onTagSelect }) => {
  return (
    <>
      <section className="main-content__section">
        <h2 className="main-content__section-title">{columnName}</h2>
        {tagsList.map((tag) => {
          return (
            <SingleTag
              key={tag._id}
              tag={tag}
              onTagSelect={onTagSelect}
            />
          );
        })}
      </section>
    </>
  );
};

export default TagsSection;
