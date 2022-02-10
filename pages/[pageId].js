import React from 'react'
import Head from 'next/head'

import { getPageTitle, getAllPagesInSpace } from 'notion-utils'
import { NotionAPI } from 'notion-client'
import { Code, Collection, CollectionRow, NotionRenderer } from 'react-notion-x'

import NavBarShell from '../components/navBar'
import styles from '../styles/pageId.module.css'
import { getAllPostsHelper } from '../utils/getAllPostsHelper'

const notion = new NotionAPI()

export const getStaticProps = async (context) => {
  const pageId = context.params.pageId
  const recordMap = await notion.getPage(pageId)

  return {
    props: {
      recordMap
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  const posts = await getAllPostsHelper()
  const paths = posts.map((post) => ("/" + post.url))
  console.log(paths);

  return {
    paths,
    fallback: true
  }
}

export default function NotionPage({ recordMap }) {
  if (!recordMap) {
    return null
  }

  const title = getPageTitle(recordMap)

  return (
    <main style={{paddingTop: "200px", fontFamily: 'Cardo !important'}}>
      <Head>
        <meta name='description' content='React Notion X demo renderer.' />
        <title>{title}</title>
      </Head>
      <NavBarShell placeAtRight={true}/>

      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={true}
        customImages={true}
        disableHeader={true}
        rootDomain='localhost:3000' // used to detect root domain links and open this in the same tab
        className={styles.notionRen}
        components={{
          code: Code,
          image: ({
            src,
            alt,

            height,
            width,

            className,
            style,
            loading,
            decoding,
            
            ref,
            onLoad
          }) => (
            <img
            className={className}
            style={style}
            src={src}
            ref={ref}
            width={width}
            height={height}
            loading='lazy'
            alt={alt}
            decoding='async'
          />
          ),
          collection: Collection,
          collectionRow: CollectionRow
        }}
      />
    </main>
  )
}
