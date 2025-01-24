import React, { Component } from 'react';

class Factura extends Component {
  constructor(props) {
    super(props);
    // Inicializamos el estado
    this.state = {
      productos: [],
      nombre: '',
      precio: 0,
      cantidad: 0,
    };
  }

  // Método para añadir un producto a la lista
  añadirProducto = () => {
    const { nombre, precio, cantidad } = this.state;
    const total = precio * cantidad;
    this.setState(prevState => ({
      productos: [...prevState.productos, { nombre, precio, cantidad, total }],
    }));
  };

  // Método para manejar el cambio del nombre del producto
  handleNombreChange = (e) => {
    this.setState({ nombre: e.target.value });
  };

  // Método para manejar el cambio del precio
  handlePrecioChange = (e) => {
    this.setState({ precio: Number(e.target.value) });
  };

  // Método para manejar el cambio de la cantidad
  handleCantidadChange = (e) => {
    this.setState({ cantidad: Number(e.target.value) });
  };

  render() {
    return (
      <div>
        <h1>Factura</h1>
        {/* Select para elegir el nombre del producto */}
        <select onChange={this.handleNombreChange}>
          <option value="">--Selecciona un producto--</option>
          <option value="Manzana">Manzana</option>
          <option value="Pan">Pan</option>
          <option value="Leche">Leche</option>
        </select>
        
        {/* Input para ingresar el precio */}
        <input 
          type="number" 
          placeholder="Precio" 
          onChange={this.handlePrecioChange} 
        />
        
        {/* Input para ingresar la cantidad */}
        <input 
          type="number" 
          placeholder="Cantidad" 
          onChange={this.handleCantidadChange} 
        />
        
        {/* Botón para añadir el producto */}
        <button onClick={this.añadirProducto}>Añadir</button>
        
        <h2>Lista de productos</h2>
        <ul>
          {/* Mapeamos los productos y los mostramos en la lista */}
          {this.state.productos.map((p, index) => (
            <li key={index}>{`${p.nombre}: ${p.cantidad} x ${p.precio} = ${p.total}`}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Factura;
