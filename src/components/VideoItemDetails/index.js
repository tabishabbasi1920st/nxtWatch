import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import WebsiteTheme from '../../context/Theme'
import Header from '../Header'
import Sidebar from '../Sidebar'
import RenderPlayer from '../RenderPlayer'
import RenderContentContainer from '../RenderContentContainer'
import RenderDescriptionContainer from '../RenderDescriptionContainer'
import {
  PlayerBgContainer,
  PlayerBodyContainer,
  Title,
  LoaderBgContainer,
  FailureViewContainer,
  FailureViewImg,
  OopsHeading,
  FailureViewDescription,
  RetryButton,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Player extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const videoDetailsObj = fetchedData.video_details
      const updatedObj = {
        channel: {
          name: videoDetailsObj.channel.name,
          profileImageUrl: videoDetailsObj.channel.profile_image_url,
          subscriberCount: videoDetailsObj.channel.subscriber_count,
        },
        description: videoDetailsObj.description,
        id: videoDetailsObj.id,
        publishedAt: videoDetailsObj.published_at,
        thumbnailUrl: videoDetailsObj.thumbnail_url,
        title: videoDetailsObj.title,
        videoUrl: videoDetailsObj.video_url,
        viewCount: videoDetailsObj.view_count,
      }
      this.setState({
        videoDetails: updatedObj,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  render() {
    const {apiStatus} = this.state
    return (
      <WebsiteTheme.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {videoDetails} = this.state
          const {title} = videoDetails

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

          const renderVideoDetailsFailureView = () => (
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
                We are having some trouble to complete your request. Please try
                again.
              </FailureViewDescription>
              <RetryButton
                type="button"
                onClick={() => {
                  this.getVideoDetails()
                }}
              >
                Retry
              </RetryButton>
            </FailureViewContainer>
          )

          return (
            <>
              <Header />
              <PlayerBgContainer
                isDarkTheme={isDarkTheme}
                data-testid="videoItemDetails"
              >
                <Sidebar />
                {apiStatus === apiStatusConstants.success && (
                  <PlayerBodyContainer isDarkTheme={isDarkTheme}>
                    <RenderPlayer videoDetails={videoDetails} />
                    <Title isDarkTheme={isDarkTheme}>{title}</Title>
                    <RenderContentContainer videoDetails={videoDetails} />
                    <RenderDescriptionContainer videoDetails={videoDetails} />
                  </PlayerBodyContainer>
                )}
                {apiStatus === apiStatusConstants.inProgress && renderLoader()}
                {apiStatus === apiStatusConstants.failure &&
                  renderVideoDetailsFailureView()}
              </PlayerBgContainer>
            </>
          )
        }}
      </WebsiteTheme.Consumer>
    )
  }
}

export default Player
