import React from "react";

import {
  CartItemContainer,
  CartItemImage,
  CartItemDetails,
  CartItemName
} from "./CartItem.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="name" />
    <CartItemDetails>
      <CartItemName>{name}</CartItemName>
      <span className="price">
        {quantity} x £{price}
      </span>
    </CartItemDetails>
  </CartItemContainer>
);

export default CartItem;
