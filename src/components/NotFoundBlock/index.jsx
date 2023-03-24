import React from "react";
import styles from "./index.module.scss";

export const NotFoundBlock = () => {
  return (
    <div className={styles.centered}>
      <h1>Nothing found :(</h1>
      <div className={styles.description}>
        Unfortunately, this page is not available in our online store.
      </div>
    </div>
  );
};
