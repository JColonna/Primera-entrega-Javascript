
/* Se ingresa capital a invertir, tir y cantidad de años a invertir,
y al final de cada año le pregunta si desea reinvertir */

let inversion = Number(prompt('Ingrese capital a invertir'))
let tir = Number(prompt('Ingrese tasa de interes'))
let anios = Number(prompt('Ingrese cantidad de años'))



do {
	if ( Number.isNaN(inversion)) {
		inversion = Number(prompt('Inversion no es un numero\nIngrese capital a invertir'))
	} else if (Number.isNaN(tir)) {
		tir = Number(prompt('Tasa de interes no es un numero\nIngrese tasa de interes'))
	} else if (Number.isNaN(anios)) {
		anios = Number(prompt('Años no es un numero\nIngrese cantidad de años'))
	}
} while (Number.isNaN(inversion) || Number.isNaN(tir) ||Number.isNaN(anios));

for (let i = 0; i < anios; i++) {
	let inflacion = parseFloat(prompt('Ingrese inflacion estimada para el ' + (i + 1) + ' año'))
	inversion = inversion + (inversion * (tir / 100))
	let opcion = 0
	while (opcion != 1 && opcion != 2) {

		if (inflacion > tir) {
			opcion = Number(prompt('Su fondos son ' + inversion + '\n La inflación del periodo fue mayor al rendimiento\n Ingrese 1 para reinvertir \n Ingrese 2 para retirar fondos'))
			if (opcion === 1) {
				continue

			} else if (opcion === 2) {
				alert('El sistema se cerrara, gracias por confiar en nosotros');

			} else {
				alert('Opcion incorrecta, por favor ingrese una opcion valida')
			}
		} else if (inflacion < tir) {
			opcion = Number(prompt('Su fondos son ' + inversion + '\n El rendimiento fue mayor a la inflación\n Ingrese 1 para reinvertir \n Ingrese 2 para retirar fondos'))
			if (opcion === 1) {
				continue

			} else if (opcion === 2) {
				alert('El sistema se cerrara, gracias por confiar en nosotros');

			} else {
				alert('Opcion incorrecta, por favor ingrese una opcion valida')
			}
		} else if (inflacion == tir) {
			opcion = Number(prompt('Su fondos son ' + inversion + '\n El rendimiento fue igual a la inflación\n Ingrese 1 para reinvertir \n Ingrese 2 para retirar fondos'))
			if (opcion === 1) {
				continue

			} else if (opcion === 2) {
				alert('El sistema se cerrara, gracias por confiar en nosotros');
			} else {
				alert('Opcion incorrecta, por favor ingrese una opcion valida')
			}
		}
	}
	if (opcion === 2) {
		break
	}


}




