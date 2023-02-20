import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";

import Navigation from "./components/Navigation";
import TasksPage from "./pages/TasksPage";
import UsersPage from "./pages/UsersPage";
import ColumnsPage from "./pages/ColumnsPage";
import TagsPage from "./pages/TagsPage";

const App = () => {
  const URL = "https://to-do-api.fly.dev";

  const [tasksData] = useFetch(`${URL}/tasks`);
  const [usersData] = useFetch(`${URL}/users`);
  const [columnsData] = useFetch(`${URL}/columns`);
  const [tagsData] = useFetch(`${URL}/tags`);

  return (
    <BrowserRouter>
      <Navigation
        tasksList={tasksData.records?.length}
        usersList={usersData.records?.length}
        columnsList={columnsData.records?.length}
        tagsList={tagsData.records?.length}
      />
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/columns" element={<ColumnsPage />} />
        <Route path="/tags" element={<TagsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
