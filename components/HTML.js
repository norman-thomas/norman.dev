export const Heading = ({ level, node, ...props }) => {
  const mapping = [
    (p) => <h1 {...p} className="heading text-4xl" />,
    (p) => <h2 {...p} className="heading text-4xl" />,
    (p) => <h3 {...p} className="heading text-3xl" />,
    (p) => <h4 {...p} className="heading text-2xl" />,
    (p) => <h5 {...p} className="heading text-xl" />,
    (p) => <h6 {...p} className="heading text-lg" />,
  ]
  const paragraph = <p {...props} />
  const Element = level < mapping.length ? mapping[level] : paragraph
  return <Element {...props} />
}

export const Text = ({ node, ...props }) => <p {...props} className="" />

export const Image = ({ src, node, ...props }) => {
  return <img src={`/images/${src}`} {...props} className="w-1/2 max-w-full" />
}

export const Link = ({ node, ...props }) => (
  <a
    {...props}
    className="external p-1 underline hover:no-underline text-primary-300 hover:bg-primary-300 hover:text-black"
    target="_blank"
  />
)

export const List = ({ node, ...props }) => (
  <ul {...props} className="list-disc list-inside" />
)
