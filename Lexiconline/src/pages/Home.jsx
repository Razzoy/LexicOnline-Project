import { useEffect, useState } from "react"

export function Home() {
    useEffect(() => {
        console.log("Home page has been mounted");
        return () => {
            console.log("Home page has been un-mounted");
        }

    }, [])

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
        <>
            <input type="text" value={inputValue} onChange={wordChange} placeholder="Write a word"/>
            <button onClick={() => fetchWord()}>Get Your Word!!</button>

        </>
    )
}