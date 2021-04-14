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
  <h2 className="py-2 text-2xl font-semibold leading-5 text-secondary-500 group-hover:text-secondary-800 dark:text-white">
    {title}
  </h2>
)

const Description = ({ description }) =>
  description ? <p className="text-gray-700 dark:text-gray-300">{description}</p> : null

const Date = ({ date }) =>
  date ? <p className="text-gray-500 group-hover:text-black dark:text-gray-300">{date}</p> : null

const Image = ({ src }) => (src ? <img src={src} className="object-cover w-full h-64 pb-2" alt="" /> : null)

const ItemList = ({ items, title, maxCount }) => {
  const entries = maxCount > 0 ? (items || []).slice(0, maxCount) : items

  return (
    <div className="pb-8">
      {title && <h2 className="p-4 text-2xl font-light">{title}</h2>}
      <ul className="grid gap-2 xl:grid-cols-3 md:grid-cols-2 sm:max-w-sm sm:mx-auto md:max-w-full">
        {entries.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </ul>
    </div>
  )
}

export default ItemList
