import styled from 'styled-components'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'

export const HomeContainer = styled.div`
  //   border: 2px solid red;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 90vh;
`
export const HomeBodyContainer = styled.div`
  display: flex;
  height: 100%;
  background-color: ${props =>
    props.isDarkTheme === true ? '#181818;' : '#f9f9f9;'};
`
export const VideoArea = styled.div`
  background-color: ${props =>
    props.isDarkTheme === true ? '#181818;' : '#f9f9f9;'};
  flex-grow: 2;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  //   border:2px solid red;
`
export const BannerContainer = styled.div`
  width: 100%;
  margin-bottom: 33px;
  //   border: 2px solid red;
  padding: 15px;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
`
export const BannerContentContainer = styled.div`
  //   border: 2px solid blue;
  flex-grow: 3;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 15px;
`
export const BannerLogoAndCrossBtnContainer = styled.div`
  //   border: 2px solid green;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const BannerDescription = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#fff;' : '#000;')};
  font-weight: 600;
  font-size: 17px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const GetItNowButton = styled.button`
  height: 40px;
  width: 110px;
  ${props => {
    const {isDarkTheme} = props
    if (isDarkTheme) {
      return `border:2px solid white;
            color:#fff;
           background-color:#fff; `
    }
    return `border:2px solid black;
    color:#000; background-color:#fff;`
  }};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`
export const BannerWebsiteLogo = styled.img`
  height: 30px;
  width: 130px;
`
export const CloseButton = styled.button`
  border: none;
  background: none; ;
`

export const CloseIcon = styled(AiOutlineCloseCircle)`
  height: 25px;
  width: 25px;
  cursor: pointer;
`
export const SearchContainer = styled.div`
  //   border: 2px solid maroon;
  display: flex;
  padding: 0px 10px 10px 10px;
  background-color:${props =>
    props.isDarkTheme === true ? '#181818;' : '#fff;'}
  position: sticky;
  top: 0px;
`
export const SearchInput = styled.input`
  height: 37px;
  width: 100%;
  border: 2px solid black;
  outline: none;
  padding: 15px;
  font-size: 17px;
  cursor: pointer;
  border: ${props =>
    props.isDarkTheme === true ? '2px solid  #7e858e;' : '2px solid  #d7dfe9;'};
  background-color: ${props =>
    props.isDarkTheme === true ? 'transparent;' : '#fff'};
  color: ${props => (props.isDarkTheme === true ? '#fff;' : '#000;')};
`
export const SearchButton = styled.button`
  width: 80px;
  border: 2px solid green;
  border: ${props =>
    props.isDarkTheme === true ? '2px solid  #7e858e;' : '2px solid  #d7dfe9;'};
  background-color: ${props =>
    props.isDarkTheme === true ? '#73858e;' : '#fff'};
  cursor: pointer;
`
export const SearchIcon = styled(BsSearch)`
  height: 100%;
  width: 38%;
  color: ${props => (props.isDarkTheme === true ? '#fff;' : '#000;')};
`
export const VideoContainer = styled.ul`
  //   border: 2px solid maroon;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
`
export const LoaderBgContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.isDarkTheme === true ? '#0f0f0f;' : '#f9f9f9;'};
`
export const FailureViewContainer = styled.div`
  //   border: 2px solid red;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  padding: 20px;
`
export const FailureViewImg = styled.img`
  width: 225px;
  height: 197px;
  @media screen and (min-width: 576px) {
    width: 281px;
    height: 246px;
  }
  @media screen and (min-width: 992px) {
    width: 375px;
    height: 328px;
  }
  @media screen and (min-width: 1100px) {
    width: 450px;
    height: 394px;
  }
`
export const OopsHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#fff;' : '#000;')};
  font-weight: 600;
  text-align: center;
`
export const FailureViewDescription = styled.p`
  color: ${props => (props.isDarkTheme ? '#fff;' : '#000;')};
  text-align: center;
  font-size: 17px;
  margin: 0px;
  margin-bottom: 15px;
`
export const RetryButton = styled.button`
  height: 40px;
  width: 100px;
  border: none;
  border-radius: 5px;
  background-color: #4f46e5;
  color: #fff;
  cursor: pointer;
`
