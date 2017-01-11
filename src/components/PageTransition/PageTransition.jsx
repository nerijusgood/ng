import { h, Component } from 'preact'
import cx from 'classnames'
import PreactCSSTransitionGroup from 'preact-css-transition-group'
import { Main } from '../'
import style from './PageTransition.css'

export default (props) => (
  <Main note='_01' class={props.class}>
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
