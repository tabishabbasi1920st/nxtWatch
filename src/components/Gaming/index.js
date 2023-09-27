import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import WebsiteTheme from '../../context/Theme'
import Header from '../Header'
import Sidebar from '../Sidebar'
import GamingVideoItems from '../GamingVideoItems'
import {
  LoaderBgContainer,
  GamingBgContainer,
  GamingVideosContainer,
  FailureViewContainer,
  FailureViewImg,
  OopsHeading,
  FailureViewDescription,
  RetryButton,
  TopBanner,
  IconContainer,
  GamingIcon,
  GamingHeading,
  Main,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamingVideosList: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const gamingVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(gamingVideosApiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedFetchedData = fetchedData.videos.map(eachObj => ({
        id: eachObj.id,
        thumbnailUrl: eachObj.thumbnail_url,
        title: eachObj.title,
        viewCount: eachObj.view_count,
      }))
      console.log(updatedFetchedData)
      this.setState({
        gamingVideosList: updatedFetchedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  render() {
    return (
      <WebsiteTheme.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {gamingVideosList, apiStatus} = this.state

          const renderLoader = () => (
            <LoaderBgContainer isDarkTheme={isDarkTheme}>
              <div className="loader-container" data-testid="loader">
                <Loader
                  type="ThreeDots"
                  color={isDarkTheme ? '#fff' : '#000'}
                  height="50"
                  width="50"
                />
              </div>
            </LoaderBgContainer>
          )

          const renderGamingFailureView = () => (
            <FailureViewContainer isDarkTheme={isDarkTheme}>
              <FailureViewImg
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure view"
              />
              <OopsHeading isDarkTheme={isDarkTheme}>
                Oops! Something Went Wrong
              </OopsHeading>
              <FailureViewDescription isDarkTheme={isDarkTheme}>
                We are having some trouble to complete your request.
                <br />
                Please try again
              </FailureViewDescription>
              <RetryButton
                type="button"
                onClick={() => {
                  this.getGamingVideos()
                }}
              >
                Retry
              </RetryButton>
            </FailureViewContainer>
          )

          return (
            <Main data-testid="gaming" isDarkTheme={isDarkTheme}>
              <Header />
              <GamingBgContainer>
                <Sidebar />
                <GamingVideosContainer isDarkTheme={isDarkTheme}>
                  <TopBanner data-testid="banner" isDarkTheme={isDarkTheme}>
                    <IconContainer isDarkTheme={isDarkTheme}>
                      <GamingIcon />
                    </IconContainer>
                    <GamingHeading isDarkTheme={isDarkTheme}>
                      Gaming
                    </GamingHeading>
                  </TopBanner>
                  {apiStatus === apiStatusConstants.inProgress &&
                    renderLoader()}
                  {apiStatus === apiStatusConstants.success &&
                    gamingVideosList.map(eachObj => (
                      <GamingVideoItems key={eachObj.id} eachObj={eachObj} />
                    ))}
                  {apiStatus === apiStatusConstants.failure &&
                    renderGamingFailureView()}
                </GamingVideosContainer>
              </GamingBgContainer>
            </Main>
          )
        }}
      </WebsiteTheme.Consumer>
    )
  }
}

export default Trending
