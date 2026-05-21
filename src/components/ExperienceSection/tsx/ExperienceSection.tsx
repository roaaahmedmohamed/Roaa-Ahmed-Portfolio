import { memo } from 'react'
import { experienceItems } from '../../../data/portfolio'
import { ExperienceCard } from '../../ExperienceCard/tsx/ExperienceCard'
import { SectionHeading } from '../../SectionHeading/tsx/SectionHeading'
import '../css/ExperienceSection.css'

export const ExperienceSection = memo(function ExperienceSection() {
  return (
    <section className="section-block experience-section" aria-labelledby="experience-title">
      <SectionHeading kicker="Where I trained" title="Experience" titleId="experience-title" />
      <div className="experience-grid">
        {experienceItems.map((item) => (
          <ExperienceCard item={item} key={item.role} />
        ))}
      </div>
    </section>
  )
})
