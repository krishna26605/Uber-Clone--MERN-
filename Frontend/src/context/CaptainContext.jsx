import React, { createContext,  useState } from 'react';

// Create the context
export const CaptainDataContext = createContext();

// Custom hook for easy access


// Provider component
export const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    }

    const value ={
                captain,
                setCaptain,
                isLoading,
                setIsLoading,
                error,
                setError,
                updateCaptain,
            };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
        
    );
};

export default CaptainContext;