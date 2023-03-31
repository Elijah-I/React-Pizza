import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/slices/paginationSlice";

export const Pagination = () => {
  const { page } = useSelector((state) => state.pagination);
  const dispatch = useDispatch();

  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      previousLabel="<"
      nextLabel=">"
      onPageChange={(e) => dispatch(setPage(e.selected + 1))}
      pageCount={3}
      forcePage={page - 1}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      renderOnZeroPageCount={null}
    />
  );
};
