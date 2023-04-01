import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

export const useCustomParams = () => {
  const { categories, sortOptions } = useSelector((state) => state.filter);

  const [searchParams, setSearchParams] = useSearchParams();

  const category = Number(searchParams.get("category") || categories[0].id);

  const sort =
    sortOptions
      .filter(
        (option) =>
          option.key === searchParams.get("sortBy") &&
          option.order === searchParams.get("order")
      )
      .pop() || sortOptions[0];

  const page = Number(searchParams.get("page") || 1);

  const search = searchParams.get("search") || "";

  const setCustomParams = (params) => {
    Object.entries(params).forEach(([param, value]) => {
      if (value) {
        if (searchParams.has(param)) searchParams.set(param, value);
        else searchParams.append(param, value);
      } else {
        searchParams.delete(param);
      }
    });

    setSearchParams(searchParams);
  };

  return [
    {
      category,
      search,
      sort,
      page
    },
    setCustomParams,
    {
      categories,
      sortOptions
    }
  ];
};
