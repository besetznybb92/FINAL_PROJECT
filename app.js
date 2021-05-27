// location.reload()

// TOP BAR HIDE //

var prevScrollpos = window.pageYOffset;

window.onscroll = function(event) {
  event.preventDefault()
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("top-banner").style.top = "0";
    } else {
      document.getElementById("top-banner").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  }

// MOBILE NAV //

  const hamburger = document.querySelector('#mobile-menu')
  const menu = document.querySelector('.menu')
  const menuClose = document.querySelectorAll('.menu-close')

  hamburger.addEventListener('click', (event) => {
    event.preventDefault()
      menu.classList.add('menu-open')
  })
  for (let i = 0; i < menuClose.length; i++) {
    menuClose[i].addEventListener('click', () => {
      menu.classList.remove('menu-open')
      
    })
    
  }

// <HR> SIZE UP IN DESKTOP //

let hr = document.getElementsByClassName('breaker')

window.addEventListener("resize", function() {
  if (window.outerWidth > 768) {
    for (let i = 0; i < hr.length; i++) {
        hr[i].classList.add('desktopBreaker')
    }
  } else if (window.outerWidth < 768){
    for (let i = 0; i < hr.length; i++) {
    hr[i].classList.remove('desktopBreaker')
    }
  }
})

// SERVICES FLIP //

let offer1 = document.getElementById('offer1')
let offer2 = document.getElementById('offer2')
let offer3 = document.getElementById('offer3')
let offer4 = document.getElementById('offer4')
let offer5 = document.getElementById('offer5')
let offer6 = document.getElementById('offer6')
let offer7 = document.getElementById('offer7')
let offer8 = document.getElementById('offer8')
let offer9 = document.getElementById('offer9')
let offer10 = document.getElementById('offer10')
let offer11 = document.getElementById('offer11')
let offer12 = document.getElementById('offer12')
let offer1On = true
let offer2On = true
let offer3On = true
let offer4On = true
let offer5On = true
let offer6On = true
let offer7On = true
let offer8On = true
let offer9On = true
let offer10On = true
let offer11On = true
let offer12On = true

offer1.addEventListener('click', (event) => {
  if (offer1On) {
    offer1.innerHTML = "<ul><li>Medically Complex</li><li>Fragile X</li><li>CP</li><li>Spina Bifida</li><li>FAS</li><li>Disorders of the Corpus Collosum</li><li>Down Syndrome</li></ul>"
      offer1On = false
  } else {
    offer1.innerHTML = "Newborns & Early Intervention<br>(0-3yr)"
      offer1On = true
  }
  
})

offer2.addEventListener('click', (event) => {
  if (offer2On) {
    offer2.innerHTML = "<ul><li>PDD (Pervasive Developmental Disorders)</li><li>Developmental Delays</li><li>Childhood Apraxia of Speech (CAS)</li></ul>"
      offer2On = false
  } else {
    offer2.innerHTML = "Pre-School & Kindergarten <br>(3-5yr)"
      offer2On = true
  }
  
})

offer3.addEventListener('click', (event) => {
  if (offer3On) {
    offer3.innerHTML = "<ul><li>Intellectual Disabilities</li><li>Communication Disorders</li><li>Expressive & Receptive Language Disorders</li><li>AAC Device Users</li><li>ASD</li><li>Retts Syndrome</li></ul>"
    offer3On = false
  } else {
    offer3.innerHTML = "Elementary School <br>(6-11yr)"
    offer3On = true
  }

})

offer4.addEventListener('click', (event) => {
  if (offer4On) {
    offer4.innerHTML = "<ul><li>ADD/ADHD</li><li>ED</li><li>Oppositional Defiant Disorder</li><li>Disruptive Disorder</li><li>Separation Anxiety Disorder</li><li>Selective Mutism</li></ul>"
    offer4On = false
  } else {
    offer4.innerHTML = "Middle School <br>(11-14yr)"
    offer4On = true
  }
  
})

