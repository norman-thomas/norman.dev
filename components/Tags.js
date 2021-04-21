const Tags = ({ tags }) => (
  <ul className="flex flex-row flex-1" itemprop="keywords">
    {tags.map((tag, i) => (
      <Tag tag={tag} key={i} />
    ))}
  </ul>
)

const Tag = ({ tag }) => (
  <li className="mr-4 px-4 rounded-full bg-primary-400 text-white">{tag}</li>
)

export default Tags
