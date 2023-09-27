import {Component} from 'react'
import WebsiteTheme from '../../context/Theme'
import {
  ContentContainer,
  ViewsAndDateContainer,
  ButtonsContainer,
  ViewsCount,
  BsDotIcon,
  DateOfPublished,
  LikeButton,
  LikeIcon,
  DisLikeIcon,
  DisLikeButton,
  SaveIcon,
  SaveButton,
} from './styledComponent'

class RenderContentContainer extends Component {
  state = {
    isLikeActive: false,
    isDisLikeActive: false,
    isSaveActive: false,
  }

  componentDidMount() {
    const {savedVideosList} = this.context
    const {videoDetails} = this.props
    const {id} = videoDetails

    const isAvailable = savedVideosList.filter(eachObj => eachObj.id === id)
    if (isAvailable.length) {
      this.setState({isSaveActive: true})
    }
  }

  onClickLikeButton = () => {
    const {isLikeActive, isDisLikeActive} = this.state
    if (isLikeActive === false) {
      this.setState({isLikeActive: true})
      if (isDisLikeActive === true) {
        this.setState({isDisLikeActive: false})
      }
    } else if (isLikeActive === true) {
      this.setState({isLikeActive: false})
    }
  }

  onClickDisLikeButton = () => {
    const {isLikeActive, isDisLikeActive} = this.state
    if (isDisLikeActive === false) {
      this.setState({isDisLikeActive: true})
      if (isLikeActive === true) {
        this.setState({isLikeActive: false})
      }
    } else if (isDisLikeActive === true) {
      this.setState({isDisLikeActive: false})
    }
  }

  render() {
    const {videoDetails} = this.props
    const {id, publishedAt, viewCount} = videoDetails

    return (
      <WebsiteTheme.Consumer>
        {value => {
          const {
            isDarkTheme,
            addVideoInSavedVideosList,
            removeVideoFromSavedVideosList,
          } = value
          const {isLikeActive, isDisLikeActive, isSaveActive} = this.state

          const onClickSaveButton = () => {
            if (isSaveActive === false) {
              addVideoInSavedVideosList(videoDetails)
            }
            if (isSaveActive === true) {
              removeVideoFromSavedVideosList(id)
            }

            this.setState(prevState => ({
              isSaveActive: !prevState.isSaveActive,
            }))
          }

          return (
            <ContentContainer>
              <ViewsAndDateContainer>
                <ViewsCount isDarkTheme={isDarkTheme}>{viewCount}</ViewsCount>
                <BsDotIcon isDarkTheme={isDarkTheme} />
                <DateOfPublished isDarkTheme={isDarkTheme}>
                  {publishedAt}
                </DateOfPublished>
              </ViewsAndDateContainer>

              <ButtonsContainer>
                <LikeButton
                  isDarkTheme={isDarkTheme}
                  isLikeActive={isLikeActive}
                  onClick={() => {
                    this.onClickLikeButton()
                  }}
                >
                  <LikeIcon />
                  Like
                </LikeButton>

                <DisLikeButton
                  isDarkTheme={isDarkTheme}
                  isDisLikeActive={isDisLikeActive}
                  onClick={() => {
                    this.onClickDisLikeButton()
                  }}
                >
                  <DisLikeIcon />
                  Dislike
                </DisLikeButton>

                <SaveButton
                  onClick={() => {
                    onClickSaveButton()
                  }}
                  isDarkTheme={isDarkTheme}
                  isSaveActive={isSaveActive}
                >
                  <SaveIcon />
                  Save
                </SaveButton>
              </ButtonsContainer>
            </ContentContainer>
          )
        }}
      </WebsiteTheme.Consumer>
    )
  }
}

RenderContentContainer.contextType = WebsiteTheme

export default RenderContentContainer
