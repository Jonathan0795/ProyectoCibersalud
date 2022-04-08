let listElements = document.querySelectorAll('.list__button--click');
listElements.forEach(listElement => {
	listElement.addEventListener('click', () => {
		listElement.classList.toggle('arrow');
		let height = 0;
		let menu = listElement.nextElementSibling;
		if (menu.clientHeight == 0) {
			height = menu.scrollHeight;
		}
		menu.style.height = height + "px";
	})
});

//*****************************PROFILE.HTML***************************************/
let clic = 1;
let texto = document.getElementById('boton');
function divLogin() {
	if (texto.innerHTML == 'Ocultar')
		texto.innerHTML = 'Mostrar';
	else
		texto.innerHTML = 'Ocultar';

	if (clic == 1) {
		document.getElementById("caja").style.display = "block";
		clic = clic + 1;

	} else {
		document.getElementById("caja").style.display = "none";
		clic = 1;
	}

}

/*MODAL REGISTRO LABORATORIO*/
const openModal = document.querySelector('.btn__exa');
const modal = document.querySelector('.modal__cita');
const closeModal=document.querySelector('.modal__close');
openModal.addEventListener('click', (e) => {
	//e.preventDefault();
	modal.classList.add('modal--show');
});
closeModal.addEventListener('click', (e) => {
	//e.preventDefault();
	modal.classList.remove('modal--show');
});
/*JS TABLA LABORATORIO*/ 
/*MODAL REGISTRO LABORATORIO*/
const openModalExaCom = document.querySelector('.btn__exa');
const modalModalExaCom = document.querySelector('.modal__Exa-Com');
const closeModalExaCom=document.querySelector('.modal__close');
openModalExaCom.addEventListener('click', (e) => {
	//e.preventDefault();
	modalModalExaCom.classList.add('modal--show');
});
closeModalExaCom.addEventListener('click', (e) => {
	//e.preventDefault();
	modalModalExaCom.classList.remove('modal--show');
});
