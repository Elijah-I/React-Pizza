import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import cartSrc from "./../assets/icons/cart.svg";
import clearSrc from "./../assets/icons/clear.svg";
import backSrc from "./../assets/icons/back.svg";
import { CartItem } from "../components/CartItem";
import { dropItems } from "../redux/slices/cartSlice";
import { EmtyCart } from "../components/EmptyCart";

export const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalPrice, totalCount } = useSelector((state) => state.cart);

  if (!items.length) return <EmtyCart />;

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <img className="content__icon" src={cartSrc} alt="cart icon" />
            Cart
          </h2>

          <div className="cart__clear" onClick={() => dispatch(dropItems())}>
            <img src={clearSrc} alt="clear icon" />
            <span>Clear cart</span>
          </div>
        </div>

        {items.map((item) => (
          <CartItem key={`${item.id}-${item.size}-${item.type}`} {...item} />
        ))}

        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Total pizzas: <b>{totalCount}</b>
            </span>
            <span>
              Order summ: <b>{totalPrice} ₽</b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link
              to="/"
              className="button button--outline button--add go-back-btn"
            >
              <img className="content__icon" src={backSrc} alt="back icon" />
              <span className="back">Back</span>
            </Link>
            <div className="button pay-btn">
              <span>Buy now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
