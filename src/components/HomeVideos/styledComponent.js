import styled, {css} from 'styled-components'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'

export const VideoItem = styled.li`
  //   border: 2px solid blue;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  @media screen and (min-width: 576px) {
    width: 50%;
  }
  @media screen and (min-width: 992px) {
    width: 33.3%;
  }
  @media screen and (min-width: 1200px) {
    width: 25%;
  }
  @media screen and (min-width: 1300px) {
    width: 20%;
  }
`

export const Thumbnail = styled.img`
  //   border: 2px solid yellow;
  width: 100%;

  margin-bottom: 10px;
  ${props => {
    const {isHover} = props
    if (isHover) {
      return css`
        border-radius: 0px;
      `
    }
    if (isHover === false) {
      return css`
        border-radius: 10px;
      `
    }
    return ''
  }}
`
export const ContentContainer = styled.div`
  width: 100%;
  //   border: 2px solid red;
  display: flex;
`

export const Title = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  margin: 5px 5px;
  color: ${props => (props.isDarkTheme === true ? '#fff;' : '#424242;')};
`
export const ProfileContainer = styled.div`
  //   border: 2px solid blue;
  margin-right: 10px;
`
export const ProfileDp = styled.img`
  height: 40px;
  width: 40px;
`
export const TitleStuffContainer = styled.div`
  //   border: 2px solid green;
`

export const ChannelName = styled.p`
  margin: 5px;
  color: ${props => (props.isDarkTheme === true ? '#fff;' : '#606060;')};
  font-size: 0.9rem;
`
export const ViewsAndDateContainer = styled.div`
  //   border: 2px solid maroon;
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
`
export const ViewsCount = styled.p`
  margin: 0px;
  margin-left: 5px;
  font-size: 0.9rem;
  color: ${props => (props.isDarkTheme === true ? '#fff;' : '#606060')};
`
export const MiddleDot = styled(BsDot)`
  height: 30px;
  width: 20px;
  color: ${props => (props.isDarkTheme === true ? '#fff;' : '#606060')};
`
export const PublishedDate = styled.p`
  margin: 5px;
  color: ${props => (props.isDarkTheme === true ? '#fff;' : '#606060')};
`
export const CustomLink = styled(Link)`
  text-decoration: none;
`
