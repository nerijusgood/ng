import { h, Component } from 'preact'
import style from './Sub.css'

export default class Sub extends Component {
  render(
    { children, ...props},
    { stars }
  ){
    return (
      <div class="Sub">
        <h2>
          {children}
        </h2>
      </div>
    )
  }
}
