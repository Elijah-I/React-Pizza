import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import useWhyDidYouUpdate from "ahooks/lib/useWhyDidYouUpdate";

const assocType = ["thin", "traditional"];

export const PizzaItem = React.memo((props) => {
  const { id, title, price, imageUrl, types, sizes } = props;
  const dispath = useDispatch();
  const count =
    useSelector((state) => state.cart.items)
      ?.filter((item) => item.id === id)
      ?.reduce((count, item) => count + item.count, 0) || 0;
  const [selectedType, setSelectedType] = React.useState(0);
  const [selectedSize, setSelectedSize] = React.useState(sizes[0]);

  const addPizza = React.useCallback(() => {
    dispath(
      addItem({
        id,
        title,
        price,
        imageUrl,
        type: assocType[selectedType],
        size: selectedSize,
        count: 1
      })
    );
  }, [dispath, id, title, price, imageUrl, selectedType, selectedSize]);

  return (
    <div className="pizza-block-container">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((type, order) => (
              <li
                key={order}
                className={order === selectedType ? "active" : ""}
                onClick={() => setSelectedType(order)}
              >
                {assocType[type]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size) => (
              <li
                key={size}
                className={size === selectedSize ? "active" : ""}
                onClick={() => setSelectedSize(size)}
              >
                {size} cm.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <div
            className="button button--outline button--add"
            onClick={() => addPizza()}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Add</span>
            {!!count && <i>{count}</i>}
          </div>
        </div>
      </div>
    </div>
  );
});
