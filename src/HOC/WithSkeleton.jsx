import React from "react";

export const WithSkeleton = ({ Skeleton, repeats, isLoading, children }) => {
  return isLoading
    ? [...Array(repeats)].map((_, key) => <Skeleton key={key} />)
    : children;
};
