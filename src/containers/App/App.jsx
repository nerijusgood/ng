import { h, Component } from 'preact'
import PreactTransitionGroup from 'preact-transition-group'
import style from './App.css'
import { Navbar, Container } from '../../components'

export default class App extends Component {
  render({
    children,
    ...props
  }){
    return (
      <div id='App' {...props}>
        <Container>
          <Navbar />
        </Container>


        <PreactTransitionGroup
          transitionName='Transition'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
        </PreactTransitionGroup>

        {children}
      </div>
    )
  }
}
