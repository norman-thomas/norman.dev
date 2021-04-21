const Date = ({ date }) => (
  <time
    className="text-tertiary-900 dark:text-tertiary-300"
    itemprop="datePublished"
    content={date}
  >
    {date}
  </time>
)

export default Date
