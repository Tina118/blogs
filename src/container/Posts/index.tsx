import React from 'react'

import { withRouter, WithRouterProps, formatData, filterPosts } from 'helper'
import PostCard from 'components/PostCard'
import Pagination from 'components/Pagination'
import Navigation from 'components/Navigation'

interface StateProps {
  posts: object[]
  numberofTotalPages: number
  visiblePosts: object[]
  currentPage: number
}

class Posts extends React.Component<{ router: WithRouterProps }> {
  state = {
    posts: [],
    numberOfTotalPages: 20,
    visiblePosts: [],
    currentPage: 1,
    searchQuery: '',
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
    if (prevState.currentPage !== this.state.currentPage) {
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
        />
        {this.state.visiblePosts.map((posts: object[], index: number) => (
          <div className="card-group" key={index}>
            {posts.map(({ id, name, email, body }: any) => (
              <PostCard
                id={id}
                name={name}
                email={email}
                body={body}
                key={name}
              />
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

export default withRouter(Posts)
