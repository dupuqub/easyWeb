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
touchClick = event => {
  if(event.target.classList.contains(`accordionPart`)) {
    const hovered = Number(event.target.id.substring(13))
    Array.from(getAll(`.accordionPart`)).map((item, index) => {
      if(index === hovered) item.style.height = `280px`
      else item.style.height = `40px`
    })
  }
  else {
    Array.from(getAll(`.accordionPart`)).map((item, index) => item.style.height = ``)
  }
}

//......................................................................................................................
const loop = () => {
  if(counter === 180) moveImageCarousel()
  else if(counter === 160) moveTextCarousel()

  if(counter < 0) counter = 180
  else counter --

  window.requestAnimationFrame(loop)
}

//......................................................................................................................
const iOS = () => {
  var iDevices = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod',
  ]

  if (!!navigator.platform) {
    while (iDevices.length) {
      if (navigator.platform === iDevices.pop()){
        return true
      }
    }
  }

  return false
}

//......................................................................................................................
const start = () => {
  if(iOS()) {
    get(`#accordion`).style.backgroundAttachment = `scroll`
    get(`#clients`).style.backgroundAttachment = `scroll`
    Array.from(getAll(`.accordionPart`)).foreach(item => item.style.backgroundAttachment = `scroll`)
  }
  setTimeout(() => loop(), 1000)
}

//......................................................................................................................
start()
