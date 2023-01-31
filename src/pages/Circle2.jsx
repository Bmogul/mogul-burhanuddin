import React, { useState, useEffect } from 'react';
import styles from 'src/styles/Home.module.css'
import Cross from './Cross';

const Circle2 = () => {
    const [top, setTop] = useState(80);
    const [width, setWidth] = useState((400*5))
    useEffect(() => {
        const handleScroll = () => {
          const top = (((window.pageYOffset)*-1 / 100)+80)
          setTop(top);
        };
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize)
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener(`resize`, handleResize)
        };
      }, []);
      const positionStyle = {
        top: `${top}%`,
        width: `${width / 5}px`,
        height: `${width / 5}px`
    }
    return (
        <div className={styles.circle2} style={positionStyle}>
            {/* cross component */}
            <Cross rotateDir={-1}/>
        </div>
    )
}

export default Circle2;
