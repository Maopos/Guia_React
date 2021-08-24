import React from 'react'

const Producto = ({producto, carrito, agregarProductos, productos}) => {

    const {nombre, precio, descripcion, id} = producto;

    // Agregar producto al carrito

    const seleccionarProducto = (id) => {
        const producto = productos.filter(producto => producto.id === id)[0];
        agregarProductos([
            ...carrito,
            producto
        ]);   
    }

    return ( 
        <div>
            <p><b>{nombre}</b></p>
            <p>${precio}</p>
            <button 
                type="button"
                onClick={() => seleccionarProducto(id)}
            >Comprar</button>
            <p>{descripcion}</p>
        </div>
     );
}
 
export default Producto;