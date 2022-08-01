import { NextSeo } from 'next-seo'
import { NotionRenderer } from 'react-notion-x'
import 'react-notion-x/src/styles.css'
import { openGraph } from "../config/seo"

export const Page = ({
  title,
  description,
  content
}) => {
  if(!content) return '🐶'

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          ...openGraph,
          title,
          description,
        }}
      />
      <NotionRenderer recordMap={content} fullPage={true} />
    </>
  )
}