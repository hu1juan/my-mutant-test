import React from "react";
import cake1 from "../assets/img/cake1.jpg";
import cake2 from "../assets/img/cake2.jpg";
import cake3 from "../assets/img/cake3.jpg";
import cake4 from "../assets/img/cake4.jpg";
import cake5 from "../assets/img/cake5.jpg";
import cake6 from "../assets/img/cake6.jpg";
import cake7 from "../assets/img/cake7.jpg";
import cake8 from "../assets/img/cake8.jpg";

const cakeList = [
  {
    imgSrc: cake1,
    desc: "A cake on yellow plate",
  },
  {
    imgSrc: cake2,
    desc: "This cake is bittersweet like Matcha",
  },
  {
    imgSrc: cake3,
    desc: "Brownies cake with cherry on top",
  },
  {
    imgSrc: cake4,
    desc: "A sample of wedding cake with cherry on top",
  },
  {
    imgSrc: cake5,
    desc: "Another type of brownies cake with chocolate",
  },
  {
    imgSrc: cake6,
    desc: "A pudding cake with strawberries on top",
  },
  {
    imgSrc: cake7,
    desc: "A chocolate cake with peanuts",
  },
  {
    imgSrc: cake8,
    desc: "A pure strawberry sweet cake",
  },
];
export default function CakeList() {
  return (
    <section id="cakeList" className="cake-list">
      {cakeList.map((cake, ind) => (
        <img key={ind} src={cake.imgSrc} alt={cake.desc} />
      ))}
    </section>
  );
}
