import Image from "next/image"

import NavBarShell from "../components/navBar"
import styles from "../styles/404.module.css"
import Image404 from "../public/404.svg"
import svgImage from '../public/1ffe674.svg'

export default function Custom404() {
    return (
    <div>
        <NavBarShell placeAtRight={true}/>
        <main className={styles.main}>
            <div className={styles.Image404}>
                <Image src={Image404}/>
                <Image src={svgImage} className={styles.svgImage}/>
            </div>
        </main>
    </div>
)}