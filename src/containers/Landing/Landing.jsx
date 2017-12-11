import { h, Component } from 'preact'
import Granim from 'granim'
import style from './Landing.css'

export default class Landing extends Component {

  componentDidMount() {
    this.handleBgEffects()
  }

  handleBgEffects() {
    this.granimInstance = new Granim({
      element: '#canvas-basic',
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
      <div class="Canvas-wrap">
        <canvas id='canvas-basic' class="Canvas">
          {/* <FormattedMessage {...messages.header} /> */}
        </canvas>
        <h1>Nerijus Gudas</h1>
      </div>
    )
  }
}
