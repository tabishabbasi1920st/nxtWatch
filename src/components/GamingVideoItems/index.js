import WebsiteTheme from '../../context/Theme'

import {
  CustomLink,
  VideoItem,
  Thumbnail,
  DescriptionContainer,
  Title,
  ViewsAndDateContainer,
  Views,
} from './styledComponents'

const VideoItems = props => {
  const {eachObj} = props
  const {id, thumbnailUrl, title, viewCount} = eachObj

  return (
    <WebsiteTheme.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <VideoItem isDarkTheme={isDarkTheme}>
            <CustomLink to={`/videos/${id}`}>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <DescriptionContainer isDarkTheme={isDarkTheme}>
                <Title isDarkTheme={isDarkTheme}>{title}</Title>
                <ViewsAndDateContainer>
                  <Views isDarkTheme={isDarkTheme}>{viewCount}</Views>
                </ViewsAndDateContainer>
              </DescriptionContainer>
            </CustomLink>
          </VideoItem>
        )
      }}
    </WebsiteTheme.Consumer>
  )
}

export default VideoItems
