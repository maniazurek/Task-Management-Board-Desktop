import React, { useEffect, useState } from "react";

import useFetch from "../hooks/useFetch";
import ColumnsMain from "../components/ColumnsMain";
import ColumnsForm from "../components/ColumnForm";

const ColumnsPage = () => {
  const [columnsList, setColumnsList] = useState([]);
  const [isAddColumnOpen, setIsAddColumnOpen] = useState(false);
  const [mode, setMode] = useState("add");
  const [selectedColumn, setSelectedColumn] = useState(null);

  const URL = "https://to-do-api.fly.dev";
  const [columnsData, columnsError, columnsLoading] = useFetch(
    `${URL}/columns`
  );

  useEffect(() => {
    if (columnsData.records) {
      setColumnsList(columnsData.records);
    }
  }, [columnsData]);

  const handleCancelAddColumnOpen = () => {
    setIsAddColumnOpen(false);
  };

  const handleColumnAdd = () => {
    setMode("add");
    setSelectedColumn(null);
    setIsAddColumnOpen(true);
  };

  const handleFormAdd = (name) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    };
    fetch(`${URL}/columns`, options)
      .then((res) => res.json())
      .then((data) => setColumnsList([...columnsList, data.records]));
    handleCancelAddColumnOpen();
  };

  const handleColumnSelect = (clickedColumn) => {
    setMode("edit");
    setSelectedColumn(clickedColumn);
    setIsAddColumnOpen(true);
  };

  const handleColumnEdit = (name) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    };
    fetch(`${URL}/columns/${selectedColumn._id}`, options)
      .then((res) => res.json())
      .then((data) => {
        const editedColumnsList = columnsList.map((column) => {
          if (column._id === data.records._id) {
            return data.records;
          } else {
            return column;
          }
        });
        setColumnsList(editedColumnsList);
        handleCancelAddColumnOpen();
      });
  };

  return (
    <>
      <ColumnsMain
        addColumnOpen={handleColumnAdd}
        columnsList={columnsList}
        onColumnSelect={handleColumnSelect}
      />
      {isAddColumnOpen && (
        <ColumnsForm
          mode={mode}
          handleFormSubmit={mode === "add" ? handleFormAdd : handleColumnEdit}
          CancelAddColumnOpen={handleCancelAddColumnOpen}
          columnToEdit={selectedColumn}
          columnsList={columnsData.records}
        />
      )}
    </>
  );
};

export default ColumnsPage;
