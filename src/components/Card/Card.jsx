import { h, Component } from 'preact'
import style from './Card.css'
import img from './img.png';

export default class Card extends Component {
  render({
    children,
    title,
    subtitle,
    href,
    ...props
  }){
    const style = `background-image: url(${img})`
    return (
      <div class='Card'>
        <a href={href} class='Card-link'>
          <span class='Card-image' style={style}></span>

          <div class='Card-content'>
            <span class='Card-title'>
              {title}
            </span>
            <span class='Card-subtitle'>
              {subtitle}
            </span>
          </div>
        </a>
      </div>
    )
  }
}
