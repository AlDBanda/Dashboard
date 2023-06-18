import React, { createContext, useState } from 'react';

const FigureContext = createContext();

const FigureProvider = ({ children }) => {
  const [monthlyEarnings, setMonthlyEarnings] = useState(0);
  const [monthlyOutgoings, setMonthlyOutgoings] = useState(0);

  return (
    <FigureContext.Provider
      value={{
        monthlyEarnings,
        setMonthlyEarnings,
        monthlyOutgoings,
        setMonthlyOutgoings,
      }}
    >
      {children}
    </FigureContext.Provider>
  );
};

export { FigureContext, FigureProvider };
