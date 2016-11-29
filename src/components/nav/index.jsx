import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.css';

export default class Nav extends Component {

  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <nav className='Nav'>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/profile">Profile</Link></li>
          <li><Link href="/profile/john">Example</Link></li>
        </ul>
      </nav>
    );
  }
}
