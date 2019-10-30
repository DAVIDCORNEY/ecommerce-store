import React from "react";

import "./CustomButton.style.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  invertedColor,
  ...otherProps
}) => (
  <button
    className={`${invertedColor ? "inverted-color" : ""}${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
