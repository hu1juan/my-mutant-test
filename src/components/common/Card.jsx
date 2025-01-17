import React from "react";
import PropTypes from "prop-types";

export default function Card(props) {
  const { title, imgUrl } = props;
  const cardStyle = {
    backgroundImage: `url(${imgUrl})`,
  };
  return (
    <div className={"card-wrapper"} style={cardStyle}>
      <span>{title}</span>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  imgUrl: PropTypes.string,
};
