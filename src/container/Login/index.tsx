import React from 'react'

import { withRouter, WithRouterProps } from 'helper/withRouter';



class Login extends React.Component<{ router: WithRouterProps }> {
  state = { username: '', password: '' }

  handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    this.setState({ username: value })
  }

  handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    this.setState({ password: value })
  }

  handleSubmit = () => {
    const { navigate } = this.props.router
    if (
      this.state.username === 'admin' &&
      this.state.password === 'admin@123'
    ) {
      navigate('/posts')
    }
  }

  render() {
    return (
      <>
        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center ">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      placeholder="Enter username"
                      required
                      onChange={this.handleUsernameChange}
                    />
                    
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      required
                      onChange={this.handlePasswordChange}
                    />
                    
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}
                      onClick={this.handleSubmit}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default withRouter(Login)
