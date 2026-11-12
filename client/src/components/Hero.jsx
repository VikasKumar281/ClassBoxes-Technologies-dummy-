import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import heroPoster from '../assets/hero.png'
import heroVideo from '../assets/corporate-recruitment-brand.mp4'

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return undefined
    const calm = () => {
      video.playbackRate = 0.65
    }
    calm()
    video.addEventListener('loadedmetadata', calm)
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motion.matches) video.pause()
    return () => video.removeEventListener('loadedmetadata', calm)
  }, [])

  return (
    <section className="hero" id="home">
      <video
        ref={videoRef}
        className="hero-media"
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero-shade"></div>
      <div className="hero-content">
        <p className="kicker dot">Recruitment and skill building</p>
        <h1>Staff the work that is already waiting.</h1>
        <p className="hero-lead">
          <strong>ClassBoxes prepares technology professionals and introduces a few of them to teams in the United States and Canada.</strong>
          {' '}Hiring managers get context. Candidates get a role that matches what they can already do.
        </p>
        <div className="pill-row">
          <Link className="pill red" to="/find-talent">Talk about a role <i className="bi bi-arrow-up-right"></i></Link>
          <Link className="pill ghost" to="/find-a-job">See career paths</Link>
        </div>
        <div className="proof">
          <span><i className="bi bi-check-circle"></i> Conversations, not keyword scans</span>
          <span><i className="bi bi-check-circle"></i> Contract, direct, and training paths</span>
          <span><i className="bi bi-check-circle"></i> New Jersey and Montréal</span>
        </div>
      </div>
    </section>
  )
}
