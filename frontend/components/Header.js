import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className="w-100 text-center mt-4">
      <h1>
        <span class={headerStyles.themeColor}>Users</span> Records
      </h1>
      <p>
        latest users records
      </p>
    </div>
  )
}

export default Header
