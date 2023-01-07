import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import TasksPage from "./pages/TasksPage";
import UsersPage from "./pages/UsersPage";
import ColumnsPage from "./pages/ColumnsPage";
import TagsPage from "./pages/TagsPage";

const App = () => {
  const URL = "https://to-do-api.fly.dev";

  return (
    <BrowserRouter>
      <Navigation />
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
