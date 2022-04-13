$(document).ready(function(){	
	const Men = $("#hdMensaje").val();
		
	if(Men!== "" &&  Men!== undefined){
	    Swal.fire("",Men, "error");
 		$("#hdMensaje").val("");
	}

    $('#btnIngresarEf').click(function (){
		
		var Usu = $("#InputEmail1").val();
		var Pass = $("#InputPassword1").val();
		
				$('#alertUser').css('display','none');
				$('#alertPass').css('display','none');
				
	  		if ((Usu === "" || Usu === undefined)&&(Pass === "" || Pass === undefined)) {
	    		Swal.fire("", "Ingrese usuario y clave", "warning");
				//$('#alertUser').css('display','block');
				//$('#alertPass').css('display','block');
			}
	  		else if (Usu === "" || Usu === undefined) {
	    		//Swal.fire("ERROR", "Ingrese su usuario", "error");
				$('#alertUser').css('display','block');
		
			}
	  		else if (Pass === "" || Pass === undefined) {
	    		//Swal.fire("ERROR", "Ingrese su clave", "error");
				$('#alertPass').css('display','block'); 
			}
			else
				$("#btnIngresar").click();
	});
 
});