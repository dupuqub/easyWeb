`use strict`

//......................................................................................................................
const moveImageCarousel = () => {
  const imageFrames = getAll(`.imgCrslBox`)

  if(imageNext > imageFrames.length - 2) imageNext = 0
  else imageNext ++

  imageFrames.forEach((frame, index) => {
    if(index < imageNext - 1 && index
    || imageNext === 2 && !index
    || !imageNext && index === imageFrames.length - 2
    || imageNext === 1 && index === imageFrames.length - 1) {
      frame.style.transition = `all 0s`
      setTimeout(() => frame.style.transition = `all 2s`, 1000)
    }

    let mod =
        !imageNext && index === imageFrames.length - 1
      ? -imageFrames.length
      : index < imageNext - 1
      ? imageFrames.length
      : 0

    frame.style.transform = `translateX(${(-imageNext + mod) * 100}%)`
  })
}
