import User from './User'
import userStyles from '../styles/User.module.css'

const UserList = ({ users }) => {
  return (
    <div className={userStyles.grid}>
      {users}
      <div>Hello {users}</div>
      {users.map((user) => (
        <User user={user} />
      ))}
    </div>
  )
}

export default UserList
