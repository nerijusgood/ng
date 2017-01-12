import { h, Component } from 'preact'
import cx from 'classnames'
import style from './Main.css'
import { Container } from '../'

export default class Main extends Component {
  render({
    children,
    note,
    sub,
    ...props
  }){
    return (
      <main id='Main' class={cx('Main', {[`Main--${props.class}`]: props.class} )}>
        <span class='Main-note'>{note}</span>

        <Container>
          {children}
        </Container>
      </main>
    )
  }
}
