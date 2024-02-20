import ReactPlayer from 'react-player'

import {
  VideoPlayerContainer,
  VideoTitle,
  VideoStats,
  HorizontalLine,
} from './styledComponents'

import './index.css'

const videoUrl = 'https://youtu.be/VU23OPQ1Pmc?si=zzR1Fy8Mag7hAhLd'

const VideoPlayer = () => (
  <VideoPlayerContainer>
    <ReactPlayer
      url={videoUrl}
      controls
      width="100%"
      className="video-player"
    />
    <VideoTitle>Big Buck Bunny</VideoTitle>
    <VideoStats>8,100,195 views - May 29, 2008</VideoStats>
    <HorizontalLine />
  </VideoPlayerContainer>
)

export default VideoPlayer