offer5.addEventListener('click', (event) => {
  if (offer5On) {
    offer5.innerHTML = "<ul><li>Life Skills</li><li>Behavior Disorders</li></ul>"
    offer5On = false
  } else {
    offer5.innerHTML = "High School <br>(14-18yr)(0-3yr)"
    offer5On = true
  }

})

offer6.addEventListener('click', (event) => {
  if (offer6On) {
    offer6.innerHTML = "<ul><li>Grief & Loss</li><li>Quality of Life Music Therapy</li><li>Developmental Disabilities</li><li>Leisure Skill Development and Maintenance</li></ul>"
    offer6On = false
  } else {
    offer6.innerHTML = "Adults & Seniors <br>(18+yr)"
    offer6On = true
  }

})

offer7.addEventListener('click', (event) => {
  if (offer7On) {
    offer7.innerHTML = "<ul><li>Medically Complex</li><li>Fragile X</li><li>CP</li><li>Spina Bifida</li><li>FAS</li><li>Disorders of the Corpus Collosum</li><li>Down Syndrome</li></ul>"
      offer7On = false
  } else {
    offer7.innerHTML = "Newborns & Early Intervention<br>(0-3yr)"
      offer7On = true
  }
  
})

offer8.addEventListener('click', (event) => {
    if (offer8On) {
      offer8.innerHTML = "<ul><li>PDD (Pervasive Developmental Disorders)</li><li>Developmental Delays</li><li>Childhood Apraxia of Speech (CAS)</li></ul>"
        offer8On = false
    } else {
      offer8.innerHTML = "Pre-School & Kindergarten <br>(3-5yr)"
        offer8On = true
    }
    
})

offer9.addEventListener('click', (event) => {
  if (offer9On) {
    offer9.innerHTML = "<ul><li>Intellectual Disabilities</li><li>Communication Disorders</li><li>Expressive & Receptive Language Disorders</li><li>AAC Device Users</li><li>ASD</li><li>Retts Syndrome</li></ul>"
    offer9On = false
  } else {
    offer9.innerHTML = "Elementary School <br>(6-11yr)"
    offer9On = true
  }

})

offer10.addEventListener('click', (event) => {
  if (offer10On) {
    offer10.innerHTML = "<ul><li>ADD/ADHD</li><li>ED</li><li>Oppositional Defiant Disorder</li><li>Disruptive Disorder</li><li>Separation Anxiety Disorder</li><li>Selective Mutism</li></ul>"
    offer10On = false
  } else {
    offer10.innerHTML = "Middle School <br>(11-14yr)"
    offer10On = true
  }
  
})

offer11.addEventListener('click', (event) => {
  if (offer11On) {
    offer11.innerHTML = "<ul><li>Life Skills</li><li>Behavior Disorders</li></ul>"
    offer11On = false
  } else {
    offer11.innerHTML = "High School <br>(14-18yr)(0-3yr)"
    offer11On = true
  }

})

offer12.addEventListener('click', (event) => {
  if (offer12On) {
    offer12.innerHTML = "<ul><li>Grief & Loss</li><li>Quality of Life Music Therapy</li><li>Developmental Disabilities</li><li>Leisure Skill Development and Maintenance</li></ul>"
    offer12On = false
  } else {
    offer12.innerHTML = "Adults & Seniors <br>(18+yr)"
    offer12On = true
  }

})


// CONTACT FORM //

const scriptURL = 'https://script.google.com/macros/s/AKfycby2pHlJ_uo5CwLc9lQX3v1P6jVT_2i4wJeNYK4oIRZY0FUuJov2jdi0mJcPoqnXfctVxg/exec'
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .then(() => {
          document.getElementById('contact').reset();
            //This is where you write your code




            //Do not alter below this line
          })
        .catch(error => console.error('Error!', error.message))
})


// COPYWRITE //
let date = new Date ()
let copywrite = date.getFullYear()

document.getElementById('copywrite').innerText= `Copywrite ${copywrite}`