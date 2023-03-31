import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./index.module.scss";
import { useDispatch } from "react-redux";
import { setPage } from "../../redux/slices/paginationSlice";

export const Pagination = () => {
  const dispatch = useDispatch();

  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      previousLabel="<"
      nextLabel=">"
      onPageChange={(e) => dispatch(setPage(e.selected + 1))}
      pageCount={3}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      renderOnZeroPageCount={null}
    />
  );
};
