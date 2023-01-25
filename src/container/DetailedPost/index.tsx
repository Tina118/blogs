import { useParams } from 'react-router-dom'

const DetailedPost = () => {
  const { id } = useParams()
  return <h1>{id}</h1>
}

export default DetailedPost
