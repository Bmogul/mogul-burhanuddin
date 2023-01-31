import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from 'src/styles/Home.module.css'
import InfiniteScroll from 'react-infinite-scroller'
import {scroll} from 'react-scroll'

import Circle from './Circle'
import Circle2 from './Circle2'
import BMogul from './BMogul'
import TheStart from './TheStart'
import { useEffect, useState } from 'react'
import FirstClass from './FirstClass'
import Section from './Section'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [opacity, setOpacity] = useState(0)
  useEffect(()=>{
    setOpacity(1)
  }, [])

  return (
    <>
      <Head>
        <title>Burhanuddin Mogul</title>
        <meta name="description" content="Personal Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} style={{opacity:opacity, transition: 'opacity 1s ease-in-out'}}>
      <Circle />
      <Circle2/>
      {/* <div style={{opacity:opacity, transition: 'opacity 1s ease-in-out'}}> */}
      <BMogul />
      {/* </div> */}
      <TheStart/>
      <FirstClass/>
      <Section
      title={"End Of Highschool"}
      content={"Looking back at my highschool experience I am very greatful. I was lucky enough to attend a school with"+
      "a great CS ciriculum. After taking AP CS I took Andorid Development in my junior year."+
      "In my senior year I was able to take two CS classes. One being a basic Data Structures and Algorithms class (Which was highly"+
      " helpful when I had to take this course at college). Another being a VR development and Game design"+
      " class. All three of these classes taught me many crucial skills which has helped me greatly to this day."+
      " I learned how to read documentation and do my own research. For example when I would get stuck trying to get a bowling ball"+
      " to roll in the desired direction and not have the POV roll (VR was quite the experince). All the "+
      "skills I learned in those 4 years have helped me greatly, from the theory to the practical uses."}
      image={"/android.png"}/>
      {/* </div> */}

    </main>
    </>
  )
}
`=`