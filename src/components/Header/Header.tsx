import { MagnifyingGlass, ShoppingCartSimple } from "@phosphor-icons/react";
import { Categories } from "../Categories/Categories.tsx";
import { Separator } from "../ui/separator";

export function Header() {
    return (
        <div className="container bg-gray-50">
            <div className="flex justify-between pt-4 pb-4">
                <div>
                    <MagnifyingGlass size={24} />
                    <p className="hidden lg:visible">Search</p>
                </div>
                <div>
                    <p>ShopEase</p>
                </div>
                <div className="flex">
                    <ShoppingCartSimple size={24} />
                    <p className="hidden lg:visible">Cart</p>
                </div>
            </div>
            <Separator className="bg-slate-900" />
            <Categories />
        </div>
    )
}