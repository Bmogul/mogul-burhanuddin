import React from 'react'
import styles from 'src/styles/Home.module.css'

const TheStart = () => {
    return (
        <div className={`${styles.myName} ${styles.section}`}>
            <h1>How it all started</h1>
            <div style={{ display: "flex" }}>
            <p>
                I started learning about computer science back in my final year of Middle School. I was an
                avid gamer and remember spending way too much time playing Minecraft (don't get me wrong I still love the game).
                After the vanilla game got repetive I started installing mods to spice up the 
                game. After some time I became curious about how these mods were even created.
                I remember that I also wanted to know how people create websites and games in general so I decided to simply do a google
                search "How to code".
            </p>
            <video src='/googleSearch.mp4' loop autoPlay />
            </div>
        </div>
    )
}

export default TheStart