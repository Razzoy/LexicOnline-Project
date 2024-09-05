import { NavLink } from "react-router-dom";
import { BookIcon } from "../BookIcon/BookIcon";
import style from '../Navbar/Navbar.module.scss'


export function Navbar() {
    return (
        <>
            <nav className={style.navbarStyle}>
                <ul>
                    <li>
                        <NavLink style={({ isActive }) => isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' }} to={'/'}>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' }} to={'/about'}>ABOUT</NavLink>
                    </li>
                    <li>
                        <a href="https://dictionaryapi.dev/">API</a>
                    </li>
                </ul>
            </nav>
            <div className={style.book}>
                <BookIcon/>
            </div>
        </>
    )
}