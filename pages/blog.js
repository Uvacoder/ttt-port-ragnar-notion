import Image from "next/image";
import useSWR from "swr";

import NavBarShell from "../components/navBar";
import styles from "../styles/Blog.module.css";
import svgImage from "../public/1ffe674.svg";
import fetcher from "../utils/fetcher";
import BlogPostShell from "../components/blogPostShell";
import Loader from "../components/loader";

export default function Home() {
  const { data } = useSWR("/api/getAllPosts", fetcher);

  return (
    <div>
      <NavBarShell placeAtRight={true} isActive={true} />
      <main className={styles.main}>
        <div className={styles.titleBox}>
          <p className={styles.titleBlog}>
            My <span>Blog.</span>
          </p>
          <div className={styles.svgImage}>
            <Image src={svgImage} layout="fixed" />
          </div>
        </div>
        {!data && <Loader />}
        {data?.map((val) => (
          <div className={styles.globalMargin} key={Object.keys(val)[0]}>
            <section className={styles.postGroup}>
              <div className={styles.postYear}>
                <div className={styles.sticky}>{Object.keys(val)[0]}</div>
              </div>
              <div className={styles.postPreviews}>
                {val[Object.keys(val)[0]]?.map((blog) => (
                  <BlogPostShell
                    key={blog.title}
                    title={blog.title}
                    subtitle={blog.subtitle}
                    tags={blog.tags}
                    url={blog.url}
                  />
                ))}
              </div>
            </section>
          </div>
        ))}
      </main>
    </div>
  );
}
