import React from "react";
import { useCustomParams } from "../../hooks/useCustomParams";
import styles from "./index.module.scss";
import { useLocation } from "react-router-dom";

export const Search = () => {
  const location = useLocation();

  const inputRef = React.useRef();
  const [{ search }, setCustomParams] = useCustomParams();

  if (location.pathname === "/cart") return <></>;

  const dropSearch = () => {
    setCustomParams({ search: "" });
    inputRef.current.focus();
  };

  return (
    <div className={styles.search}>
      <div className={styles.search__icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="100%"
          height="100%"
        >
          <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
        </svg>
      </div>

      <input
        value={search}
        onChange={(e) => setCustomParams({ search: e.target.value })}
        className={styles.search__input}
        type="search"
        ref={inputRef}
        placeholder="Pizza search..."
      />

      {search && (
        <div className={styles.search__drop} onClick={dropSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            width="100%"
            height="100%"
          >
            <path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z" />
          </svg>
        </div>
      )}
    </div>
  );
};
