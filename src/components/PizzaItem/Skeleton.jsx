import React from "react";
import ContentLoader from "react-content-loader";

export const PizzaItemSkeleton = () => (
  <ContentLoader
    className="pizza-block"
    style={{
      marginLeft: "8px"
    }}
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="135" cy="125" r="125" />
    <rect x="0" y="313" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="428" rx="10" ry="10" width="90" height="31" />
    <rect x="171" y="421" rx="23" ry="23" width="109" height="45" />
    <rect x="0" y="273" rx="10" ry="10" width="280" height="17" />
  </ContentLoader>
);
