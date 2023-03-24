import React from "react";
import { Header } from "./components/Header";
import { Categories } from "./components/Categories";
import { Sort } from "./components/Sort";
import { PizzaItem } from "./components/PizzaItem";
import "./assets/scss/app.scss";

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    const getItems = async () => {
      const result = await fetch(
        "https://641d6897b556e431a8831fcb.mockapi.io/api/v1/items",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          }
        }
      );
      const items = await result.json();
      setItems(items);
    };

    getItems();
  }, []);

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
            {items.map((pizza) => (
              <PizzaItem key={pizza.id} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
