import Link from "next/link"

const BlogEntry = ({ entry }) => (
  <Link href={`/blog/${entry.folder}/${entry.filename}`}>
    <a>
      <li className="p-4 shadow-xl cursor-pointer rounded-md">
        <img
          src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="object-cover w-full h-64 rounded pb-2"
          alt=""
        />
        <p className="text-gray-500">{entry.createdAt}</p>
        <h2 className="py-2 text-2xl font-semibold leading-5">{entry.title}</h2>
        <p className="text-gray-600">{entry.description}</p>
      </li>
    </a>
  </Link>
)

export default BlogEntry
