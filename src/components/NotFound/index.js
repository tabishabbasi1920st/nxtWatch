import {Component} from 'react'
import WebsiteTheme from '../../context/Theme'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  NotFoundBgContainer,
  NotFoundContentContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

class NotFound extends Component {
  render() {
    return (
      <WebsiteTheme.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <NotFoundBgContainer>
                <Sidebar />
                <NotFoundContentContainer isDarkTheme={isDarkTheme}>
                  <NotFoundImg
                    src={
                      isDarkTheme
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                    }
                    alt="not found"
                  />
                  <NotFoundHeading isDarkTheme={isDarkTheme}>
                    Page Not Found
                  </NotFoundHeading>
                  <NotFoundDescription isDarkTheme={isDarkTheme}>
                    We are sorry, the Page you requested could not be found.
                  </NotFoundDescription>
                </NotFoundContentContainer>
              </NotFoundBgContainer>
            </>
          )
        }}
      </WebsiteTheme.Consumer>
    )
  }
}

export default NotFound
