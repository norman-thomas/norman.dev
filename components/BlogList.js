import BlogEntry from "./BlogEntry"

const BlogList = ({ entries, grouped, maxCount }) => {
  const blogEntries = maxCount > 0 ? (entries || []).slice(0, maxCount) : entries
  return (
    <div className="pb-16">
      <h1 className="p-4 text-4xl font-light">Entry List</h1>
      <ul className="grid gap-2 xl:grid-cols-3 md:grid-cols-2 sm:max-w-sm sm:mx-auto md:max-w-full">
        {blogEntries.map((entry, i) => (
          <BlogEntry key={i} entry={entry} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
