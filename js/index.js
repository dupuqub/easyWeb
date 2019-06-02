`use strict`

//......................................................................................................................
const get = query => document.querySelector(query)
const getAll = query => document.querySelectorAll(query)
const arrayer = length => Array.from({length})

//......................................................................................................................
const frames = getAll(`.imgCarousel`)
let next = 0

console.log(`ok`)

setInterval(() => {
  if(next > frames.length - 2) next = 0
  else next ++

  console.log(next)

  frames.forEach((frame, index) => {

    let mod =

        !next && index === frames.length - 1
      ? -frames.length
      : index < next - 1
      ? frames.length
      : 0

    frame.style.transform = `translateX(${(-next + mod) * 100}%)`
  })
}, 3000)
