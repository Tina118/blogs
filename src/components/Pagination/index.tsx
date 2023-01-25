import React from 'react'

interface PaginationProps {
  numberOfTotalPages: number
}

class Pagination extends React.Component<PaginationProps> {
  state = { pages: [], selectedPage: 1 }

  componentDidMount(): void {
    const pages = new Array(this.props.numberOfTotalPages)
      .fill(null)
      .map((_, i) => i + 1)
    this.setState({ pages })
  }

  handleClick = (page: number) => this.setState({ selectedPage: page })

  handlePrev = () => {if(this.state.selectedPage!==1){
    this.setState({selectedPage:this.state.selectedPage-1})
  }}

  handleNext = () => {if(this.state.selectedPage!==this.props.numberOfTotalPages){
    this.setState({selectedPage:this.state.selectedPage+1})
  }}

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <ul className="pagination">
          <li className={`page-item ${this.state.selectedPage===1 ? 'disabled' : ''}`}>
            <a className="page-link" onClick={this.handlePrev} href="#">Previous</a>
          </li>
          {this.state.pages.map((page: number) => (
            <li className="page-item">
              <a
                className={`page-link ${this.state.selectedPage===page ? 'active' : ''}`}
                href="#"
                onClick={() => this.handleClick(page)}
              >
                {page}
              </a>
            </li>
          ))}

          <li className={`page-item ${this.state.selectedPage===this.props.numberOfTotalPages ? 'disabled' : ''}`}>
            <a className="page-link" href="#" onClick={this.handleNext}>Next</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Pagination
