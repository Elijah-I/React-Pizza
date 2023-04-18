import React from "react";
import { useCustomParams } from "../hooks/useCustomParams";
import { Categories } from "./../components/Categories";
import { Sort } from "./../components/Sort";
import { PizzaItem } from "./../components/PizzaItem";
import { PizzaItemSkeleton } from "./../components/PizzaItem/Skeleton";
import { WithSkeleton } from "./../HOC/WithSkeleton";
import { Pagination } from "../components/Pagination";
import { PaginationSkeleton } from "./../components/Pagination/Skeleton";
import { useDebounce } from "use-debounce";
import { useDispatch, useSelector } from "react-redux";
import { getPizzas } from "../redux/slices/pizzaSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const [{ category, search, sort, page }] = useCustomParams();
  let [debouncedSearch] = useDebounce(search, search ? 300 : 0);
  const { items, isLoading, isFirstLoading } = useSelector(
    (state) => state.pizzas
  );

  React.useEffect(() => {
    dispatch(getPizzas(category, sort, page, debouncedSearch));
  }, [category, sort, page, debouncedSearch]);

  return (
    <div className="container">
      {!debouncedSearch && (
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
      )}
      {!debouncedSearch && <h2 className="content__title">All pizzas</h2>}
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
