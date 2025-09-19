// Fecha límite: 7 octubre 2025 a las 00:00
const fechaObjetivo = new Date("October 7, 2025 00:00:00").getTime();

const contador = document.getElementById("contador");

function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = fechaObjetivo - ahora;

  if (diferencia <= 0) {
    contador.style.display = "none"; // desaparece al llegar a 0
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  contador.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

  // Aplica el fade-in
  contador.style.opacity = 0;            // empieza invisible
  setTimeout(() => {
    contador.style.opacity = 1;          // transiciona a visible
  }, 10); // pequeño delay para activar la transición
}

setInterval(actualizarContador, 1000);
actualizarContador(); // para mostrarlo inmediatamente al cargar
