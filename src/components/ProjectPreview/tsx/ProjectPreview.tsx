import { memo } from 'react'
import '../css/ProjectPreview.css'

export const ProjectPreview = memo(function ProjectPreview() {
  return (
    <div className="project-preview" aria-hidden="true">
      <div className="browser-top">
        <span />
        <span />
        <span />
      </div>
      <div className="preview-body">
        <span className="preview-title" />
        <span className="preview-line long" />
        <span className="preview-line" />
        <span className="preview-block" />
      </div>
    </div>
  )
})
