import React, { createContext, useState } from "react";

type FilterContextProviderProps = {
  children: React.ReactNode;
};

type FilterContextType = {
  filterValue: number | undefined;
  setFilterValue: React.Dispatch<React.SetStateAction<number | undefined>>;
};

const FilterContext = createContext<FilterContextType | null>(null);

export const FilterContextProvider = ({
  children,
}: FilterContextProviderProps) => {
  const [filterValue, setFilterValue] = useState<number | undefined>();

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
