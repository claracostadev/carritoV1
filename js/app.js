const btn = document.querySelectorAll('.btn');
const carrito = document.querySelector('#carrito');
const template = document.querySelector('#template');
const fragment = document.createDocumentFragment();

const carritoObjeto = {};

const agregarProductoCarrito = (e) => {
    const producto = {
        titulo: e.target.dataset.articulo,
        id: e.target.dataset.articulo,
        cantidad: 1,
    };

    if (carritoObjeto.hasOwnProperty(producto.id)) {
        producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
    }

    carritoObjeto[producto.titulo] = producto;
    mostrarCarrito(producto);

};
const mostrarCarrito = (producto) => {
    carrito.textContent = '';
    Object.values(carritoObjeto).forEach((item) => {
        const clone = template.content.firstElementChild.cloneNode(true);

        clone.querySelector('.lead').textContent = item.titulo;
        clone.querySelector('.badge').textContent = item.cantidad;
        fragment.appendChild(clone);
    })
carrito.appendChild(fragment);
}

btn.forEach((item) => {
    item.addEventListener('click', agregarProductoCarrito);
});