import { Outlet } from "react-router-dom";
import style from './MainLayout.module.scss'

import { Header } from "../components/Header/Header";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { CookieBanner } from "../components/CookieBanner/CookieBanner";

export function MainLayout() {
    return (
        <>
            <Navbar/>
            <Header/>
            <main className={style.mainStyle}>
                <Outlet />
            </main>
            <Footer/>

            <CookieBanner/>
        </>
    )
}