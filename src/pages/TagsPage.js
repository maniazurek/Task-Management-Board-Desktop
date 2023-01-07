import React, { useEffect, useState } from "react";

import useFetch from "../hooks/useFetch";
import TagForm from "../components/TagForm";
import TagsMain from "../components/TagsMain";

const TagsPage = ({ handleIsMobileNavOpen }) => {
  const [tagsList, setTagsList] = useState([]);
  const [isAddTagOpen, setIsAddTagOpen] = useState(false);
  const [mode, setMode] = useState("add");
  const [selectedTag, setSelectedTag] = useState(null);

  const URL = "https://to-do-api.fly.dev";
  const [tagsData, tagsError, tagsLoading] = useFetch(`${URL}/tags`);

  useEffect(() => {
    if (tagsData.records) {
      setTagsList(tagsData.records);
    }
  }, [tagsData]);

  const handleCancelAddTagOpen = () => {
    setIsAddTagOpen(false);
  };

  const handleTagAdd = () => {
    setMode("add");
    setSelectedTag(null);
    setIsAddTagOpen(true);
  };

  const handleFormAdd = (name, color) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        color,
      }),
    };
    fetch(`${URL}/tags`, options)
      .then((res) => res.json())
      .then((data) => setTagsList([...tagsList, data.records]));
    handleCancelAddTagOpen();
  };

  const handleTagSelect = (clickedTag) => {
    setMode("edit");
    setSelectedTag(clickedTag);
    setIsAddTagOpen(true);
  };

  const handleTagEdit = (name, color) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        color,
      }),
    };
    fetch(`${URL}/tags/${selectedTag._id}`, options)
      .then((res) => res.json())
      .then((data) => {
        const editedTagsList = tagsList.map((tag) => {
          if (tag._id === data.records._id) {
            return data.records;
          } else {
            return tag;
          }
        });
        setTagsList(editedTagsList);
        handleCancelAddTagOpen();
      });
  };

  return (
    <>
      <TagsMain
        addTagOpen={handleTagAdd}
        openMobileNav={handleIsMobileNavOpen}
        tagsList={tagsList}
        onTagSelect={handleTagSelect}
      />
      {isAddTagOpen && (
        <TagForm
          mode={mode}
          handleFormSubmit={mode === "add" ? handleFormAdd : handleTagEdit}
          CancelAddTagOpen={handleCancelAddTagOpen}
          tagToEdit={selectedTag}
          tagsList={tagsData.records}
        />
      )}
    </>
  );
};

export default TagsPage;
