import React from "react";
import axios from "axios";
import { useCustomParams } from "../hooks/useCustomParams";
import { Categories } from "./../components/Categories";
import { Sort } from "./../components/Sort";
import { PizzaItem } from "./../components/PizzaItem";
import { PizzaItemSkeleton } from "./../components/PizzaItem/Skeleton";
import { WithSkeleton } from "./../HOC/WithSkeleton";
import { Pagination } from "../components/Pagination";
import { PaginationSkeleton } from "./../components/Pagination/Skeleton";
import { useDebounce } from "use-debounce";

const getItems = async (category, sort, page, search) => {
  let params = {};

  if (search) params = { search };
  else {
    params.limit = 4;
    params.page = page || 1;

    if (category) params.category = category;
    if (sort) {
      params.sortBy = sort.key;
      params.order = sort.order;
    }
  }

  const response = await axios.get(
    "https://641d6897b556e431a8831fcb.mockapi.io/api/v1/items",
    { params: new URLSearchParams(params) }
  );

  return response.data;
};

export const Home = () => {
  const [{ category, search, sort, page }] = useCustomParams();

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFirstLoading, setIsFirstLoading] = React.useState(true);

  let [debouncedSearch] = useDebounce(search, search ? 300 : 0);

  React.useEffect(() => {
    const applyFilters = async () => {
      setIsLoading(true);

      const items = await getItems(category, sort, page, debouncedSearch);

      setItems(items);
      setIsLoading(false);
      setIsFirstLoading(false);
    };

    applyFilters();
  }, [category, sort, page, debouncedSearch]);

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
