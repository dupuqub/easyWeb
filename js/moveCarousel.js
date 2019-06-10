`use strict`

//......................................................................................................................
const moveCarousel = (carousel, group) => {
  const frames = getAll(group)

  if(state[carousel] > frames.length - 2) state[carousel] = 0
  else state[carousel] ++

  frames.forEach((frame, index) => {
    if(index < state[carousel] - 1 && index
    || state[carousel] === 2 && !index
    || !state[carousel] && index === frames.length - 2
    || state[carousel] === 1 && index === frames.length - 1) {
      frame.style.transition = `all 0s`
      setTimeout(() => frame.style.transition = `all 2s`, 1000)
    }

    let mod =
        !state[carousel] && index === frames.length - 1
      ? -frames.length
      : index < state[carousel] - 1
      ? frames.length
      : 0

    frame.style.transform = `translateX(${(-state[carousel] + mod) * 100}%)`
  })
}
