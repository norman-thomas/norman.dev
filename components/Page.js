import { useEffect } from "react"

const Page = ({ children }) => {
  useEffect(() => {
    document.querySelector("body").classList.add("bg-secondary-50")
    document.querySelector("body").classList.add("dark:bg-gray-800")
    document.querySelector("body").classList.add("dark:text-secondary-50")
  })

  return <main>{children}</main>
}

export default Page
