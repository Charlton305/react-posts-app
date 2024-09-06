import { useSelector, shallowEqual } from "react-redux";
import { selectUserById } from "./usersSlice";
import { getPostsForUser } from "../posts/postsSlice.js"
import { Link, useParams } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams()
  const user = useSelector(state => selectUserById(state, Number(userId)))

  const postsForUser = useSelector(state => {
    const userPosts = getPostsForUser(state, userId)
    return userPosts
  })

  return (
    <section>
      <h2>{user?.name}</h2>
      <ol>
        {postsForUser.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ol>
    </section>
  )
}
export default UserPage