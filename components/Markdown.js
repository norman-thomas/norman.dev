import ReactMarkdown from "react-markdown"

import { Heading, Image, Link, List, Paragraph } from "./HTML"
import CodeBlock from "./CodeBlock"

const Markdown = ({ text }) => (
  <ReactMarkdown
    renderers={{
      code: CodeBlock,
      heading: Heading,
      image: Image,
      link: Link,
      list: List,
      paragraph: Paragraph,
    }}
  >
    {text}
  </ReactMarkdown>
)

export default Markdown
