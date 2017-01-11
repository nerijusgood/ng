import { h, Component } from 'preact'
import { Main, Navbar, Container, Section, Copy, Button, Card } from '../../components'
import style from './Content.css'

export default class Content extends Component {
  render() {
    return (
      <div class="u-flex">
        {/* intro */}
        <Section title="intro">
          <Copy>
            <h2 class="Copy-title">Magical title</h2>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Copy>

          <Button href='/'>See</Button>
          <a href='/'>Close</a>
        </Section>
      </div>
    )
  }
}
