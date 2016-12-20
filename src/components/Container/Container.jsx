import { h, Component } from 'preact'
import style from './Container.css'

export default class Container extends Component {
  render({
    children,
    ...props
  }){
    return (
      <div class='Container'>
        {children}
      </div>
    )
  }
}
