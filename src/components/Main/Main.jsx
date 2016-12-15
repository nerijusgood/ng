import { h, Component } from 'preact'
import style from './Main.css'

export default class Header extends Component {
  render({
    children,
    ...props
  }){
    return (
      <main id='Main' class='Main'>
        {children}
      </main>
    )
  }
}
