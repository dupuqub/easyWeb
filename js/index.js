`use strict`

//......................................................................................................................
const get = query => document.querySelector(query)
const getAll = query => document.querySelectorAll(query)
const arrayer = length => Array.from({length})

//......................................................................................................................
const state = {
  crslNext0: 0,
  crslNext1: 0,
  crslNext2: 0,
}

//......................................................................................................................
onclick = event => touchClick(event)
ontouchstart = event => touchClick(event)

//......................................................................................................................
let counter = 180
let carouselSpin = false
const carouselSpinner = () => {
  if(counter === 180) {
    moveCarousel(`crslNext0`, `.imgCrslBox`)
    moveCarousel(`crslNext2`, `.indCrslBox`)
  }
  else if(counter === 160) {
    moveCarousel(`crslNext1`, `.txtCrslBox`)
  }

  if(counter < 0) counter = 180
  else counter --
}

//......................................................................................................................
const loop = () => {
  const top = get(`#top`)
  if(window.pageYOffset) {
    top.style.height = `3%`
    top.style.fontSize = `100%`
  }
  else {
    top.style.height = `0`
    top.style.fontSize = `0`
  }

  if(carouselSpin) carouselSpinner()

  window.requestAnimationFrame(loop)
}

//......................................................................................................................
const start = () => {
  if(iOS()) {
    get(`#accordion`).style.backgroundAttachment = `scroll`
    get(`#industry`).style.backgroundAttachment = `scroll`
    get(`#clients`).style.backgroundAttachment = `scroll`
  }
  setTimeout(() => carouselSpin = true, 1000)
  loop()
}

//......................................................................................................................
start()
