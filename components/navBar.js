import Link from "next/link";

import styles from "../styles/NavBar.module.css";

// Props:
// 1. placeAtRight: to place the entire component at the right side, if true. Default: false.

const NavBarShell = (props) => {
  const positioning = props.placeAtRight ? styles.navRight : styles.navLeft;
  const activeStyles = props.isActive ? styles.activePage : null;

  return (
    <nav>
      {props.placeAtRight && (
        <Link href="/">
          <p className={styles.goToHomePage}>
            <span>Hasir</span> Mushtaq.
          </p>
        </Link>
      )}
      <div className={`${styles.nav} ${positioning}`}>
        <Link href="/blog">
          <p className={`${styles.highlight} ${activeStyles}`}>Blog</p>
        </Link>
        <p className={styles.highlight}>
          <a href="https://github.com/ragnar48h">GitHub</a>
        </p>
        <p className={styles.highlight}>
          <a href="mailto:hasir.mushtaq48@gmail.com">Email</a>
        </p>
      </div>
    </nav>
  );
};

export default NavBarShell;
