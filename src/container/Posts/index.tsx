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

/**
 * Posts
 * Displays navigation bar on top , posts and pagination at the bottom 
 * Displays detailed post if clicked on any specific post
 */
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
    //fetch posts data from api
    const fetchData = async (): Promise<void> => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/comments',
      )
      const jsonResponse = await response.json()

      //format data into array with each array have 3 object of post as we will display 3 post in a single row
      const result = formatData(jsonResponse, 3, [])

      //update state with formated data
      this.setState({ posts: result })
    }

    fetchData()
  }

  componentDidUpdate(prevProps: any, prevState: StateProps): void {
    const { params } = this.props.router

    //check params in url: if it has id fetch that post and store its detail in state
    if (params.id) {
      const post = this.state.posts
        .flat()
        .filter(({ id }: any) => id === Number(params.id))

      //check if previous post and current post are same or not to avoid re-rendering
      if (JSON.stringify(prevState.post) !== JSON.stringify(post[0])) {
        this.setState({ post: post[0] })
      }
    }

    //check if previous selected page is same as current from pagination to make search bar in navigation empty
    if (
      JSON.stringify(prevState.currentPage) !==
      JSON.stringify(this.state.currentPage)
    ) {
      this.setState({ searchQuery: '' })
    }

    //stop rendering if searchquery is not empty to avoid showing wrong search filter to user
    if (this.state.searchQuery !== '') return

    //claculate the number of rows to be displayed per page
    const postsPerPage = Math.floor(
      this.state.posts.length / this.state.numberOfTotalPages,
    )

    //calculate the start and end index of array
    const end = this.state.currentPage * postsPerPage
    const start = end - postsPerPage

    //fetch the posts from array that we need to display on a particular page
    const visiblePosts = this.state.posts.slice(start, end)

    //check if previous posts displayed is same as current visible post to avoid rendering
    if (
      JSON.stringify(prevState.visiblePosts) !== JSON.stringify(visiblePosts)
    ) {
      this.setState({ visiblePosts })
    }
  }

  //update to state to current selected page from pagination
  handlePagination = (page: number) => this.setState({ currentPage: page })

  //navigate back to login page when clicked on logout button in navigation bar
  handleLogout = () => {
    const { navigate } = this.props.router
    navigate('/')
  }

  //filter out the post the something is entered in search bar
  handleSearch: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    //update state to value entered in search bar
    this.setState({ searchQuery: value })

    //filter out the post
    const filteredPost = filterPosts(this.state.visiblePosts, value)

    //update state to filtered post to display only filtered post 
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
