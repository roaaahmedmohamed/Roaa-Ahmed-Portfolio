import { memo } from 'react'
import '../css/IntroSection.css'

export const IntroSection = memo(function IntroSection() {
  return (
    <section className="section-block intro-block" id="about">
      <p className="section-kicker">Who am I?</p>
      <h2>I am a Frontend Developer specializing in React and Next.js.</h2>
      <p>
        I am passionate about building modern, responsive, and user-friendly web applications.
      </p>
      <p>
        I have experience working with state management, REST API integration, form validation,
        responsive design, and performance optimization, with a strong focus on clean UI and
        smooth user experience.
      </p>
    </section>
  )
})
