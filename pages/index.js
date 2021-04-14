import Head from "next/head"

import fs from "fs"
import glob from "glob-promise"
import { readDataFromFilename, listMarkdownFiles } from "../utils/files"
import { Page, Menu, Hero, ItemList, BlogList, Footer } from "../components"

export const getStaticProps = async () => {
  const files = await listMarkdownFiles(glob)
  const content = files
    .map((filename) => readDataFromFilename(filename, fs))
    .sort((a, b) => (a.fileTimestamp > b.fileTimestamp ? -1 : 1))
  content.map((entry) => {
    entry.date = entry.createdAt
    entry.link = `/blog/${entry.folder}/${entry.filename}`
  })
  const contentByFolder = content.reduce((acc, f) => {
    acc[f.folder] = (acc[f.folder] || []).concat(f)
    return acc
  }, {})
  console.log(contentByFolder)

  const topics = Object.keys(contentByFolder).map(topic => ({
    title: `${topic} (${contentByFolder[topic].length})`,
    link: `/blog/${topic}`,
  }))

  return {
    props: { items: content, grouped: contentByFolder, topics },
  }
}

const StartPage = ({ topics, ...props }) => {
  return (
    <Page>
      <Head>
        <title>norman.dev</title>
      </Head>
      <div>
        <Menu />
        <Hero title="norman.dev" />
        <article>
          <ItemList title="Topics" items={topics} />
          <ItemList title="Latest Articles" {...props} maxCount={9} />
        </article>
        <Footer />
      </div>
    </Page>
  )
}

export default StartPage
