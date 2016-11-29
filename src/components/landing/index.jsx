import { h, Component } from 'preact';
import style from './style.css';

export default class Landing extends Component {
  render() {
    return (
      <div class={style.Landing}>
        <h1>Welcome</h1>
      </div>
    );
  }
}
