import React from "react";
import NavigationItems from "./NavigationItems";

const Navigation = ({ isMobileNavOpen, handleMobileNavClose }) => {
  return (
    <>
      <nav className="side-nav">
        <NavigationItems />
      </nav>
      <div
        onClick={handleMobileNavClose}
        className="navigation-overlay_closed"
      ></div>
    </>
  );
};

export default Navigation;
