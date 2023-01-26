import React from 'react'

import { withRouter, WithRouterProps } from 'helper/withRouter'
import InputField from 'components/InputField'
import SubmitButton from 'components/SubmitButton'
import Notification from 'components/Notification'

/**
 * Login
 * Displays Login page , handles authentication and displays alert if entered credentials are not correct
 */
class Login extends React.Component<{ router: WithRouterProps }> {
  state = { username: '', password: '', validity: false }

  //update state with entered value in username field
  handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    this.setState({ username: value })
  }

  //update state with entered value in password field
  handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    this.setState({ password: value })
  }

  //will trigger on click on button 
  handleSubmit = () => {
    const { navigate } = this.props.router
    if (
      this.state.username === 'admin' &&
      this.state.password === 'admin@123'
    ) {
      //set state to hide alert
      this.setState({ validity: false })
      //navigate to posts if credentials entered are correct
      navigate('/posts')
    } else {
      //set state to display alert as entered credentials are not correct
      this.setState({ validity: true })
    }
  }

  render() {
    return (
      <>
        <section className="vh-100">
          <div className="container-fluid h-custom">
            {this.state.validity && (
              <Notification alertMessage="Please enter valid username and password" />
            )}
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
                  <InputField
                    type="text"
                    id="userName"
                    placeholder="Enter username"
                    onChange={this.handleUsernameChange}
                  />

                  <InputField
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    onChange={this.handlePasswordChange}
                  />

                  <SubmitButton
                    buttonText="Login"
                    onClick={this.handleSubmit}
                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                  />
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
