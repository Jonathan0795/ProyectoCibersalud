const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#sidemenu');
btn.addEventListener('click', e => {
	menu.classList.toggle("menu-exapanded");
	menu.classList.toggle("menu-collapsed");
	document.querySelector('body').classList.toggle('body-expanded');
});
function PasarValor() { document.getElementById("InputHc").value = document.getElementById("InputDni").value; }
function mostrarBoton() {
	document.getElementById('prueba').style.display = 'block';
}
function alerta() {
	var mensaje;
	var opcion = confirm("Clicka en Aceptar o Cancelar");
	if (opcion == true) {
		mensaje = "Has clickado OK";
	} else {
		mensaje = "Has clickado Cancelar";
	}
	document.getElementById("ejemplo").innerHTML = mensaje;
}



















$(document).ready(function() {
	$("#alert").hide();
	$("#alertno").hide();
	$("#form").submit(function(e) {
		e.preventDefault();
		InputEmail1 = $.trim($("#InputEmail1").val());
		InputPassword1 = $.trim($("#InputPassword1").val());
		if (InputEmail1.length > 0 && InputPassword1.length > 0) {
			$("#alert").fadeTo(2000, 500).slideUp(500, function() {
				$("#alert").slideUp(500);
			});
		} else {
			$("#alertno").fadeTo(2000, 500).slideUp(500, function() {
				$("#alertno").slideUp(500);
			});
		}
	});
}); 

/** (function() {
	$(function() {


		$('#ventana-modal').modal();
	});
}());

$(function() {

	$('#btn-modal').on('click', function() {
		$('#ventana-modal').modal();
	});
});*/

