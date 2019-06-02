`use strict`

//......................................................................................................................
const get = query => document.querySelector(query)
const getAll = query => document.querySelectorAll(query)
const arrayer = length => Array.from({length})

//......................................................................................................................
const imageFrames = getAll(`.imgCrslBox`)
const textFrames = getAll(`.txtCrslBox`)
let imageNext = 0
let textNext = 0
let counter = 180

//......................................................................................................................
const loop = () => {
  if(counter === 180) imageCarousel()
  else if(counter === 160) textCarousel()

  if(counter < 0) counter = 180
  else counter --

  window.requestAnimationFrame(loop)
}

setTimeout(() => loop(), 1000)
