import { useEffect } from "react"
import { SearchBox } from "../components/SearchBox/SearchBox";
import { PaperWrapper } from "../components/PaperWrapper/PaperWrapper";
import { AboutPaper } from "../components/PaperWrapper/AboutPaper/AboutPaper";

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
        <PaperWrapper>
            <AboutPaper/>
        </PaperWrapper>
        </>
    )
}