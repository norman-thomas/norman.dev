import Link from "next/link"

const Menu = () => {
  return (
    <div className="w-full flex justify-end bg-primary-400 py-4 text-white">
      <nav className="text-center font-extralight text-lg w-1/2 xl:w-1/4 flex">
        <Link href="/">
          <a className="hover:font-bold flex-1">Home</a>
        </Link>
        <Link href="/blog/">
          <a className="hover:font-bold flex-1">Blog</a>
        </Link>
        {/*<Link href="https://norman.dev/">
          <a className="hover:font-bold flex-1">Resume</a>
        </Link>*/}
      </nav>
    </div>
  )
}

export default Menu
