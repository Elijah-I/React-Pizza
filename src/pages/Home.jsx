import React from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { Categories } from "./../components/Categories";
import { Sort } from "./../components/Sort";
import { PizzaItem } from "./../components/PizzaItem";
import { PizzaItemSkeleton } from "./../components/PizzaItem/Skeleton";
import { WithSkeleton } from "./../HOC/WithSkeleton";
import { Pagination } from "../components/Pagination";
import { PaginationSkeleton } from "./../components/Pagination/Skeleton";
import { useSelector } from "react-redux";
import { useDebounce } from "use-debounce";

export const Home = () => {
  const {
    filter: { category, sort },
    pagination: { page },
    searching: { search }
  } = useSelector((state) => state);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFirstLoading, setIsFirstLoading] = React.useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  let [debouncedSearch] = useDebounce(search, search ? 300 : 0);

  React.useEffect(() => {
    const params = new URLSearchParams({});

    if (debouncedSearch) params.append("search", debouncedSearch);
    else {
      if (category) params.append("category", category);
      params.append("sortBy", sort.key);
      params.append("order", sort.order);
      params.append("page", page);
    }

    setSearchParams(params);
  }, [category, sort, debouncedSearch, page]);

  React.useEffect(() => {
    const getItems = async () => {
      setIsLoading(true);

      searchParams.append("limit", 4);

      const response = await axios.get(
        "https://641d6897b556e431a8831fcb.mockapi.io/api/v1/items",
        { params: searchParams }
      );

      window.scrollTo(0, 0);

      setItems(response.data);
      setIsLoading(false);
      setIsFirstLoading(false);
    };

    getItems();
  }, [searchParams]);

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
