import Link from "next/link"

const gitHubLogo = "/logos/github-icon.svg"
const gitLabogo = "/logos/gitlab-icon-1-color-white-rgb.svg"

const Footer = () => {
  return (
    <footer className="p-4 bg-primary-400 text-white">
      <ul className="flex flex-row container mx-auto">
        <li className="mr-8 flex-none">
          <Link href="https://github.com/norman-thomas">
            <a className="py-2 px-4 hover:font-bold" target="_blank">
              <img
                src={gitHubLogo}
                alt="GitHub"
                style={{ height: "1.25em", display: "inline-block" }}
                className="mr-2 filter invert -mt-1"
              />
              GitHub
            </a>
          </Link>
        </li>
        <li className="mr-8 flex-none">
          <Link href="https://gitlab.com/norman-thomas">
            <a className="py-2 px-4 hover:font-bold" target="_blank">
              <img
                src={gitLabogo}
                alt="GitLab"
                style={{ height: "1.75em", display: "inline-block" }}
                className="mr-1 -mt-1"
              />
              GitLab
            </a>
          </Link>
        </li>
        <li className="mr-8 flex-1"></li>
        <li className="">Impressum</li>
      </ul>
    </footer>
  )
}

export default Footer
