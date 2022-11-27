import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import TasksPage from "./pages/TasksPage";

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
