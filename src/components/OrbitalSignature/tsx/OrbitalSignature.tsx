import { memo } from 'react'
import { techStack } from '../../../data/portfolio'
import { SectionHeading } from '../../SectionHeading/tsx/SectionHeading'
import '../css/OrbitalSignature.css'

export const OrbitalSignature = memo(function OrbitalSignature() {
  return (
    <section className="orbital-section" id="skills" aria-labelledby="tech-stack-title">
      <div className="orbital-heading">
        <SectionHeading kicker="Tech Stack" title="Technologies I work with" titleId="tech-stack-title" />
        <p>
          My frontend toolkit covers structure, styling, interactivity, version control,
          and modern React/Next.js application development.
        </p>
      </div>
      <div className="orbit-stage">
        <span className="orbit orbit-one" />
        <span className="orbit orbit-two" />
        <span className="orbit orbit-three" />
        <span className="center-sigil" aria-hidden="true">
          R
        </span>

        {techStack.map((tech) => (
          <span className={`tech-node ${tech.className}`} key={tech.label}>
            <span className="tech-arrow" aria-hidden="true" />
            <span className="tech-badge">
              <img
                src={tech.icon}
                width="28"
                height="28"
                loading="lazy"
                decoding="async"
                alt=""
              />
              <span>{tech.label}</span>
            </span>
          </span>
        ))}
      </div>
    </section>
  )
})
