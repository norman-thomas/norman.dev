import Link from "next/link"

const Menu = () => {
  return (
    <div className="w-full flex justify-end">
      <div className="text-center font-thin text-lg w-1/2 xl:w-1/3 flex">
        <Link href="/">
          <a className="hover:font-bold flex-1">Home</a>
        </Link>
        <Link href="/blog/">
          <a className="hover:font-bold flex-1">Blog</a>
        </Link>
        <Link href="https://norman.dev/resume">
          <a className="hover:font-bold flex-1">Resume</a>
        </Link>
      </div>
    </div>
  )
}

export default Menu
