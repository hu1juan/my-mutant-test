import React from "react";
import birthdaycake from "../assets/img/birthdaycake.jpg";
import weddingcake from "../assets/img/weddingcake.jpg";
import christmascake from "../assets/img/christmascake.jpg";
import Card from "./common/Card";

const cardList = [
  {
    title: "Birthday Cakes",
    imgUrl: birthdaycake,
  },
  {
    title: "Wedding Cakes",
    imgUrl: weddingcake,
  },
  {
    title: "Christmas Cakes",
    imgUrl: christmascake,
  },
];

export default function FeaturedCakes() {
  return (
    <section className="featured">
      {cardList.map((card, ind) => (
        <Card title={card.title} imgUrl={card.imgUrl} key={ind} />
      ))}
    </section>
  );
}
