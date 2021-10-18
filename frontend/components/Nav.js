import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul className="mb-0">
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/drink'>Drinks</Link>
        </li>
        {/* <li>
          <Link href='/add-drinks'>Add Drinks</Link>
        </li> */}
      </ul>
    </nav>
  )
}

export default Nav
