import React from "react";
import { Categories } from "./../components/Categories";
import { Sort } from "./../components/Sort";
import { PizzaItem } from "./../components/PizzaItem";
import { PizzaItemSkeleton } from "./../components/PizzaItem/Skeleton";
import { WithSkeleton } from "./../HOC/WithSkeleton";

export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [category, setCategory] = React.useState(0);
  const [sort, setSort] = React.useState({
    name: "popularity ↑",
    key: "rating",
    order: "asc"
  });

  React.useEffect(() => {
    const getItems = async () => {
      setIsLoading(true);

      const url = new URL(
        "https://641d6897b556e431a8831fcb.mockapi.io/api/v1/items"
      );
      url.searchParams.append("sortBy", sort.key);
      url.searchParams.append("order", sort.order);
      if (category) url.searchParams.append("category", category);

      const result = await fetch(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        }
      });
      const items = await result.json();

      window.scrollTo(0, 0);

      setItems(items);
      setIsLoading(false);
    };

    getItems();
  }, [category, sort]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories id={category} setId={setCategory} />
        <Sort sort={sort} setSort={setSort} />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        <WithSkeleton
          isLoading={isLoading}
          Skeleton={PizzaItemSkeleton}
          repeats={8}
        >
          {items.map((pizza) => (
            <PizzaItem key={pizza.id} {...pizza} />
          ))}
        </WithSkeleton>
      </div>
    </div>
  );
};
