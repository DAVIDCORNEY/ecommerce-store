import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";
import StripeButton from "../../components/StripeButton/StripeButton.component";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  StripeTestWarningContainer
} from "./Checkout.styles.jsx";

const Checkout = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>
      <span>TOTAL: £{total}</span>
    </TotalContainer>
    <StripeTestWarningContainer>
      *Please use the following test credit card details to simulate a card
      payment*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </StripeTestWarningContainer>
    <StripeButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
