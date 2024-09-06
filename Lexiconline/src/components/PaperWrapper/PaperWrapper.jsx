import style from '../PaperWrapper/PaperWrapper.module.scss'

export function PaperWrapper ({children}){
    return (
        <>
        <div className={style.paperWrapperStyle}>
            {children}
        </div>
        </>
    )
}