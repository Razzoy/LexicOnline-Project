import { useState } from 'react';
import style from '../SearchBox/SearchBox.module.scss'


export function SearchBox({ title , hidden }) {

    const [inputValue, setInputValue] = useState('');
    const [wordData, setWordData] = useState(null);


    const wordChange = (e) => {
        setInputValue(e.target.value);
    };


    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
    async function fetchWord() {
        if (!inputValue.trim()) return;

        let res = await fetch(url)
        let data = await res.json()
        setWordData(data);
        console.log(data);

    }
    return (
        <div className={style.searchBoxStyle}>
            <h2>{title}</h2>
            <div className={`${style[hidden]} ${style.searchContainer}`}>
                <input type="text" value={inputValue} onChange={wordChange} placeholder="Write a word" />
                <button onClick={() => fetchWord()}>Search</button>
            </div>
        </div>
    )
}