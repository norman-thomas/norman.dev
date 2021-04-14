import Head from "next/head"
import fs from "fs"
import glob from "glob-promise"

import { readDataFromFilename, listMarkdownFiles } from "../../../utils/files"
import { Page, Menu, Hero, Footer, Markdown } from "../../../components"

export const getStaticPaths = async (context) => {
  console.debug("CONTEXT:", context)
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
  console.debug("PARAMS:", context)
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
      <div className="divider-y">
        <Menu />
        <Hero title={content.title} />
        <article className="p-4">
          <p className="text-tertiary-800 dark:text-tertiary-300">
            {content.createdAt}
          </p>
          <p className="">
            <Markdown text={content.content} />
          </p>
        </article>
      </div>
      <Footer />
    </Page>
  )
}

export default BlogPage
