import Cookie from 'js-cookie'
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {
  HeaderContainer,
  Navbar,
  WebsiteLogo,
  NavIconsContainer,
  SunIcon,
  ProfileIcon,
  HamburgerMenuIcon,
  LogoutIcon,
  MoonIcon,
  ThemeButton,
  LogoutButton,
  PopupBgContainer,
  CancelButton,
  ConfirmButton,
  PopupDescription,
  PopUpMainBgContainer,
  ButtonsContainer,
} from './styledComponent'
import WebsiteTheme from '../../context/Theme'

const Header = props => (
  <WebsiteTheme.Consumer>
    {value => {
      const {isDarkTheme, changeTheme, onChangeLeftSidebar} = value

      const LightOrDarkLogo =
        isDarkTheme === true
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const changeWebsiteTheme = () => {
        changeTheme()
      }

      const onClickLogoutButton = () => {
        Cookie.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      const onClickHamburgerMenu = () => {
        console.log('hamburger')
        onChangeLeftSidebar()
      }

      const moonOrSunLogo =
        isDarkTheme === true ? (
          <SunIcon
            isDarkTheme={isDarkTheme}
            onClick={() => {
              changeWebsiteTheme()
            }}
          />
        ) : (
          <MoonIcon
            data-testid="theme"
            isDarkTheme={isDarkTheme}
            onClick={() => {
              changeWebsiteTheme()
            }}
          />
        )

      return (
        <HeaderContainer isDarkTheme={isDarkTheme}>
          <Navbar isDarkTheme={isDarkTheme}>
            <Link to="/">
              <WebsiteLogo src={LightOrDarkLogo} alt="website logo" />
            </Link>
            <NavIconsContainer>
              <li>
                <ThemeButton type="button" data-testid="theme">
                  {moonOrSunLogo}
                </ThemeButton>
              </li>

              <li>
                <ProfileIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </li>

              <li>
                <HamburgerMenuIcon
                  isDarkTheme={isDarkTheme}
                  onClick={() => {
                    onClickHamburgerMenu()
                  }}
                />
              </li>
              <li>
                <Popup
                  trigger={
                    <LogoutButton isDarkTheme={isDarkTheme}>
                      Logout
                    </LogoutButton>
                  }
                  modal
                >
                  {close => (
                    <PopUpMainBgContainer isDarkTheme={isDarkTheme}>
                      <PopupBgContainer isDarkTheme={isDarkTheme}>
                        <PopupDescription isDarkTheme={isDarkTheme}>
                          Are you sure, you want to Logout?
                        </PopupDescription>
                        <ButtonsContainer>
                          <CancelButton
                            isDarkTheme={isDarkTheme}
                            type="button"
                            onClick={() => close()}
                          >
                            Cancel
                          </CancelButton>
                          <ConfirmButton
                            isDarkTheme={isDarkTheme}
                            type="button"
                            onClick={() => {
                              onClickLogoutButton()
                            }}
                          >
                            Confirm
                          </ConfirmButton>
                        </ButtonsContainer>
                      </PopupBgContainer>
                    </PopUpMainBgContainer>
                  )}
                </Popup>
              </li>

              <li>
                <Popup
                  trigger={
                    <LogoutIcon isDarkTheme={isDarkTheme}>Logout</LogoutIcon>
                  }
                  modal
                >
                  {close => (
                    <PopUpMainBgContainer isDarkTheme={isDarkTheme}>
                      <PopupBgContainer isDarkTheme={isDarkTheme}>
                        <PopupDescription isDarkTheme={isDarkTheme}>
                          Are you sure, you want to Logout?
                        </PopupDescription>
                        <ButtonsContainer>
                          <CancelButton
                            isDarkTheme={isDarkTheme}
                            type="button"
                            onClick={() => close()}
                          >
                            Cancel
                          </CancelButton>
                          <ConfirmButton
                            isDarkTheme={isDarkTheme}
                            type="button"
                            onClick={() => {
                              onClickLogoutButton()
                            }}
                          >
                            Confirm
                          </ConfirmButton>
                        </ButtonsContainer>
                      </PopupBgContainer>
                    </PopUpMainBgContainer>
                  )}
                </Popup>
              </li>
            </NavIconsContainer>
          </Navbar>
        </HeaderContainer>
      )
    }}
  </WebsiteTheme.Consumer>
)

export default withRouter(Header)
