import { useSelector } from "react-redux";
import { selectAllUsers } from "./usersSlice"
import { Link } from "react-router-dom";

const UsersList = () => {
  const users = useSelector(selectAllUsers)

  return (
    <section>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
export default UsersList