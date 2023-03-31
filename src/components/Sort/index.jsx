import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../redux/slices/filterSlice";
import { setPage } from "../../redux/slices/paginationSlice";

const sortOptions = [
  { name: "popularity ↑", key: "rating", order: "asc" },
  { name: "popularity ↓", key: "rating", order: "desc" },
  { name: "price ↑", key: "price", order: "asc" },
  { name: "price ↓", key: "price", order: "desc" },
  { name: "alphabet ↑", key: "title", order: "asc" },
  { name: "alphabet ↓", key: "title", order: "desc" }
];

export const Sort = () => {
  const [opened, setOpened] = React.useState(false);
  const { sort } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const applySort = (sort) => {
    dispatch(setPage(1));
    dispatch(setSort(sort));
    setOpened(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Sort by:</b>
        <span onClick={() => setOpened(!opened)}>
          {
            sortOptions.filter((sortOption) => sortOption.key === sort.key)[0]
              .name
          }
        </span>
      </div>
      {opened && (
        <div className="sort__popup">
          <ul>
            {sortOptions.map((sortOption) => (
              <li
                key={sortOption.key + sortOption.order}
                className={
                  sortOption.key === sort.key && sortOption.order === sort.order
                    ? "active"
                    : ""
                }
                onClick={() => applySort(sortOption)}
              >
                {sortOption.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
