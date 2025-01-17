import React from "react";
import { FaTiktok, FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";

const menus = [
  "Signature Cakes",
  "Bespoke Cakes",
  "Wedding Cakes",
  "Cakesicles",
  "Chocolates",
  "Master Classes",
];

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-content">
        <div className="form-wrapper"></div>
        <div className="cakelist">
          {" "}
          {menus.map((menu, ind) => (
            <a key={ind} href="" target="_blank">
              {menu}
            </a>
          ))}
        </div>
        <div className="menus-socials">
          <span>Payment and Delivery</span>
          <span>Help Center</span>
          <span>FAQs</span>
          <span>Contact Us</span>
          <span className="socials">
            <FaTiktok />
            <FaFacebookF />
            <FaYoutube />
            <FaInstagram />
          </span>
          <span className="payments"></span>
        </div>
      </div>
      <div className="copyright">
        <p>© 2023 The Cake Boutique. All rights reserved</p>
      </div>
    </section>
  );
}
