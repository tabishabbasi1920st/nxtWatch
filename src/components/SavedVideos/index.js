import {Component} from 'react'
import WebsiteTheme from '../../context/Theme'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoItems from '../VideoItems'
import {
  MainBgContainer,
  SavedVideosContainer,
  FailureViewContainer,
  FailureViewImg,
  OopsHeading,
  FailureViewDescription,
  TopBanner,
  IconContainer,
  GamingIcon,
  GamingHeading,
  Main,
} from './styledComponents'

class SavedVideos extends Component {
  render() {
    return (
      <WebsiteTheme.Consumer>
        {value => {
          const {savedVideosList, isDarkTheme} = value
          const lengthOfSavedVideosList = savedVideosList.length

          const renderNoSavedVideoView = () => (
            <FailureViewContainer isDarkTheme={isDarkTheme}>
              <FailureViewImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <OopsHeading isDarkTheme={isDarkTheme}>
                No saved videos found
              </OopsHeading>
              <FailureViewDescription isDarkTheme={isDarkTheme}>
                You can save your videos while watching them
              </FailureViewDescription>
            </FailureViewContainer>
          )

          return (
            <Main isDarkTheme={isDarkTheme} data-testid="savedVideos">
              <Header />
              <MainBgContainer>
                <Sidebar />
                <SavedVideosContainer isDarkTheme={isDarkTheme}>
                  {lengthOfSavedVideosList > 0 && (
                    <TopBanner data-testid="banner" isDarkTheme={isDarkTheme}>
                      <IconContainer isDarkTheme={isDarkTheme}>
                        <GamingIcon />
                      </IconContainer>
                      <GamingHeading isDarkTheme={isDarkTheme}>
                        Saved Videos
                      </GamingHeading>
                    </TopBanner>
                  )}
                  {lengthOfSavedVideosList > 0 &&
                    savedVideosList.map(eachObj => (
                      <VideoItems key={eachObj.id} eachObj={eachObj} />
                    ))}
                  {savedVideosList.length === 0 && renderNoSavedVideoView()}
                </SavedVideosContainer>
              </MainBgContainer>
            </Main>
          )
        }}
      </WebsiteTheme.Consumer>
    )
  }
}

export default SavedVideos
