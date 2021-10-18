// import { server } from '../../config'
import UserList from '../components/UserList'
import { users } from '../services/UserService'

export default function Home() {
  return (
    <div>
      <UserList users={users} />
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/drinks`)
//   const drinks = await res.json();

//   return {
//     props: {
//       drinks,
//     }
//   }
// }
