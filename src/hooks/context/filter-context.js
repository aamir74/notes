import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/filter-reducer";

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sortBy: "",
    search: "",
    pinned: "",
  });
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
export { useFilter, FilterProvider };
