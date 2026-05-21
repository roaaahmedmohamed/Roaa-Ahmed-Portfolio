import { memo } from 'react'
import { projectItems } from '../../../data/portfolio'
import { ProjectCard } from '../../ProjectCard/tsx/ProjectCard'
import { SectionHeading } from '../../SectionHeading/tsx/SectionHeading'
import '../css/ProjectsSection.css'

export const ProjectsSection = memo(function ProjectsSection() {
  return (
    <section className="section-block project-section" id="work">
      <SectionHeading kicker="Selected Project" title="Featured work" />

      <div className="projects-list">
        {projectItems.map((project, index) => (
          <ProjectCard index={index} project={project} key={project.title} />
        ))}
      </div>
    </section>
  )
})
