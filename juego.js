function juego() {
    const opciones = ["piedra", "papel", "tijeras"];
    var jugador = $("#jugador").val();
    var computadora = opciones[Math.floor(Math.random() * 3)];
    
    var resultado = "";
    
    if (jugador == computadora) {
        resultado = "¡Empate!";
    } else if (
        (jugador == "piedra" && computadora == "tijeras") ||
        (jugador == "papel" && computadora == "piedra") ||
        (jugador == "tijeras" && computadora == "papel")
    ) {
        resultado = "¡Ganaste!";
    } else {
        resultado = "¡Perdiste! La computadora eligió " + computadora;
    }
    document.getElementById("resultado").textContent = resultado;
}











