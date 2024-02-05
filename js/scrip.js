

let openmodal = document.querySelector('.openmodal')
let lista = document.querySelector('.lista')
let form = document.querySelector('.redmessage')
let goBtn = document.querySelector('.go')
let errorMessage = document.querySelector('.error')
let iputValue = document.querySelector('.redmessage input')
let slider = document.querySelectorAll('.comment')
let sliders = document.querySelector('.cosection')
let container = document.querySelector('.seila')
let right = document.querySelector('.right')
let left = document.querySelector('.left')
let be = false;

openmodal.addEventListener('click', ()=>{

  if(be === true){
    openmodal.src = "images/icon-hamburger.svg"
    lista.style.visibility = 'hidden'
    be = false
  }else{
    be = true
    lista.style.visibility = 'visible'
    openmodal.src = "images/icon-close.svg"
  }
})

goBtn.addEventListener('click', (e)=>{
  e.preventDefault()

  let inValue = iputValue.value


})

let dotcontainer = document.querySelector('.dots')

let createdots = function () {
  slider.forEach(function(_, i){

    dotcontainer.insertAdjacentHTML('beforeend', 
    `<div class="dot" data-slide = "${i}"></div>`
    )
  })
}

createdots();
let index = 0;

slider.forEach((i, j)=> (i.style.transform = `translateX(100*${j}%)`))

let forward = ()=>{
  if(index > slider.length - 2)
  index = 0
  else index++
  
  slider.forEach((i, j)=> (i.style.transform = `translateX(${100*(j - index)}%)`))
}
let backward = function () {
  if(index === 0)
    index = slider.length - 1
  else index--
  
  slider.forEach((i, j)=> (i.style.transform = `translateX(${100*(index -j)}%)`))
}

document.addEventListener('keydown', (e)=>{
  console.log(e.key);
  
  if(e.key === 'ArrowRight'){
    forward()

  }else if(e.key === 'ArrowLeft'){
    backward()
  }
})

right.addEventListener('click', forward)
left.addEventListener('click', backward)