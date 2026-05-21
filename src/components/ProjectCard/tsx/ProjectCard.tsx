import { memo } from 'react'
import type { ProjectItem } from '../../../types/portfolio'
import { ProjectPreview } from '../../ProjectPreview/tsx/ProjectPreview'
import '../css/ProjectCard.css'

type ProjectCardProps = {
  index: number
  project: ProjectItem
}

export const ProjectCard = memo(function ProjectCard({ index, project }: ProjectCardProps) {
  return (
    <article className="project-row">
      <ProjectPreview />

      <div className="project-copy">
        <p>{project.type}</p>
        <h3>{project.title}</h3>
        <span>{project.summary}</span>
        <strong>{project.accent}</strong>
        <div className="project-links">
          {project.repoHref ? (
            <a href={project.repoHref} target="_blank" rel="noreferrer">
              GitHub
            </a>
          ) : null}
          {project.liveHref ? (
            <a href={project.liveHref} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
      <span className="project-number">{`0${index + 1}`}</span>
    </article>
  )
})
