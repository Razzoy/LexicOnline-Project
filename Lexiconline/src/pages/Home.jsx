import { useEffect } from "react"
import { SearchBox } from "../components/SearchBox/SearchBox";
import { PaperWrapper } from "../components/PaperWrapper/PaperWrapper";

export function Home() {
    useEffect(() => {
        console.log("Home page has been mounted");
        return () => {
            console.log("Home page has been un-mounted");
        }

    }, [])


    return (
        <>
            <SearchBox title={'Enter a word to search for'}/>
            <PaperWrapper/>
        </>
    )
}