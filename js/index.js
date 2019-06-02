`use strict`

//......................................................................................................................
const get = query => document.querySelector(query)
const getAll = query => document.querySelectorAll(query)
const arrayer = length => Array.from({length})

//......................................................................................................................
// Main carousel

const mainFrames = getAll(`.imgCarousel`)
let mainNext = 0

const mainCarousel = () => {
  if(mainNext > mainFrames.length - 2) mainNext = 0
  else mainNext ++

  mainFrames.forEach((frame, index) => {
    if(index < mainNext - 1 && index
    || mainNext === 2 && !index
    || !mainNext && index === mainFrames.length - 2
    || mainNext === 1 && index === mainFrames.length - 1) {
      frame.style.transition = `all 0s`
      setTimeout(() => frame.style.transition = `all 2s`, 1000)
    }

    let mod =
        !mainNext && index === mainFrames.length - 1
      ? -mainFrames.length
      : index < mainNext - 1
      ? mainFrames.length
      : 0

    frame.style.transform = `translateX(${(-mainNext + mod) * 100}%)`
  })
}

//......................................................................................................................
// Mini carousel

const miniFrames = getAll(`.imgMiniCarousel`)
let miniNext = 0

const miniCarousel = () => {
  if(miniNext > miniFrames.length - 2) miniNext = 0
  else miniNext ++

  miniFrames.forEach((frame, index) => {
    if(index < miniNext - 1 && index
    || miniNext === 2 && !index
    || !miniNext && index === miniFrames.length - 2
    || miniNext === 1 && index === miniFrames.length - 1) {
      frame.style.transition = `all 0s`
      setTimeout(() => frame.style.transition = `all 2s`, 1000)
    }

    let mod =
        !miniNext && index === miniFrames.length - 1
      ? -miniFrames.length
      : index < miniNext - 1
      ? miniFrames.length
      : 0

    frame.style.transform = `translateX(${(-miniNext + mod) * 100}%)`
  })
}

//......................................................................................................................
// Loop

let counter = 180

const loop = () => {
  if(counter === 180) mainCarousel()
  else if(counter === 160) miniCarousel()

  if(counter < 0) counter = 180
  else counter --

  window.requestAnimationFrame(loop)
}

loop()
