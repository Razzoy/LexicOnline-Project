import React, { useState } from 'react'
import style from './CookieBanner.module.scss'
import ReactGA from "react-ga4";

export function CookieBanner() {

    const [withTracking, setWithTracking] = useState(false);
    const [hasUserCookie, setHasUserCookie] = useState(false);

    if (withTracking === true) {
        ReactGA.initialize('G-5NFTF5064C')
    }

    function enableGA() {
        setWithTracking(true)
        setHasUserCookie(false);
        localStorage.setItem('userAccept', true)
    }
    function disableGA() {
        setWithTracking(false)
        setHasUserCookie(true);
        localStorage.setItem('userAccept', false)
    }

    const hasUserAccepted = localStorage.getItem('userAccept');

    return (
        !hasUserCookie === false &&
        hasUserAccepted === null(
            <div className={style.cookie_banner}>
                <section>
                    <p>This site uses cookies for tracking purposes. We encourage you to accept this!</p>
                </section>
                <section>
                    <button onClick={disableGA}>DENY</button>
                    <button onClick={enableGA}>ACCEPT</button>
                </section>
            </div>
        )
    )
}
