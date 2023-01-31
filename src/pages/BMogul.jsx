import React from 'react'
import Link from 'next/Link'
import styles from 'src/styles/Home.module.css'

const BMogul = () => {
    return (
        <div className={`${styles.myName} ${styles.myName2}`}>
            <h1>Burhanuddin Mogul</h1>
            <div className="Intro" style={{ display: "flex" }}>
                <img src="/Bmogul.jpg" alt="My Image" style={{"border-radius":"100%"}} />
                <p>Computer Science Major at <a style={{color:"rgb(170, 11, 11)"}}>NJIT</a></p> 
                {/* <div>
                    <p>Computer Science Major at <a style={{color:"rgb(170, 11, 11)"}}>NJIT</a></p>
                    <a href="https://www.linkedin.com/in/mogulburhanuddin" target="_blank">
                        <button>Linkedin</button>
                    </a><br/>
                    <a href="https://github.com/bmogul" target="_blank">
                        <button>Github</button>
                    </a><br/>
                </div> */}
            </div>
            <div>
                <p>
                Hi, my name is Burhanuddin Mogul. I'm currently studying Computer Science
                at <strong style={{color:"rgb(170, 11, 11)"}}>NJIT</strong>. I started programming around 2015 and quickly fell in love with the process
                of development and building something out of nothing.<br/>
                If you're in a rush I understand, click <a style={{color:"rgb(170, 11, 11)"}} href="#projects">here</a> to quickly get a look at some of the projects I have been working on<br/>
                Otherwise, let me tell you more about me and my journey with computer science.
                </p>
            </div>
        </div>
    )
}

export default BMogul