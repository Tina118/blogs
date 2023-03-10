import { FC } from 'react'

interface PostCardProps {
  id: string
  name: string
  email: string
}

/**
 * PostCard 
 * Component to display Posts 
 */
const PostCard: FC<PostCardProps> = ({ id, name, email }) => {
  const src = 'https://source.unsplash.com/random/200x200?sig=' + id

  return (
    <div className="col-md-4 mb-3 d-flex align-item-stretch">
    <div className="card" style={{ width: '25rem' ,margin:"1rem"}}>
      <img src={src} className="card-img-top" alt="profile" width="200rem" height="200rem"/>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
        <a href={`posts/${id}`} className="btn btn-primary mt-auto align-self-start">
          Post Details
        </a>
      </div>
    </div>
    </div>
  )
}

export default PostCard
