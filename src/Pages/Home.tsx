
import { Card } from "@/components/Card/Card";
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
            <div className=" grid grid-cols-2 gap-4 lg:grid-cols-4">
                {data.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}