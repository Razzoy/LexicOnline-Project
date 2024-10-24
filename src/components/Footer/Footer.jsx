import style from './Footer.module.scss'
import { BookIcon } from '../BookIcon/BookIcon'

export function Footer() {
    return (
        <>
            <div className={style.footerStyle}>
                <div className={style.listContainer}>
                    <ul>
                        <li>Address:</li>
                        <li>Somestreet 232</li>
                        <li>Luxemborg</li>
                    </ul>
                    <ul>
                        <li>Contact:</li>
                        <li>Email: somemail@mail.com</li>
                        <li>Phone: 44332343</li>
                    </ul>
                    <ul>
                        <li>With special thanks to:</li>
                        <li>https://dictionaryapi.dev/</li>
                        <li>for the awesome API</li>
                    </ul>
                </div>
                <div className={style.brandContainer}>
                    <BookIcon/>
                    <h2>Lexiconline</h2>
                </div>
            </div>
        </>
    )
}