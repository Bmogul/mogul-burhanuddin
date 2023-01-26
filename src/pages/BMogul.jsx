import React from 'react'
import Link from 'next/Link'
import styles from 'src/styles/Home.module.css'

const BMogul = () => {
    return (
        <div className={`${styles.myName} ${styles.section}`}>
            <h1>Burhanuddin Mogul</h1>
            <div style={{ display: "flex" }}>
                <img src="/Bmogul.jpg" alt="My Image" style={{}} />
                <div>
                    <p>Computer Science Major at NJIT</p>
                    <a href="https://www.linkedin.com/in/mogulburhanuddin" target="_blank">
                        <button>Linkedin</button>
                    </a><br/>
                    <a href="https://github.com/bmogul" target="_blank">
                        <button>Github</button>
                    </a><br/>
                </div>
            </div>
        </div>
    )
}

export default BMogul