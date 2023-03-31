import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PaginaionContext } from "../../App";
import { setCategory } from "../../redux/slices/filterSlice";

const categories = [
  { name: "All", id: 0 },
  { name: "Meat", id: 1 },
  { name: "Vegetarian", id: 2 },
  { name: "Grill", id: 3 },
  { name: "Spicy", id: 4 },
  { name: "Сalzone", id: 5 }
];

export const Categories = () => {
  const { setPage } = React.useContext(PaginaionContext);
  const { category: id } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const applyCategory = (id) => {
    dispatch(setCategory(id));
    setPage(1);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category) => (
          <li
            className={category.id === id ? "active" : ""}
            onClick={() => applyCategory(category.id)}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
