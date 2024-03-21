import { MagnifyingGlass, ShoppingCartSimple } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Categories } from "../Categories/Categories";
import { Separator } from "../ui/separator";

export function Header() {
    return (
        <div className="container bg-gray-50">
            <div className="flex justify-between pt-4 pb-4">
                <div>
                    <MagnifyingGlass size={24} />
                </div>
                <div>
                    <Link to="/" >
                        <p>ShopEase</p>
                    </Link>
                </div>
                <div className="flex">
                    <Link to="/cart" >
                        <ShoppingCartSimple size={24} />
                    </Link>
                </div>
            </div>
            <Separator className="bg-slate-900" />
            <Categories />
        </div>
    )
}