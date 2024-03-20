import { interfaceProduct } from "@/service/Service";
import { Handbag } from "@phosphor-icons/react";
import imgBag from '../../assets/sun-lingyan-_H0fjILH5Vw-unsplash.jpg';

interface CardProps {
    product: interfaceProduct
}
export const Card: React.FC<CardProps> = ({ product }) => {
    return (
        <div className="w-[164px] p-1">
            <div>
                <img src={imgBag} width={180} />
            </div>
            <div>
                <button className="bg-slate-900 text-white w-full flex items-center justify-end gap-1 p-2">
                    <Handbag size={20} />
                    Comparar
                </button>
            </div>
            <div className="pt-2 pb-2">
                <h2>{product.title} </h2>
                <div className="flex justify-between mt-2">
                    <p className="text-slate-300 font-light">Bags</p>
                    <p>{product.price}</p>
                </div>
            </div>
        </div>

    )
}