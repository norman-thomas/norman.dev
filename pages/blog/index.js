import Head from "next/head"

import fs from "fs"
import glob from "glob-promise"
import { readDataFromFilename, listMarkdownFiles } from "../../utils/files"
import { Page, BlogList } from "../../components"

import "tailwindcss/tailwind.css"

export const getStaticProps = async () => {
  const files = await listMarkdownFiles(glob)
  console.log(files)

  const content = files.map((filename) => readDataFromFilename(filename, fs))
  console.log(content)

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
      <BlogList {...props} />
    </Page>
  )
}

export default BlogPage
