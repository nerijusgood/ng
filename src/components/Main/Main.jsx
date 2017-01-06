import { h, Component } from 'preact'
import style from './Main.css'
import { Container } from '../'

export default class Main extends Component {
  render({
    children,
    note,
    ...props
  }){
    return (
      <main id='Main' class='Main'>
        <span class='Main-note'>{note}</span>
        {children}
      </main>
    )
  }
}
