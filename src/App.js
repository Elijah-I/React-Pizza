import React from "react";
import { Header } from "./components/Header";
import { Categories } from "./components/Categories";
import { Sort } from "./components/Sort";
import { PizzaItem } from "./components/PizzaItem";
import "./assets/scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaItem title="Чизбургер-пицца" price={395} />
            <PizzaItem title="Просто-пицца" price={500} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
