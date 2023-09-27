import {Component} from 'react'
import ReactPlayer from 'react-player'
import {PlayerContainer} from './styledComponents'

class RenderPlayer extends Component {
  render() {
    const {videoDetails} = this.props
    const {videoUrl} = videoDetails

    return (
      <PlayerContainer>
        <ReactPlayer url={videoUrl} controls width="inherit" height="100%" />
      </PlayerContainer>
    )
  }
}

export default RenderPlayer
