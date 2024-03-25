import { interfaceProduct } from "@/service/Service";
import { priceFormatter } from "@/ultils/formatter";
import { Handbag } from "@phosphor-icons/react";
import imgSubstitute from "../../assets/sun-lingyan-_H0fjILH5Vw-unsplash.jpg";

interface CardProps {
    product: interfaceProduct

}
export const Card: React.FC<CardProps> = ({ product }) => {
    return (
        <div className="w-[164px] lg:w-[300px]">
            <div>
                <img className="w-[180px] lg:w-[300px]" src={(Array.isArray(product.images) && product.images[1]) || imgSubstitute} />
            </div>
            <div>
                <button className="bg-slate-900 text-white w-full flex items-center justify-end gap-1 p-2">
                    <Handbag size={20} />
                    Comparar
                </button>
            </div>
            <div className="pt-2 pb-2 h-32 flex flex-col justify-between lg:h-24">
                <h2>{product.title} </h2>
                <div className="flex justify-between mt-2">
                    <p className="text-slate-500 font-light">{product.category.name}</p>
                    <p>{priceFormatter.format(product.price)}</p>
                </div>
            </div>
        </div>

    )
}