import { useEffect } from "react"
import { SearchBox } from "../components/SearchBox/SearchBox";
import { PaperWrapper } from "../components/PaperWrapper/PaperWrapper";

export function About() {

    useEffect(() => {
        console.log("About page has been mounted");
        return () => {console.log("About page has been un-mounted");
        }
        
    }, [])
    return(
        <>
        <SearchBox title={'About Lexiconline'} hidden='hideSearchBar'>

        </SearchBox>
        <PaperWrapper/>
        </>
    )
}