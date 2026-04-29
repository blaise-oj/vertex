import React from 'react'
import './VideoSection.css'
import thumbnail from '../../assets/video-thumbnail.jpg'
import { FaPlay } from 'react-icons/fa'

const VideoSection = ({ setPlayState }) => {
  return (
    <div className="video-section">

      <img
        src={thumbnail}
        alt="Medical Equipment Awareness Video"
        className="video-thumbnail"
      />

      {/* OVERLAY TEXT */}
      <div className="video-overlay">
        <h2 className="video-title">
          View Our Smelting & Refining Process in Action
        </h2>
        <p className="video-subtitle">
          Learn how we transform raw materials into high-purity precious metals with our state-of-the-art smelting and refining techniques.
        </p>
      </div>

      {/* PLAY BUTTON */}
      <div
        className="play-button"
        onClick={() => setPlayState(true)}
      >
        <FaPlay />
      </div>

    </div>
  )
}

export default VideoSection