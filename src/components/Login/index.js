import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect, withRouter} from 'react-router-dom'
import WebsiteTheme from '../../context/Theme'
import {
  AppContainer,
  WebsiteLogoContainer,
  WebsiteLogo,
  FormContainer,
  LabelAndInputContainer,
  CustomLabel,
  CustomInput,
  LoginButton,
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  ErrorMsg,
} from './styledComponents'

const apiStatusConstants = {
  failure: 'FAILURE',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Login extends Component {
  state = {
    usernameInput: 'rahul',
    passwordInput: 'rahul@2021',
    showPassword: false,
    apiStatus: apiStatusConstants.initial,
    errorMsg: '',
  }

  onChangeShowPasswordCheckbox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onChangeUsernameField = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePasswordField = event => {
    this.setState({passwordInput: event.target.value})
  }

  renderLoginForm = isDarkTheme => {
    const {apiStatus, errorMsg} = this.state
    const DarkOrLightWebsiteLogo =
      isDarkTheme === true
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
    const renderWebsiteLogo = () => (
      <WebsiteLogoContainer>
        <WebsiteLogo src={DarkOrLightWebsiteLogo} alt="website logo" />
      </WebsiteLogoContainer>
    )

    const renderUsernameInputField = () => {
      const {usernameInput} = this.state
      return (
        <LabelAndInputContainer>
          <CustomLabel isDarkTheme={isDarkTheme} htmlFor="usernameInput">
            USERNAME
          </CustomLabel>
          <CustomInput
            value={usernameInput}
            isDarkTheme={isDarkTheme}
            onChange={event => {
              this.onChangeUsernameField(event)
            }}
            type="text"
            id="usernameInput"
            placeholder="USERNAME"
          />
        </LabelAndInputContainer>
      )
    }

    const renderPasswordInputField = () => {
      const {showPassword, passwordInput} = this.state
      return (
        <LabelAndInputContainer>
          <CustomLabel isDarkTheme={isDarkTheme} htmlFor="passwordInput">
            PASSWORD
          </CustomLabel>
          <CustomInput
            value={passwordInput}
            isDarkTheme={isDarkTheme}
            onChange={event => {
              this.onChangePasswordField(event)
            }}
            type={showPassword === true ? 'text' : 'password'}
            id="passwordInput"
            placeholder="PASSWORD"
          />
        </LabelAndInputContainer>
      )
    }

    const renderShowPasswordCheckboxAndLabel = () => (
      <CheckboxContainer>
        <CheckboxInput
          type="checkbox"
          id="showPassword"
          onChange={this.onChangeShowPasswordCheckbox}
        />
        <CheckboxLabel isDarkTheme={isDarkTheme} htmlFor="showPassword">
          Show Password
        </CheckboxLabel>
      </CheckboxContainer>
    )

    const renderLoginButton = () => (
      <LoginButton type="submit">Login</LoginButton>
    )

    const renderErrorMsg = () => <ErrorMsg>{errorMsg}</ErrorMsg>
    return (
      <FormContainer isDarkTheme={isDarkTheme} onSubmit={this.onSubmitForm}>
        {renderWebsiteLogo()}
        {renderUsernameInputField()}
        {renderPasswordInputField()}
        {renderShowPasswordCheckboxAndLabel()}
        {renderLoginButton()}
        {apiStatus === apiStatusConstants.failure ? renderErrorMsg() : null}
      </FormContainer>
    )
  }

  onSubmitForm = async event => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state

    const credentials = {username: usernameInput, password: passwordInput}
    const LoginApiUrl = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(credentials),
    }

    const response = await fetch(LoginApiUrl, options)
    const fetchedData = await response.json()
    if (response.ok) {
      const jwtToken = fetchedData.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 7})
      this.setState({apiStatus: apiStatusConstants.success})
      const {history} = this.props
      history.replace('/')
    } else {
      const errorMsg = fetchedData.error_msg
      this.setState({
        apiStatus: apiStatusConstants.failure,
        errorMsg,
      })
    }
  }

  render() {
    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <WebsiteTheme.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <AppContainer isDarkTheme={isDarkTheme}>
              {this.renderLoginForm(isDarkTheme)}
            </AppContainer>
          )
        }}
      </WebsiteTheme.Consumer>
    )
  }
}

export default withRouter(Login)
