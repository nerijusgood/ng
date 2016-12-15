import { h, Component } from 'preact'
import { Link } from 'preact-router'
import style from './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div class='Navbar'>
        <div class='Navbar-logo'>
          <Link href="/">NE</Link>
        </div>

        <nav class='Navbar-nav'>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/profile">Profile</Link></li>
            <li><Link href="/profile/john">Example</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}
