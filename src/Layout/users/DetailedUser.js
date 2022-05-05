import React, { useState, useEffect } from "react";
import { listUsers } from "../../utils/api";

function DetailedUser({ user }) {
  return (
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
  );
}

export default DetailedUser;
