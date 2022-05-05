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
        <Route path="/" exact>
          <UsersList />

          <Route path="/user/:userId" exact>
            <User />
          </Route>

          <Route path="/" exact>
            <AddUser />
          </Route>
        </Route>

        <Route path="/" exact>
          <EditUser />
        </Route>
      </div>
    </div>
  );
}

export default Layout;
