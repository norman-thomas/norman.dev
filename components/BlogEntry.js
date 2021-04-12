import Link from "next/link"

const BlogEntry = ({ entry }) => (
  <Link href={`/blog/${entry.folder}/${entry.filename}`}>
    <a>
      <li className="p-4 group cursor-pointer hover:bg-gray-500 dark:hover:bg-warmgray-200">
        <img
          src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="object-cover w-full h-64 pb-2"
          alt=""
        />
        <p className="text-gray-500 dark:text-gray-300 dark:group-hover:text-black">{entry.createdAt}</p>
        <h2 className="py-2 text-2xl font-semibold leading-5 text-black dark:text-white dark:group-hover:text-black">
          {entry.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 dark:group-hover:text-gray-700">{entry.description}</p>
      </li>
    </a>
  </Link>
)

export default BlogEntry
