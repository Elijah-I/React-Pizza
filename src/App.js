import React from "react";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import "./assets/scss/app.scss";

export function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
