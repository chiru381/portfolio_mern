import React, { createContext, useContext, useState, useCallback } from "react";

// Create the context
const VariantContext = createContext(null);

// Hook to access the variant and setVariant
export const useVariant = () => {
    const context = useContext(VariantContext);
    if (!context) {
        throw new Error("useVariant must be used within a VariantProvider");
    }
    return context;
};

// Hook to update the variant with better error handling
export const useUpdateVariant = () => {
    const context = useVariant();
    const { setVariant } = context;
    return useCallback(
        (variant) => {
            setVariant(variant);
        },
        [setVariant]
    );
};

// Provider component
const VariantProvider = ({ variant = "neumorph", children }) => {
    const [_variant, setVariant] = useState(variant);

    const value = {
        variant: _variant,
        setVariant
    };

    return (
        <VariantContext.Provider value={value}>
            {children}
        </VariantContext.Provider>
    );
};

export default VariantProvider;
