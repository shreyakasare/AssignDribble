import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        step1: {}, // Data from Step1
        step2: {}, // Data from Step2
        step3: {}, // Data from Step3
    });

    return (
        <AppContext.Provider value={{ formData, setFormData }}>
            {children}
        </AppContext.Provider>
    );
};
