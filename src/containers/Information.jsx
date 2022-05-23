import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Information.css';

const Information = () => {
  return (
    <div className="Informtaion">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <input type="text" placeholder="Nombre Completo" name="Name" />
            <input type="text" placeholder="Correo Electrónico" name="email" />
            <input type="text" placeholder="Dirrección" name="Address" />
            <input type="text" placeholder="Dirección 2" name="Addres 2" />
            <input type="text" placeholder="País" name="Country" />
            <input type="text" placeholder="Estado" name="State" />
            <input type="text" placeholder="Código Postal" name="CP" />
            <input type="text" placeholder="Teléfono" name="Phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">Regresar</div>
          <div className="Information-next">
            <Link to="/checkout/payment">
            Pagar
            </Link>
          </div>
        </div>
        <div className="Information-sidebar">
          <h3>Pedido:</h3>
          <div className="Information-item">
            <div className="Information-element">
              <h4>Item Name</h4>
              <span>$ 40</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
