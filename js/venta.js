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

// let ubicacionPrincipal = window.pageYOffset;
// window.onscroll = function () {
//     let desplazamiento = window.pageYOffset;
//     if (ubicacionPrincipal >= desplazamiento) {
//         document.getElementById('info__header').style.top = '0';
//     } else {
//         document.getElementById('info__header').style.top = '-90';
//     }
//     ubicacionPrincipal = desplazamiento;
// }

let ubicacionPrincipal = window.pageYOffset;
let $nav=document.querySelector('#info__nav')
let $header=document.querySelector('#nada')

window.addEventListener('scroll',function(){
  let ubicacionActual=window.pageYOffset  
  console.log(ubicacionActual)
  if(ubicacionPrincipal>=ubicacionActual){
      $nav.style.top='0px'
  }else{
    $nav.style.top='-40px'
  }
  ubicacionPrincipal=ubicacionActual
})