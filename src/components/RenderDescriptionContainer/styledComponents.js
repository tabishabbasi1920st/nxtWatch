import styled from 'styled-components'

export const DescriptionContainer = styled.div`
  //   border: 2px solid red;
  display: flex;
`
export const ProfileContainer = styled.div`
  //   border: 2px solid red;
`
export const Thumbnail = styled.img`
  height: 70px;
  width: 70px;
`
export const ViewAndSubscriberContainer = styled.div`
  //   border: 2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 15px;
`
export const ChannelName = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#cccccc;' : '#424242;')};
  margin: 0px;
  font-weight: 600;
`
export const SubscriberCount = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#cccccc;' : '#424242;')};
  margin: 0px;
  font-weight: 600;
  margin-bottom: 40px;
`
export const Description = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#cccccc;' : '#424242;')};
  margin: 0px;
  font-weight: 600;
`
