import { server } from '../config'
import UserList from '../components/UserList';


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

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const users = await res.json()

//   return {
//     props: {
//       users,
//     },
//   }
// }
