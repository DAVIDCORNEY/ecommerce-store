import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as Basket } from "../../assets/shopping-bag.svg";

import "./CartIcon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <Basket className="basket" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => {
    return accumulatedQuantity + cartItem.quantity;
  }, 0)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
