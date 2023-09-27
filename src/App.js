import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import WebsiteTheme from './context/Theme'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import ProtectedRoute from './components/ProtectedRoute'
import SavedVideos from './components/SavedVideos'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'

class App extends Component {
  state = {
    savedVideosList: [],
    isDarkTheme: true,
    currentPath: '/',
    leftSidebar: false,
  }

  onChangeLeftSidebar = () => {
    this.setState(prevState => ({leftSidebar: !prevState.leftSidebar}))
  }

  addVideoInSavedVideosList = videoObj => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, videoObj],
    }))
  }

  removeVideoFromSavedVideosList = videoId => {
    const {savedVideosList} = this.state
    const updatedList = savedVideosList.filter(
      eachObj => eachObj.id !== videoId,
    )
    this.setState({savedVideosList: updatedList})
  }

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changePath = updatedPath => {
    this.setState({isDarkTheme: updatedPath})
  }

  render() {
    const {isDarkTheme, currentPath, savedVideosList, leftSidebar} = this.state
    return (
      <WebsiteTheme.Provider
        value={{
          isDarkTheme,
          changeTheme: this.changeTheme,
          currentPath,
          changePath: this.changePath,
          savedVideosList,
          addVideoInSavedVideosList: this.addVideoInSavedVideosList,
          removeVideoFromSavedVideosList: this.removeVideoFromSavedVideosList,
          leftSidebar,
          onChangeLeftSidebar: this.onChangeLeftSidebar,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <Route component={NotFound} />
        </Switch>
      </WebsiteTheme.Provider>
    )
  }
}

export default App
