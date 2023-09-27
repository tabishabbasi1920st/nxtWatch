import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.isDarkTheme === true ? '#181818' : '#f9f9f9'};
`
export const FormContainer = styled.form`
  height: 440px;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  ${props =>
    props.isDarkTheme === true ? ';' : `box-shadow: 2px 5px 10px 5px #bfbfbf;`};
  background-color: ${props =>
    props.isDarkTheme === true ? '#000;' : '#f9f9f9'};
  @media screen and (min-width: 430px) {
    width: 425px;
  }
`
export const LabelAndInputContainer = styled.div`
  //   border: 2px solid lightblue;
  margin-bottom: 25px;
  background-color: inherit;
`

export const CustomLabel = styled.label`
  color:${props => (props.isDarkTheme === true ? '#f9f9f9;' : '#606060;')}
  display: block;
  font-size: 20px;
  margin-bottom: 5px;
  font-weight: 600;
  cursor: pointer;
`

export const CustomInput = styled.input`
  border: ${props =>
    props.isDarkTheme === true ? '2px solid #475569;' : '2px solid #cccccc;'}
  outline: none;
  padding: 10px;
  font-size: 16px;
  height: 40px;
  width: 100%;
  cursor: pointer;
  border-radius: 3px;
  background-color: inherit;
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9;' : '#000;')};
`
export const WebsiteLogoContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`

export const WebsiteLogo = styled.img`
  height: 45px;
  width: 240px;
`
export const LoginButton = styled.button`
  height: 40px;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  cursor: pointer;
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
export const CheckboxInput = styled.input`
  height: 20px;
  width: 20px;
  margin-right: 5px;
  cursor: pointer;
`
export const CheckboxLabel = styled.label`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9;' : '#000;')};
  display: block;
  font-size: 17px;
  margin-bottom: 5px;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`
