import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

export const SidebarContainer = styled.div`
  z-index: 10;
  height: 90vh;
  width: 150px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props =>
    props.isDarkTheme === true ? '#181818;' : '#fff;'};
  @media screen and (max-width: 768px) {
    position: absolute;
    left: ${props => (props.leftSidebar ? '0%;' : '-100%;')};
    transition: all 0.9s;
    width: 90vw;
  }
`
export const OptionsContainer = styled.ul`
  //   border: 2px solid red;
  margin: 0px;
  padding: 0px;
`

export const HomeIcon = styled(AiFillHome)`
  height: 25px;
  width: 25px;
  margin-left: 10px;
  color: ${props => {
    const {isDarkTheme, path} = props
    if (isDarkTheme && path) {
      return 'red'
    }
    if (isDarkTheme === false && path) {
      return 'red'
    }
    if (isDarkTheme === false && path === false) {
      return '#424242'
    }
    return 'white'
  }};
`
export const FireIcon = styled(AiFillFire)`
  height: 25px;
  width: 25px;
  margin-left: 10px;
  color: ${props => {
    const {isDarkTheme, path} = props
    if (isDarkTheme && path) {
      return 'red'
    }
    if (isDarkTheme === false && path) {
      return 'red'
    }
    if (isDarkTheme === false && path === false) {
      return '#424242'
    }
    return 'white'
  }};
`
export const GamingIcon = styled(SiYoutubegaming)`
  height: 25px;
  width: 25px;
  margin-left: 10px;
  color: ${props => {
    const {isDarkTheme, path} = props
    if (isDarkTheme && path) {
      return 'red'
    }
    if (isDarkTheme === false && path) {
      return 'red'
    }
    if (isDarkTheme === false && path === false) {
      return '#424242'
    }
    return 'white'
  }};
`
export const SavedVideosIcon = styled(CgPlayListAdd)`
  height: 25px;
  width: 25px;
  margin-left: 10px;
  color: ${props => {
    const {isDarkTheme, path} = props
    if (isDarkTheme && path) {
      return 'red'
    }
    if (isDarkTheme === false && path) {
      return 'red'
    }
    if (isDarkTheme === false && path === false) {
      return '#424242'
    }
    return 'white'
  }};
`
export const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin: 0px;
  padding: 0px;
  line-height: 5px;
`
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  background-color: ${props => {
    const {isDarkTheme, path} = props
    if (isDarkTheme && path) {
      return '#424242;'
    }
    if (isDarkTheme === false && path) {
      return '#ebebeb;'
    }
    return ''
  }};
`
export const OptionName = styled.p`
  color: black;
  margin-left: 10px;
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9;' : '#000;')};
  font-weight: ${props => (props.path ? 'bold;' : '')};
`
export const ContactUsContainer = styled.div`
  //   border: 2px solid red;
  padding-left: 10px;
`
export const ContactUsPara = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#fff;' : '#1e293b;')};
  font-weight: 600;
`
export const SocialIconsContainer = styled.div`
  display: flex;
  width: 100%;
`
export const SocialIconsImg = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 6px;
  cursor: pointer;
`
export const ContactDescription = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#fff;' : '#1e293b;')};
  font-weight: 600;
`
