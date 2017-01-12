import { h, Component } from 'preact'
import { Section } from '../../components'

export default class Missing404 extends Component {
  render() {
    return (
      <Section title="404">
        <h2>Wrong turn amigo!</h2>
      </Section>
    )
  }
}
