/*eslint-disable*/
import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import WebsiteTheme from '../../context/Theme'
import {
  SidebarContainer,
  OptionsContainer,
  HomeIcon,
  FireIcon,
  GamingIcon,
  SavedVideosIcon,
  CustomLink,
  ListItem,
  OptionName,
  ContactUsContainer,
  ContactUsPara,
  SocialIconsContainer,
  SocialIconsImg,
  ContactDescription,
} from './styledComponents'

class Sidebar extends Component {
  state = {
    currentPath: this.props.location.pathname,
  }

  componentDidUpdate() {
    const {currentPath} = this.state
    const {location} = this.props
    const {pathname} = location
    if (currentPath !== pathname) {
      this.setState({currentPath: pathname})
    }
  }

  render() {
    const {currentPath} = this.state
    console.log(currentPath)
    return (
      <WebsiteTheme.Consumer>
        {value => {
          const {isDarkTheme, leftSidebar} = value
          const {currentPath} = this.state

          return (
            <SidebarContainer
              isDarkTheme={isDarkTheme}
              leftSidebar={leftSidebar}
            >
              <OptionsContainer>
                <CustomLink to="/">
                  <ListItem
                    isDarkTheme={isDarkTheme}
                    path={currentPath === '/'}
                  >
                    <HomeIcon
                      path={currentPath === '/'}
                      isDarkTheme={isDarkTheme}
                    />
                    <OptionName isDarkTheme={isDarkTheme}>Home</OptionName>
                  </ListItem>
                </CustomLink>

                <CustomLink to="/trending">
                  <ListItem
                    isDarkTheme={isDarkTheme}
                    path={currentPath === '/trending'}
                  >
                    <FireIcon
                      path={currentPath === '/trending'}
                      isDarkTheme={isDarkTheme}
                    />
                    <OptionName isDarkTheme={isDarkTheme}>Trending</OptionName>
                  </ListItem>
                </CustomLink>

                <CustomLink to="/gaming">
                  <ListItem
                    isDarkTheme={isDarkTheme}
                    path={currentPath === '/gaming'}
                  >
                    <GamingIcon
                      path={currentPath === '/gaming'}
                      isDarkTheme={isDarkTheme}
                    />
                    <OptionName isDarkTheme={isDarkTheme}>Gaming</OptionName>
                  </ListItem>
                </CustomLink>

                <CustomLink to="/saved-videos">
                  <ListItem
                    isDarkTheme={isDarkTheme}
                    path={currentPath === '/saved-videos'}
                  >
                    <SavedVideosIcon
                      path={currentPath === '/saved-videos'}
                      isDarkTheme={isDarkTheme}
                    />
                    <OptionName isDarkTheme={isDarkTheme}>
                      Saved videos
                    </OptionName>
                  </ListItem>
                </CustomLink>
              </OptionsContainer>
              <ContactUsContainer>
                <ContactUsPara isDarkTheme={isDarkTheme}>
                  CONTACT US
                </ContactUsPara>
                <SocialIconsContainer>
                  <SocialIconsImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialIconsImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialIconsImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialIconsContainer>
                <ContactDescription isDarkTheme={isDarkTheme}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactDescription>
              </ContactUsContainer>
            </SidebarContainer>
          )
        }}
      </WebsiteTheme.Consumer>
    )
  }
}

export default withRouter(Sidebar)
