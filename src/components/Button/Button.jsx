import { h, Component } from 'preact'
import style from './Button.css'

export default class Button extends Component {
  state = {
		stars: '1' || ''
	}

  render(
    { children, onClick, url, ...props},
    { stars }
  ){
    const el = url ?
      <a href={url} class='Button' {...props}>
        {children}
      </a> :
      <button class='Button' onClick={onClick} {...props}>
        {children}
      </button>

    return (
      {el}
    )
  }
}
