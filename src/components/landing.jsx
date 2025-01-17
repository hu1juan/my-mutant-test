import React from "react";
import banner from "../assets/img/banner.jpg";
import logo from "../assets/logo/logo.svg";
import {
  FaSearch,
  FaRegUser,
  FaShoppingCart,
  FaAngleDown,
} from "react-icons/fa";

const menus = [
  "SIGNATURE CAKE",
  "BESPOKE CAKES",
  "WEDDING CAKES",
  "CAKESICLES",
  "CHOCOLATES",
  "MASTER CLASSES",
];

export default function Landing() {
  const landingStyle = {
    backgroundImage: `url(${banner})`,
  };
  const goTo = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: document.querySelector("#cakeList").offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <section className="landing" style={landingStyle}>
      <header>
        <div className="logo">
          <img src={logo} alt="The Cake Boutique Logo" />
        </div>
        <nav>
          {menus.map((menu, ind) => (
            <a key={ind} href="" target="_blank" onClick={goTo}>
              {menu}
            </a>
          ))}
        </nav>
        <div className="icons">
          <FaSearch />
          <FaRegUser />
          <FaShoppingCart />
        </div>
      </header>
      <div className="banner-content">
        <div>
          <p>Passion Craft</p>
          <button>ORDER NOW</button>
        </div>
      </div>
    </section>
  );
}
