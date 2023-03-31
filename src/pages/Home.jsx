import React from "react";
import { Categories } from "./../components/Categories";
import { Sort } from "./../components/Sort";
import { PizzaItem } from "./../components/PizzaItem";
import { PizzaItemSkeleton } from "./../components/PizzaItem/Skeleton";
import { WithSkeleton } from "./../HOC/WithSkeleton";
import { Pagination } from "../components/Pagination";
import { PaginationSkeleton } from "./../components/Pagination/Skeleton";
import { useSelector } from "react-redux";
import { useDebounce } from "use-debounce";
import axios from "axios";

export const Home = () => {
  const {
    filter: { category, sort },
    pagination: { page },
    searching: { search }
  } = useSelector((state) => state);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFirstLoading, setIsFirstLoading] = React.useState(true);

  let [debouncedSearch] = useDebounce(search, search ? 300 : 0);

  React.useEffect(() => {
    const getItems = async () => {
      setIsLoading(true);

      const url = new URL(
        "https://641d6897b556e431a8831fcb.mockapi.io/api/v1/items"
      );
      if (debouncedSearch) url.searchParams.append("search", debouncedSearch);
      else {
        url.searchParams.append("sortBy", sort.key);
        url.searchParams.append("order", sort.order);
        url.searchParams.append("page", page);
        url.searchParams.append("limit", 4);
        if (category) url.searchParams.append("category", category);
      }

      const response = await axios.get(url);

      window.scrollTo(0, 0);

      setItems(response.data);
      setIsLoading(false);
      setIsFirstLoading(false);
    };

    getItems();
  }, [category, sort, debouncedSearch, page]);

  return (
    <div className="container">
      <div className="content__top">
        {!debouncedSearch && <Categories />}
        {!debouncedSearch && <Sort />}
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        <WithSkeleton
          isLoading={isLoading}
          Skeleton={PizzaItemSkeleton}
          repeats={4}
        >
          {items.map((pizza) => (
            <PizzaItem key={pizza.id} {...pizza} />
          ))}
        </WithSkeleton>
      </div>
      {!debouncedSearch && (
        <WithSkeleton
          isLoading={isFirstLoading}
          Skeleton={PaginationSkeleton}
          repeats={1}
        >
          <Pagination />
        </WithSkeleton>
      )}
    </div>
  );
};
