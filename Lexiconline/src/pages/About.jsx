import { useEffect } from "react"

export function About() {

    useEffect(() => {
        console.log("About page has been mounted");
        return () => {console.log("About page has been un-mounted");
        }
        
    }, [])
    return(
        <>
        </>
    )
}