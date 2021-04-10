import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { xonokai } from "react-syntax-highlighter/dist/cjs/styles/prism"

const CodeBlock = ({ language, value }) => (
  <SyntaxHighlighter language={language} style={xonokai}>
    {value}
  </SyntaxHighlighter>
)

export default CodeBlock
