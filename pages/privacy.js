import { Page } from '../components/Page'
import { getContentServerSideProps } from '../lib/api'

export default function Privacy({ content }) {  
  const title = 'Pixy Mood Tracker - Privacy Policy'
  const description = 'Privacy Policy for Pixy Mood Tracker App'
  
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
    id: '236e2f58ea48429e8cfa07c16536f3df',
  },
})