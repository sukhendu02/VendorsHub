// src/Context/LoaderContext.jsx
import React, { createContext, useState, useContext } from 'react';

const LoaderContext = createContext();
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
export const LoaderProvider = ({ children }) => {
  const [load, setload] = useState(false);

  return (
    <LoaderContext.Provider value={{ load, setload }}>
      {children}

      {load && (
         <Box sx={{ display: 'flex' }}>
         <CircularProgress />
       </Box>
      )}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
