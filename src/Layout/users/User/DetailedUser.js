import { useParams } from "react-router-dom";
import EditUser from "./EditUser";

function DetailedUser({ users }) {
  const { userId } = useParams();
  const user = users.find((user) => `${user.id}` === userId);

  return (
    <div>
      <div>
        <h2>
          {user.firstName} {user.lastName}
        </h2>
      </div>
      <div className="detailed-user">
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
      <div>
        <EditUser />
      </div>
    </div>
  );
}

export default DetailedUser;
