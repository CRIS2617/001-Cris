let totalDinero = 0;

const listaElementoCarrito = document.getElementById('elementos-carrito');
const elementoPrecioTotal = document.getElementById('precio-total');

function agregaCarrito(nombreProducto, precio) {
    const nuevoElementoLista = document.createElement('li');

    totalDinero += precio;

    nuevoElementoLista.textContent = `${nombreProducto} - S/${precio}`;

    listaElementoCarrito.appendChild(nuevoElementoLista);

    elementoPrecioTotal.textContent = `S/${totalDinero}`;

    console.log(`Accion Detectada: se agrego ${nombreProducto}`);

}

function comprar(){ 
    alert(`compra exitosa`);

    listaElementoCarrito.innerHTML = '';

    totalDinero = 0;

    elementoPrecioTotal.textContent = `$0`;
}