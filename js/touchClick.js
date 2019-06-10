`use strict`

//......................................................................................................................
touchClick = event => {

  //....................................................................................................................
  // ACCORDION . part 1

  Array.from(getAll(`.accordionPart`)).map((item, index) => item.style.height = `10%`)
  Array.from(getAll(`.accordionText`)).map((item, index) => item.style.height = `100%`)

  //....................................................................................................................
  // HEADER MENU

  if(event.target.classList.contains(`btnMenu`)) {
    const areas = [`about`, `accordion`, `industry`, `clients`, `contact`, `newsletter`]
    const clicked = Number(event.target.id.substring(7))
    $([document.documentElement, document.body]).animate({
      scrollTop: $(`#${areas[clicked]}`).offset().top
    }, 500 + 100 * clicked)
  }

  //....................................................................................................................
  // ACCORDION . part 2

  else if(event.target.classList.contains(`accordionPart`)
  || event.target.classList.contains(`accordionText`)) {
    const clicked = Number(event.target.id.substring(13))
    Array.from(getAll(`.accordionPart`)).map((item, index) => {
      if(index === clicked) item.style.height = `45%`
      else item.style.height = `5%`
    })
    Array.from(getAll(`.accordionText`)).map((item, index) => {
      if(index === clicked) item.style.height = `15%`
      else item.style.height = `100%`
    })
  }
}
