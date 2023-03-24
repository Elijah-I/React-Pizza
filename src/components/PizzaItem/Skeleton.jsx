import React from "react";
import ContentLoader from "react-content-loader";

export const PizzaItemSkeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="135" cy="125" r="125" />
    <rect x="0" y="307" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="422" rx="10" ry="10" width="90" height="31" />
    <rect x="127" y="415" rx="23" ry="23" width="153" height="45" />
    <rect x="0" y="270" rx="10" ry="10" width="280" height="17" />
  </ContentLoader>
);
