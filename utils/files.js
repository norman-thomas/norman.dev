import path from "path"
import matter from "gray-matter"

export const readDataFromFilename = (filename, fs) => {
  const fileContent = fs.readFileSync(filename)
  const text = fileContent.toString()
  const { data, content } = matter(text)
  const options = { year: "numeric", month: "long", day: "numeric" }
  const formattedCreatedDate = data.createdAt?.toLocaleDateString("en-GB", options) ?? null
  const formattedUpdatedDate = data.updatedAt?.toLocaleDateString("en-GB", options) ?? null

  console.log("DATA:", data)

  return {
    ...data,
    content,
    createdAt: formattedCreatedDate,
    updatedAt: formattedUpdatedDate,
    filename: path.basename(filename, ".md"),
    folder: path.basename(path.dirname(filename)),
  }
}

export const listMarkdownFiles = async (glob) => {
  return await glob("content/blog/**/*.md", { nodir: true })
}

export const listMarkdownFilesIn = async (folder, glob) => {
  return await glob(`content/blog/${folder}/*.md`, { nodir: true })
}
