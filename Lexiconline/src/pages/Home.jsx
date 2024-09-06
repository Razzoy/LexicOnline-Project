import { useEffect, useState } from "react"
import { SearchBox } from "../components/SearchBox/SearchBox";
import { PaperWrapper } from "../components/PaperWrapper/PaperWrapper";
import { HomePaper } from "../components/PaperWrapper/HomePaper/HomePaper";

export function Home() {
    const [wordData, setWordData] = useState();


    useEffect(() => {
        console.log("Home page has been mounted");
        return () => {
            console.log("Home page has been un-mounted");
        }

    }, [])


    return (
        <>
            <SearchBox title={'Enter a word to search for'} setWordData={setWordData}/>
            <PaperWrapper>
                <HomePaper wordData={wordData}/>
            </PaperWrapper>
        </>
    )
}