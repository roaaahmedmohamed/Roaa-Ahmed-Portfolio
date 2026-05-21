import { memo } from 'react'
import '../css/SectionHeading.css'

type SectionHeadingProps = {
  kicker: string
  title: string
  titleId?: string
}

export const SectionHeading = memo(function SectionHeading({
  kicker,
  title,
  titleId,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-kicker">{kicker}</p>
      <h2 id={titleId}>{title}</h2>
    </div>
  )
})
