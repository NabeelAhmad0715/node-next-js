// import Link from 'next/link'
import userStyles from '../styles/User.module.css'

const User = ({ user }) => {
  return (
    <>
    <tr key = {user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.roles.name}</td>
    </tr>
    </>
  )
}

export default User
