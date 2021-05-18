import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#333",
        height: 100,
        display: "flex",
        justifyContent: "space-around",
        alignItems: 'center'
      }}
    >
      <Link to="/">Dash</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/form">Form</Link>
      <Link to="/list">List</Link>
    </header>
  )
}

export default Header
