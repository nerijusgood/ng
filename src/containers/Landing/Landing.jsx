import { h, Component } from 'preact'
// import Granim from 'granim'
import style from './Landing.css'

export default class Landing extends Component {

  componentDidMount() {
    this.handleBgEffects()
  }

  handleBgEffects() {
    // this.granimInstance = new Granim({
    //   element: '#canvas-basic',
    //   name: 'basic-gradient',
    //   direction: 'left-right',
    //   opacity: [1, 1],
    //   isPausedWhenNotInView: true,
    //   states: {
    //     'default-state': {
    //       gradients: [
    //         ['#AA076B', '#61045F'],
    //         ['#02AAB0', '#00CDAC'],
    //         ['#DA22FF', '#9733EE']
    //       ]
    //     }
    //   }
    // })
  }

  render() {
    return (
      <div class={style.Landing}>
        <canvas id='canvas-basic' className={style.Canvas}>
          {/* <FormattedMessage {...messages.header} /> */}

          <h1>Hello</h1>
        </canvas>
      </div>
    )
  }
}
