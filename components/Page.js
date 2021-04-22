import { useEffect } from "react"

import Footer from "./Footer"

const Page = ({ children, ...props }) => {
  useEffect(() => {
    document.querySelector("body").classList.add("bg-secondary-50")
    document.querySelector("body").classList.add("dark:bg-gray-800")
    document.querySelector("body").classList.add("dark:text-secondary-50")
  })

  return (
    <>
      <main style={{ minHeight: "calc(100vh - 3.5em)" }} {...props}>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Page
