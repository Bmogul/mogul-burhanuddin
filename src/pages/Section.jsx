import React from 'react'
import styles from 'src/styles/Home.module.css'

const Section = ({title, image, video, content}) => {
    return (
        <div className={`${styles.myName} ${styles.section}`}>
            <h1>{title}</h1>
            <div style={{ display: "flex" }}>
            {image && <img src={image} alt="My Image" id="normImg" />}
            <p>{content}
            </p>
            {/* <video src='/googleSearch.mp4' loop autoPlay /> */}
            </div>
        </div>
    )
}

export default Section