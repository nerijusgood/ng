import { h, Component } from 'preact'
import { Router } from 'preact-router'
import { Home, Hire, Content } from './containers'
import { App, PageTransition } from './components'

export default class Site extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		'change' event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url
  }

  render() {
    return (
      <App class='App'>
        <Router onChange={this.handleRoute}>

          {/* HOME */}
          <PageTransition
            component={Home}
            path='/'
          />

          {/* HIRE */}
          <PageTransition
            component={Hire}
            path='/hire'
          />

          {/* CONTENT: XX  */}
          <PageTransition
            component={Content}
            class='content'
            sub
            path='/content'
          />

          {/* 404 */}
          <PageTransition
            component={Home}
            default
          />

        </Router>
      </App>
    )
  }
}
