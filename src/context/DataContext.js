import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [uploadedData, setUploadedData] = useState(null);  // latest file data

  return (
    <DataContext.Provider value={{ uploadedData, setUploadedData }}>
      {children}
    </DataContext.Provider>
  );
};
