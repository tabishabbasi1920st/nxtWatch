import {formatDistanceToNow} from 'date-fns'

import WebsiteTheme from '../../context/Theme'

import {
  CustomLink,
  VideoItem,
  Thumbnail,
  DescriptionContainer,
  Title,
  Channel,
  ViewsAndDateContainer,
  Views,
  PublishedDate,
} from './styledComponents'

const VideoItems = props => {
  const {eachObj} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = eachObj

  const {name} = channel

  const getPublishedDate = publishedDate => {
    const formattedDistance = formatDistanceToNow(new Date(publishedDate))
    const list = formattedDistance.split(' ')
    const finalDate = list.slice(1, list.length)
    return finalDate.join(' ')
    // Return the distance between the given date and now in words
  }

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
                <Channel>{name}</Channel>
                <ViewsAndDateContainer>
                  <Views isDarkTheme={isDarkTheme}>{viewCount}</Views>
                  <PublishedDate isDarkTheme={isDarkTheme}>
                    {getPublishedDate(publishedAt)}
                  </PublishedDate>
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
