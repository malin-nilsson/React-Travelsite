import React from 'react'

export default function Hero() {
  return (
    <section className="hero-container">

      <div className="video-container">
        <video src="/videos/hero-video.mp4" className="video-bg" autoPlay loop muted></video>
      </div>

      <div className="hero-text"><h2>Adventure awaits</h2>
        <div className="hero-btns">
          <div className="hero-btn">
            <button>Plan your journey</button>
          </div>
          <div className="hero-btn">
            <button className="solid">Watch trailer</button>
          </div>
        </div>
      </div>

    </section>
  )
}
