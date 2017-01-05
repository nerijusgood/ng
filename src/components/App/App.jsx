import { h, Component } from 'preact'
import style from './App.css'
import { Container } from '../'

export default class Header extends Component {
  render({
    children,
    ...props
  }){
    return (
      <div id='App' {...props}>
        {children}
      </div>
    )
  }
}
