import React from 'react'
import Head from 'next/head'

import { getPageTitle, getAllPagesInSpace } from 'notion-utils'
import { NotionAPI } from 'notion-client'
import { Code, Collection, CollectionRow, NotionRenderer } from 'react-notion-x'

import NavBarShell from '../components/navBar'
import styles from '../styles/pageId.module.css'

const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

const notion = new NotionAPI()

export const getStaticProps = async (context) => {
  console.log(context.params.pageId)
  const pageId = context.params.pageId
  // const pageId = "384ea8133ba6408686d5b58e4f4667f6"
  const recordMap = await notion.getPage(pageId)
  // console.log(recordMap)

  return {
    props: {
      recordMap
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  if (isDev) {
    return {
      paths: [],
      fallback: true
    }
  }

  const rootNotionPageId = '067dd719a912471ea9a3ac10710e7fdf'
  const rootNotionSpaceId = 'fde5ac74-eea3-4527-8f00-4482710e1af3'
  console.log('hello')
  // This crawls all public pages starting from the given root page in order
  // for next.js to pre-generate all pages via static site generation (SSG).
  // This is a useful optimization but not necessary; you could just as easily
  // set paths to an empty array to not pre-generate any pages at build time.
  const pages = await getAllPagesInSpace(
    rootNotionPageId,
    rootNotionSpaceId,
    notion.getPage.bind(notion),
    {
      traverseCollections: false
    }
  )

  const paths = Object.keys(pages).map((pageId) => `/${pageId}`)

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
  console.log(title, recordMap)

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
      //   components={{
      //     code: Code,
      //     collection: Collection,
      //     collectionRow: CollectionRow
      //  }}
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
