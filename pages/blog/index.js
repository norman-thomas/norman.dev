import Head from "next/head"

import fs from "fs"
import glob from "glob-promise"
import { readDataFromFilename, listMarkdownFiles } from "../../utils/files"
import { sorter } from "../../utils/sorter"
import { Page, Menu, Hero, Article, Footer, ItemList } from "../../components"

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

  return {
    props: { items: content, grouped: contentByFolder },
  }
}

const BlogPage = (props) => {
  return (
    <Page>
      <Head>
        <title>norman.dev: Blog</title>
      </Head>
      <div>
        <Menu />
        <Hero title="Blog" />
        <Article>
          <ItemList title="Latest Articles" {...props} maxCount={12} />
        </Article>
        <Footer />
      </div>
    </Page>
  )
}

export default BlogPage
