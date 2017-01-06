import { h, Component } from 'preact'
import style from './Button.css'

export default class Button extends Component {
  state = {
		stars: '1' || ''
	}

  render(
    { children, onClick, ...props},
    { stars }
  ){
    return (
      <button class='Button' onClick={onClick} {...props}>
        {children}
      </button>
    )
  }
}
