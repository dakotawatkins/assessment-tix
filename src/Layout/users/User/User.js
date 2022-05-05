import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { listUsers } from "../../../utils/api";
import UserList from "../Users";

function User({ user }) {
  const [userData, setUserData] = useState(false);
  const [userId, setUserId] = useState(null);

  return (
    <div>
      <div>
        {/* <Link to={`/users/${user.id}`} onClick={() => setUserData(true)}>
          <h2>
            {user.firstName} {user.lastName}
          </h2>
        </Link> */}
      </div>
      <div>
        <button
          onClick={() => {
            setUserData(true);
          }}
        >
          {user.firstName} {user.lastName}
        </button>
      </div>

      {userData === true && (
        <div>
          <tr>
            <th>First Name</th>
            <td>{user.firstName}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>{user.lastName}</td>
          </tr>
          <tr>
            <th>Date Added</th>
            <td>{user.createdAt}</td>
          </tr>
          <tr>
            <th>ID</th>
            <td>{user.id}</td>
          </tr>
        </div>
      )}
    </div>
  );
}

export default User;
