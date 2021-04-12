import { useEffect } from "react"

const Page = ({ children }) => {
  useEffect(() => {
    document.querySelector("body").classList.add("bg-indigo-100")
    document.querySelector("body").classList.add("dark:bg-gray-800")
    document.querySelector("body").classList.add("dark:text-gray-100")
  })

  return <main className="container py-4 mx-auto">{children}</main>
}

export default Page
