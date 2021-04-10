import Link from "next/link"

const List = ({ entries, grouped }) => (
  <>
    <h1>Blog</h1>
    <ul>
      {Object.keys(grouped).map((topic) => (
        <li key={topic}>
          <Link href={`/blog/${topic}`}>
            <a>{topic}</a>
          </Link>
        </li>
      ))}
    </ul>
    <ul>
      {entries.map((entry) => (
        <Entry key={entry.name} entry={entry} />
      ))}
    </ul>
  </>
)

const Entry = ({ entry }) => (
  <li>
    <h2>{entry.title}</h2>
    <p>
      <Link href={`/blog/${entry.folder}/${entry.filename}`}>
        <a>go to: {entry.title}</a>
      </Link>
    </p>
  </li>
)

export default List
