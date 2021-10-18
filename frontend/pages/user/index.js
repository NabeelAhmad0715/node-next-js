import { server } from '../../config'
import UserList from '../../components/UserList'
// import { users } from '../../services/UserService'

export default function Home({users}) {
  return (
    <div className="w-100">
      <UserList users={users} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/users`)
  const users = await res.json();

  return {
    props: {
      users,
    }
  }
}
