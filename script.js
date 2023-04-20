const elementos = [
  { nombre: "are maki", color: "#f54242" },
  { nombre: "upchagui", color: "#f5a442" },
  { nombre: "happy", color: "#f5d142" },
  { nombre: "nisaxter", color: "#d8f542" },
  { nombre: "likio", color: "#42f5ce" },
  { nombre: "xavi", color: "#4269f5" },
];

const cartas = elementos.concat(elementos); // duplicamos las cartas para crear pares
cartas.sort(() => Math.random() - 0.5); // mezclamos las cartas

const tablero = document.getElementById("tablero");
let primeraCarta = null;

function crearCarta(elemento, index) {
  const carta = document.createElement("div");
  carta.className = "carta";
  carta.dataset.index = index;
  carta.style.backgroundColor = elemento.color;
  carta.textContent = elemento.nombre;

  carta.addEventListener("click", () => {
    if (primeraCarta === null) {
      primeraCarta = carta;
      carta.classList.add("revelada");
    } else if (primeraCarta !== carta) {
      carta.classList.add("revelada");

      if (
        cartas[primeraCarta.dataset.index].nombre ===
        cartas[carta.dataset.index].nombre
      ) {
        console.log("¡Encontraste una pareja!");
      } else {
        setTimeout(() => {
          primeraCarta.classList.remove("revelada");
          carta.classList.remove("revelada");
        }, 1000);
        console.log("No son pareja. Las cartas se ocultarán nuevamente.");
      }
      primeraCarta = null;
    }
  });

  return carta;
}

cartas.forEach((elemento, index) => {
  const carta = crearCarta(elemento, index);
  tablero.appendChild(carta);
});

     
