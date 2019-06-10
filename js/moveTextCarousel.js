`use strict`

//......................................................................................................................
const moveTextCarousel = () => {
  const textFrames = getAll(`.txtCrslBox`)

  if(textNext > textFrames.length - 2) textNext = 0
  else textNext ++

  textFrames.forEach((frame, index) => {
    if(index < textNext - 1 && index
    || textNext === 2 && !index
    || !textNext && index === textFrames.length - 2
    || textNext === 1 && index === textFrames.length - 1) {
      frame.style.transition = `all 0s`
      setTimeout(() => frame.style.transition = `all 2s`, 1000)
    }

    let mod =
        !textNext && index === textFrames.length - 1
      ? -textFrames.length
      : index < textNext - 1
      ? textFrames.length
      : 0

    frame.style.transform = `translateX(${(-textNext + mod) * 100}%)`
  })
}
