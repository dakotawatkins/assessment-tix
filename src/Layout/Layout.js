import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import UsersList from "./Users/Users";
import User from "./Users/User/User";
import AddUser from "./Users/AddUser";
import EditUser from "./Users/User/EditUser";

function Layout() {
  return (
    <div>
      <Header />

      <div>
        <Route path="/">
          <UsersList />
        </Route>

        <Route path="/user/:userId">
          <User />
        </Route>

        <Route path="/">
          <AddUser />
        </Route>

        <Route path="/">
          <EditUser />
        </Route>
      </div>
    </div>
  );
}

export default Layout;
