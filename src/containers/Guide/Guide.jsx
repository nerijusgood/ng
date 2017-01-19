import { h, Component } from 'preact'
import dynamics from 'dynamics.js'
import { getRandomInt, getComputedTranslateY, extend } from '../../lib/utils'
import { IsoGrid } from '../../lib/IsoGrid'
import { Main, Navbar, Container, Section, Copy, Button, Card } from '../../components'
import style from './Guide.css'

export default class Work extends Component {
  componentDidMount() {
    console.log(IsoGrid)

    this.initIsoGrid()
  }

  initIsoGrid () {
    // new IsoGrid(document.querySelector('.isolayer--deco1'), {
    //   transform : 'translateX(33vw) translateY(-340px) rotateX(45deg) rotateZ(45deg)',
    //   stackItemsAnimation : {
    //     properties : (pos) => {
    //       return {
    //         translateZ: (pos+1) * 30,
    //         rotateZ: getRandomInt(-4, 4)
    //       };
    //     },
    //     options : (pos, itemstotal) => {
    //       return {
    //         type: dynamics.bezier,
    //         duration: 500,
    //         points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}],
    //         delay: (itemstotal-pos-1)*40
    //       };
    //     }
    //   }
    // })
  }

  render() {
    return (
      <div class='Guide'>
        <div class="isolayer isolayer--deco1 isolayer--shadow">
          <ul class="grid">
            <li class="grid__item">
              <a class="grid__link" href="https://dribbble.com/fuviz"><div class="layer"></div><div class="layer"></div><div class="layer"></div><img class="grid__img layer" src="img/Dribbble/1.png" alt="01" />
              </a>
            </li>
            <li class="grid__item">
              <a class="grid__link" href="https://dribbble.com/fuviz"><div class="layer"></div><div class="layer"></div><div class="layer"></div><img class="grid__img layer" src="img/Dribbble/2.png" alt="02" /></a>
            </li>
            <li class="grid__item">
              <a class="grid__link" href="https://dribbble.com/fuviz"><div class="layer"></div><div class="layer"></div><div class="layer"></div><img class="grid__img layer" src="img/Dribbble/3.png" alt="03" /></a>
            </li>
            <li class="grid__item">
              <a class="grid__link" href="https://dribbble.com/fuviz"><div class="layer"></div><div class="layer"></div><div class="layer"></div><img class="grid__img layer" src="img/Dribbble/4.png" alt="04" /></a>
            </li>
            <li class="grid__item">
              <a class="grid__link" href="https://dribbble.com/fuviz"><div class="layer"></div><div class="layer"></div><div class="layer"></div><img class="grid__img layer" src="img/Dribbble/5.png" alt="05" /></a>
            </li>
            <li class="grid__item">
              <a class="grid__link" href="https://dribbble.com/fuviz"><div class="layer"></div><div class="layer"></div><div class="layer"></div><img class="grid__img layer" src="img/Dribbble/6.png" alt="06" /></a>
            </li>
            <li class="grid__item">
              <a class="grid__link" href="https://dribbble.com/fuviz"><div class="layer"></div><div class="layer"></div><div class="layer"></div><img class="grid__img layer" src="img/Dribbble/7.png" alt="07" /></a>
            </li>
            <li class="grid__item">
              <a class="grid__link" href="https://dribbble.com/fuviz"><div class="layer"></div><div class="layer"></div><div class="layer"></div><img class="grid__img layer" src="img/Dribbble/8.png" alt="08" /></a>
            </li>
            <li class="grid__item">
              <a class="grid__link" href="https://dribbble.com/fuviz"><div class="layer"></div><div class="layer"></div><div class="layer"></div><img class="grid__img layer" src="img/Dribbble/9.png" alt="09" /></a>
            </li>
            <li class="grid__item">
              <a class="grid__link" href="https://dribbble.com/fuviz"><div class="layer"></div><div class="layer"></div><div class="layer"></div><img class="grid__img layer" src="img/Dribbble/10.png" alt="10" /></a>
            </li>
            <li class="grid__item">
              <a class="grid__link" href="https://dribbble.com/fuviz"><div class="layer"></div><div class="layer"></div><div class="layer"></div><img class="grid__img layer" src="img/Dribbble/1.png" alt="01" /></a>
            </li>
            <li class="grid__item">
              <a class="grid__link" href="https://dribbble.com/fuviz"><div class="layer"></div><div class="layer"></div><div class="layer"></div><img class="grid__img layer" src="img/Dribbble/2.png" alt="02" /></a>
            </li>
            <li class="grid__item">
              <a class="grid__link" href="https://dribbble.com/fuviz"><div class="layer"></div><div class="layer"></div><div class="layer"></div><img class="grid__img layer" src="img/Dribbble/3.png" alt="03" /></a>
            </li>
            <li class="grid__item">
              <a class="grid__link" href="https://dribbble.com/fuviz"><div class="layer"></div><div class="layer"></div><div class="layer"></div><img class="grid__img layer" src="img/Dribbble/4.png" alt="04" /></a>
            </li>
            <li class="grid__item">
              <a class="grid__link" href="https://dribbble.com/fuviz"><div class="layer"></div><div class="layer"></div><div class="layer"></div><img class="grid__img layer" src="img/Dribbble/5.png" alt="05" /></a>
            </li>
            <li class="grid__item">
              <a class="grid__link" href="https://dribbble.com/fuviz"><div class="layer"></div><div class="layer"></div><div class="layer"></div><img class="grid__img layer" src="img/Dribbble/6.png" alt="06" /></a>
            </li>
            <li class="grid__item">
              <a class="grid__link" href="https://dribbble.com/fuviz"><div class="layer"></div><div class="layer"></div><div class="layer"></div><img class="grid__img layer" src="img/Dribbble/7.png" alt="07" /></a>
            </li>
            <li class="grid__item">
              <a class="grid__link" href="https://dribbble.com/fuviz"><div class="layer"></div><div class="layer"></div><div class="layer"></div><img class="grid__img layer" src="img/Dribbble/8.png" alt="08" /></a>
            </li>
            <li class="grid__item">
              <a class="grid__link" href="https://dribbble.com/fuviz"><div class="layer"></div><div class="layer"></div><div class="layer"></div><img class="grid__img layer" src="img/Dribbble/9.png" alt="09" /></a>
            </li>
            <li class="grid__item">
              <a class="grid__link" href="https://dribbble.com/fuviz"><div class="layer"></div><div class="layer"></div><div class="layer"></div><img class="grid__img layer" src="img/Dribbble/10.png" alt="10" /></a>
            </li>
          </ul>
        </div>

      </div>
    )
  }
}
