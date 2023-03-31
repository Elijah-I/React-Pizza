import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/slices/filterSlice";
import { setPage } from "../../redux/slices/paginationSlice";

const categories = [
  { name: "All", id: 0 },
  { name: "Meat", id: 1 },
  { name: "Vegetarian", id: 2 },
  { name: "Grill", id: 3 },
  { name: "Spicy", id: 4 },
  { name: "Сalzone", id: 5 }
];

export const Categories = () => {
  const { category: id } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const applyCategory = (id) => {
    dispatch(setCategory(id));
    dispatch(setPage(1));
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
