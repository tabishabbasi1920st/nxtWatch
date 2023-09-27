import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookie from 'js-cookie'
import Header from '../Header'
import Sidebar from '../Sidebar'
import WebsiteTheme from '../../context/Theme'
import HomeVideos from '../HomeVideos'
import {
  HomeContainer,
  HomeBodyContainer,
  VideoArea,
  BannerContainer,
  BannerContentContainer,
  BannerLogoAndCrossBtnContainer,
  BannerDescription,
  GetItNowButton,
  BannerWebsiteLogo,
  CloseIcon,
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchIcon,
  VideoContainer,
  CloseButton,
  LoaderBgContainer,
  FailureViewContainer,
  FailureViewImg,
  OopsHeading,
  FailureViewDescription,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    homeVideosList: [],
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    isBannerRender: true,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const HomeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookie.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(HomeVideosApiUrl, options)
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
        homeVideosList: updatedFetchedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    this.getHomeVideos()
  }

  onClickBannerCutButton = () => {
    this.setState({isBannerRender: false})
  }

  render() {
    const {homeVideosList, isBannerRender, apiStatus, searchInput} = this.state
    return (
      <WebsiteTheme.Consumer>
        {value => {
          const {isDarkTheme} = value

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

          const renderHomeFailureView = () => (
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
                  this.getHomeVideos()
                }}
              >
                Retry
              </RetryButton>
            </FailureViewContainer>
          )

          const renderNoResultView = () => (
            <FailureViewContainer isDarkTheme={isDarkTheme}>
              <FailureViewImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <OopsHeading isDarkTheme={isDarkTheme}>
                No Search results found
              </OopsHeading>
              <FailureViewDescription isDarkTheme={isDarkTheme}>
                Try different key words or remove search filter
                <br />
                Please try again
              </FailureViewDescription>
              <RetryButton
                type="button"
                onClick={() => {
                  this.setState({searchInput: ''}, this.getHomeVideos)
                }}
              >
                Retry
              </RetryButton>
            </FailureViewContainer>
          )

          const renderBanner = () => (
            <BannerContainer data-testid="banner">
              <BannerLogoAndCrossBtnContainer>
                <BannerWebsiteLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxt watch logo"
                />
                <CloseButton
                  data-testid="close"
                  type="button"
                  onClick={() => {
                    this.onClickBannerCutButton()
                  }}
                >
                  <CloseIcon />
                </CloseButton>
              </BannerLogoAndCrossBtnContainer>
              <BannerContentContainer>
                <BannerDescription>
                  Buy Nxt Watch Premium prepaid plans with UPI
                </BannerDescription>
                <GetItNowButton>GET IT NOW</GetItNowButton>
              </BannerContentContainer>
            </BannerContainer>
          )

          const renderSearch = () => (
            <SearchContainer isDarkTheme={isDarkTheme}>
              <SearchInput
                type="search"
                value={searchInput}
                isDarkTheme={isDarkTheme}
                onChange={event => {
                  this.onChangeSearchInput(event)
                }}
              />
              <SearchButton
                data-testid="searchButton"
                isDarkTheme={isDarkTheme}
                onClick={() => {
                  this.onClickSearchButton()
                }}
              >
                <SearchIcon isDarkTheme={isDarkTheme} />
              </SearchButton>
            </SearchContainer>
          )

          const renderVideos = () => (
            <VideoContainer>
              {homeVideosList.map(eachObj => (
                <HomeVideos key={eachObj.id} eachObj={eachObj} />
              ))}
            </VideoContainer>
          )

          return (
            <>
              <Header />
              <HomeContainer data-testid="home">
                <HomeBodyContainer isDarkTheme={isDarkTheme}>
                  <Sidebar />
                  <VideoArea isDarkTheme={isDarkTheme}>
                    {isBannerRender && renderBanner()}
                    {renderSearch()}
                    {apiStatus === apiStatusConstants.inProgress &&
                      renderLoader()}
                    {apiStatus === apiStatusConstants.success &&
                      homeVideosList.length > 0 &&
                      renderVideos()}
                    {apiStatus === apiStatusConstants.success &&
                      homeVideosList.length <= 0 &&
                      renderNoResultView()}
                    {apiStatus === apiStatusConstants.failure &&
                      renderHomeFailureView()}
                  </VideoArea>
                </HomeBodyContainer>
              </HomeContainer>
            </>
          )
        }}
      </WebsiteTheme.Consumer>
    )
  }
}

export default Home
