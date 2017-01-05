import { h, Component } from 'preact'
import cx from 'classnames'
import style from './Section.css'

export default class Section extends Component {
  render(
    { children, title, right, ...props},
    { stars }
  ){
    return (
      <div class={cx('Section')} {...props}>

        <div class={cx('Section-title', {'Section-title--right': right })}>
          <h2 class="">
            {title}
          </h2>
        </div>

        <div class="Section-content Leader">
          {children}
        </div>
      </div>
    )
  }
}
