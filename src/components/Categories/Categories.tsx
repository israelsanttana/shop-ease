// src/components/Categories.tsx
import { useProductContext } from '@/contexts/PoductContext';
import { getProducts } from '@/service/Service';
import { useEffect } from 'react';


export function Categories() {
    const { selectedCategory, setSelectedCategory, setFilteredProducts } = useProductContext();

    useEffect(() => {
        const fetchProducts = async () => {
            if (selectedCategory) {
                const response = await getProducts(`https://api.escuelajs.co/api/v1/products?categoryId=${selectedCategory}`);
                if (Array.isArray(response)) {
                    setFilteredProducts(response);
                } else {
                    console.error('A resposta da API não é um array de produtos:', response);
                    setFilteredProducts([]);
                }
            } else {
                // Quando nenhuma categoria é selecionada, busca todos os produtos
                const response = await getProducts('https://api.escuelajs.co/api/v1/products');
                if (Array.isArray(response)) {
                    setFilteredProducts(response);
                } else {
                    console.error('A resposta da API não é um array de produtos:', response);
                    setFilteredProducts([]);
                }
            }
        };
        fetchProducts();
    }, [selectedCategory, setFilteredProducts]);

    const handleCategoryClick = (categoryId: number) => {
        setSelectedCategory(categoryId);
    };

    const handleAllClick = () => {
        setSelectedCategory(null); // Limpa a categoria selecionada
    };

    return (
        <div className="flex justify-between pt-4 pb-4">
            <button onClick={handleAllClick}>All Categorys</button>
            <button onClick={() => handleCategoryClick(1)}>Clothes</button>
            <button onClick={() => handleCategoryClick(2)}>Shoes</button>
            <button onClick={() => handleCategoryClick(3)}>Eletronics</button>
            <button onClick={() => handleCategoryClick(4)}>Furniture</button>
        </div>
    );
}
