import Link from "next/link"

const Item = ({ link, ...props }) =>
  link ? (
    <Link href={link}>
      <a>
        <ItemInner {...props} />
      </a>
    </Link>
  ) : (
    <ItemInner {...props} />
  )

const ItemInner = ({ title, description, image, date }) => (
  <li className="p-4 group cursor-pointer hover:bg-secondary-300 dark:hover:bg-warmgray-200">
    <Image src={image} />
    <Date date={date} />
    <Title title={title} />
    <Description description={description} />
  </li>
)

const Title = ({ title }) => (
  <h2 className="py-2 text-2xl font-normal leading-5 text-secondary-500 group-hover:text-secondary-800 dark:text-white">
    {title}
  </h2>
)

const Description = ({ description }) =>
  description ? (
    <p className="font-extralight text-gray-700 dark:text-gray-300 group-hover:text-gray-700">
      {description}
    </p>
  ) : null

const Date = ({ date }) =>
  date ? (
    <p className="font-extralight text-gray-500 group-hover:text-gray-700 dark:text-gray-300">
      {date}
    </p>
  ) : null

const Image = ({ src }) =>
  src ? (
    <img src={src} className="object-cover w-full h-64 pb-2" alt="" />
  ) : null

const ListTitle = ({ title }) =>
  title ? (
    <h2 className="p-4 text-2xl font-light bg-tertiary-800 text-white">
      {title}
    </h2>
  ) : null

const DEFAULT_COLUMNS = ["xl:grid-cols-4", "lg:grid-cols-3", "md:grid-cols-2"]
// sm:max-w-sm sm:mx-auto md:max-w-full

const ItemList = ({ items, title, maxCount, columns = DEFAULT_COLUMNS }) => {
  const entries = maxCount > 0 ? (items || []).slice(0, maxCount) : items
  const columnClasses = calculateColumns(columns)

  return (
    <div className="pb-8">
      <ListTitle title={title} />
      <ul className={`grid gap-2 ${columnClasses}`}>
        {entries.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </ul>
    </div>
  )
}

const calculateColumns = (columns) => {
  if (columns instanceof String) {
    return columns
  }
  if (columns instanceof Array) {
    return columns.join(" ")
  }
  return ""
}

export default ItemList
