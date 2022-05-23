import React from 'react';
import "../styles/Success.css"

const Success = () => {
    return (
        <div className="Success">
            <div className="Success-content">
                <h2>¡Gracias por tu compra!</h2>
                <span>Tu pedido llegara en un lapso de tres dias a tu dirección:</span>
                <div className="Succes-map">
                    Google Maps
                </div>
            </div>
        </div>
    );
}

export default Success;