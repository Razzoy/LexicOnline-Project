import { useEffect } from "react"

export function Home() {

    useEffect(() => {
        console.log("Home page has been mounted");
        return () => {
            console.log("Home page has been un-mounted");
        }

    }, [])

    return (
        <>
            
        </>
    )
}