import React from "react";

export const Categories = () => {
  const categories = [
    { name: "All", id: 0 },
    { name: "Meat", id: 1 },
    { name: "Vegetarian", id: 2 },
    { name: "Grill", id: 3 },
    { name: "Spicy", id: 4 },
    { name: "Сalzone", id: 5 }
  ];

  const [active, setActive] = React.useState(categories[0].id);

  const changeCategory = (categoryId) => {
    setActive(categoryId);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category) => (
          <li
            className={category.id === active ? "active" : ""}
            onClick={() => changeCategory(category.id)}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
