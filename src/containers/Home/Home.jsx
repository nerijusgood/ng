import { h, Component } from 'preact'
import { Main, Navbar, Container, Sub } from '../../components'
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
            <div class="u-flex">
              <div>
                <Sub>Intro</Sub>
              </div>

              <div>
                <Sub>Featured</Sub>
              </div>
            </div>
          </Container>
        </Main>
      </div>
    )
  }
}
