import styled from 'styled-components'

export const NotFoundBgContainer = styled.div`
  height: 90vh;
  width: 100%;
  //   border: 2px solid red;
  display: flex;
`
export const NotFoundContentContainer = styled.div`
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818;' : '#f9f9f9;')};
  //   border: 2px solid green;

  ////////////////////////
`
export const NotFoundImg = styled.img`
  height: 235px;
  width: 235px;
  @media screen and (min-width: 576px) {
    height: 335px;
    width: 335px;
  }
  @media screen and (min-width: 992px) {
    height: 435px;
    width: 435px;
  }
  @media screen and (min-width: 1100px) {
    height: 450px;
    width: 450px;
  }
`
export const NotFoundHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f9f9f9;' : '#181818;')};
  font-weight: 600;
  text-align: center;
`
export const NotFoundDescription = styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9;' : '#181818;')};
  font-size: 17px;
  margin: 0px;
  text-align: center;
`
