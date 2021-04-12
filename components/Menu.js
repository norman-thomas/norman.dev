import Link from "next/link"

const Menu = () => {
  return (
    <div class="w-full flex justify-end">
      <div class="text-center bg-purple-200 w-1/2 xl:w-1/3 divide-x flex">
        <Link href="/">
          <a className="hover:bg-yellow-100 flex-1">Home</a>
        </Link>
        <Link href="/blog/">
          <a className="hover:bg-yellow-100 flex-1">Blog</a>
        </Link>
        <Link href="https://norman.works">
          <a className="hover:bg-yellow-100 flex-1" target="_blank">
            Resume
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Menu
