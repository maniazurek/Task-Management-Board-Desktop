import React from "react";
import { Link } from "react-router-dom";

const UsersPage = ({ handleIsMobileNavOpen }) => {
  return (
    <Link to="/users">
      <div>Users</div>
    </Link>
  );
};

export default UsersPage;
