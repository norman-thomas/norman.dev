import Head from "next/head"

import fs from "fs"
import glob from "glob-promise"
import { readDataFromFilename, listMarkdownFiles } from "../utils/files"
import { Page, Menu, Hero, BlogList, Footer } from "../components"

export const getStaticProps = async () => {
  const files = await listMarkdownFiles(glob)
  const content = files
    .map((filename) => readDataFromFilename(filename, fs))
    .sort((a, b) => (a.fileTimestamp > b.fileTimestamp ? -1 : 1))
  const contentByFolder = content.reduce((acc, f) => {
    acc[f.folder] = (acc[f.folder] || []).concat(f)
    return acc
  }, {})
  console.log(contentByFolder)

  return {
    props: { entries: content, grouped: contentByFolder },
  }
}

const StartPage = (props) => {
  return (
    <Page>
      <Head>
        <title>norman.dev</title>
      </Head>
      <div>
        <Menu />
        <Hero title="norman.dev" />
        <BlogList {...props} maxCount={9} />
        <Footer />
      </div>
    </Page>
  )
}

export default StartPage
