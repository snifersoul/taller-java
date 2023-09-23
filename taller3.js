function calIMC(altura, peso) {
    const imc = peso / (altura * altura);
    return imc.toFixed(1);  // Redondeamos a 1 decimal
}


function IMC() {
    const nombre = document.getElementById("Nom").value;
    const altura = parseFloat(document.getElementById("txt02").value);
    const peso = parseFloat(document.getElementById("txt01").value);

    if (nombre === "") {
        document.getElementById("Nom").focus();
    } else if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert("Ingresa una altura y peso válidos.");
    } else {
        const imc = calIMC(altura, peso);
        mostrarResultado(nombre, imc);
    }
}

function mostrarResultado(nombre, imc) {
    let mensaje = "Hola " + nombre + ", tu IMC es: " + imc;

    if (imc < 18.5) {
        mensaje += ", estás en Bajo de peso.";
    } else if (imc < 24.9) {
        mensaje += ", estás en Peso Normal.";
    } else if (imc < 29.9) {
        mensaje += ", estás en Sobre Peso.";
    } else if (imc < 34.9) {
        mensaje += ", estás en Obesidad 1.";
    } else if (imc < 39.5) {
        mensaje += ", estás en Obesidad 2.";
    } else {
        mensaje += ", estás en Obesidad 3 o Morbida.";
    }

    alert(mensaje);
}

