"use client"
import styles from './imagecontainer.module.css'
import React from 'react'
import Imagecard from '../imagecard/imagecard'

const imagecontainer = () => {
  return (
    <section className={styles.container}>
        <Imagecard label={"Strength"} imageurl={"/Images/dumbelle.jpg"}/>
        <Imagecard label={"Mobility"} imageurl={"/Images/yoga4.jpg"}/>
        <Imagecard label={"Drills"} imageurl={"/Images/sunrise3.jpg"}/>
      
    </section>
  )
}

export default imagecontainer
