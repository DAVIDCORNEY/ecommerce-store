import React from "react";

import { ReactComponent as Basket } from "../../assets/shopping-bag.svg";

import "./CartIcon.styles.scss";

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <Basket className="basket" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
