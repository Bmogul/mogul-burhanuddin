import React, { useState, useEffect } from 'react';
import styles from 'src/styles/Home.module.css'
import Cross from './Cross';

const Circle2 = () => {
    const [top, setTop] = useState(80);
    useEffect(() => {
        const handleScroll = () => {
          // calculate the rotation based on the current scroll position
          const top = (((window.pageYOffset)*-1 / 100)+80)
          setTop(top);
        };
        window.addEventListener('scroll', handleScroll);
      
        // remove the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    const positionStyle = {
        top: `${top}%`
    }
    return (
        <div className={styles.circle2} style={positionStyle}>
            {/* cross component */}
            <Cross rotateDir={-1}/>
        </div>
    )
}

export default Circle2;
