import { h, Component } from 'preact'
import { Main, Navbar, Container } from '../../components'
import style from './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div class='Home'>
        <Container>
          <Navbar />
        </Container>

        <Main>
          <Container>
            card area
          </Container>
        </Main>
      </div>
    )
  }
}
