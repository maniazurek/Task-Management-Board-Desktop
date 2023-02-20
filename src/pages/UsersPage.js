import React, { useEffect, useState } from "react";

import useFetch from "../hooks/useFetch";
import UsersMain from "../components/UsersMain";
import UserForm from "../components/UserForm";

const UsersPage = () => {
  const [usersList, setUsersList] = useState([]);
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [mode, setMode] = useState("add");
  const [selectedUser, setSelectedUser] = useState(null);

  const URL = "https://to-do-api.fly.dev";
  const [usersData, usersError, usersLoading] = useFetch(`${URL}/users`);

  useEffect(() => {
    if (usersData.records) {
      setUsersList(usersData.records);
    }
  }, [usersData]);

  const handleCancelAddUserOpen = () => {
    setIsAddUserOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", () => setIsAddUserOpen(false));
  }, []);

  const handleUserAdd = (event) => {
    setMode("add");
    setSelectedUser(null);
    setIsAddUserOpen(true);
    event.stopPropagation();
  };

  console.log(usersList.length);

  const handleFormAdd = (name, description, imageURL) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        imageURL,
      }),
    };
    fetch(`${URL}/users`, options)
      .then((res) => res.json())
      .then((data) => setUsersList([...usersList, data.records]));
    handleCancelAddUserOpen();
  };

  const handleUserSelect = (clickedUser) => {
    setMode("edit");
    setSelectedUser(clickedUser);
    setIsAddUserOpen(true);
  };

  const handleUserEdit = (name, description, imageURL) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        imageURL,
      }),
    };
    fetch(`${URL}/users/${selectedUser._id}`, options)
      .then((res) => res.json())
      .then((data) => {
        const editedUsersList = usersList.map((user) => {
          if (user._id === data.records._id) {
            return data.records;
          } else {
            return user;
          }
        });
        setUsersList(editedUsersList);
        handleCancelAddUserOpen();
      });
  };

  return (
    <>
      <UsersMain
        addUserOpen={handleUserAdd}
        usersList={usersList}
        onUserSelect={handleUserSelect}
      />
      {isAddUserOpen && (
        <UserForm
          mode={mode}
          handleFormSubmit={mode === "add" ? handleFormAdd : handleUserEdit}
          CancelAddUserOpen={handleCancelAddUserOpen}
          userToEdit={selectedUser}
          usersList={usersData.records}
        />
      )}
    </>
  );
};

export default UsersPage;
