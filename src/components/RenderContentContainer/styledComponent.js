import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike} from 'react-icons/bi'
import {CgPlayListAdd} from 'react-icons/cg'

export const ContentContainer = styled.div`
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 2px solid #cccccc;
  margin-bottom: 20px;
  @media screen and (min-width: 576px) {
    display: flex;
  }
`
export const ViewsAndDateContainer = styled.div`
  //   border: 2px solid red;
  width: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 576px) {
    margin-bottom: 20px;
  }
`
export const ButtonsContainer = styled.div`
  //   border: 2px solid green;
  width: 100%;
  display: flex;
  align-items: center;
  @media screen and (min-width: 576px) {
    justify-content: flex-end;
  }
`
export const ViewsCount = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#64748b;' : '#000;')};
  margin: 0px;
`
export const BsDotIcon = styled(BsDot)`
  color: ${props => (props.isDarkTheme === true ? '#64748b;' : '#000;')};
`
export const DateOfPublished = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#64748b;' : '#000;')};
  margin: 0px;
`

export const LikeButton = styled.button`
  margin-right: 10px;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  font-size: 17px;
  background-color: transparent;
  color: ${props => {
    const {isDarkTheme, isLikeActive} = props
    if (isDarkTheme && isLikeActive) {
      return '#2563eb;'
    }
    if (isDarkTheme && isLikeActive === false) {
      return '#64748b;'
    }
    if (isDarkTheme === false && isLikeActive) {
      return '#2563eb;'
    }
    return '#64748b;'
  }};
`
export const LikeIcon = styled(BiLike)`
  height: 25px;
  width: 25px;

  color: inherit;
`

export const DisLikeButton = styled.button`
  margin-right: 10px;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  font-size: 17px;
  background-color: transparent;
  color: ${props => {
    const {isDarkTheme, isDisLikeActive} = props
    if (isDarkTheme && isDisLikeActive) {
      return '#2563eb;'
    }
    if (isDarkTheme && isDisLikeActive === false) {
      return '#64748b;'
    }
    if (isDarkTheme === false && isDisLikeActive) {
      return '#2563eb;'
    }
    return '#64748b;'
  }};
`
export const DisLikeIcon = styled(BiDislike)`
  height: 25px;
  width: 25px;

  color: inherit;
`

export const SaveButton = styled.button`
  margin-right: 10px;
  border: none;
  display: flex;
  align-items: center;
  font-size: 17px;
  cursor: pointer;
  background-color: transparent;
  color: ${props => {
    const {isDarkTheme, isSaveActive} = props
    if (isDarkTheme && isSaveActive) {
      return '#2563eb;'
    }
    if (isDarkTheme && isSaveActive === false) {
      return '#64748b;'
    }
    if (isDarkTheme === false && isSaveActive) {
      return '#2563eb;'
    }
    return '#64748b;'
  }};
`

export const SaveIcon = styled(CgPlayListAdd)`
  height: 25px;
  margin-right: 5px;
  width: 25px;
  color: inherit;
`
