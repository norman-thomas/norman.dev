import Head from "next/head"
import Link from "next/link"

import fs from "fs"
import glob from "glob-promise"
import {
  readDataFromFilename,
  listMarkdownFilesIn,
  listMarkdownFiles,
} from "../../utils/files"
import { sorter } from "../../utils/sorter"
import { Page, Menu, Hero, ItemList } from "../../components"

export const getStaticPaths = async (context) => {
  console.log("CONTEXT:", context)

  const files = await listMarkdownFiles(glob)
  const content = files.map((filename) => readDataFromFilename(filename, fs))
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
  const content = files
    .map((filename) => readDataFromFilename(filename, fs))
    .sort(sorter)
  content.map((entry) => {
    entry.date = entry.createdAt
    entry.link = `/blog/${entry.folder}/${entry.filename}`
  })
  const contentByFolder = content.reduce((acc, f) => {
    acc[f.folder] = (acc[f.folder] || []).concat(f)
    return acc
  }, {})

  return {
    props: {
      items: content,
      title: context.params.folder,
      grouped: contentByFolder,
    },
  }
}

const TopicPage = ({ title, ...props }) => {
  return (
    <Page>
      <Head>
        <title>{title} | norman.dev</title>
      </Head>
      <Menu />
      <Hero title={title} />
      <article>
        <ItemList {...props} />
      </article>
    </Page>
  )
}

export default TopicPage
