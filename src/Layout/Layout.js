import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Users from "./Users/Users";
import User from "./Users/User/User";
import AddUser from "./Users/User/AddUser";
import EditUser from "./Users/User/EditUser";
import DetailedUser from "./Users/User/DetailedUser";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { listUsers } from "../utils/api";

function Layout() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    function retrieveUsers() {
      const abortController = new AbortController();
      listUsers(abortController.signal).then(setUsers);
      return () => abortController.abort();
    }

    retrieveUsers();
  }, []);

  // const list = users.map((user) => <User key={user.id} user={user} />);

  return (
    <div>
      <Header />

      <div>
        {/* <Router> */}
        <Route path="/">
          <Users users={users} />
        </Route>
      </div>
    </div>
  );
}

export default Layout;
