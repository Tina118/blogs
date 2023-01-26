import React from 'react'

import { withRouter, WithRouterProps, formatData, filterPosts } from 'helper'
import PostCard from 'components/PostCard'
import Pagination from 'components/Pagination'
import Navigation from 'components/Navigation'
import DetailedPostCard from 'components/DetailedPostCard'

interface StateProps {
  posts: object[]
  numberofTotalPages: number
  visiblePosts: object[]
  currentPage: number
  post: {
    id: Number
    name: string
    body: string
    email: string
  }
}

class Posts extends React.Component<{
  router: WithRouterProps
}> {
  state = {
    posts: [],
    numberOfTotalPages: 20,
    visiblePosts: [],
    currentPage: 1,
    searchQuery: '',
    post: {
      id: 0,
      name: '',
      body: '',
      email: '',
    },
  }

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

  componentDidUpdate(prevProps: any, prevState: StateProps): void {
    const { params } = this.props.router

    if (params.id) {
      const post = this.state.posts
        .flat()
        .filter(({ id }: any) => id === Number(params.id))

      if (JSON.stringify(prevState.post) !== JSON.stringify(post[0])) {
        this.setState({ post: post[0] })
      }
    }

    if (
      JSON.stringify(prevState.currentPage) !==
      JSON.stringify(this.state.currentPage)
    ) {
      this.setState({ searchQuery: '' })
    }
    if (this.state.searchQuery !== '') return

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

  handleLogout = () => {
    const { navigate } = this.props.router
    navigate('/')
  }

  handleSearch: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    this.setState({ searchQuery: value })
    const filteredPost = filterPosts(this.state.visiblePosts, value)

    this.setState({ visiblePosts: filteredPost })
  }

  render() {
    return (
      <>
        <Navigation
          handleLogout={this.handleLogout}
          handleSearch={this.handleSearch}
          value={this.state.searchQuery}
          showSearch={this.state.post.id === 0}
        />
        {this.state.post.id !== 0 ? (
          <DetailedPostCard
            id={this.state.post.id}
            name={this.state.post.name}
            email={this.state.post.email}
            body={this.state.post.body}
          />
        ) : (
          <>
            {this.state.visiblePosts.map((posts: object[], index: number) => (
              <div className="card-group" key={index}>
                {posts.map(({ id, name, email }: any) => (
                  <PostCard id={id} name={name} email={email} key={name} />
                ))}
              </div>
            ))}
            <Pagination
              numberOfTotalPages={this.state.numberOfTotalPages}
              handlePagination={this.handlePagination}
            />
          </>
        )}
      </>
    )
  }
}

export default withRouter(Posts)
