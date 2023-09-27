import styled from 'styled-components'
import {AiFillFire} from 'react-icons/ai'

export const LoaderBgContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.isDarkTheme === true ? '#181818;' : '#f9f9f9;'};
`
export const TrendingBgContainer = styled.div`
  height: 90vh;
  width: 100%;
  //   border: 2px solid red;
  display: flex;
  background-color: ${props =>
    props.isDarkTheme === true ? '#0f0f0f;' : '#f9f9f9;'};
`
export const TrendingVideosContainer = styled.div`
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  flex-grow: 1;
  //   border: 2px solid green;

  ////////////////////////
`
export const FailureViewContainer = styled.div`
  //   border: 2px solid red;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${props => (props.isDarkTheme ? '#181818;' : '#f9f9f9;')};
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
export const TopBanner = styled.div`
  //   border: 2px solid red;
  height: 125px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 25px;
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#f1f1f1;')};
`
export const IconContainer = styled.div`
  background-color:${props => (props.isDarkTheme ? '#000;' : '#cbd5e1;')}
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TrendingIcon = styled(AiFillFire)`
  height: 50px;
  width: 50px;
  color: red;
`
export const TrendingHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f9f9f9;' : '#000;')};
  margin-left: 25px;
`
