import React from "react";

const Cart = ({mony,dinero, demander}) => {

    const handleClick = () => {
        demander()
    }
  return (

    <div className="shopping-cart">
      <h1>e-commerce site web</h1>
      <div className="maktoub">
      <h3>solde</h3>
        <p style={{color:"blue"}}>{mony} $</p>
        <h3>PANIER</h3>
        <p style={{color:"blue"}}>{dinero}$</p>
        <button className="commande"  onClick={handleClick} >confirmer la commande</button>
      </div>
    </div>
  );
};

export default Cart;