import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./index.module.scss";

export const Pagination = () => {
  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      previousLabel="<"
      nextLabel=">"
      onPageChange={(e) => console.log(e)}
      pageCount={3}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      renderOnZeroPageCount={null}
    />
  );
};
