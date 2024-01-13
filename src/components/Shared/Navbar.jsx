import Link from "next/link"
import styles from '@/ModuleStyles/navbar.module.css'
import { Cinzel } from "@/utilities/Font"

import LoginSignOut from "./LoginSignOut"

function Navbar() {
    return (
        <>
            <div
                className={`grid grid-cols-1 sm:grid-cols-2 justify-items-center p-2 ${styles.bg} ${styles.color} `}>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 md:mt-0 mt-4">
                    <p className="text-center md:text-left">+123 456 7890</p>
                    <Link className="transition duration-150 hover:text-white ease-in text-center md:text-left" href="mailto:roddy3889@gmail.com">roddy3889@gmail.com</Link>
                </div>
                <div
                    className="grid grid-cols-3 text-center md:text-left md:mt-0 mt-4">
                    <p className={`mr-5`}>US Dollar</p>
                    <LoginSignOut />
                </div>
            </div>
            <div
                className="grid grid-cols-1 md:grid-cols-2 justify-items-stretch p-4">
                <div
                    className="justify-self-center ">
                    <p className={`text-2xl md:text-4xl xl:text-5xl ${Cinzel.className}`}>Ford <strong>Mustang</strong> Lover</p>
                </div>
                <div
                    className="justify-self-center xl:justify-self-start md:mt-0 mt-4">
                    <input className={`${styles.input} rounded-l-md`} type="text"
                        placeholder="Search a model of Mustang..." />
                    <button className={`${styles.btn} rounded-r-md`}><span>Search</span></button>
                </div>
            </div>
            <div className={`${styles.linkBox} ${Cinzel.className} text-sm md:text-lg grid grid-cols-4 justify-items-start p-1 py-3 ${styles.bg} ${styles.color} `}>
                <Link className="ml-4" href="/"><span>Home</span></Link>
                <Link href="/cars"><span>Cars</span></Link>
                <Link href="/about"><span>About Us</span></Link>
                <Link href="/contact"><span>Contact Us</span></Link>
            </div>
        </>
    )
}

export default Navbar