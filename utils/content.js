import {
  readDataFromFilename,
  listMarkdownFiles,
} from "./files"
import { sorter } from "./sorter"

export const getBlogPosts = async () => {
  const files = await listMarkdownFiles()
  const posts = files
    .map((filename) => readDataFromFilename(filename))
    .sort(sorter)
  posts.forEach((post) => {
    post.date = post.createdAt
    post.link = `/blog/${post.folder}/${post.filename}`
  })
  return posts
}

const groupBy = (list, field) => {
  const grouped = list.reduce((acc, e) => {
    acc[e[field]] = (acc[e?.[field]] || []).concat(e)
    return acc
  }, {})
  return grouped
}

export const getPostsByTopic = (posts) => {
  const postsByTopic = groupBy(posts, "folder")
  return postsByTopic
}

export const getBlogTopics = (postsByTopic) => {
  const topics = Object.keys(postsByTopic)
  const topicsSorted = topics.sort((a, b) =>
    a.toLowerCase() < b.toLowerCase() ? -1 : 1
  )
  return topicsSorted.map((topic) => ({
    title: topic,
    link: `/blog/${topic}`,
  }))
}

export const loadBlog = async () => {
  const posts = await getBlogPosts()
  const postsByTopic = getPostsByTopic(posts)
  const topics = getBlogTopics(postsByTopic)

  return {
    posts,
    topics,
    postsByTopic,
  }
}
