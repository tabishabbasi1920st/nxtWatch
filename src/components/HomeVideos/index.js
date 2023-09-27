import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import WebsiteTheme from '../../context/Theme'

import {
  VideoItem,
  Thumbnail,
  Title,
  ContentContainer,
  ProfileContainer,
  ProfileDp,
  ChannelName,
  ViewsAndDateContainer,
  TitleStuffContainer,
  ViewsCount,
  MiddleDot,
  PublishedDate,
  CustomLink,
} from './styledComponent'

class HomeVideos extends Component {
  state = {
    isHover: false,
  }

  handleOnMouseEnter = () => {
    this.setState({isHover: true})
  }

  handleOnMouseLeave = () => {
    this.setState({isHover: false})
  }

  render() {
    const {isHover} = this.state
    const {eachObj} = this.props
    const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = eachObj
    const {name, profileImageUrl} = channel
    return (
      <WebsiteTheme.Consumer>
        {value => {
          const {isDarkTheme} = value

          const getPublishedDate = publishedDate => {
            const formattedDistance = formatDistanceToNow(
              new Date(publishedDate),
            )
            const list = formattedDistance.split(' ')
            const finalDate = list.slice(1, list.length)
            return finalDate.join(' ')
            // Return the distance between the given date and now in words
          }

          return (
            <VideoItem>
              <CustomLink to={`/videos/${id}`}>
                <Thumbnail
                  onMouseEnter={this.handleOnMouseEnter}
                  onMouseLeave={this.handleOnMouseLeave}
                  isHover={isHover}
                  src={thumbnailUrl}
                  alt="video thumbnail"
                />
                <ContentContainer>
                  <ProfileContainer>
                    <ProfileDp src={profileImageUrl} alt="channel logo" />
                  </ProfileContainer>
                  <TitleStuffContainer>
                    <Title isDarkTheme={isDarkTheme}>{title}</Title>
                    <ChannelName isDarkTheme={isDarkTheme}>{name}</ChannelName>
                    <ViewsAndDateContainer>
                      <ViewsCount isDarkTheme={isDarkTheme}>
                        {viewCount}
                      </ViewsCount>
                      <MiddleDot isDarkTheme={isDarkTheme} />
                      <PublishedDate isDarkTheme={isDarkTheme}>
                        {getPublishedDate(publishedAt)}
                      </PublishedDate>
                    </ViewsAndDateContainer>
                  </TitleStuffContainer>
                </ContentContainer>
              </CustomLink>
            </VideoItem>
          )
        }}
      </WebsiteTheme.Consumer>
    )
  }
}

export default HomeVideos
