import Head from "next/head"

import fs from "fs"
import glob from "glob-promise"
import { readDataFromFilename, listMarkdownFiles } from "../utils/files"
import { sorter } from "../utils/sorter"
import { Page, Menu, Hero, ItemList, Footer, Article } from "../components"

export const getStaticProps = async () => {
  const files = await listMarkdownFiles(glob)
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

  const topics = Object.keys(contentByFolder)
    .map((topic) => ({
      title: `${topic} (${contentByFolder[topic].length})`,
      link: `/blog/${topic}`,
    }))
    .sort((a, b) => (a.title < b.title ? -1 : 1))

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

      <Menu />
      <Hero title="norman.dev" />
      <Article>
        <ItemList
          title="Topics"
          items={topics}
          columns={["sm:grid-cols-2", "md:grid-cols-4", "xl:grid-cols-6"]}
        />
        <ItemList title="Latest Articles" {...props} maxCount={9} />
      </Article>
      <Footer />
    </Page>
  )
}

export default StartPage
