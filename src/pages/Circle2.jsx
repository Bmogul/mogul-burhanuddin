import React, { useState, useEffect } from 'react';
import styles from 'src/styles/Home.module.css'
import Cross from './Cross';

const Circle = () => {

    return (
        <div className={styles.circle2}>
            {/* cross component */}
            <Cross rotateDir={-1}/>
        </div>
    )
}

export default Circle;
