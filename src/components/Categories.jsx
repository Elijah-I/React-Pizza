import React from "react";

export const Categories = () => {
  const categories = [
    { name: "Все", id: 0 },
    { name: "Мясные", id: 1 },
    { name: "Вегетарианская", id: 2 },
    { name: "Гриль", id: 3 },
    { name: "Острые", id: 4 },
    { name: "Закрытые", id: 5 }
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
