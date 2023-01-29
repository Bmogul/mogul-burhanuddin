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


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const [scrollPosition, setScrollPosition] = useState(0)
  // useEffect(() =>{
  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])
  // const handleScroll = () => {
  //   setScrollPosition(window.pageYOffset)
  //   if(window.innerHeight + window.pageYOffset >= document.body.offsetHeight)
  //     scroll.scrollToTop()
  // }
  return (
    <>
      <Head>
        <title>Burhanuddin Mogul</title>
        <meta name="description" content="Personal Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Circle />
      <Circle2/>
      <BMogul />
      <TheStart/>
      <FirstClass/>

    </main>
    </>
  )
}
