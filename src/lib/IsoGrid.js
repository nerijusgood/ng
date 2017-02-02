import dynamics from 'dynamics.js'
import imagesLoaded from 'imagesloaded'
import Masonry from 'masonry-layout'
import { extend, getComputedTranslateY } from './utils'

export default class IsoClass {

  constructor(el, options) {
    this.isolayerEl = el

    this.options = extend( {}, this.options )
    extend( this.options, options )

    this.gridEl = this.isolayerEl.querySelector('.grid')

    // grid items
    this.gridItems = [].slice.call(this.gridEl.querySelectorAll('.grid__item'))
    this.gridItemsTotal = this.gridItems.length

    this.didscroll = false

    this.init()
  }

  init() {
    imagesLoaded(this.gridEl, () => {

      // initialize masonry
      this.msnry = new Masonry(this.gridEl, {
        itemSelector: '.grid__item',
        isFitWidth : true
      })

      // the isolayer div element will be positioned fixed and will have a transformation based on the values defined in the HTML (data-attrs for the isolayer div element)
      if ( this.options.type === 'scrollable' ) {
        this.isolayerEl.style.position = 'fixed'
      }

      this.isolayerEl.style.WebkitTransformStyle = this.isolayerEl.style.transformStyle = 'preserve-3d'

      const transformValue = this.options.perspective !== 0 ? 'perspective(' + this.options.perspective + 'px) ' + this.options.transform : this.options.transform
      this.isolayerEl.style.WebkitTransform = this.isolayerEl.style.transform = transformValue

      // create the div element that will force the height for scrolling
      if ( this.options.type === 'scrollable' ) {
        this.createPseudoScroller()
      }

      // init/bind events
      this.initEvents()

      // effects for loading grid elements:
      if ( this.options.type === 'scrollable' ) {
        console.log(this)
        console.log('FIX ANIMATE!!')
        // new AnimOnScroll(this.gridEl, {
        //   minDuration : 1,
        //   maxDuration : 1.2,
        //   viewportFactor : 0
        // });
      }

      // grid is "loaded" (all images are loaded)
      // this.options.onGridLoaded()
      this.gridEl.classList.add('grid--loaded')
    })
  }

  createPseudoScroller() {
    // element that will force the height for scrolling
    this.pseudoScrollerEl = document.createElement('div')
    this.pseudoScrollerEl.className = 'pseudo-scroller'
    // insert it inside the main container (same level of isolayerEl)
    this.isolayerEl.parentNode.insertBefore(this.pseudoScrollerEl, this.isolayerEl)
    // set the height of the pseudoScroller (grid´s height + additional space between the top of the rotated isolayerEl and the page - value set for the translation on the Y axis)
    this.pseudoScrollerEl.style.height = this.gridEl.offsetHeight + getComputedTranslateY(this.isolayerEl) * Math.sqrt(2) + 'px'
  }

  initEvents() {
    const scrollHandler = () => {
        requestAnimationFrame(() => {
          if (!this.didscroll) {
            this.didscroll = true
            this.scrollPage()
          }
        })
      },
      mouseenterHandler = (ev) => {
        this.expandSubItems(ev.target)
      },
      mouseleaveHandler = (ev) => {
        this.collapseSubItems(ev.target)
      }

    if ( this.options.type === 'scrollable' ) {
      // update the transform (ty) on scroll
      window.addEventListener('scroll', scrollHandler, false)
      // on resize (layoutComplete for the masonry instance) recalculate height
      this.msnry.on('layoutComplete', ( laidOutItems ) => {
        // reset the height of the pseudoScroller (grid´s height + additional space between the top of the rotated isolayerEl and the page)
        this.pseudoScrollerEl.style.height = this.gridEl.offsetHeight + this.isolayerEl.offsetTop * Math.sqrt(2) + 'px'
        this.scrollPage()
      })
    }

    this.gridItems.forEach((item) => {
      item.addEventListener('mouseenter', mouseenterHandler)
      item.addEventListener('mouseleave', mouseleaveHandler)
    })
  }

  expandSubItems(item) {
    const itemLink = item.querySelector('a'),
      subItems = [].slice.call(itemLink.querySelectorAll('.layer')),
      subItemsTotal = subItems.length

    itemLink.style.zIndex = item.style.zIndex = this.gridItemsTotal

    subItems.forEach((subitem, pos) => {
      dynamics.stop(subitem)
      dynamics.animate(subitem, this.options.stackItemsAnimation.properties(pos), this.options.stackItemsAnimation.options(pos, subItemsTotal))
    })
  }

  collapseSubItems(item) {
    const itemLink = item.querySelector('a');
    [].slice.call(itemLink.querySelectorAll('.layer')).forEach((subitem, pos) => {
      dynamics.stop(subitem)
      dynamics.animate(subitem, {
        translateZ: 0 // enough to reset any transform value previously set
      }, {
        duration: 100,
        complete: () => {
          itemLink.style.zIndex = item.style.zIndex = 1
        }
      })
    })
  }

  scrollPage() {
    this.gridEl.style.WebkitTransform = this.gridEl.style.transform = 'translate3d(0,-' + scrollY() + 'px,0)'
    this.didscroll = false
  }
}
