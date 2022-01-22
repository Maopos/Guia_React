import React from "react";

const Producto = ({ producto, carrito, agregarProductos, productos }) => {
    
  const { nombre, precio, descripcion, id } = producto;

  // Agregar producto al carrito
  const seleccionarProducto = (id) => {
    const producto = productos.filter((producto) => producto.id === id)[0];
    agregarProductos([...carrito, producto]);
  };

  // Eliminar producto del carrito
  const eliminarProducto = (id) => {
    const productos = carrito.filter((producto) => producto.id !== id);
    agregarProductos(productos);
  };

  return (
    <div>
      <p>
        <b>{nombre}</b>
      </p>
      <p>${precio}</p>

      {productos ? (
        <button type="button" onClick={() => seleccionarProducto(id)}>
          Comprar
        </button>
      ) : (
        <button type="button" onClick={() => eliminarProducto(id)}>
          Eliminar
        </button>
      )}

      <p>{descripcion}</p>
    </div>
  );
};

export default Producto;
