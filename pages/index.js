import { NextSeo } from 'next-seo'
import { NotionRenderer } from 'react-notion-x'
import 'react-notion-x/src/styles.css'
import { getContent } from '../lib/api'

export default function Home({ content }) {
  
  if(!content) return '🐶'
  
  return (
    <>
      <NextSeo
        title="Pixy Mood Tracker App"
        description="Track your mood easy in pixels"
        openGraph={{
          url: 'https://pixy.day',
          title: 'Pixy Mood Tracker App',
          description: 'Track your mood easy in pixels',
          images: [
            {
              url: 'https://pixy.day/images/og.png',
              width: 1024,
              height: 500,
              alt: 'Pixy Mood Tracker App',
              type: 'image/png',
            },
          ],
        }}
      />
      <NotionRenderer recordMap={content} fullPage={true} />
    </>
  )
}

export async function getServerSideProps(context) {
  
  const content = await getContent('1d470c651f2447dba9565ef2e45309ca')
  
  return {
    props: {
      content
    },
  }
}