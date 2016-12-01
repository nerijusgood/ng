import { h, Component } from 'preact'
import { Link } from 'preact-router'
import style from './Header.css'

export default class Header extends Component {
  render() {
    return (
      <header class={style.Header}>
        <h1>Logo</h1>

        <nav className='Nav'>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/profile">Profile</Link></li>
            <li><Link href="/profile/john">Example</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}
