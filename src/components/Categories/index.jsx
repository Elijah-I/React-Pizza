import React from "react";
import { useCustomParams } from "../../hooks/useCustomParams";

export const Categories = () => {
  const [{ category: id }, setCustomParams, { categories }] = useCustomParams();

  const applyCategory = (id) => {
    setCustomParams({ category: id, page: 1 });
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
