import React, { createContext, useState } from "react";

type FilterContextProviderProps = {
  children: React.ReactNode;
};

type FilterContextType = {
  filterValue: string;
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
};

const FilterContext = createContext<FilterContextType | null>(null);

export const FilterContextProvider = ({
  children,
}: FilterContextProviderProps) => {
  const [filterValue, setFilterValue] = useState("");

  return (
    <FilterContext.Provider
      value={{
        filterValue,
        setFilterValue,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
