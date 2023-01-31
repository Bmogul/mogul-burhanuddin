import React, { useState, useEffect } from 'react';
import styles from 'src/styles/Home.module.css'
import Cross from './Cross';

const Circle = () => {

    const [top, setTop] = useState(25);
    useEffect(() => {
        const handleScroll = () => {
          const top = ((window.pageYOffset / 100)+25)
          setTop(top);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    const positionStyle = {
        top: `${top}%`,
    }

    return (
        <div className={`${styles.circle}`} style={positionStyle}>
            {/* cross component */}
            <Cross rotateDir={1}/>
        </div>
    )
}

export default Circle;
