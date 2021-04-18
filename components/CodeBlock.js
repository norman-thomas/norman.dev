import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { xonokai } from "react-syntax-highlighter/dist/cjs/styles/prism"

const customStyle = {
  border: "none",
  backgroundColor: null,
}

const CodeBlock = ({ language, value }) => (
  <SyntaxHighlighter
    language={language}
    style={xonokai}
    showLineNumbers={true}
    wrapLongLines={true}
    customStyle={customStyle}
    className="bg-gray-800"
    codeTagProps={{ className: "font-mono" }}
  >
    {value}
  </SyntaxHighlighter>
)

export default CodeBlock
