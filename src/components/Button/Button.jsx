import { h, Component } from 'preact'
import style from './Button.css'

export default class Button extends Component {
  state = {
		stars: '1' || ''
	}

  render(
    { children, ...props},
    { stars }
  ){
    return (
      <div class={style.Button}>

      </div>
    )
  }
}
