import {Component} from 'react'
import WebsiteTheme from '../../context/Theme'
import {
  DescriptionContainer,
  ProfileContainer,
  Thumbnail,
  ViewAndSubscriberContainer,
  ChannelName,
  SubscriberCount,
  Description,
} from './styledComponents'

class RenderDescriptionContainer extends Component {
  render() {
    const {videoDetails} = this.props
    const {channel, description} = videoDetails

    const {name, profileImageUrl, subscriberCount} = channel

    return (
      <WebsiteTheme.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <DescriptionContainer>
              <ProfileContainer>
                <Thumbnail src={profileImageUrl} alt="channel logo" />
              </ProfileContainer>
              <ViewAndSubscriberContainer>
                <ChannelName isDarkTheme={isDarkTheme}>{name}</ChannelName>
                <SubscriberCount isDarkTheme={isDarkTheme}>
                  {subscriberCount} subscribers
                </SubscriberCount>
                <Description isDarkTheme={isDarkTheme}>
                  {description}
                </Description>
              </ViewAndSubscriberContainer>
            </DescriptionContainer>
          )
        }}
      </WebsiteTheme.Consumer>
    )
  }
}

export default RenderDescriptionContainer
