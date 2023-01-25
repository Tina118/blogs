import { FC } from 'react'

interface DetailedPostCardProps {
  src: string
  name: string
  email: string
  body: string
}

const DetailedPostCard: FC<DetailedPostCardProps> = ({ src, name, email, body }) => (
  <div className="card mb-3">
    <img src={src} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
      <p className="card-text">{body}</p>
    </div>
  </div>
)

export default DetailedPostCard
