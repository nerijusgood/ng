import { h, Component } from 'preact'
import { Main, Navbar, Container, Section, Copy, Button, Card } from 'components'

export default class Work extends Component {
  render() {
    return (
      <div>
        {/* Featured */}
        <Section title="Featured project">
          <h1>Featured item</h1>
        </Section>
        <Section title="Latest projects">
          <h1>Project list</h1>
        </Section>
      </div>
    )
  }
}
