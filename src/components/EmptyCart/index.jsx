import React from "react";
import { Link } from "react-router-dom";
import emptySrc from "./../../assets/img/empty-cart.png";
import backSrc from "./../../assets/icons/back.svg";

export const EmtyCart = () => {
  return (
    <div className="content__null">
      <h2>Cart is empty</h2>
      <p>Probably you haven't ordered any pizza yet</p>
      <img className="null__img" src={emptySrc} alt="empty cart" />
      <div className="cart__bottom-buttons">
        <Link to="/" className="button button--outline button--add go-back-btn">
          <img className="content__icon" src={backSrc} alt="back icon" />
          <span className="back">Back</span>
        </Link>
      </div>
    </div>
  );
};
