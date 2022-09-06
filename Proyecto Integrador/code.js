var energias = [];

var resultadoeolica = 0;
var resultadosolar = 0;
var resultadohid = 0;

var aside = "cerrado";

jQuery().ready(function(energias) {
	$("#calcular").bind("click", function() {
		if (energias.length >= 1) {
			$("#mostrarLasEnergias").removeClass("apagado");
			$("#mostrarLasEnergias").addClass("prendido");
		}
	})
	//		
	}); 
//});



function pedirDatos(energias) {
	
	var _energia = []

	_energia.push (prompt("Ingrese el tipo de energia"));

	var descripcion = prompt("Ingrese la descripcion del tipo de energia");
	
	var energiaGenerada = parseInt(prompt("Ingrese la energia generada"));

	var presupuesto = parseInt(prompt("Ingrese el presupuesto"));

	var tiempoEstimado = parseInt(prompt("Ingrese el tiempo estimado"));
		
	
	energias.push ({
		energia: _energia
	});

	_energia.push ({
		descripcion: descripcion,
		energiagenerada: energiaGenerada,
		presupuesto: presupuesto,
		tiempoestimado: tiempoEstimado
	});
		

	obtenerEfectividad(energias, _energia);
	
}

function mostrarEnergias(energias, _energia) {
	for (i=0; i<energias.length; i++) {
	$("#cuadroEnergias") +="<p>" + energias[i].energia[0] + "</p>";
	}
}


	
function obtenerEfectividad(energias, _energia) {


	for (i=0; i<energias.length; i++) {

		if (energias[i].energia[0].toLowerCase() == "eolica") {
			let energiageneradatotal = 0;
			let presupuestototal = 0;
			let tiempoestimadototal = 0;
			//var resultadoeolica = 0;

			energiageneradatotal += energias[i].energia[1].energiagenerada;
			presupuestototal += energias[i].energia[1].presupuesto;
			tiempoestimadototal += energias[i].energia[1].tiempoestimado;

			resultadoeolica = energiageneradatotal / (presupuestototal * tiempoestimadototal)
			console.log("energia generada total eolica: " + energiageneradatotal)
			console.log("presupuesto total eolica " + presupuestototal)
			console.log("tiempo estimado total eolica " + tiempoestimadototal)

			alert("la eficiencia eolica es de " + resultadoeolica + "%");


		}	else if (energias[i].energia[0].toLowerCase() == "solar") {

			let energiageneradatotalsolar = 0;
			let presupuestototalsolar = 0;
			let tiempoestimadototalsolar = 0;
			//var resultadosolar = 0;

			energiageneradatotalsolar += energias[i].energia[1].energiagenerada;
			presupuestototalsolar += energias[i].energia[1].presupuesto;
			tiempoestimadototalsolar += energias[i].energia[1].tiempoestimado;

			resultadosolar = energiageneradatotalsolar / (presupuestototalsolar * tiempoestimadototalsolar)

			console.log("energia generada total solar " + energiageneradatotalsolar)
			console.log("presupuesto total solar " + presupuestototalsolar)
			console.log("tiempo estimado total solar " + tiempoestimadototalsolar)
			alert("la eficiencia solar es de " + resultadosolar + "%");

		} else if ((energias[i].energia[0].toLowerCase() == "hidraulica") || (energias[i].energia[0].toLowerCase() == "hidráulica")) {
			let energiageneradatotalhid = 0;
			let presupuestototalhid = 0;
			let tiempoestimadototalhid = 0;
			

			energiageneradatotalhid += energias[i].energia[1].energiagenerada;
			presupuestototalhid += energias[i].energia[1].presupuesto;
			tiempoestimadototalhid += energias[i].energia[1].tiempoestimado;

			resultadohid = energiageneradatotalhid / (presupuestototalhid * tiempoestimadototalhid);

			console.log("energia generada total hidraulica " + energiageneradatotalhid)
			console.log("presupuesto total hidraulica " + presupuestototalhid)
			console.log("tiempo estimado total hidraulica " + tiempoestimadototalhid)
			alert("la eficiencia hidraulica es " + resultadohid + "%");
		} else {
			alert("no encuentro esa energia")
		}
	}
	console.log("resultado eolica " + resultadoeolica)
	alert("Energia recomendada: " + resultadosEficiencia(resultadoeolica, resultadosolar, resultadohid));
} 



function resultadosEficiencia (resultado1, resultado2, resultado3) {


	if (resultado1 > resultado2 && resultado1 > resultado3) {
			return "Eólica";
	}	else if (resultado2 > resultado1 && resultado2 > resultado3) {
			return "Solar";
	} else if ((resultado3 > resultado1)&&(resultado3 > resultado2)) {
			return "Hidráulica";
	} else if ((resultado2 == resultado1)&&(resultado1 > resultado3)) {
			return "Eólica y Solar"
	} else if ((resultado2 == resultado3)&&(resultado2 > resultado1)) {
			return "Solar e Hidráulica"
	} else if ((resultado1 == resultado3)&&(resultado3 > resultado2)) {
			return "Eólica e Hidráulica"
	} else {
		//console.log("res1 " + resultado1 + " res2 " + resultado2 + " res3 " + resultado3)
		return "intentar de nuevo";
	}
}


