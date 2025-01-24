import React, { useState } from 'react';
import './App.css'; // Archivo donde pondremos los estilos
import Ejercicio1 from './components/ejercicio1'
import Ejercicio2 from './components/ejercicio2'
import Ejercicio3 from './components/ejericicio3'

function App() {
  // Esta es una forma de guardar qué sección (o ejercicio) está abierta
  const [openIndex, setOpenIndex] = useState(null);

  // Esta función cambia cuál sección está abierta
  const ejercicios = (index) => {
    // Si haces clic en una sección que ya está abierta, se cierra (ponemos null)
    // Si haces clic en una sección diferente, la abrimos
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="App">
      <h1>Soluciones de los Ejercicios</h1>

      {/* Aquí empiezan las secciones o "accordion" */}
      <div className="accordion">
        {/* Ejercicio 1 */}
        <div className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => ejercicios(0)} // Al hacer clic, intentamos abrir o cerrar
          >
            <h2>Ejercicio 1: Suma de dos números</h2>
          </div>
          {/* Solo mostramos el contenido si openIndex es 0 */}
          {openIndex === 0 && (
            <div className="accordion-body">
              <Ejercicio1/>
            </div>
          )}
        </div>

        {/* Ejercicio 2 */}
        <div className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => ejercicios(1)}
          >
            <h2>Ejercicio 2: Elegir un numero de la semana</h2>
          </div>
          {openIndex === 1 && (
            <div className="accordion-body">
              <Ejercicio2/>
            </div>
          )}
        </div>

        {/* Ejercicio 3 */}
        <div className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => ejercicios(2)}
          >
            <h2>Ejercicio 3: Sincronizacion de inputs</h2>
          </div>
          {openIndex === 2 && (
            <div className="accordion-body">
              <Ejercicio3/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
