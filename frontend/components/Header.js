import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Margarita</span> Drinks
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with the latest margarita drinks
      </p>
    </div>
  )
}

export default Header
