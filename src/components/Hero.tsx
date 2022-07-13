import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

export default function Hero() {
  return (

    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ opacity: 0.5 }}
        className="hero-container">

        <div className="video-container">
          <video
            poster="/images/hero-poster.jpg"
            autoPlay loop muted>
            <source src="/videos/hero-video.mp4" className="video-bg" />
          </video>
        </div>

        <div className="hero-text"><h2>Adventure awaits</h2>
          <div className="hero-btns">
            <div className="hero-btn">
              <button className="solid">Plan your journey</button>
            </div>
            <div className="hero-btn">
              <button className="solid">
                <span>Watch trailer</span>
                <span><svg xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" fill="#fff"
                  viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                </svg></span>
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  )
}
