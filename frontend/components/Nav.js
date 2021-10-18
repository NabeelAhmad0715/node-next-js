import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={`${navStyles.nav} navbar navbar-expand-lg navbar-light bg-light`}>
  <Link href="/">
  <a className="navbar-brand" >
    Navbar
  </a>
  </Link>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link href="/">
        <a className="nav-link text-white">
          Home <span className="sr-only">(current)</span>
        </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/user">
          <a className="nav-link text-white">
            User
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/add-user">
          <a className="nav-link text-white">
            Add User
          </a>
        </Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className={`${navStyles.btnWhite} btn my-2 my-sm-0`} type="submit">
        Search
      </button>
    </form>
  </div>
</nav>

  )
}

export default Nav
