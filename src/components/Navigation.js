import React from "react";
import NavigationItems from "./NavigationItems";

const Navigation = () => {
  return (
    <>
      <nav className="side-nav">
        <NavigationItems />
      </nav>
      <div className="navigation-overlay_closed"></div>
    </>
  );
};

export default Navigation;
