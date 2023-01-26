import React, { useState, useEffect } from 'react';
import styles from 'src/styles/Home.module.css'
import Cross from './Cross';

const Circle = () => {
    const [rotation, setRotation] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
          // calculate the rotation based on the current scroll position
          const rotation = window.pageYOffset / 10;
          setRotation(rotation);
        };
        window.addEventListener('scroll', handleScroll);
      
        // remove the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    const crossStyle = {
        transform: `rotate(${rotation}deg)`
    }      

    return (
        <div className={styles.circle}>
            {/* cross component */}
            <Cross/>
        </div>
    )
}

export default Circle;
