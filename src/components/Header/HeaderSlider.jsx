'use client';

import Image from "next/image"

import { Carousel } from 'flowbite-react';

import styles from '@/ModuleStyles/header.module.css'
import imgSrc from "@/data/imgSrc";

function HeaderSlider() {
    return (
        <div className={`sm:p-1 ${styles.bg}`}>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel slideInterval={2500} leftControl=" " rightControl=" " indicators={false} >
                    {
                        imgSrc.map((info, i) => (
                            <Image priority={info.priority} key={i} className={`${styles.img}`} src={info.src} alt={info.alt} width={1302} height={534} />
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default HeaderSlider