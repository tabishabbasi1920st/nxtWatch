import styled from 'styled-components'

export const PlayerBgContainer = styled.div`
  height: 90vh;
  width: 100%;
  //   border: 2px solid red;
  display: flex;
  background-color: ${props =>
    props.isDarkTheme === true ? '#0f0f0f;' : '#f9f9f9;'};
`

export const PlayerBodyContainer = styled.div`
  //   border: 2px solid green;
  flex-grow: 1;
  overflow: scroll;
  padding: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: ${props =>
    props.isDarkTheme === true ? '#181818;' : '#f9f9f9;'};
`

export const Title = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#cccccc;;' : '#424242;')};
  font-size: 16px;
`

export const LoaderBgContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.isDarkTheme === true ? '#181818;' : '#f9f9f9;'};
`
export const FailureViewContainer = styled.div`
  //   border: 2px solid red;
  height: 100%;
  width: 100%;
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
