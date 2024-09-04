import { Outlet } from "react-router-dom";
import style from './MainLayout.module.scss'
import { Navbar } from "../components/Navbar/Navbar";

export function MainLayout() {
    return (
        <>
            <Navbar/>
            <main className={style.mainStyle}>
                <Outlet />
            </main>
        </>
    )
}