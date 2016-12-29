import { h, Component } from 'preact'
import style from './Icon.css'

export default class Icon extends Component {
  state = {
		stars: '1' || ''
	}

  render(
    { children, ...props},
    { stars }
  ){
    return (
      <div class={style.Icon}>

      </div>
    )
  }
}
