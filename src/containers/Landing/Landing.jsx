import { h, Component } from 'preact'
import Granim from 'granim'
import style from './Landing.css'
import { Icon } from 'components'

export default class Landing extends Component {

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
            ['#202326', '#211d20'],
            ['#302A2E', '#131012']
          ]
        }
      }
    })
  }

  render() {
    return (
      <div class="Canvas">
        <canvas id="magic-bg" class="Canvas-bg">
          {/* <FormattedMessage {...messages.header} /> */}
        </canvas>
        <div class="Canvas-content">

          <div class="Canvas-content-central">
            <span>Hello</span>
            <p>I am Nerijus Gudas, a Front-end Developer located in Copenhagen.</p>
          </div>

          <div class="Canvas-content-footer">
            <p>Coming soon</p>
          </div>

          <div class="Canvas-cotent-social">
            <Icon name="social-twitter" />
          </div>
        </div>
      </div>
    )
  }
}
