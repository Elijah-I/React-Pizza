import React from "react";
import ContentLoader from "react-content-loader";

export const PaginationSkeleton = () => (
  <ContentLoader
    speed={2}
    width={295}
    height={51}
    viewBox="0 0 295 51"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{ width: "100%" }}
  >
    <circle cx="25" cy="25" r="25" />
    <circle cx="86" cy="25" r="25" />
    <circle cx="147" cy="25" r="25" />
    <circle cx="208" cy="25" r="25" />
    <circle cx="269" cy="25" r="25" />
  </ContentLoader>
);
