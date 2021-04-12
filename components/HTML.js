export const Heading = ({ level, ...props }) => {
  const mapping = [
    (p) => <h1 {...p} className="py-4 font-mono text-4xl" />,
    (p) => <h2 {...p} className="py-4 font-mono text-4xl" />,
    (p) => <h3 {...p} className="py-4 font-mono text-3xl" />,
    (p) => <h4 {...p} className="py-4 font-mono text-2xl" />,
    (p) => <h5 {...p} className="py-4 font-mono text-xl" />,
    (p) => <h6 {...p} className="py-4 font-mono text-lg" />,
  ]
  const paragraph = <p {...props} />
  const Element = level < mapping.length ? mapping[level] : paragraph
  return <Element {...props} />
}

export const Text = (props) => <p {...props} className="" />
