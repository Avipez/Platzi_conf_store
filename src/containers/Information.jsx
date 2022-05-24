import React, { useRef, useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/Information.css';

const Information = () => {

  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null)
  const navigate = useNavigate();
  const {cart} = state

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      "name": formData.get("name"),
      "email": formData.get("email"),
      "address": formData.get("address"),
      "city": formData.get("city"),
      "country": formData.get("country"),
      "state": formData.get("state"),
      "cp": formData.get("CP"),
      "phone": formData.get("phone"),
    }
    addToBuyer(buyer);
    navigate("/checkout/payment");
  }

  return (
    <div className="Informtaion">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form form={form}>
            <input type="text" placeholder="Nombre Completo" name="name" />
            <input type="text" placeholder="Correo Electrónico" name="email" />
            <input type="text" placeholder="Dirrección" name="address" />
            <input type="text" placeholder="Dirección 2" name="addres 2" />
            <input type="text" placeholder="País" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Código Postal" name="CP" />
            <input type="text" placeholder="Teléfono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <Link to="/checkout/payment">
            <div className="Information-back">Regresar</div>
          </Link>
          <div className="Information-next">
            <Link to="/checkout/payment">
              <button type='button' onClick={handleSubmit}>Pagar</button>
            </Link>
          </div>
        </div>
        <div className="Information-sidebar">
          <h3>Pedido:</h3>
          {cart.map((item) => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Information;
