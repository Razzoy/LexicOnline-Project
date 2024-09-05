import style from '../BookIcon/BookIcon.module.scss'

export function BookIcon() {
    return (
        <div className={style.book}>
            <span>
                <img src="../src/assets/bookIcon.svg" alt="Book" />
            </span>
        </div>
    )
}