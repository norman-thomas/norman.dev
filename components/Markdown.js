import ReactMarkdown from "react-markdown"

import { Heading, Image, Link, List } from "./HTML"
import CodeBlock from "./CodeBlock"

const Markdown = ({ text }) => (
  <ReactMarkdown
    renderers={{
      code: CodeBlock,
      heading: Heading,
      image: Image,
      link: Link,
      list: List,
    }}
  >
    {text}
  </ReactMarkdown>
)

export default Markdown
