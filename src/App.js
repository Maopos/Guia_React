import React, {Fragment, useState}from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from './components/Producto';

function App() {

  // Crear lista de productos
  const [productos, guardarProductos] = useState([
    {id: 1, nombre: "Teclado", precio: 100, descripcion: "Teclado Mecánico"},
    {id: 2, nombre: "Mouse", precio: 200, descripcion: "Mouse inalámbrico"},
    {id: 3, nombre: "Memoria RAM", precio: 300, descripcion: "16 GB"},
    {id: 4, nombre: "Disco duro", precio: 400, descripcion: "250 GB"},
  ]);

  // State para un carrito de compras
  const [carrito, agregarProductos] = useState([]);

  const fecha = new Date().getFullYear();

  return (
    <Fragment>

      <Header
        title="React"
        description="A JavaScript library for building user interfaces."
      />

      <h2>Lista de productos</h2>
      {productos.map(producto => (
          <Producto
              key={producto.id}
              producto = {producto}
              guardarProductos={guardarProductos}
              // -------------------------
              productos={productos}
              carrito = {carrito}
              agregarProductos={agregarProductos}
          />
      ))}

      <Footer
        fecha={fecha}
      />

    </Fragment>
  );
}

export default App;
