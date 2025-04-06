import styled from 'styled-components'
import {BsSun} from 'react-icons/bs'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'

export const HeaderContainer = styled.div`
  background-color: ${props =>
    props.isDarkTheme === true ? '#181818;' : '#fff;'};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`

export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  justify-content: space-between;
  @media screen and (min-width: 576px) {
    width: 95%;
    padding: 0px;
  }
`
export const WebsiteLogo = styled.img`
  height: 30px;
  width: 130px;
  margin-right: 5px;
`
export const NavIconsContainer = styled.ul`
  display: flex;
  align-items: center;
`
export const SunIcon = styled(BsSun)`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9;' : '#000;')};
  height: 30px;
  width: 30px;
  margin-right: 13px;
  cursor: pointer;
`

export const HamburgerMenuIcon = styled(GiHamburgerMenu)`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9;' : '#000;')};
  height: 30px;
  width: 30px;
  margin-right: 13px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ProfileIcon = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 13px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  height: 35px;
  width: 80px;
  background-color: transparent;
  border-radius: 3px;
  font-weight: 600;
  border: ${props =>
    props.isDarkTheme === true ? '2px solid #fff;' : '2px solid #3b82f6'};
  color: ${props => (props.isDarkTheme === true ? '#fff;' : '#3b82f6;')} @media
    screen and (max-width: 768px) {
    display: none;
    cursor: pointer;
  }
`

export const LogoutIcon = styled(FiLogOut)`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9;' : '#000;')};
  height: 25px;
  width: 25px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ThemeButton = styled.button`
  background-color: inherit;
  border: none;
`

export const MoonIcon = styled(FaMoon)`
  height: 25px;
  width: 25px;
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9;' : '#000;')};
  cursor: pointer;
  margin-right: 10px;
`
export const PopupBgContainer = styled.div`
  height: 200px;
  width: 250px;
  //   border: 2px solid red;
  border-radius: 10px;
  opacity: 1;
  background-color: ${props =>
    props.isDarkTheme === true ? '#424242;' : '#fff;'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 0px 8px 2px #bfbfbf;
`
export const CancelButton = styled.button`
  height: 35px;
  width: 80px;
  border-radius: 3px;
  color: ${props => (props.isDarkTheme === true ? '#fff;' : '#000;')};
  margin-right: 10px;
  background-color: ${props =>
    props.isDarkTheme === true ? 'transparent;' : '#fff'};
  border: ${props =>
    props.isDarkTheme === true ? '1px solid #fff;' : '1px solid black;'};
`
export const ConfirmButton = styled.button`
  height: 35px;
  border-radius: 3px;
  width: 80px;
  color: ${props => (props.isDarkTheme === true ? '#fff;' : '#000;')};
  border: none;
  background-color: #3b82f6;
`
export const PopupDescription = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#fff;' : '#000;')};
  font-size: 17px;
  text-align: center;
  margin-top: 15px;
  font-weight: 600;
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PopUpMainBgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  opacity: 0.9;
  //   border: 2px solid red;
  background-color: ${props =>
    props.isDarkTheme === true ? '#181818;' : '#fff;'};
`
