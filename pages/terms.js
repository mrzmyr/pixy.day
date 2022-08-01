import { Page } from '../components/Page'
import { getContentServerSideProps } from '../lib/api'

export default function Terms({ content }) {  
  const title = 'Pixy Mood Tracker - Terms & Conditions'
  const description = 'Terms & Conditions for Pixy Mood Tracker App'
  
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
    id: 'f6ed9807031e4c46b9e0e7cba02bc179',
  },
})