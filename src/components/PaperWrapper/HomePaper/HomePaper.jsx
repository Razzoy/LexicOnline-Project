import style from '../PaperWrapper.module.scss'

export function HomePaper({ wordData }) {

    console.log(wordData);


    return (
        <div className={style.homePaperStyle}>
            <header>
                <span>
                    <img src="/audioIcon.svg" alt="" />
                </span>
                {wordData ? <h2>{wordData.word}</h2> : <h2>"word"</h2>}
            </header>
            <section className={style.noun}>
                <h3>Noun:</h3>
                {wordData ? wordData?.meanings?.map((key)=> {
                    {return key.synonyms.map((syn)=> {
                        return <p key={syn}>"{syn}"</p>
                    })}
                }): <p>"nouns"</p>}
            </section>

            <section className={style.verb}>
                <h3>Verb:</h3>
                {wordData ? wordData?.meanings[1]?.definitions?.map((def)=> {
                        return <p key={def}>"{def.definition}"</p>
                    })
                : <p>"verbs"</p>}
            </section>

            <section className={style.interjection}>
                <h3>Adjective:</h3>
                {wordData ? wordData?.meanings[2]?.definitions?.map((adj)=> {
                        return <p key={adj}>"{adj.definition}"</p>
                    })
                : <p>"adjectives"</p>}
            </section>
        </div>
    )
}