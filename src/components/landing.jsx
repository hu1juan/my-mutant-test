import React from "react";
import banner from "../assets/img/banner.jpg";
import logo from "../assets/logo/logo.svg";

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
            <a href="" target="_blank" onClick={goTo}>
              {menu}
            </a>
          ))}
        </nav>
        <div className="icons">
          <span>icon1</span>
          <span>icon2</span>
          <span>icon3</span>
        </div>
      </header>
    </section>
  );
}
