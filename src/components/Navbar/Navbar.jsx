import { h, Component } from 'preact'
import { Link } from 'preact-router'
import style from './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div class='Navbar'>
          <div class='Navbar-logo'>
            <Link href="/">
              {/* <svg viewBox="0 0 256 249" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M207.506 218.15h-87.96l43.98-95.696.042.09.04-.09h.82l27.504 60.497 13.47 30.53 2.12 4.67h-.016zm47.942 23.372L170.756 56.456c-.536-1.07-1.24-1.982-2.384-2.52V38.243h40.6v-1.218l-11.147-17.743L208.97 1.54V0h-48.266v54.16c-.913.56-1.585 1.368-2.05 2.296l-46.023 99.596-30.12-65.82c-.823-1.646-1.922-3.024-4.673-3.024h-2.75c-2.473 0-3.85 1.378-4.677 3.024l-58.86 127.38-2.13 4.724-8.87 19.186c-1.65 3.572.553 7.154 4.677 7.154H29.15l4.717.03 117.787-.03h99.123c4.124 0 6.323-3.582 4.67-7.154z" fill="#2D2E2B"/></svg> */}
              <svg viewBox="0 0 256 236" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M128.075 236.075l47.104-144.97H80.97l47.105 144.97z" fill="#E24329"/><path d="M128.075 236.074L80.97 91.104H14.957l113.12 144.97z" fill="#FC6D26"/><path d="M14.956 91.104L.642 135.16c-1.306 4.018.124 8.42 3.542 10.903l123.89 90.012L14.957 91.105z" fill="#FCA326"/><path d="M14.956 91.105H80.97L52.6 3.79c-1.46-4.493-7.815-4.492-9.274 0l-28.37 87.315z" fill="#E24329"/><path d="M128.075 236.074l47.104-144.97h66.013l-113.12 144.97z" fill="#FC6D26"/><path d="M241.194 91.104l14.314 44.056c1.306 4.018-.124 8.42-3.543 10.903l-123.89 90.012 113.12-144.97z" fill="#FCA326"/><path d="M241.194 91.105H175.18L203.55 3.79c1.46-4.493 7.815-4.492 9.274 0l28.37 87.315z" fill="#E24329"/></svg>
            </Link>
          </div>

          <nav class='Navbar-nav'>
            <ul>
              <li><Link href="/">Front</Link></li>
              <li><Link href="/work">Work</Link></li>
              <li><Link href="/hire">Hire</Link></li>
            </ul>
          </nav>
      </div>
    )
  }
}
