`use strict`

//......................................................................................................................
touchClick = event => {

  //....................................................................................................................
  // ACCORDION . part 1

  Array.from(getAll(`.accordionPart`)).map((item, index) => item.style.height = `10%`)
  Array.from(getAll(`.accordionText`)).map((item, index) => item.style.height = `100%`)

  //....................................................................................................................
  // TOP

  if(event.target.id === `top` || event.target.id === `topArrow`) {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(`#header`).offset().top
    }, 500)
  }

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
  // ACCORDION . part 2 (show gallery)

  else if(event.target.classList.contains(`accordionPart`)
  && !event.target.classList.contains(`accordionText`)) {
    const gallery = get(`#gallery`)
    gallery.style.display = `flex`
    setTimeout(() => gallery.style.background = `rgba(0,0,0,0.8)`, 100)

    const index = Number(event.target.id.substring(13))
    const box = get(`#galleryBox${index}`)
    Array.from(getAll(`.galleryBox`)).map(item => item.style.display = `none`)
    box.style.display = `block`
  }

  //....................................................................................................................
  // ACCORDION . part 3

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

  //....................................................................................................................
  // ACCORDION . part 4 (hide gallery)

  else if(event.target.id === `gallery`
  || event.target.id === `galleryEmpty`
  || event.target.classList.contains(`galleryBox`)) {
    const gallery = get(`#gallery`)
    gallery.style.background = `rgba(0,0,0,0.0)`
    setTimeout(() => gallery.style.display = `none`, 100)

    // hide correct galleryBox
  }
}
