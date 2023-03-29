import React from "react";

const categories = [
  { name: "All", id: 0 },
  { name: "Meat", id: 1 },
  { name: "Vegetarian", id: 2 },
  { name: "Grill", id: 3 },
  { name: "Spicy", id: 4 },
  { name: "Сalzone", id: 5 }
];

export const Categories = ({ id, setId }) => {
  return (
    <div className="categories">
      <ul>
        {categories.map((category) => (
          <li
            className={category.id === id ? "active" : ""}
            onClick={() => setId(category.id)}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
