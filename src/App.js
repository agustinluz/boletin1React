import React, { useState } from 'react';
import './App.css'; // Asegúrate de tener el archivo CSS
import Ejercicio1 from './components/ejercicio1'; // Importamos el componente correctamente

function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="App">
      <h1>Soluciones de los Ejercicios</h1>
      
      <div className="accordion">
        {/* Ejercicio 1 */}
        <div className="accordion-item">
          <div className="accordion-header" onClick={() => toggleAccordion(0)}>
            <h2>Ejercicio 1: Suma de dos números</h2>
          </div>
          {openIndex === 0 && (
            <div className="accordion-body">
              Aquí va la solución del ejercicio 1, donde se suman dos números introducidos por el usuario.
              <br />
              {/* Usamos el componente Ejercicio1 */}
              <Ejercicio1 />
            </div>
          )}
        </div>

        {/* Ejercicio 2 */}
        <div className="accordion-item">
          <div className="accordion-header" onClick={() => toggleAccordion(1)}>
            <h2>Ejercicio 2: Resta de dos números</h2>
          </div>
          {openIndex === 1 && (
            <div className="accordion-body">
              Aquí va la solución del ejercicio 2, donde se resta el segundo número al primero.
              <br />
              <code>
                {`const [numero1, setNumero1] = useState(0);`}
              </code>
              <br />
              <code>
                {`const restarNumeros = () => { alert('La resta es: ' + (numero1 - numero2)); };`}
              </code>
            </div>
          )}
        </div>

        {/* Ejercicio 3 */}
        <div className="accordion-item">
          <div className="accordion-header" onClick={() => toggleAccordion(2)}>
            <h2>Ejercicio 3: Multiplicación de dos números</h2>
          </div>
          {openIndex === 2 && (
            <div className="accordion-body">
              Aquí va la solución del ejercicio 3, donde se multiplican dos números introducidos por el usuario.
              <br />
              <code>
                {`const multiplicarNumeros = () => { alert('La multiplicación es: ' + (numero1 * numero2)); };`}
              </code>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
