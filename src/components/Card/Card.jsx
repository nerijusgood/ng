import { h, Component } from 'preact'
import Granim from 'granim'
import style from './Card.css'
import TwitterIcon from './../../assets/Svg/social/github.svg'

export default class Card extends Component {
  componentDidMount() {
    this.handleBgEffects()
  }

  handleBgEffects() {
    this.granimInstance = new Granim({
      element: '#magic-bg',
      name: 'basic-gradient',
      direction: 'left-right',
      opacity: [1, 1],
      isPausedWhenNotInView: true,
      states: {
        'default-state': {
          gradients: [
            ['#252528', '#363740'],
            ['#4e4f56', '#363740']
          ]
        }
      }
    })
  }

  render({
    children,
    title,
    subtitle,
    ...props
  }){
    return (
      <div class='Card'>
        <canvas id="magic-bg" class="Card-bg"></canvas>
        <div class='Card-content'>
          <h2 class='Card-title'>
            {title}
          </h2>
          <span class='Card-subtitle'>
            {subtitle}
          </span>
        </div>
        <div class='Card-children'>
          {children}
        </div>
      </div>
    )
  }
}
