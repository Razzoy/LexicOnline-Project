import { NavLink } from "react-router-dom";
import style from '../Navbar/Navbar.module.scss'


export function Navbar() {
    return (
        <nav className={style.navbarStyle}>
            <ul>
                <li>
                    <NavLink style={({ isActive }) => isActive ? { color: 'black' } : { color: 'White' }} to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink style={({ isActive }) => isActive ? { color: 'black' } : { color: 'White' }} to={'/about'}>About</NavLink>
                </li>

            </ul>
        </nav>
    )
}