import Head from "next/head"
import Link from "next/link"

import fs from "fs"
import glob from "glob-promise"
import { readDataFromFilename, listMarkdownFilesIn, listMarkdownFiles } from "../../utils/files"
import { Page, BlogList } from "../../components"

 import "tailwindcss/tailwind.css"

export const getStaticPaths = async (context) => {
  console.log("CONTEXT:", context)

  const files = await listMarkdownFiles(glob)
  console.log(files)

  const content = files.map((filename) => readDataFromFilename(filename, fs))
  console.log(content)

  const paths = content.map((entry) => ({
    params: { folder: entry.folder, name: entry.filename, ...entry },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  console.log("context:", context)

  const files = await listMarkdownFilesIn(context.params.folder, glob)
  const content = files.map((filename) => readDataFromFilename(filename, fs))
  const contentByFolder = content.reduce((acc, f) => {
    acc[f.folder] = (acc[f.folder] || []).concat(f)
    return acc
  }, {})
  console.log(contentByFolder)

  return {
    props: { entries: content, grouped: contentByFolder },
  }
}

const TopicPage = (props) => {
  return (
    <Page>
      <Head>
        <title>Blog: [Haskell]</title>
      </Head>
      <BlogList {...props} />
    </Page>
  )
}

export default TopicPage
