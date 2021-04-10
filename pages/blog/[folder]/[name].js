import Head from "next/head"
import fs from "fs"
import glob from "glob-promise"
import ReactMarkdown from "react-markdown"

import "tailwindcss/tailwind.css"

import { readDataFromFilename, listMarkdownFiles } from "../../../utils/files"
import { Page, CodeBlock } from "../../../components"

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
  console.log("PARAMS:", context)
  const { folder, name: filename } = context.params
  const content = readDataFromFilename(`content/blog/${folder}/${filename}.md`, fs)
  console.log("File content:", content)

  return {
    props: { content },
  }
}

const BlogEntry = ({ content }) => {
  return (
    <Page>
      <Head>
        <title>Blog: ...</title>
      </Head>
      <article>
        <header>
          <h1 class="text-4xl">{content.title}</h1>
          <p>{content.createdAt}</p>
        </header>
        <p>intro</p>
        <p>
          <ReactMarkdown renderers={{ code: CodeBlock }}>{content.content}</ReactMarkdown>
        </p>
      </article>
      <aside>meta info</aside>
    </Page>
  )
}

export default BlogEntry
