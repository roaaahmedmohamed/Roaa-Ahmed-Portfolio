import { memo } from 'react'
import type { ExperienceItem } from '../../../types/portfolio'
import '../css/ExperienceCard.css'

type ExperienceCardProps = {
  item: ExperienceItem
}

export const ExperienceCard = memo(function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <article className="experience-card">
      <span className="card-spark" aria-hidden="true" />
      <p>{item.period}</p>
      <h3>{item.role}</h3>
      {item.organization ? <strong>{item.organization}</strong> : null}
      <span>{item.detail}</span>
    </article>
  )
})
