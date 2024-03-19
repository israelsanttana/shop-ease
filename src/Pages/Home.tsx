
import { getProducts, interfaceProduct } from "@/service/Service";
import { useEffect, useState } from "react";
export function Home() {

    const [data, setData] = useState<interfaceProduct[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await getProducts('https://api.escuelajs.co/api/v1/products');
            setData(response);
        };
        fetchProducts();
    }, []);

    return (
        <div className="container pt-4">
            <div className="grid grid-cols-2 gap-4">
                {data.map((product) => (
                    <p key={product.id}>{product.description}</p>

                ))}
            </div>
        </div>
    )
}