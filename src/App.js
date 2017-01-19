import { h, Component } from 'preact'
import { Router } from 'preact-router'
import { Home, Hire, Work, Content, Missing404, Guide } from './containers'
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
            num='01'
            component={Home}
            path='/'
          />

          {/* Work */}
          <PageTransition
            num='02'
            component={Work}
            path='/work'
          />

          {/* HIRE */}
          <PageTransition
            num='03'
            component={Hire}
            path='/hire'
          />

          {/* CONTENT: XX  */}
          <PageTransition
            component={Content}
            class='content'
            sub
            path='/work/:item'
          />

          {/* GUIDE  */}
          <PageTransition
            component={Guide}
            path='/guide'
          />

          {/* 404 */}
          <PageTransition
            num='00'
            component={Missing404}
            default
          />

        </Router>
      </App>
    )
  }
}
