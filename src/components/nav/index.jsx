import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.css';

export default class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link href="/">Hom412e</Link></li>
          <li><Link href="/profile">Me2</Link></li>
          <li><Link href="/profile/john">1John</Link></li>
        </ul>
      </nav>
    );
  }
}
