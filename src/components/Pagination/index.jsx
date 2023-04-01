import React from "react";
import ReactPaginate from "react-paginate";
import { useCustomParams } from "../../hooks/useCustomParams";
import styles from "./index.module.scss";

export const Pagination = () => {
  const [{ page }, setCustomParams] = useCustomParams();

  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      previousLabel="<"
      nextLabel=">"
      onPageChange={(e) => setCustomParams({ page: e.selected + 1 })}
      pageCount={3}
      forcePage={page - 1}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      renderOnZeroPageCount={null}
    />
  );
};
