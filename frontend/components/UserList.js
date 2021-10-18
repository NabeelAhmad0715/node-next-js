import User from './User'
import userStyles from '../styles/User.module.css'

const UserList = ({ users }) => {
  return (
    <>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
        </tr>
      </thead>
        <tbody>
          {users.map((user) => (
            <User user={user} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default UserList
