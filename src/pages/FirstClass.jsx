import React from 'react'
import styles from 'src/styles/Home.module.css'

const FirstClass = () => {
    return (
        <div className={`${styles.myName} ${styles.section}`}>
            <h1>The Highschool track</h1>
            <div style={{ display: "flex" }}>
            <p>
                Unfortunantly I never got to the point of developing my own mod.
                I started Highschool and took an introductory computer science class.
                In that class I formally learned my first language Java (JS was technically the first language I learned).
                Throughout the year we learned basic concepts of programming and got to the point where we would
                be able to start learning Object Oriented Programming. <br/>
                I took AP Computer Science in 10th Grade and spent most of the year
                learning OOP and worked on some simple projects (RPG word based dungeon game was my favorite).
            </p>
            {/* <video src='/googleSearch.mp4' loop autoPlay /> */}
            </div>
        </div>
    )
}

export default FirstClass