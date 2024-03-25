// src/contexts/ProductContext.tsx
import { interfaceProduct } from '@/service/Service';
import React, { ReactNode, createContext, useContext, useState } from 'react';

interface ProductContextData {
    selectedCategory: number | null;
    setSelectedCategory: React.Dispatch<React.SetStateAction<number | null>>;
    filteredProducts: interfaceProduct[];
    setFilteredProducts: React.Dispatch<React.SetStateAction<interfaceProduct[]>>;
}

const ProductContext = createContext<ProductContextData>({} as ProductContextData);

interface ProductProviderProps {
    children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [filteredProducts, setFilteredProducts] = useState<interfaceProduct[]>([]);

    return (
        <ProductContext.Provider value={{ selectedCategory, setSelectedCategory, filteredProducts, setFilteredProducts }}>
            {children}
        </ProductContext.Provider>
    );
};

export function useProductContext() {
    return useContext(ProductContext);
}
