let total = 0;

function agregarCarrito(nombre, precio, m2Caja, inputId) {
  const m2 = document.getElementById(inputId).value;
  if (!m2 || m2 <= 0) {
    alert("Ingresa los m² requeridos");
    return;
  }

  const cajas = Math.ceil(m2 / m2Caja);
  const costo = m2 * precio;

  const lista = document.getElementById("lista-carrito");
  const item = document.createElement("li");
  item.textContent = `${nombre} — ${cajas} cajas — $${costo.toFixed(2)}`;
  lista.appendChild(item);

  total += costo;
  document.getElementById("total").textContent = total.toFixed(2);
}