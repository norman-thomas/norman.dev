import Head from "next/head"

import fs from "fs"
import glob from "glob-promise"
import { readDataFromFilename, listMarkdownFiles } from "../../utils/files"
import { Page, Menu, Hero, Footer, BlogList } from "../../components"

export const getStaticProps = async () => {
  const files = await listMarkdownFiles(glob)
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

const BlogPage = (props) => {
  return (
    <Page>
      <Head>
        <title>Blog</title>
      </Head>
      <div className="divide-y">
        <Menu />
        <Hero title="Articles" />
        <BlogList {...props} />
        <Footer />
      </div>
    </Page>
  )
}

export default BlogPage
