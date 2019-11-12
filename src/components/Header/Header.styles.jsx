import styled from "styled-components";
import { Link } from "react-router-dom";

import img from "../../assets/swishfox-logo-2.png";

const mobileLogo =
  "https://res.cloudinary.com/dcs/image/upload/c_scale,w_60/v1573587078/Swish%20Fox/logo/Swishfox-logo-mobile.png";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 80px;
    padding: 10px;
    margin-bottom: 25px;
  }
`;

export const LogoContainer = styled(Link)`
  background-image: url(${img});
  height: 100%;
  width: 150px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    background: url(${mobileLogo}) no-repeat center;
    width: 50px;
    padding: 0px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
