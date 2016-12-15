import { h, Component } from 'preact'
import { Main, Navbar } from '../../components'
import style from './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div class='Home'>
        <Navbar />

        <Main>
          card area
        </Main>
      </div>
    )
  }
}
