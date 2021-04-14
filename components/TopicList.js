const Topic = ({ topic }) => {
  return (
    <li className="p-4 group cursor-pointer hover:bg-secondary-300 dark:hover:bg-warmgray-200">
      {topic.name} ({topic.articleCount})
    </li>
  )
}

const TopicList = ({ topics }) => {
  return (
    <div className="pb-16">
      <h2 className="p-4 text-2xl font-light">Topics</h2>
      <ul className="grid gap-2 xl:grid-cols-3 md:grid-cols-2 sm:max-w-sm sm:mx-auto md:max-w-full">
        {topics.map((topic, i) => (
          <Topic key={i} topic={topic} />
        ))}
      </ul>
    </div>
  )
}

export default TopicList
