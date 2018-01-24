import { h, Component } from 'preact'
import style from './Landing.css'
import { Card, Button } from 'components'

export default class Landing extends Component {
  render() {
    return (
      <div class="Landing">

        <Card title="Got a killer project?">
          <Button url="mailto:nerijusgood@gmail.com">Get in touch</Button>
        </Card>
        
        <div class="Landing-content">

          <div class="Landing-intro">
            <h1>Hello,</h1>
            <p>I am Nerijus Gudas. I am a <span>Front-End Developer</span> living in <span>Copenhagen</span>, where
             I work as Digital Technologist at a strategic design firm <span>Designit</span>.</p>
          </div>

          <div class="Landing-social">
          </div>
        </div>
      </div>
    )
  }
}
