import React from 'react'

import PostCard from 'components/PostCard'
import Pagination from 'components/Pagination'

interface StateProps {
  posts: object[]
  numberofTotalPages: number
  visiblePosts: object[]
  currentPage: number
}

const formatData = (
  response: object[],
  columns: number,
  result: object[],
): object[] => {
  const temp = [...response]
  if (columns <= 0) return result
  while (temp.length) result.push(temp.splice(0, columns))
  return result
}

class Posts extends React.Component {
  state = {
    posts: [],
    numberOfTotalPages: 20,
    visiblePosts: [],
    currentPage: 1,
  }

  componentDidMount(): void {
    const fetchData = async (): Promise<void> => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/comments',
      )
      const jsonResponse = await response.json()

      this.setState({ totalPosts: jsonResponse.length })

      const result = formatData(jsonResponse, 3, [])

      this.setState({ posts: result })
    }

    fetchData()
  }

  componentDidUpdate(prevProps: any, prevState: StateProps): void {
    const postsPerPage = Math.floor(
      this.state.posts.length / this.state.numberOfTotalPages,
    )
    const end = this.state.currentPage * postsPerPage

    const start = end - postsPerPage

    const visiblePosts = this.state.posts.slice(start, end)

    if (
      JSON.stringify(prevState.visiblePosts) !== JSON.stringify(visiblePosts)
    ) {
      this.setState({ visiblePosts })
    }

  
  }

  handlePagination = (page: number) => this.setState({ currentPage: page })

  render() {
    return (
      <>
        {this.state.visiblePosts.map((posts: object[],index:number) => (
          <div className="card-group" key={index}>
            {posts.map(({ id, name, email, body }: any) => (
              <PostCard id={id} name={name} email={email} body={body} key={name}/>
            ))}
          </div>
        ))}
        <Pagination
          numberOfTotalPages={this.state.numberOfTotalPages}
          handlePagination={this.handlePagination}
        />
      </>
    )
  }
}

export default Posts
