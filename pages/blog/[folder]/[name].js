import Head from "next/head"
import fs from "fs"
import glob from "glob-promise"
import ReactMarkdown from "react-markdown"

import { readDataFromFilename, listMarkdownFiles } from "../../../utils/files"
import { Page, Menu, Hero, Footer, CodeBlock, Heading, Image } from "../../../components"

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
  const content = readDataFromFilename(`content/blog/${folder}/${filename}.md`, fs)

  return {
    props: { content },
  }
}

const BlogEntry = ({ content }) => {
  return (
    <Page>
      <Head>
        <title>Blog: {content.title}</title>
      </Head>
      <div className="divider-y">
        <Menu />
        <Hero title={content.title} />
        <article className="p-4">
          <p className="text-gray-800 dark:text-gray-300">{content.createdAt}</p>
          <p className="">
            <ReactMarkdown renderers={{ code: CodeBlock, heading: Heading, image: Image }}>
              {content.content}
            </ReactMarkdown>
          </p>
        </article>
      </div>
      <Footer />
    </Page>
  )
}

export default BlogEntry
