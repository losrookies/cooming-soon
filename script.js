// Fecha límite: 7 octubre 2025 a las 00:00
const fechaObjetivo = new Date("October 7, 2025 00:00:00").getTime();

const contador = document.getElementById("contador");

// Mostrar contador con fade-in al cargar
function mostrarContador() {
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
  contador.style.opacity = 1; // fade-in al cargar
}

// Actualización normal sin fade-in
function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = fechaObjetivo - ahora;

  if (diferencia <= 0) {
    contador.style.display = "none";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  contador.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

mostrarContador(); // fade-in al cargar
setInterval(actualizarContador, 1000);
