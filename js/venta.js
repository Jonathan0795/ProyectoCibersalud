const openModal = document.querySelectorAll('.button__agregar');
const modal = document.querySelector('.modal__carrito');
const closeModal = document.querySelector('.botton__ocultar');
openModal.forEach(openModal => {
  openModal.addEventListener('click', (e) => {
    //e.preventDefault();
    modal.classList.add('modal--show');
  })
});
closeModal.addEventListener('click', (e) => {
  //e.preventDefault();
  modal.classList.remove('modal--show');
});


let ubicacionPrincipal = window.pageYOffset;
let $nav = document.querySelector('#info__nav')
let $header = document.querySelector('#nada')

window.addEventListener('scroll', function () {
  let ubicacionActual = window.pageYOffset
  console.log(ubicacionActual)
  if (ubicacionPrincipal >= ubicacionActual) {
    $nav.style.top = '0px'
  } else {
    $nav.style.top = '-40px'
  }
  ubicacionPrincipal = ubicacionActual
})

/**************************************SLIDER**********************************************************/
let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 5000;

window.addEventListener("resize", function () {
  width = sliderIndividual[0].clientWidth;
})

setInterval(function () {
  slides();
}, intervalo);



function slides() {
  slider.style.transform = "translate(" + (-width * contador) + "px)";
  slider.style.transition = "transform .8s";
  contador++;

  if (contador == sliderIndividual.length) {
    setTimeout(function () {
      slider.style.transform = "translate(0px)";
      slider.style.transition = "transform 0s";
      contador = 1;
    }, 1500)
  }
}