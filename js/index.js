`use strict`

//......................................................................................................................
const get = query => document.querySelector(query)
const getAll = query => document.querySelectorAll(query)
const arrayer = length => Array.from({length})

//......................................................................................................................
const frames = getAll(`.imgCarousel`)
let next = 0

setInterval(() => {
  if(next > frames.length - 2) next = 0
  else next ++

  frames.forEach((frame, index) => {
    if(index < next - 1 && index
    || next === 2 && !index
    || !next && index === frames.length - 2
    || next === 1 && index === frames.length - 1) {
      frame.style.transition = `all 0s`
      setTimeout(() => frame.style.transition = `all 2s`, 1000)
    }

    let mod =
        !next && index === frames.length - 1
      ? -frames.length
      : index < next - 1
      ? frames.length
      : 0

    frame.style.transform = `translateX(${(-next + mod) * 100}%)`
  })
}, 3000)
