import React, { useState, useEffect } from "react";
import User from "./User/User";
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
      <div>{list}</div>
    </div>
  );
}

export default UserList;
