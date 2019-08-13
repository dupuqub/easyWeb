`use strict`

//......................................................................................................................
touchClick = event => {

  //....................................................................................................................
  // ACCORDION . part 1 (close every part)

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

  else if(event.target.classList.contains(`btnMenu`)) {
    const areas = [`about`, `accordion`, `industry`, `clients`, `contact`, `newsletter`]
    const clicked = Number(event.target.id.substring(7))
    $([document.documentElement, document.body]).animate({
      scrollTop: $(`#${areas[clicked]}`).offset().top
    }, 500 + 100 * clicked)
  }

  //....................................................................................................................
  // ACCORDION . part 2 (open a part)

  else if(event.target.classList.contains(`accordionText`)) {
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
  // ACCORDION . part 3 (show gallery)

  else if(event.target.classList.contains(`accordionPart`)) {
    const gallery = get(`#gallery`)
    gallery.style.display = `flex`
    setTimeout(() => gallery.style.opacity = 1, 100)

    const index = Number(event.target.id.substring(13))
    const box = get(`#galleryBox${index}`)
    Array.from(getAll(`.galleryBox`)).map(item => item.style.display = `none`)
    box.style.display = `block`
  }

  //....................................................................................................................
  // ACCORDION . part 4 (hide gallery)

  else if(event.target.id === `gallery`
  || event.target.id === `galleryEmpty`
  || event.target.classList.contains(`galleryBox`)) {
    const gallery = get(`#gallery`)
    gallery.style.opacity = 0
    setTimeout(() => gallery.style.display = `none`, 100)
  }

  //....................................................................................................................
  // ACCORDION . part 5 (show star)

  else if(event.target.classList.contains(`galleryPart`)) {
    const star = get(`#galleryStar`)
    const chosen = event.target.id.substring(11)
    star.style.display = `flex`
    star.style.backgroundImage = `url("images/gallery/galleryStar${chosen}.jpg")`
    setTimeout(() => star.style.opacity = 1, 100)
  }

  //....................................................................................................................
  // ACCORDION . part 6 (hide star)

  else if(event.target.id === `starZoneM`
  || event.target.id === `starBallM`) {
    const star = get(`#galleryStar`)
    star.style.opacity = 0
    setTimeout(() => star.style.display = `none`, 100)
  }

  //....................................................................................................................
  // ACCORDION . part 7 (go to LEFT star)

  else if(event.target.id === `starZoneL`
  || event.target.id === `starBallL`) {
    console.log(`left`)
  }

  //....................................................................................................................
  // ACCORDION . part 8 (go to RIGHT star)

  else if(event.target.id === `starZoneR`
  || event.target.id === `starBallR`) {
    console.log(`right`)
  }
}
