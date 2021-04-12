import { useEffect } from "react"

import "tailwindcss/tailwind.css"

const Page = ({ children }) => {
  useEffect(() => {
    // document.querySelector("body").classList.add("bg-white")
  })

  return <main className="container py-4 mx-auto">{children}</main>
}

export default Page
