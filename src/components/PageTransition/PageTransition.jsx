import { h, Component } from 'preact'
import cx from 'classnames'
import PreactCSSTransitionGroup from 'preact-css-transition-group'
import { Main } from 'components'
import style from './PageTransition.css'

export default (props) => (
  <Main note={props.num} class={props.class} sub={props.sub}>
    <PreactCSSTransitionGroup
      class={cx('Trans-wrap', props.class )}
      component='div'
      transitionName={ props.sub ? 'Sub' : 'Page' }
      transitionEnter={true}
      transitionLeave={true}>
      <props.component key={props.path} />
    </PreactCSSTransitionGroup>
  </Main>
)
