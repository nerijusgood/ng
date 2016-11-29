import { h, Component } from 'preact';
import { Link } from 'preact-router';
// import style from './style';


import Nav from '../nav';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>Preact Boilerplate</h1>

        <Nav />
				{/* <nav>
					<Link href="/">Homer</Link>
					<Link href="/profile">Profile</Link>
					<Link href="/profile/john">Johne</Link>
				</nav> */}
			</header>
		);
	}
}
