import React from 'react'

const WebsiteTheme = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
  currentPath: '/',
  changePath: () => {},
  savedVideosList: [],
  addVideoInSavedVideosList: () => {},
  removeVideoFromSavedVideosList: () => {},
})

export default WebsiteTheme
