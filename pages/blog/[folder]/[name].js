import Head from "next/head"
import fs from "fs"
import glob from "glob-promise"

import { readDataFromFilename, listMarkdownFiles } from "../../../utils/files"
import {
  Page,
  Menu,
  Hero,
  Tags,
  Date,
  Article,
  Footer,
  Markdown,
} from "../../../components"

export const getStaticPaths = async (context) => {
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
  const { folder, name: filename } = context.params
  const content = readDataFromFilename(
    `content/blog/${folder}/${filename}.md`,
    fs
  )
  content.topic = folder
  return {
    props: { content },
  }
}

const BlogPage = ({ content }) => {
  return (
    <Page>
      <Head>
        <title>
          {content.title} | {content.topic} | norman.dev
        </title>
      </Head>

      <Menu />
      <Hero title={content.title} />
      <Article>
        <div className="flex">
          <Tags tags={content.tags} />
          <Date date={content.createdAt} />
        </div>
        <p className="">
          <Markdown text={content.content} />
        </p>
      </Article>

      <Footer />
    </Page>
  )
}

export default BlogPage
