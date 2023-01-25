import React from 'react'

import PostCard from 'components/PostCard';
import Pagination from 'components/Pagination';

const formatData = (response: object[], columns: number, result: object[]): object[] => {
  const temp = [...response]
  if (columns <= 0) return result
  while (temp.length) result.push(temp.splice(0, columns))
  return result
}

class Posts extends React.Component {
  state = { posts: [] }
  componentDidMount(): void {
    const fetchData = async (): Promise<void> => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/comments',
      )
      const jsonResponse = await response.json()
      const result = formatData(jsonResponse, 3, [])

      this.setState({ posts: result })
    }

    fetchData()
  }

  render() {
    return (
      <>
        {this.state.posts.map((posts: object[]) => (
          <div className="card-group">
            {posts.map(({ id, name, email, body }: any) => (
              <PostCard id={id} name={name} email={email} body={body} />
            ))}
          </div>
        ))}
        <Pagination numberOfTotalPages={20} />
      </>
    )
  }
}

export default Posts
