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
onkeydown = event => {
  if(event.key === `Escape`) {

    // hide gallery
    const gallery = get(`#gallery`)
    gallery.style.opacity = 0
    setTimeout(() => gallery.style.display = `none`, 100)

    // hide star
    setTimeout(() =>
    {
      const star = get(`#galleryStar`)
      star.style.opacity = 0
      setTimeout(() => star.style.display = `none`, 100)
    }, 100)
  }
}

//......................................................................................................................
let counter = 300
let carouselSpin = false
const carouselSpinner = () => {
  if(counter === 300) {
    moveCarousel(`crslNext0`, `.imgCrslBox`)
    moveCarousel(`crslNext2`, `.indCrslBox`)
  }
  else if(counter === 280) {
    moveCarousel(`crslNext1`, `.txtCrslBox`)
  }

  if(counter < 0) counter = 300
  else counter --
}

//......................................................................................................................
const loop = () => {
  // if scrolled, display "top" button
  get(`#top`).style.height = window.pageYOffset ? (window.innerHeight > window.innerWidth ? `70px` : `50px`) : `0`

  if(carouselSpin) carouselSpinner()

  window.requestAnimationFrame(loop)
}

//......................................................................................................................
const start = () => {
  if(iOS()) {
    get(`#accordion`).style.backgroundAttachment = `scroll`
    get(`#industry`).style.backgroundAttachment = `scroll`
    get(`#clients`).style.backgroundAttachment = `scroll`
    get(`#about`).style.backgroundAttachment = `scroll`
  }
  window.history.scrollRestoration = `manual`
  setTimeout(() => carouselSpin = true, 3000)
  loop()
}

//......................................................................................................................
start()

//......................................................................................................................
$(function() {
  $.scrollify({
    section : ".section",
    setHeights: false,
    updateHash: false,
  })
})
