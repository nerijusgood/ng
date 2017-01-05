import { h, Component } from 'preact'
import style from './Copy.css'

export default class Copy extends Component {
  render({
    children,
    ...props
  }){
    return (
      <div class='Copy'>
        {children}
      </div>
    )
  }
}
