import React, { useState, useEffect } from "react";

const TagInput = ({ tags, onTagAdd, tagsSuggestions, onTagRemove }) => {
  const [inputValue, setInputValue] = useState("");
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const [internalTagsSuggestions, setInternalTagsSuggestions] =
    useState(tagsSuggestions);

  useEffect(() => {
    window.addEventListener("click", () => setIsSuggestionsOpen(false));
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const matchingTag = tagsSuggestions.find((tag) => tag.name === inputValue);
    const existingTag = tags.find((tag) => tag === matchingTag._id);
    if (matchingTag && !existingTag) {
      onTagAdd(matchingTag._id);
      setInternalTagsSuggestions(
        internalTagsSuggestions.filter((tag) => tag._id !== matchingTag._id)
      );
    }
    setInputValue("");
  };

  const handleTagAdd = (tagToAddID) => {
    onTagAdd(tagToAddID);
    setInternalTagsSuggestions(
      internalTagsSuggestions.filter((tag) => tag._id !== tagToAddID)
    );
    setInputValue("");
    console.log("test");
  };

  const handleTagRemove = (tagToRemoveID) => {
    onTagRemove(tagToRemoveID);
    const removedTag = tagsSuggestions.find((tag) => tag._id === tagToRemoveID);
    setInternalTagsSuggestions([...internalTagsSuggestions, removedTag]);
  };

  return (
    <form onSubmit={onFormSubmit}>
      {tags.map((tagID) => {
        const currentTag = tagsSuggestions.find(
          (tagToShow) => tagToShow._id === tagID
        );
        return (
          <span style={{ backgroundColor: currentTag.color }} key={tagID}>
            {currentTag.name}
            <span onClick={() => handleTagRemove(tagID)}>X</span>
          </span>
        );
      })}
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onClick={(event) => {
          setIsSuggestionsOpen(true);
          event.stopPropagation();
        }}
      />
      {isSuggestionsOpen &&
        internalTagsSuggestions.map((tag) => (
          <span
            style={{ color: tag.color }}
            key={tag._id}
            onClick={() => handleTagAdd(tag._id)}
          >
            {tag.name}
          </span>
        ))}
    </form>
  );
};

export default TagInput;