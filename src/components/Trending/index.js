import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import WebsiteTheme from '../../context/Theme'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoItems from '../VideoItems'
import {
  LoaderBgContainer,
  TrendingBgContainer,
  TrendingVideosContainer,
  FailureViewContainer,
  FailureViewImg,
  OopsHeading,
  FailureViewDescription,
  RetryButton,
  TopBanner,
  IconContainer,
  TrendingIcon,
  TrendingHeading,
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
    trendingVideosList: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const TrendingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(TrendingVideosApiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedFetchedData = fetchedData.videos.map(eachObj => ({
        channel: {
          name: eachObj.channel.name,
          profileImageUrl: eachObj.channel.profile_image_url,
        },
        id: eachObj.id,
        publishedAt: eachObj.published_at,
        thumbnailUrl: eachObj.thumbnail_url,
        title: eachObj.title,
        viewCount: eachObj.view_count,
      }))
      this.setState({
        trendingVideosList: updatedFetchedData,
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
          const {trendingVideosList, apiStatus} = this.state

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

          const renderTrendingFailureView = () => (
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
                  this.getTrendingVideos()
                }}
              >
                Retry
              </RetryButton>
            </FailureViewContainer>
          )

          return (
            <>
              <Header />
              <TrendingBgContainer
                isDarkTheme={isDarkTheme}
                data-testid="trending"
              >
                <Sidebar />
                <TrendingVideosContainer>
                  <TopBanner data-testid="banner" isDarkTheme={isDarkTheme}>
                    <IconContainer isDarkTheme={isDarkTheme}>
                      <TrendingIcon />
                    </IconContainer>
                    <TrendingHeading isDarkTheme={isDarkTheme}>
                      Trending
                    </TrendingHeading>
                  </TopBanner>
                  {apiStatus === apiStatusConstants.inProgress &&
                    renderLoader()}
                  {apiStatus === apiStatusConstants.success &&
                    trendingVideosList.map(eachObj => (
                      <VideoItems key={eachObj.id} eachObj={eachObj} />
                    ))}
                  {apiStatus === apiStatusConstants.failure &&
                    renderTrendingFailureView()}
                </TrendingVideosContainer>
              </TrendingBgContainer>
            </>
          )
        }}
      </WebsiteTheme.Consumer>
    )
  }
}

export default Trending
