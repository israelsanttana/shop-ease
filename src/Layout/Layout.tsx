import { ReactNode } from "react";
import { Header } from "../components/Header/Header";

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col justify-between h-screen">
            <Header />
            <main>
                {children}
            </main>
            <footer className="flex justify-center items-center h-8 bg-slate-900 text-white">
                <p> © 2024 ShopEase, Inc.</p>
            </footer>
        </div>
    )
}