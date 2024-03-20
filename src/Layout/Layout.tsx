import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header.tsx";

export function Layout() {
    return (
        <div className="flex flex-col">
            <Header />
            <main>
                <Outlet />
            </main>
            <footer className="flex justify-center items-center h-8 bg-slate-900 text-white">
                <p> © 2024 ShopEase, Inc.</p>
            </footer>
        </div>
    )
}