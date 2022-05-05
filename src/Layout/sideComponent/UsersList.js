import React, { useState, useEffect } from "react";
import User from "../users/User";
import { listUsers } from "../../utils/api";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {});

  useEffect(() => {
    function retrieveUsers() {
      const abortController = new AbortController();
      listUsers(abortController.signal).then(setUsers);
      return () => abortController.abort();
    }

    retrieveUsers();
  }, []);

  const list = users.map((user) => <User key={user.id} user={user} />);

  return (
    <div>
      <h2>UserList</h2>
      <div>
        {list}
        {/* {users.map((user) => {
          return (
            <p>
              {user.firstName} {user.lastName}
            </p>
          );
        })} */}
        {/* {users.map((user) => {
          <UserList key={user.id} user={user} />;
        })} */}
      </div>
    </div>
  );
}

export default UserList;
