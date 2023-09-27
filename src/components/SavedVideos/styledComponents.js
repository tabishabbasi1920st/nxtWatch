import styled from 'styled-components'
import {CgPlayListAdd} from 'react-icons/cg'

export const MainBgContainer = styled.div`
  //   border: 2px solid red;
  height: 90vh;
  display: flex;
  background-color: ${props =>
    props.isDarkTheme === true ? '#0f0f0f;' : '#f9f9f9;'};
`

export const Main = styled.div`
  background-color: ${props =>
    props.isDarkTheme === true ? '#0f0f0f;' : '#f9f9f9;'};
`

export const SavedVideosContainer = styled.ul`
  //   border: 2px solid green;
  background-color: ${props =>
    props.isDarkTheme === true ? '#181818;' : '#f9f9f9;'};
  margin: 0px;
  padding: 0px;
  flex-grow: 1;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
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
export const GamingIcon = styled(CgPlayListAdd)`
  height: 50px;
  width: 50px;
  color: red;
`
export const GamingHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f9f9f9;' : '#000;')};
  margin-left: 25px;
`
