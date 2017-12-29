import { h, Component } from 'preact'
import style from './Icon.css'

export default class Icon extends Component {
  render(
    { children, name, size, ...props},
  ){
    let icon
    let title
    let width = size || 24
    let height = size || 24

    switch (name) {
    case 'social-twitter':
      icon = <path fill="currentColor" d="M24 4.6c-.9.4-1.8.7-2.8.8 1-.6 1.8-1.6 2.2-2.7-.9.6-2 1-3.1 1.2-.9-.9-2.2-1.5-3.6-1.5-2.7 0-4.9 2.2-4.9 4.9 0 .4 0 .8.1 1.1-4.2-.3-7.8-2.2-10.2-5.2-.4.7-.7 1.6-.7 2.4 0 1.7.9 3.2 2.2 4.1-.8 0-1.5-.2-2.2-.6v.1c0 2.4 1.7 4.4 3.9 4.8-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.6 3.4-1.7 1.3-3.8 2.1-6.1 2.1-.4 0-.8 0-1.2-.1 2.2 1.4 4.7 2.2 7.5 2.2 9 0 14-7.5 14-14v-.6c1-.7 1.8-1.5 2.5-2.5"/>
      title = 'Twitter'
      width = 11
      height = 20
      break

    case 'social-linkedin':
      icon = <path fill="currentColor" d="M22.3 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.5c1 0 1.8-.8 1.8-1.7V1.7c0-.9-.8-1.7-1.8-1.7zM7.1 20.5H3.6V9h3.6v11.5zm-1.7-13c-1.1 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1c1.1 0 2.1.9 2.1 2.1-.1 1.1-1 2.1-2.1 2.1zm15.1 13h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.5-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.3z"/>
      title = 'LinkedIn'
      width = 11
      height = 20
      break
    }

    return (
      <div className='Icon'>
        <svg
          aria-labelledby={title}
          height={height}
          role='img'
          version='1.1'
          width={width}
          {...props}
        >
          <title>{title}</title>
          {icon}
        </svg>
      </div>
    )
  }
}
