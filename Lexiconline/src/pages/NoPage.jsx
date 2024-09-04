import { useEffect } from "react"

export function NoPage() {

    useEffect(() => {
        console.log("NoPage has been mounted");
        return () => {console.log("NoPage has been un-mounted");
        }
        
    }, [])

    return(
        <>
        <h1>Error 404!.. Page was not found</h1>
        </>
    )
}