import React from "react";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import "./assets/scss/app.scss";
import { useDebounce } from "use-debounce";

export const SearchContext = React.createContext();
export const PaginaionContext = React.createContext();

export function App() {
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState("");
  const [debouncedSearch] = useDebounce(search, 300);

  return (
    <PaginaionContext.Provider value={{ page, setPage }}>
      <SearchContext.Provider value={{ search, debouncedSearch, setSearch }}>
        <div className="wrapper">
          <Header />

          <div className="content">
            <Outlet />
          </div>
        </div>
      </SearchContext.Provider>
    </PaginaionContext.Provider>
  );
}
