import React, { useState, useEffect } from "react";
import User from "./User";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="user-list">
      <h1>User List</h1>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
