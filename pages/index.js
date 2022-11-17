import Head from "next/head";
import Image from "next/image";

import Image1 from "../public/image1.png";
import NavBarShell from "../components/navBar";
import styles from "../styles/Home.module.css";
import svgImage from "../public/1ffe674.svg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hasir Mushtaq</title>
        <meta name="description" content="Hi, I'm Hasir Mushtaq." />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBarShell />
        <div className={styles.mainImage}>
          <Image src={Image1} layout="fill" />
        </div>
        <div className={styles.textBox}>
          <p>Hi, I&apos;m</p>
          <p className={styles.title}>
            <span>HASIR</span> MUSHTAQ.
          </p>
          <div className={styles.svgImage}>
            <Image src={svgImage} layout="fixed" />
          </div>
          <div className={styles.contentBox}>
            <p>
              I was born and raised in <span>Jammu & Kashmir, India.</span>
            </p>
            <br />
            <p>
              I&apos;m currently a <span>Software Engineer </span>
              at
              <span> Oracle.</span>
            </p>
            <p>I&apos;ve studied at the</p>
            <p>
              <span>
                International Institute of Information Technology, Hyderabad.
              </span>
            </p>
            <p>
              I&apos;m interested in{" "}
              <span>Programming, Design, “the Creative Process”,</span>
            </p>
            <p>
              (so to speak) and... basically
              <span> anything that captivates my curiosity.</span>
            </p>
            <br />
            <p>
              <span>
                I am always excited to explore new territories,
                <br /> so feel free to drop a message.
              </span>
            </p>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerText}>
            <p>Simplicity is the</p>
            <p style={{ marginLeft: "55px" }}>ultimate sophistication.</p>
          </div>
          <div className={styles.line} />
        </div>
      </main>
    </div>
  );
}
