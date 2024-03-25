
import { Card } from "@/components/Card/Card";
import { useProductContext } from "@/contexts/PoductContext";
import { getProducts } from "@/service/Service";
import { useEffect } from "react";
export function Home() {

    const { filteredProducts, setFilteredProducts } = useProductContext();
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await getProducts('https://api.escuelajs.co/api/v1/products');
            setFilteredProducts(response);
        };
        fetchProducts();
    }, []);

    return (
        <div className="container pt-4">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {filteredProducts.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}