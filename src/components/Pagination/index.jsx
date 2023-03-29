import React from "react";
import ReactPaginate from "react-paginate";
import { PaginaionContext } from "../../App";
import styles from "./index.module.scss";

export const Pagination = () => {
  const { page, setPage } = React.useContext(PaginaionContext);

  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      previousLabel="<"
      nextLabel=">"
      onPageChange={(e) => setPage(e.selected + 1)}
      pageCount={3}
      initialPage={page - 1}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      renderOnZeroPageCount={null}
    />
  );
};
