import React from 'react'

import Image1 from '../../../static/background/image1.jpg'
import Image2 from '../../../static/background/image2.jpg'
import Image3 from '../../../static/background/image3.jpg'
import Image4 from '../../../static/background/image4.jpg'

import backgroundStyle from './assets/Background.module.scss'

const Background = () => {
  const imagesList = [Image1, Image2, Image3, Image4]

  const animationName = 'backgroundAnimation'
  const animatonKeyframes = `
    @keyframes ${animationName} {
      0% {
        transform: translateX(-5%);
        opacity: 0;
      }
      ${5 * 4 / imagesList.length}% {
        opacity: 0.25;
      }
      ${25 * 4 / imagesList.length}% {
        opacity: 0.25;
      }
      ${30 * 4 / imagesList.length}% {
        opacity: 0;
        transform: translateX(5%);
      }
    }
  `

  return (
    <ul className={backgroundStyle.background}>
      <style>{animatonKeyframes}</style>
      {imagesList && imagesList.length && imagesList.map((item, i) => (
        <li
          key={item}
          style={{
            animationName,
            animationDuration: `${imagesList.length * 10}s`,
            animationDelay: `${i * 10}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite'
          }}
        >
          <img src={item} alt={`Background ${i + 1}`} />
        </li>
      ))}
    </ul>
  )
}

export default Background
