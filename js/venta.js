const openModal = document.querySelectorAll('.button__agregar, .contador__carrito, .btn-des-Pro');
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
/**************************************************/
window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
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
/*************************************************************************** */
// const openRegistro = document.querySelector('.a-logueo');
// const usuLogueo = document.querySelector('.usuario-logueo');
// const closeLogueo = document.querySelector('.botton__ocultar');
// openRegistro.addEventListener('click', (e) => {
// 	//e.preventDefault();
// 	usuLogueo.classList.add('hide-usuario-form-1');
// });
// closeLogueo.addEventListener('click', (e) => {
// 	//e.preventDefault();
// 	usuLogueo.classList.remove('hide-usuario-form-1');
// });