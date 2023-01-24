import React from 'react'

 class Posts extends React.Component {
  state = { posts: [] }
  componentDidMount(): void {

     const fetchData =async (): Promise<void> => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const jsonResponse = await response.json()
        
        this.setState({posts:jsonResponse})
        
    }
    
    fetchData();
}

  

  render() {
    
    return <ul>{this.state.posts.map(({id,title}: any) => <li key={id}>{title}</li>)}</ul>;
  }
}

export default Posts
