import React from 'react'
import styles from 'src/styles/Home.module.css'

const About = () => {
    return (
        <div className={`${styles.myName} ${styles.section}`}>
            <h1>So who am I?</h1>
            <div style={{ display: "flex" }}>
            <p>
                Hi, my name is Burhanuddin Mogul. I'm currently studying Computer Science at
                NJIT. I started learning about computer science back in my final year of Middle School.
                I remember that I wanted to know how people create websites and games and all the other
                amazing software that I interact with on a daily basis. So I decided to simply do a google
                search "How to code" and the rest was history. 
            </p>
            <video src='/googleSearch.mp4' loop autoPlay />
            </div>
        </div>
    )
}

export default About