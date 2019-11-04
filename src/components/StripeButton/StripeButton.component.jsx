import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_4JgKY5sLpljssaM5Eg4bEHgK00cTSKxVPg";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Swish Fox"
      currency="GBP"
      billingAddress
      shippingAddress
      image="https://res.cloudinary.com/dcs/image/upload/c_scale,w_146/v1572898764/Swish%20Fox/logo/Swishfox-logo.png"
      description={`Your total is £${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
