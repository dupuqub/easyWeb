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
onclick = event => touchClick(event)
ontouchstart = event => touchClick(event)

//......................................................................................................................
const loop = () => {
  if(counter === 180) moveImageCarousel()
  else if(counter === 160) moveTextCarousel()

  if(counter < 0) counter = 180
  else counter --

  window.requestAnimationFrame(loop)
}

//......................................................................................................................
const start = () => {
  if(iOS()) {
    get(`#accordion`).style.backgroundAttachment = `scroll`
    get(`#clients`).style.backgroundAttachment = `scroll`
    Array.from(getAll(`.accordionPart`)).forEach(item => item.style.backgroundAttachment = `scroll`)
  }
  setTimeout(() => loop(), 1000)
}

//......................................................................................................................
start()
