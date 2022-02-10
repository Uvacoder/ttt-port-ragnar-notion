import Link from "next/link"

import styles from '../styles/Blog.module.css'

const BlogPostShell = (props) => {
    // console.log(props.url)
return( 
    <div key={props.title}>
        <Link href={props.url}>
            <div className={styles.postPreviewLink}>
                <p className={styles.title}>{props.title}</p>
                <div className={styles.subtitle}>{props.subtitle}</div>
            </div>
        </Link>
        <div className={styles.tagsList}>
            {props.tags.map((tag) => (
                <span key={tag} className={styles.tags}>{tag}</span>
            ))}
        </div>
    </div>
)}

export default BlogPostShell
