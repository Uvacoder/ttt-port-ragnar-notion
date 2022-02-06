import Image from 'next/image'
import Link from "next/link"

import NavBarShell from '../components/navBar'
import styles from '../styles/Blog.module.css'
import svgImage from '../public/1ffe674.svg'


export default function Home() {
  return (
    <div>
        <NavBarShell placeAtRight={true}/>
        <main className={styles.main}>
            <div className={styles.titleBox}>
                <p className={styles.title}>My <span>Blog.</span></p>
                <div className={styles.svgImage}>
                    <Image src={svgImage} layout='fixed'/>
                </div>
            </div>
            <div className={styles.globalMargin}>
                <section className={styles.postGroup}>
                    <div className={styles.postYear}>
                        <div className={styles.sticky}>2022</div>
                    </div>
                    <div className={styles.postPreviews}>
                        <div>
                            <Link href="/blog/how-the-notion-api-powers-my-blog">
                                <div className={styles.postPreviewLink}>
                                    <h2 className={styles.title}>How the Notion API Powers My Blog</h2>
                                    <div className={styles.subtitle}>Publishing blog posts directly from a Notion database.</div>
                                </div>
                            </Link>
                            <div className={styles.tagsList}>
                                <span className={styles.tags}>Engineering</span>
                                <span className={styles.tags}>Rust</span>
                            </div>
                        </div>
                        <div>
                            <Link href="/blog/detecting-dark-mode-with-react-hooks">
                                <div className={styles.postPreviewLink}>
                                    <h2 className={styles.title}>Detecting Dark Mode With React Hooks</h2>
                                    <div className={styles.subtitle}>Keep your JavaScript and media queries in sync.</div>
                                </div>
                            </Link>
                            <div className={styles.tagsList}>
                                <span className={styles.tags}>Engineering</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className={styles.globalMargin}>
                <section className={styles.postGroup}>
                    <div className={styles.postYear}>
                        <div className={styles.sticky}>2022</div>
                    </div>
                    <div className={styles.postPreviews}>
                        <div>
                            <Link href="/blog/how-the-notion-api-powers-my-blog">
                                <div className={styles.postPreviewLink}>
                                    <h2 className={styles.title}>How the Notion API Powers My Blog</h2>
                                    <div className={styles.subtitle}>Publishing blog posts directly from a Notion database.</div>
                                </div>
                            </Link>
                            <div className={styles.tagsList}>
                                <span className={styles.tags}>Engineering</span>
                                <span className={styles.tags}>Rust</span>
                            </div>
                        </div>
                        <div>
                            <Link href="/blog/detecting-dark-mode-with-react-hooks">
                                <div className={styles.postPreviewLink}>
                                    <h2 className={styles.title}>Detecting Dark Mode With React Hooks</h2>
                                    <div className={styles.subtitle}>Keep your JavaScript and media queries in sync.</div>
                                </div>
                            </Link>
                            <div className={styles.tagsList}>
                                <span className={styles.tags}>Engineering</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className={styles.globalMargin}>
                <section className={styles.postGroup}>
                    <div className={styles.postYear}>
                        <div className={styles.sticky}>2022</div>
                    </div>
                    <div className={styles.postPreviews}>
                        <div>
                            <Link href="/blog/how-the-notion-api-powers-my-blog">
                                <div className={styles.postPreviewLink}>
                                    <h2 className={styles.title}>How the Notion API Powers My Blog</h2>
                                    <div className={styles.subtitle}>Publishing blog posts directly from a Notion database.</div>
                                </div>
                            </Link>
                            <div className={styles.tagsList}>
                                <span className={styles.tags}>Engineering</span>
                                <span className={styles.tags}>Rust</span>
                            </div>
                        </div>
                        <div>
                            <Link href="/blog/detecting-dark-mode-with-react-hooks">
                                <div className={styles.postPreviewLink}>
                                    <h2 className={styles.title}>Detecting Dark Mode With React Hooks</h2>
                                    <div className={styles.subtitle}>Keep your JavaScript and media queries in sync.</div>
                                </div>
                            </Link>
                            <div className={styles.tagsList}>
                                <span className={styles.tags}>Engineering</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className={styles.globalMargin}>
                <section className={styles.postGroup}>
                    <div className={styles.postYear}>
                        <div className={styles.sticky}>2022</div>
                    </div>
                    <div className={styles.postPreviews}>
                        <div>
                            <Link href="/blog/how-the-notion-api-powers-my-blog">
                                <div className={styles.postPreviewLink}>
                                    <h2 className={styles.title}>How the Notion API Powers My Blog</h2>
                                    <div className={styles.subtitle}>Publishing blog posts directly from a Notion database.</div>
                                </div>
                            </Link>
                            <div className={styles.tagsList}>
                                <span className={styles.tags}>Engineering</span>
                                <span className={styles.tags}>Rust</span>
                            </div>
                        </div>
                        <div>
                            <Link href="/blog/detecting-dark-mode-with-react-hooks">
                                <div className={styles.postPreviewLink}>
                                    <h2 className={styles.title}>Detecting Dark Mode With React Hooks</h2>
                                    <div className={styles.subtitle}>Keep your JavaScript and media queries in sync.</div>
                                </div>
                            </Link>
                            <div className={styles.tagsList}>
                                <span className={styles.tags}>Engineering</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </div>
  )
}
