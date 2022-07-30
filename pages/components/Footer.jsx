import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = ({ footerBanner }) => {
  return (
    <div className="footer-container">
      <p>2022 Beniah Store All rights reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillLinkedin />
        <AiFillFacebook />
      </p>
    </div>
  );
};

export default Footer;
