"use client"
import styles from "./imagecard.module.css"
import React from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Image from 'next/image'

const imagecard = ({label,imageurl}) => {
  return (
    <div className={styles.imageContainer}>
        <div className={styles.label}>
          <h4>{label}</h4>
          <p className={styles.icons}> <IoIosArrowDroprightCircle/></p>
        </div>
        <Image src={imageurl} alt={label}  layout="fill"  
          objectFit="cover"/>
      </div>
  )
}

export default imagecard
