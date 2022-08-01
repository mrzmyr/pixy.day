import { Page } from '../components/Page'
import { getContentServerSideProps } from '../lib/api'

export default function Index({ content }) {  
  const title = 'Pixy Mood Tracker'
  const description = 'Track your mood easy in pixels'
  
  return (
    <Page
      title={title}
      description={description}
      content={content}
    />
  )
}

export const getServerSideProps = (context) => getContentServerSideProps({
  ...context,
  query: {
    id: '1d470c651f2447dba9565ef2e45309ca',
  },
})
