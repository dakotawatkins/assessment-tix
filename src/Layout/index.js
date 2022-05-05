import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import UsersList from "./sideComponent/UsersList";
import User from "./users/User";
import AddUser from "./users/AddUser";

function Layout() {
  return (
    <div>
      <Header />

      <div>
        <Route path="/" exact>
          <UsersList />
        </Route>

        {/* <Route path="/" exact>
          <User />
        </Route> */}

        <Route path="/" exact>
          <AddUser />
        </Route>
      </div>
    </div>
  );
}

export default Layout;
