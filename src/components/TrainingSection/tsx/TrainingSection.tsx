import { memo } from 'react'
import { courseItems, educationItems, languageItems } from '../../../data/portfolio'
import { SectionHeading } from '../../SectionHeading/tsx/SectionHeading'
import '../css/TrainingSection.css'

export const TrainingSection = memo(function TrainingSection() {
  return (
    <section className="section-block training-section" id="training">
      <SectionHeading kicker="Education & Courses" title="Learning path" />

      <div className="training-grid">
        <div className="training-column">
          {educationItems.map((item) => (
            <article className="training-card" key={item.title}>
              <p>{item.period}</p>
              <h3>{item.title}</h3>
              <span>{item.place}</span>
            </article>
          ))}
        </div>

        <div className="training-column">
          {courseItems.map((item) => (
            <article className="training-card" key={item.title}>
              <p>{item.period}</p>
              <h3>{item.title}</h3>
              <strong>{item.provider}</strong>
              <span>{item.detail}</span>
            </article>
          ))}
        </div>

        <div className="language-card">
          <p>Languages</p>
          {languageItems.map((item) => (
            <span key={item.name}>
              {item.name}: {item.level}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
})
