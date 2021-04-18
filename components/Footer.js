import Link from "next/link"

const Footer = () => {
  return (
    <footer className="p-4">
      <ul className="grid grid-cols-4">
        <li className="">
          <Link href="https://github.com/norman-thomas">
            <a className="hover:font-bold" target="_blank">GitHub</a>
          </Link>
          <br/>
          <Link href="https://gitlab.com/norman-thomas">
            <a className="hover:font-bold" target="_blank">GitLab</a>
          </Link>
        </li>
        <li className=""></li>
        <li className=""></li>
        {/*<li className="">LinkedIn</li>*/}
        <li className="">Impressum</li>
      </ul>
    </footer>
  )
}

export default Footer
