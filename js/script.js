/*==========Slide automatico de 3 segundos e função para passar e voltar a uma imagem do slide==========*/
function slideauto() {
  let recentActive = document.querySelector('.slideshow ul li.active')

  if (recentActive.nextElementSibling != null) {
      recentActive.nextElementSibling.classList.add('active')
  } else {
      document.querySelector('.slideshow ul li:first-child').classList.add('active')
  }   
  recentActive.classList.remove('active')
  setTimeout("slideauto()", 3000);

}
slideauto()


function prevImage() {
  let recentActive = document.querySelector('.slideshow ul li.active')
  
  if (recentActive.previousElementSibling != null) {
      recentActive.previousElementSibling.classList.add('active')
  } else {
      document.querySelector('.slideshow ul li:last-child').classList.add('active')
  }   

  recentActive.classList.remove('active')
}

document.querySelector('.prev').addEventListener('click', prevImage)


function nextImage() {
  let recentActive = document.querySelector('.slideshow ul li.active')

  if (recentActive.nextElementSibling != null) {
      recentActive.nextElementSibling.classList.add('active')
  } else {
      document.querySelector('.slideshow ul li:first-child').classList.add('active')
  }   

  recentActive.classList.remove('active')

}

document.querySelector('.next').addEventListener('click', nextImage)


/*==========pequena ação de clique para que o submenu fique aberto em smartphone e tablet==========*/


let navMenu = document.querySelectorAll(".menu ul li")


function openNav() {
  this.classList.toggle("ativo")
}

navMenu.forEach((item)=> {
  item.addEventListener('click', openNav)
})


/*==========pequena ação de clique para que o submenu fique aberto em smartphone e tablet==========*/



function initAccordion(){
const accordionList = document.querySelectorAll('.js-accordion dt');
const activeClass = "ativo";

if(accordionList.length){

accordionList[0].classList.add(activeClass)
accordionList[0].nextElementSibling.classList.add(activeClass)

function activeAccordion() {
  this.classList.toggle(activeClass)
  this.nextElementSibling.classList.toggle(activeClass);
}

accordionList.forEach((item)=> {
  item.addEventListener('click', activeAccordion)
})
}
}
initAccordion();













