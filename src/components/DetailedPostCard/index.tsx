import { FC } from 'react'

interface DetailedPostCardProps {
  id: number
  name: string
  email: string
  body: string
}

const DetailedPostCard: FC<DetailedPostCardProps> = ({ id, name, email, body }) => (
  <div className="d-flex justify-content-center align-items-center">
  <div className="card mb-3" style={{width:"30rem"}}>
    <img src={`https://source.unsplash.com/random/200x200?sig=${id}`} className="card-img-top" alt="post" width="20rem" height="200rem" />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
      <p className="card-text">{body}</p>
    </div>
  </div>
  </div>
)

export default DetailedPostCard
