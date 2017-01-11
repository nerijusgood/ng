import { h, Component } from 'preact'
import { Main, Navbar, Container, Section, Copy, Button, Card } from '../../components'

export default class Home extends Component {
  render() {
    return (
      <div class="u-flex u-two-col">
        {/* intro */}
        <Section title="intro">
          <Copy>
            <h2 class="Copy-title">Magical title</h2>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Copy>

          <Button>See</Button>
        </Section>

        {/* Featured */}
        <Section title="featured" right>
          <Card
            title='Dynaudio'
            subtitle='Product line website'
            href='/'
          />
        </Section>
      </div>
    )
  }
}
