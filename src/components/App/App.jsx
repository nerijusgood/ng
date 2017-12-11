import { h, Component } from 'preact'
// import PreactCSSTransitionGroup from 'preact-css-transition-group'
import style from './App.css'
import { Navbar, Container } from 'components'

export default class App extends Component {
  render({
    children,
    ...props
  }){

    const items = children.map((item, i) => (
      <div key={item}>
        {item}
      </div>
    ))

    return (
      <div id='App' {...props}>
        {/* <Container>
          <Navbar />
        </Container> */}
        {children}
      </div>
    )
  }
}
