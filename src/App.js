import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import TasksPage from "./pages/TasksPage";
import UsersPage from "./pages/UsersPage";
import ColumnsPage from "./pages/ColumnsPage";

const App = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleIsMobileNavOpen = () => {
    setIsMobileNavOpen(true);
  };

  const handleMobileNavClose = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <BrowserRouter>
      <Navigation
        isMobileNavOpen={isMobileNavOpen}
        handleMobileNavClose={handleMobileNavClose}
      />
      <Routes>
        <Route
          path="/"
          element={<TasksPage openMobileNav={handleIsMobileNavOpen} />}
        />
        <Route
          path="/users"
          element={<UsersPage openMobileNav={handleIsMobileNavOpen} />}
        />
        <Route
          path="/columns"
          element={<ColumnsPage openMobileNav={handleIsMobileNavOpen} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
