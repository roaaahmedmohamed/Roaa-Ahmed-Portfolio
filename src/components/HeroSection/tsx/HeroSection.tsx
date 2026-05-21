import { memo } from 'react'
import '../css/HeroSection.css'

const heroPortrait = '/roaa-hero-small.jpg'

export const HeroSection = memo(function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <p className="eyebrow">Hello, I'm Roaa Ahmed Mohamed</p>
      <div className="hero-grid">
        <div className="hero-image-card">
          <img
            className="hero-image"
            src={heroPortrait}
            width="420"
            height="630"
            alt="Illustration of Roaa as a frontend developer working with React and Next.js"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <div className="hero-copy">
          <p className="mini-label">Frontend Developer crafting modern web experiences.</p>
          <h1 className="h1">Frontend Developer.</h1>
          <p className="hero-text">
            I build elegant, responsive, and high-performance interfaces using React,
            Next.js, and TypeScript with attention to detail, usability, and smooth
            interactions.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#work">
              View projects
            </a>
            <a className="secondary-action" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  )
})
