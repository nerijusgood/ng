import { h, Component } from 'preact'
import { Router } from 'preact-router'
import style from './style/App'

import { Landing, Home, Profile } from './containers'

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url
  }

  render() {
    return (
      <Router onChange={this.handleRoute}>
        {/* <Landing path="/" /> */}

        <Home path="/" />
        <Profile path="/profile" />
      </Router>
    )
  }
}
