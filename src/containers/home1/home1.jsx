import { h, Component } from 'preact'
import style from './home'

export default class Home extends Component {
  render() {
    return (
      <div class={style.Home}>
        <h1>Home</h1>
        <p></p>
        <p>This is the Home component.</p>
      </div>
    )
  }
}
