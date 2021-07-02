import "../styles/navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-list_item">New</li>
        <li className="nav-list_item">Most Popular</li>
        <li className="nav-list_item">Home</li>
        <li className="nav-list_item">Profile</li>
        <li className="nav-list_item">Settings</li>
      </ul>
    </nav>
  )
}
