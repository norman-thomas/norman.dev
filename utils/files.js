import path from "path"
import matter from "gray-matter"

import { BLOG_FOLDER } from "./constants"

export const readDataFromFilename = (filename, fs) => {
  const fileContent = fs.readFileSync(filename)
  const fileTimestamp = fs.statSync(filename).mtime.toISOString()
  const text = fileContent.toString()
  const { data, content } = matter(text)
  const options = { year: "numeric", month: "long", day: "numeric" }
  const formattedCreatedDate =
    data.createdAt?.toLocaleDateString("en-GB", options) ?? null
  const formattedUpdatedDate =
    data.updatedAt?.toLocaleDateString("en-GB", options) ?? null

  const pageContent = {
    ...data,
    content,
    createdAt: formattedCreatedDate,
    updatedAt: formattedUpdatedDate,
    fileTimestamp,
    filename: path.basename(filename, ".md"),
    folder: path.basename(path.dirname(filename)),
  }

  console.debug("Page Content:", pageContent)
  return pageContent
}

export const listMarkdownFiles = async (glob) => {
  return await glob(`${BLOG_FOLDER}/**/*.md`, { nodir: true })
}

export const listMarkdownFilesIn = async (folder, glob) => {
  return await glob(`${BLOG_FOLDER}/${folder}/*.md`, { nodir: true })
}

export const listTopics = async (fs) => {
  return await fs.readFile(`${BLOG_FOLDER}/`)
}
