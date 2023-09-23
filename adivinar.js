const randomnumber = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function adivinar() {
    const userGuess = parseInt($("#number").val());

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert("Ingresa un número válido entre 1 y 100.");
        return;
    }

    intentos++;

    if (userGuess < randomnumber) {
        alert("Más alto. Intentos: " + intentos);
    } else if (userGuess > randomnumber) {
        alert("Más bajo. Intentos: " + intentos);
    } else {
        alert("¡Felicidades! Adivinaste el número en " + intentos + " intento(s).");
    }
}



