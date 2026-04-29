import React, { useRef, useEffect } from 'react'
import './VideoPlayer.css'
import video from '../../assets/video2.mp4'

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null)
  const videoRef = useRef(null)

  // ▶️ Play / Pause logic
  useEffect(() => {
    if (playState) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
      videoRef.current.currentTime = 0 // optional: reset video
    }
  }, [playState])

  // ❌ Close when clicking outside video
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false)
    }
  }

  return (
    <div
      className={`video-player ${playState ? '' : 'hide'}`}
      ref={player}
      onClick={closePlayer}
    >
      <video ref={videoRef} controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )
}

export default VideoPlayer