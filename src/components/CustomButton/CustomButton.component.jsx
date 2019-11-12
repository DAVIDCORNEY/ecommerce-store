import React from "react";

// import "./CustomButton.style.scss";

import { CustomButtonContainer } from "./CustomButton.styles";

// const CustomButton = ({
//   children,
//   isGoogleSignIn,
//   invertedColor,
//   ...otherProps
// }) => (
//   <button
//     className={`${invertedColor ? "inverted-color" : ""}${
//       isGoogleSignIn ? "google-sign-in" : ""
//     } custom-button`}
//     {...otherProps}
//   >
//     {children}
//   </button>
// );

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);
export default CustomButton;
