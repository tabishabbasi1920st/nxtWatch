import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItem = styled.li`
  padding: 20px;
  //   border: 2px solid red;
  background-color: ${props =>
    props.isDarkTheme === true ? '#181818;' : '#f9f9f9;'};
`
export const CustomLink = styled(Link)`
  text-decoration: none;
  @media screen and (min-width: 576px) {
    display: flex;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  border-radius: 10px;
  //   max-height: 250px;
  @media screen and (min-width: 576px) {
    width: 50%;
  }
  @media screen and (min-width: 992px) {
    width: 40%;
  }
  @media screen and (min-width: 1100px) {
    width: 35%;
  }
  @media screen and (min-width: 1200px) {
    width: 25%;
  }
`
export const DescriptionContainer = styled.div`
  //   border: 2px solid red;
  flex-grow: 1;
  background-color: inherit;
  @media screen and (min-width: 576px) {
    padding-left: 15px;
  }
`
export const Title = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#fff;' : '#313131;')};
  margin: 5px 5px;
`
export const Channel = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#475569;' : '#7e858e;')};
  margin: 5px 5px;
`
export const ViewsAndDateContainer = styled.div`
  //   border: 2px solid red;
`
export const Views = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#475569;' : '#7e858e')};
  margin: 5px 5px;
`
export const PublishedDate = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#475569;' : '#7e858e')};
  margin: 5px 5px;
`
