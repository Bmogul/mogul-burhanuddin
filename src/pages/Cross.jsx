import React, {useState, useEffect} from 'react'
import styles from 'src/styles/Home.module.css'

const Cross = () => {
    const [rotation1, setRotation1] = useState(45);
    const [rotation2, setRotation2] = useState(180);
    const [color, setColor] = useState("red");
    useEffect(() => {
        const handleScroll = () => {
          // calculate the rotation based on the current scroll position
          const rotation1 = window.pageYOffset / 10;
          const rotation2 = window.pageYOffset / 10 + 135 ;
          setRotation1(rotation1);
          setRotation2(rotation2);

        };
        window.addEventListener('scroll', handleScroll);
      
        // remove the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    const crossStyle = {
        transform: `rotate(${rotation1}deg)`
    }
    const crossStyle2 = {
        transform: `rotate(${rotation2}deg)`
    }        
    return (
        <div >
            <div className={styles.crossHorizontal} style={crossStyle}></div>
            <div className={styles.crossVertical} style={crossStyle2}></div>
        </div>
    )
}

export default Cross
